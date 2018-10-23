window.$id = function (id){
    return document.getElementById(id);
};

function checkBrowser(){
    if (hi5.browser.isChromeApp) return;
    
    var msg = '';
    try { 
        document.createElement('canvas').getContext('2d');
    } catch (e) {
        msg = 'This browser does not support Canvas.\n\n';
    };
    
    
    var noWebSocket = !('WebSocket' in window) && !('MozWebSocket' in window);
    var userAgent = navigator.userAgent;
    var isFirefox = userAgent.indexOf('Firefox') != -1;
        
    if (noWebSocket){
        msg += "This browser doesn't support WebSocket.\n\n";
        if (isFirefox){
            msg += 'Please update to Firefox 6 or later.\n\n';
        }
        else if (userAgent.indexOf('Opera') != -1){
            msg += 'Please open "opera:config#Enable WebSockets" (type it in the link field) make "Enable WebSockets" selected and restart Opera.\n\n';
        }
        else if (userAgent.indexOf('MSIE') != -1){
            msg += 'Please install Google Chrome Frame.\n\n';
        }
    }
    
    if (msg.length > 0)
        hi5.notifications.notify(msg);
    
};

function initUI(){
    checkBrowser();
    svGlobal.util.initDragDrop($id('dropZone'), $id('frmConn'));
    initServers();
    var info = $id('joinSelect');
    if (info){
        info.onchange = function(e){
            svManager.getInstance().setJoinMode(e.target.value);
        };
    }
    
    var control =$id('requestControl');
    if (control){
        control.onclick = function(e){
            svManager.getInstance().requestControl();
        };
    }
    if (hi5.browser.isChromeApp){
        hi5.chromeapp.convertLink(document.querySelectorAll('.hi5_app'));
    }
    $id('frmConn').onsubmit = connectTELNET;
    
    var last = hi5.storage.get('__TELNET_LAST');
    if (last){
        Connection.loadToForm($id('frmConn'), last);
        //$id('frmConn').elements['connPwd'].focus();
    }
}
    
window.addEventListener('load', initUI, false);

function initServers(){
	var urlObj = hi5.tool.queryToObj();
    var gw = urlObj.gateway || $id('gateway').value; 
    var query;
    if (!gw){
        if (!gw && !hi5.browser.isChromeApp){
            gw = window.location.host;
            if (!gw) gw = 'localhost';
        }

    }
    $id('gateway').value = gw || "www.remotespark.com:8080";

    if (urlObj.server || urlObj.symlink){//parameters from the url
        query = location.search.substring(1);
	}else{
        urlObj = svGlobal.util.getServerArgs();
        if (urlObj.server || urlObj.symlink){
            query = hi5.browser.obj2url(urlObj);
        }
    }

    if (query){
        connectTELNET(null, gw, query);
		return;
    }

    var server = $id('server');
    
    var save = $id('save');
    var clear = $id('clear');
    var remove = $id('delete');
    
    if (!Connection.hasStorage){
        save.style.visibility='hidden';
        clear.style.visibility='hidden';
        remove.style.visibility='hidden';
        return;
    }
    
    loadServers().onchange = function(){
        var key = server.value;
        Connection.loadToForm($id('frmConn'), key);
    };
    
    save.onclick = function(){
        if (server.value.length < 1){
            hi5.notifications.notify('Please enter computer name.');
            return null;
        }

        Connection.saveForm($id('frmConn'));
        loadServers();
    };

    clear.onclick = function(){
        if (hi5.ui.confirm('All saved data will be removed?')){
            Connection.clear();
            loadServers();
            server.value = '';
        }
    };
    
    remove.onclick = function(){
        var key = $id('server').value;
        if (key.length < 1){
            hi5.notifications.notify('Please select a computer first.');
            return;
        }
        Connection.remove(key);
        loadServers();
        server.value = '';
    };
    
    if (!hi5.browser.isChromeApp){
        var addr = (('https:' == location.protocol) ?  'wss://' : 'ws://') + gw + '/LIST?protocol=telnet';
        getServers(addr, serverListCallback);
    }
}

function serverListCallback(hasNew, connected){
    if (!connected){
        hi5.notifications.notify('Failed to connect to gateway for synchronization.');
        return;
    };
    
    if (!hasNew) return;
    loadServers();
    hi5.notifications.notify('Synchronization finished! new computers added to the list.');
}

function getServers(addr, callback) {
	var notConnected = hi5.appcfg && hi5.appcfg.noConnected === true;
    var ts = Connection.getValue(Connection.KEY_TIMESTAMP);
    ts = (!ts) ? '' : ('&since=' + ts);
    if (notConnected){
   		ts += '&noConnected=true';
    }
    
    
    if (hi5.appcfg && (typeof hi5.appcfg.useWSS == 'boolean')) {
        addr = ((hi5.appcfg.useWSS) ? 'wss' : 'ws') + addr.substring(addr.indexOf('://'));
    }

    var ws = new WebSocket(addr + ts);
    var _connected = false;
    var _hasNew = false;
    ws.onmessage = function(e) {
        _connected = true;
        svGlobal.logger.debug(e.data);
        if (notConnected){
        	Connection.clear();
        }
        var _Servers = JSON.parse(e.data);
        if (_Servers.lastModified)
            Connection.setValue(Connection.KEY_TIMESTAMP, _Servers.lastModified + '');
        var conn = _Servers.connections;
        if (conn) {
            for (var i = 0, l = conn.length; i < l; i++) {
                var c = conn[i];
                if (Connection.getValue(c.id)) continue;
                Connection.save(c.id, connvertServer(c));
                _hasNew = true;
            }
        }
        ws.close();
    };
    ws.onclose = function(e) {
        callback(_hasNew, _connected);
    };
}


function loadServers(){
    var svrs = Connection.getAll();
    var srvs = $id('server');
    var ops = $id('server').options;
    ops.length = 0;
    for (var i = 0, l = svrs.length; i < l; i++){
        ops[i] = new Option(svrs[i]);       
    }
    return srvs;    
}

function connectTELNET(e, gw, parameters){
	if (e){
		e.preventDefault();
	}
    $id('server').hide();
    var s = '';
    if (!parameters){
    	var frms = $id('frmConn').elements;
    	var l = frms.length;
    	for (var i = 0; i < l; i++){
    		var field = frms[i];
    		if ((field.type=='radio' || field.type=='checkbox') && !field.checked) continue;
    		var v = field.value;
    		if (v == '')continue;
    		var n = field.name;
    		if (n == 'gateway'){
    			gw = v;
    			continue;
    		}
    		if (s != '') s += '&';
    		s += (n + '=' + encodeURIComponent(v));
    	}
    }else{
    	s = parameters;
    }
    
    var protocol = ('https:' == location.protocol) ? 'wss://' : 'ws://';
    
    $id('login').style.display = 'none';
    
    
    hi5.storage.set('__TELNET_LAST', $id('server').value);
    hi5.storage.commit();
    
    var wWidth = window.innerWidth;
    var wHeight = window.innerHeight;
    var r = new svGlobal.TELNET(protocol + gw + '/TELNET?' + s,wWidth,wHeight);
    
    r.onclose = function(){
        r.hide();
        $id('login').style.display = 'block';
    };
    r.addSurface(new svGlobal.LocalInterface());
    
    r.onerror = function(e){
        console.log(e.name + ':' + e.message);
    };

    r.run();
    
    return false;
};

var Connection = {
        KEY_IDS: '_TELNET__CONNS',
        KEY_TIMESTAMP: '__TIMESTAMP',
        hasStorage: hi5.storage.isAvailable,
        getAll: function() {
            var s = hi5.storage.get(this.KEY_IDS);
            if (!s) return new Array(0);
            return s.split(',');
        },

        saveForm: function(frm) {
            var frms = frm.elements;
            var l = frms.length;
            var obj = new Object();
            var svr = null;
            for (var i = 0; i < l; i++) {
                var field = frms[i];
                if ('button' == field.type) continue;
                var n = field.name || field.id;
                var v = field.value;
                if ('server' == n) {
                    svr = v;
                }
                if (field.type == 'checkbox') {
                    v = field.checked;
                }else if (field.type == 'radio') {
                    if (!field.checked) continue;
                }

                if ('width' == n) {
                    v = parseInt(v, 10);
                    if (v == document.documentElement.clientWidth || v == screen.width)
                        continue;
                }
                

                if ('height' == n) {
                    v = parseInt(v, 10);
                    if (v == document.documentElement.clientHeight || v == screen.height)
                        continue;
                }
                

                //if ('connPwd' == n) {
                 //   continue;//don't save password
                //}

                obj[n] = v;
            }
            return this.save(svr, obj) ? svr : null;
        },

        save: function(key, obj) {
            if (!key) return false;
            hi5.storage.set('_TELNET_' + key, JSON.stringify(obj));
            var ids = hi5.storage.get(this.KEY_IDS);
            if (!ids) {
                ids = key;
            }
            else {
                if (ids.split(',').indexOf(key) < 0) {
                    ids = ids + ',' + key;
                }
            }
            hi5.storage.set(this.KEY_IDS, ids);
            hi5.storage.commit();
            return true;
        },

        loadToForm: function(frm, key) {
            if (!key) return false;
            key = '_TELNET_' + key;
            var s = hi5.storage.get(key);
            if (!s) return false;
            var obj = JSON.parse(s);
            var frms = frm.elements;
            for (var i = 0, l = frms.length; i < l; i++) {
                var field = frms[i];
                var type = field.type;
                if (('button' == type) || 'submit' == type) continue;
                var n = field.name || field.id;
                var v = obj[n];
                if (typeof v == 'undefined') {
                    if (n == 'gateway') continue;
                    switch (type) {
                    case 'text': field.value = '';break;
                    case 'checkbox': field.checked = false;
                    case 'radio': field.checked = false;
                    }
                    continue;
                }

                if (n == 'startProgram') {
                    if (field.id == 'shell') {
                        field.checked = (v == true || v == 'shell');
                        field.value = 'shell';//for upgrade, the value is boolean in old version
                    }else {
                        field.checked = (v == field.id);
                    }
                    continue;
                }


                if (type == 'checkbox') {
                    field.checked = v;
                }else if (type == 'radio'){
                    field.checked = (v == field.value);
                }
                else {
                    field.value = v;
                }

            }
            return true;
        },

        clear: function() {
            var all = this.getAll();
            for (var i = 0, len = all.length; i < len; i++){
                hi5.storage.remove('_TELNET_' + all[i]);
            }
            hi5.storage.remove(this.KEY_IDS);
            hi5.storage.remove('_TELNET_LAST');
            hi5.storage.remove(Connection.KEY_TIMESTAMP);
            hi5.storage.commit();        },

        remove: function(key) {
            hi5.storage.remove('_TELNET_' + key);
            var all = this.getAll();
            all.removeElm(key);
            hi5.storage.set(this.KEY_IDS, all.join(','));
            hi5.storage.commit();
        },

        getValue: function(key) {
            key = '_TELNET_' + key;
            return this.hasStorage ? hi5.storage.get(key) : null;
        },

        setValue: function(key, value) {
            key = '_TELNET_' + key;
            hi5.storage.set(key, value);
            hi5.storage.commit();
        }
    };


function startExitingApp(id){
    var r = svManager.getInstance();
    function onSurfaceReady(surface){
        r.addSurface(surface);
        r.startExitingApp(id);
    };
    window.svOnSurfaceReady = onSurfaceReady;
    var page = (hi5.appcfg && hi5.appcfg.page && hi5.appcfg.page.rail) ? hi5.appcfg.page.rail : 'rail.html'; 
    var rail = window.open(page);
    rail.svOnSurfaceReady = onSurfaceReady;
    var target = document.getElementById(id);
    var p = target.parentNode;
    p.removeChild(target);
    p = p.parentNode;
    if (p.getElementsByTagName("input").length == 0){
        p.dismiss();//it's a svGlobal.util.lightbox
    }
}

function foundExistingApp(apps){
    var s = "";
    for (var i = 0, l = apps.length; i < l; i++){
        var win = apps[i].win;
        var id = win.id;
        var title = apps[i].title;
        if (!title){
            continue;
        }
        s += '<p><input type="button" id="' + id + '" onclick="startExitingApp(' + id + ')" value="' + title + '"/></p>';
    }
    if (!s) return;
    var div = document.createElement("div");
    div.style.backgroundColor = "white";
    div.style.padding = "2em";
    div.innerHTML = "<h3>Applications are still running in this session:</h3><p>Please open and quite out them from the appplicaiton's File menu</p>" + s;
    document.documentElement.appendChild(div);
    var dlg = hi5.Lightbox(div);
    dlg.show();
}
