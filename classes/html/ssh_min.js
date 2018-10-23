var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.checkStringArgs=function(g,q,r){if(null==g)throw new TypeError("The 'this' value for String.prototype."+r+" must not be null or undefined");if(q instanceof RegExp)throw new TypeError("First argument to String.prototype."+r+" must not be a regular expression");return g+""};$jscomp.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(g,q,r){g!=Array.prototype&&g!=Object.prototype&&(g[q]=r.value)};
$jscomp.getGlobal=function(g){return"undefined"!=typeof window&&window===g?g:"undefined"!=typeof global&&null!=global?global:g};$jscomp.global=$jscomp.getGlobal(this);$jscomp.polyfill=function(g,q,r,y){if(q){r=$jscomp.global;g=g.split(".");for(y=0;y<g.length-1;y++){var I=g[y];I in r||(r[I]={});r=r[I]}g=g[g.length-1];y=r[g];q=q(y);q!=y&&null!=q&&$jscomp.defineProperty(r,g,{configurable:!0,writable:!0,value:q})}};
$jscomp.polyfill("String.prototype.startsWith",function(g){return g?g:function(g,r){var q=$jscomp.checkStringArgs(this,g,"startsWith");g+="";for(var I=q.length,ia=g.length,va=Math.max(0,Math.min(r|0,q.length)),Y=0;Y<ia&&va<I;)if(q[va++]!=g[Y++])return!1;return Y>=ia}},"es6-impl","es3");
$jscomp.polyfill("Array.prototype.fill",function(g){return g?g:function(g,r,y){var q=this.length||0;0>r&&(r=Math.max(0,q+r));if(null==y||y>q)y=q;y=Number(y);0>y&&(y=Math.max(0,q+y));for(r=Number(r||0);r<y;r++)this[r]=g;return this}},"es6-impl","es3");var svManager={getInstance:function(){var g=window.$ssh;return g&&g.running&&g.running()?g:null}};
function connvertServer(g){var q={};q.id=g.id;q.server=g.id;q.displayName=g.displayName||g.id;if(g=g.ssh){for(var r in g)q[r]=g[r];q.user=g.username||"";q.pwd=g.password||""}return q}
svGlobal.SSH=function(g,q,r,y){function I(a){return"on"==a||"true"==a}function ia(){var a=g.indexOf("://"),b=g.substring(a+3),a=b.indexOf("/");0<a&&(b=b.substring(0,a));return location.protocol+"//"+b}function va(a){return wa?hi5.browser.httpGet(ia()+"/CLIP?s="+wa+"&t="+(new Date).getTime(),!1):""}function Y(a,b){b&&(G=b);a&&(J=a,xa=(J-1)*h);La=1==G&&J==Math.floor(r/h)}function Ga(a,b,c,d){var e=a,k=b;d=d||Math.floor(k/h);b=c||Math.floor(e/v);a=null;c&&(e=N*v,k=S*h);B&&(a=l.getImageData(0,0,Math.min(b*
v,E),Math.min(d*h,S*h)));q=e;r=k;c=q;e=r;x.setSize(c,e);O.width=c;O.height=e;l.textBaseline="top";c=m.fontFamily||"Courier New";0<c.indexOf(" ")&&(c="'"+c+"'");l.font=m.fontSize+"px "+c;ya();a&&l.putImageData(a,0,0);S=d;N=b;E=N*v;Y(Math.floor(r/h));z=new Ma(N,S);if(f.onresolutionchange)f.onresolutionchange(q,r)}function za(a){u.send(a)}function Na(a,b,c){this.need=a;this.handler=b;this.repeat=c||1}function eb(a){P=new RecordingManager;P.setHeader({name:0<a.user.length?a.server+"_"+a.user:a.server,
width:a.width,height:a.height,color:a.fontSize,namesuffix:".sshv",filetag:"SSHV",duration:0})}function fb(a,b){var c=0,d=!1;this.width=a;this.interval=b;var e=0;this.start=function(){d||(d=!0,c=setInterval(function(){if(x&&B){var b=x.getThumbnail(a);b&&b.length!=e&&(u.send("8E7"+b),e=b.length)}},b))};this.stop=function(){clearInterval(c)}}function gb(a,b){!K||K.width==a&&K.interval==b||(K.stop(),K=null);K||(K=new fb(a,b));K.start()}function hb(a){var b=parseInt(a.substring(0,1),16),c=a.substring(1);
a=!1;var d=f.sessionInfo.appInfo;switch(b){case 1:var e=JSON.parse(c);f.onsessionjoin&&(a=f.onsessionjoin(e));if(a)break;f.showMessage(__svi18n.info.joinsession.applyArgs([e.numericId,e.__ip,e.name]));break;case 2:e=JSON.parse(c);f.onsessionexit&&(a=f.onsessionexit(e));if(a)break;f.showMessage(__svi18n.info.exitsession.applyArgs([e.numericId,e.__ip,e.name]));break;case 3:e=JSON.parse(c);d.joinMode!=e.mode&&(d.joinMode=e.mode,b=hi5.$("joinSelect"))&&(b.value=e.mode);if(d.hasControl)break;x.setReadOnly(!1);
if(b=hi5.$("requestControl"))b.disabled=!0;f.ongivecontrol&&(a=f.ongivecontrol());if(a)break;f.showMessage(__svi18n.info.givecontrol);break;case 4:x.setReadOnly(!0);d.hasControl=!1;if(b=hi5.$("requestControl"))b.disabled=!1;f.ontakebackcontrol&&(a=f.ontakebackcontrol());if(a)break;f.showMessage(__svi18n.info.nocontrol);break;case 5:e=JSON.parse(c);f.onrequirecontrol&&(a=f.onrequirecontrol(e));if(a)break;a=__svi18n.info.title.applyArgs([e.name,e.numericId,e.__ip]);hi5.notifications.notify({title:a,
msg:__svi18n.info.recontrol,cbYes:function(){f.giveControl(e.numericId);this.destroy()},cbNo:function(){f.refuseControl(e.numericId);this.destroy()}});break;case 6:x.setTouchRemoting(!0);break;case 7:e=JSON.parse(c);e.width&&e.height&&Ga(0,0,e.cols,e.rows);break;case 8:e=JSON.parse(c);if(f.onrequestcredential&&f.onrequestcredential(e))break;x.requestCredential(e);break;case 9:e=JSON.parse(c);0<e.interval&&0<e.width?gb(e.width,e.interval):K&&(K.stop(),K=null);break;case 11:e=JSON.parse(c),f.onrequirejoin&&
(a=f.onrequirejoin(e)),a||(a=__svi18n.info.title.applyArgs([e.name,e.numericId,e.__ip]),hi5.notifications.notify({title:a,msg:__svi18n.info.reqjoin,cbYes:function(){f.allowJoin(e.numericId,!0);this.destroy()},cbNo:function(){f.allowJoin(e.numericId,!1);this.destroy()}}))}}function fa(a){ja.style.display=a?"none":"block"}function ib(a){svGlobal.logger.info("opened...");B=!0;u.send("87"+navigator.userAgent);if(f.onopen)f.onopen()}function jb(a){svGlobal.logger.warn(a)}function Aa(a){svGlobal.logger.warn("closed ...");
fa(!0);ka=B=!1;if(f&&f.onclose)f.onclose();try{null!=P&&(P.exit(),P=null),x&&x.close()}catch(b){}Z&&(Z.release(),Z=null);O=l=null;u&&(u.onopen=null,u.onmessage=null,u.onclose=null,u=u.onerror=null);x=H=null;f&&(f=null);window&&window.$ssh&&(window.$ssh=null);null!=P&&(P.exit(),P=null)}function Oa(){10>m.fontSize&&(m.fontSize=10);13>m.fontSize?h=m.fontSize+6:12<m.fontSize&&19>m.fontSize?h=m.fontSize+8:18<m.fontSize&&25>m.fontSize?h=m.fontSize+12:24<m.fontSize&&(h=m.fontSize+16);m.lineHeight&&(h=parseInt(m.lineHeight));
Pa=(h-m.fontSize)/2|0;l.textBaseline="top";var a=m.fontFamily||"Courier New";0<a.indexOf(" ")&&(a="'"+a+"'");l.font=m.fontSize+"px "+a;v=l.measureText("X").width;S=parseInt(r/h);N=parseInt(q/v);E=N*v;Y(parseInt(r/h));z=new Ma(N,S)}function Ha(){ya();t=p=0;Oa();ja.style.width=v+"px";ja.style.height=h+"px";remotectrl.style.cursor="text";ka=!0}function la(){Qa.drawImage(O,0,0)}function Ra(a){switch(a){case 0:break;case 5:break;case 7:break;case 8:Ia();break;case 9:a=p/v/8;a=parseInt(a)+1;p=8*a*v;ma();
break;case 10:t+=h;ma();break;case 11:t+=h;ma();break;case 12:break;case 13:if(X){if(X&&(a=z.getSingleLine(L(),X,M()))){if(f.oncommand)f.oncommand(a);a.startsWith("cd /")&&x.setDirectory(a.substring(3))}X=0}p=0;t>(J-1)*h&&(t=(J-1)*h);break;case 14:break;case 15:break;default:console.log("Unknown C0 control:"+a)}}function kb(a){var b=a.getPosition();if(!T.parse(a))return a.setPosition(b-2),!1;a=T.count;b=T.parameters;switch(T.command){case 64:0==a&&(b[0]=1);a=b[0];for(var b="",c=a*v,d=l.getImageData(p,
t,E-p-c,h),e=0;e<a;e++)b+=" ";aa(b);p-=c;l.putImageData(d,p+c,t);z.insertSpace(a,M(),L());break;case 65:0==a&&(b[0]=1);t-=(b[0]||1)*h;break;case 66:0==a&&(b[0]=1);t+=(b[0]||1)*h;break;case 67:0==a&&(b[0]=1);p+=(b[0]||1)*v;break;case 68:0==a&&(b[0]=1);p-=(b[0]||1)*v;break;case 69:0==a&&(b[0]=1);t+=b[0]*h;p=0;break;case 70:0==a&&(b[0]=1);t-=b[0]*h;p=0;break;case 71:0==a&&(b[0]=1);Ba(0,b[0]);break;case 72:case 102:0==a&&(b[0]=b[1]=1);Ba(b[0]||1,b[1]||1);break;case 74:a||(b[0]=0);switch(b[0]){case 0:l.fillStyle=
D;l.fillRect(p,t,E-p,S*h-t);l.fillStyle=C;z.clearEOS(M(),L());break;case 1:l.fillStyle=D;l.fillRect(0,0,p,t);l.fillStyle=C;z.clearBOS(M(),L());break;case 2:ya();t=p=0;z.cleanScreen();break;case 3:ya();t=p=0;z.cleanScreen();break;default:console.log("invalid CSI J:"+b[0])}break;case 75:a||(b[0]=0);switch(b[0]){case 0:Sa();break;case 1:l.fillStyle=D;l.fillRect(0,t,p,h);l.fillStyle=C;z.clearBOL(M(),L());break;case 2:l.fillStyle=D;l.fillRect(0,t,E,h);l.fillStyle=C;z.clearLine(L());break;default:console.log("invalid CSI K:"+
b[0])}break;case 76:case 84:a||(b[0]=1);Ta(b[0]);break;case 77:case 83:a||(b[0]=1);Ua(b[0]);break;case 80:a||(b[0]=1);a=b[0];b=p+a*v;b=l.getImageData(b,t,E-b,h);Sa();l.putImageData(b,p,t);z.deleteChars(M(),L(),a);break;case 88:a||(b[0]=1);a=b[0];l.fillStyle=D;l.fillRect(p,t,a*v,h);l.fillStyle=C;z.eraseChars(M(),L(),a);break;case 90:a||(b[0]=1);p=8*((p/v/8|0)-b[0]+1)*v;ma();break;case 100:a||(b[0]=1);Ba(b[0]);break;case 101:a||(b[0]=1);Ba(L()+b[0]);break;case 104:if(63==T.mode)switch(b[0]){case 1:ba.setEscMode(1);
break;case 7:console.log("wraparound mode on");na=!0;break;case 25:fa(!1);break;case 45:console.log("reverse-wraparound mode on");break;case 1E3:case 1001:case 1002:case 1003:console.log("mouse tracking on");oa=b[0];break;default:console.log("CSI ? Pm h, Ps:"+b[0])}break;case 108:if(63==T.mode)switch(b[0]){case 1:ba.setEscMode(0);break;case 2:ba.setEscMode(2);case 7:na=!1;break;case 12:break;case 25:fa(!0);break;case 45:console.log("reverse-wraparound mode off");break;case 1E3:case 1001:case 1002:case 1003:oa=
0;break;default:console.log("CSI ? Pm l, Ps:"+b[0])}break;case 109:0==a&&(a=1,b[0]=0);for(c=0;c<a;c++)switch(b[c]){case 0:pa(7);qa(0);Ja(!1);break;case 1:Ja(!0);break;case 2:break;case 4:break;case 5:case 8:break;case 7:pa(0);qa(7);break;case 27:pa(7);qa(0);break;case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:pa(b[c]-30);break;case 38:return 2==b[c+1]&&(C="rgb("+b[c+2]+","+b[c+3]+","+b[c+4]+")",l.fillStyle=C),!0;case 39:pa(7);break;case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:qa(b[c]-
40);break;case 48:return 2==b[c+1]&&(D="rgb("+b[c+2]+","+b[c+3]+","+b[c+4]+")"),!0;case 49:qa(0);1==c&&39==b[0]&&Ja(!1);break;default:return console.log("TODO: SGR="+T.toString()),!0}break;case 114:T.mode||Y(b[1],b[0]);break;default:console.log("TODO: CSI="+T.toString())}return!0}function Ta(a){a||(a=1);var b=(G-1)*h,c=l.getImageData(0,b,E,(J-G-a+1)*h);l.fillStyle=D;l.fillRect(0,b,E,h*a);l.putImageData(c,0,(G+a-1)*h);l.fillStyle=C;z.scrollUp(a,G,J)}function Ua(a){a||(a=1);var b=(G-1)*h,c=J*h,d=a*
h,e=b+d,e=l.getImageData(0,e,E,c-e);l.fillStyle=D;l.fillRect(0,c-d,E,d);l.fillStyle=C;l.putImageData(e,0,b);z.scrollDown(a,G,J)}function ma(){na&&p>=E&&(p=0,t+=h);if(na&&t>xa){for(;t>xa;)t-=h;if(La)l.drawImage(O,0,-h),l.fillStyle=D,l.fillRect(0,xa,q,h),z.appendLines(1);else{var a=l.getImageData(0,0+(G-0)*h,E,(J-G)*h);l.fillStyle=D;l.fillRect(0,(G-1)*h,E,(J-G+1)*h);l.putImageData(a,0,0+(G-1)*h)}l.fillStyle=C}}function Ia(){p-=v;0>p&&(p=0)}function L(){return parseInt(t/h)+1}function M(){return parseInt(p/
v)+1}function Ba(a,b){b&&(p=(b-1)*v,0>p&&(p=0));a&&(t=(a-1)*h)}function qa(a){D=Ca[a];D||(D=m.bgColor||"black",console.log("xx colorIndex:"+a))}function pa(a){Va=a;C=ra[a];C||(C=m.fgColor||"white",console.log("xx colorIndex:"+a));l.fillStyle=C}function Ja(a){ra=a?Wa:Ca;C=ra[Va]}function Sa(){l.fillStyle=D;l.fillRect(p,t,E-p,h);l.fillStyle=C;z.clearEOL(M(),L())}function ya(){l.fillStyle=D;l.fillRect(0,0,O.width,O.height);l.fillStyle=C}function Da(){ja.style.top=t+"px";ja.style.left=p+"px"}function aa(a){var b=
a.length,c=(p/v|0)+b-N;0<c?(b-=c,Xa(a.substring(0,b),b),ma(),aa(a.substring(b))):Xa(a,b)}function Xa(a,b){if(a){z.writeText(M(),L(),a);var c=b*v;l.fillStyle=D;l.fillRect(Math.floor(p),t,Math.ceil(c),h);l.fillStyle=C;l.fillText(a,p,t+Pa);p+=c}}function lb(a,b){for(var c=a.getPosition(),d,e="",k=a.getEnd(),n=a.getData();c<k;)if(d=n[c++],d!=b)switch(d>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:e+=String.fromCharCode(d);break;case 12:case 13:e+=String.fromCharCode((d&31)<<6|n[c++]&63);
break;case 14:e+=String.fromCharCode((d&15)<<12|(n[c++]&63)<<6|(n[c++]&63)<<0)}else break;a.setPosition(c);return e}function Ya(a){ca+=a;U&&(aa(a),la(),Da())}function mb(a){if(B)return(a=a.getData("text/plain"))?(a=a.replace(/\r\n/g,"\n"),U||sa?Ya(a):Q(a),!0):!1}function Za(){if(R){var a=!!R.value;R.value=z.toString();a||(a=new hi5.ui.Lightbox(document.getElementById("copydialog")),a.show(),x&&x.setIgnorePaste(!1),a.onclose=function(){R.value=""});setTimeout(function(){R.scrollTop=R.scrollHeight},
10)}}function nb(a){var b={},c=0,d=a;this.enabled=!1;hi5.EventControl(this);var e=this,k=null,n=0,w=!0,da=!0;this.setDownload=function(a){w=a};this.setUpload=function(a){da=a};this.release=function(){b=d=a=e=null};this.read=function(d,n,k){var w=b[b[d]];if("undefined"!=typeof w){var da=w.name;if(1>w.size)f.showMessage(__svi18n.file.zero+da,null,3E3);else{var da=w.slice(n,n+k),V=new FileReader;V.onloadend=function(b){b.target.readyState==FileReader.DONE&&(b=new Uint8Array(b.target.result),a.send(d,
n,k,b,w.preferPaste),c+=k,e.fireEvent("progress",[c]))};V.readAsArrayBuffer(da)}}};this.mkdirs=function(b){e.enabled&&("/"!=b.charAt(b.length-1)&&(b+="/"),a.start([b],0,!0))};this.addFiles=function(d,c){var k=d.length;if(k&&e.enabled&&da){var w=c&&!!(ea&65536);n=Date.now();for(var g=0;g<k;g++){var V=d[g];c&&(V.preferPaste=!0);var h=V.fullPath||V.name;if(f.beforeupload&&f.beforeupload(V,h,w))return;e.fireEvent("beforeupload",[V,h,w]);h=encodeURIComponent(h);b[h]=V}a.start(d,c);e.fireEvent("uploadstarted",
[w])}};this.removeFile=function(a){d.remove(a)};this.confirmId=function(a,e,d){b[a]=e;d&&(c+=parseInt(d))};this.close=function(a){var d=!0,k={size:c,duration:Date.now()-n};if(a){var w=b[a];if(w){d=b[w].preferPaste;delete b[a];delete b[w];a=decodeURIComponent(w);if(f.onfileuploaded)f.onfileuploaded(a,d,k);e.fireEvent("fileuploaded",[a,d&&!!(ea&65536),k])}for(var da in b)return}else b={};n=c=0;e.fireEvent("uploaded",[d&&!!(ea&65536),k]);if(f.onuploaded)f.onuploaded(d&&!!(ea&65536),k)};this.cancelAll=
function(){d.cancelAll();if(f.onuploadingCancelled)f.onuploadingCancelled();e.fireEvent("uploadingCancelled");e.close()};this.list=function(a,b){k=b;d.list(a)};this.notifyFiles=function(a){k&&k(a);e.fireEvent("files")};this.download=function(){w&&d.download()}}function ob(){function a(a,c){var b=c.length,e=new Uint8Array(2+2*b);e[0]=58;e[1]=a;for(var k,n=2,w=0;w<b;w++)k=c.charCodeAt(w),e[n++]=k&255,e[n++]=k>>8&255;za(e.buffer)}this.start=function(a,c,d){for(var e=a.length,b=20*e+2,n=0,w=new Uint8Array(8),
f=2,g,h,l;n<e;n++)b=d?b+2*(encodeURIComponent(a[n]).length+1):b+2*(encodeURIComponent(a[n].fullPath||a[n].name).length+1);b=new Uint8Array(b);b[0]=58;b[1]=0;c&&(b[1]|=128);for(n=0;n<e;n++){c=d?0:a[n].size;b[f++]=c&255;b[f++]=c>>8&255;b[f++]=c>>16&255;b[f++]=c>>24&255;f+=4;d||hi5.NumUtils.toBytes(a[n].lastModified||a[n].lastModifiedDate.getTime(),w);b.set(w,f);f+=12;c=encodeURIComponent(d?a[n]:a[n].fullPath||a[n].name);g=c.length;for(h=0;h<g;h++)l=c.charCodeAt(h),b[f++]=l&255,b[f++]=l>>8&255;f+=2}za(b.buffer)};
this.send=function(a,c,d,e,k){var b=new Uint8Array(22+d);b[0]=58;b[1]=3;k&&(b[1]|=128);k=2;b[k++]=a&255;b[k++]=a>>8&255;b[k++]=a>>16&255;b[k++]=a>>24&255;b[k++]=c&255;b[k++]=c>>8&255;b[k++]=c>>16&255;b[k++]=c>>24&255;k+=4;b[k++]=d&255;b[k++]=d>>8&255;b[k++]=d>>16&255;b[k++]=d>>24&255;b.set(e,k+4);za(b.buffer)};this.remove=function(b){a(6,b)};this.list=function(b){a(5,b)};this.cancelAll=function(){a(7,"")};this.download=function(){a(136,"")}}function $a(a){I(m.mapDisk)&&(F||(F=new nb(new ob),F.enabled=
!0),a.setFileHandler(F))}function Q(a){if(a){a=unescape(encodeURIComponent(a));var b=a.length+1,c=new Uint8Array(b);c[0]=147;for(var d=1;d<b;d++)c[d]=a.charCodeAt(d-1);u.send(c.buffer)}}function Ma(a,b,c){function d(){var b=Array(a);hi5.Arrays.fill(b,0,a," ");return b}var e=0,k=[];if(!c||10>c/b)c=10*b;this.writeText=function(a,b,c){b--;a--;var n=k[e+b];n||(n=d(),k[e+b]=n);b=0;for(var w=c.length;b<w;b++)n[b+a]=c[b]};this.appendLines=function(a){e+=a};this.scrollDown=function(a,b,c){c=e+c-1-a;for(b=
e+b-1;b<=c;b++)k[b]=k[b+a];c++;for(b=0;b<a;b++)k[c+b]=d()};this.scrollUp=function(a,b,c){b=e+b-1+a;for(c=e+c-1;c>=b;c--)k[c]=k[c-a];b--;for(c=0;c<a;c++)k[b-c]=d()};this.cleanScreen=function(){e=k.length;if(e>=c){var a=2*b;k.splice(0,a);e-=a}};this.clearEOS=function(d,c){c--;d--;for(var n=e+c,f,w,g=0,h=b-c;g<h;g++)if(w=k[n+g])for(f=d;f<a;f++)w[f]=" "};this.clearBOS=function(a,b){b--;a--;for(var d=e,c,n,f=0;f<b;f++)if(n=k[d+f])for(c=0;c<a;c++)n[c]=" "};this.clearLine=function(b){b--;hi5.Arrays.fill(k[e+
b],0,a," ")};this.clearBOL=function(a,b){b--;a--;var d=k[e+b];if(d)for(var c=0;c<a;c++)d[c]=" "};this.clearEOL=function(b,d){d--;b--;var c=k[e+d];if(c)for(var n=b;n<a;n++)c[n]=" "};this.eraseChars=function(a,b,d){b--;a--;if(b=k[e+b]){var c=a;for(a+=d;c<a;c++)b[c]=" "}};this.deleteChars=function(a,b,d){b--;a--;(b=k[e+b])&&b.splice(a,d)};this.insertSpace=function(a,b,d){d--;b--;if(d=k[e+d]){for(var c=d.length-1;c>=b;c--)d[c+a]=d[c];for(c=0;c<a;c++)d[b+c]=" "}};this.getSingleLine=function(a,b,d){a--;
b--;d--;var c="";if(a=k[e+a])for(;b<d;b++)c+=a[b];return c.trimRight()};this.getMultiLines=function(b,d,c,f){if(f<d)return this.getMultiLines(c,f,b,d);var n=f-d+1;if(1>n)return null;if(1==n)return this.getSingleLine(d,b,c);b=this.getSingleLine(d,b,a);c=this.getSingleLine(f,1,c);n-=2;d+=e;for(var g=0;g<n;g++)b=(f=k[g+d])?b+("\r\n"+f.join("").trimRight()):b+"\r\n\r\n";return b+"\r\n"+c};this.toString=function(){for(var a="",b=0,d=k.length;b<d;b++)k[b]&&(a+=k[b].join("").trimRight()),a+="\r\n";return a}}
var X=0,W=null;this.displayMsg=!0;this.reconnectTimes=0;this.setTitle=this.openLink=!0;this.mode=0;this.getHistory=function(){return z.toString()};var Ka="object"==typeof g?g:null,ab="object"==typeof g||0<g.indexOf("/PLAY?");ab?(this.mode=1,Ka&&(g=""),g+="&touchpad=on"):0<g.indexOf("/JOIN?")&&(this.mode=2,this.reconnectOnResize=!1);var A=hi5.appcfg||{img:{},toolbar:{fadable:!0}},m=hi5.tool.queryToObj(g.substring(g.indexOf("?")+1));m.color||(m.color=32);var R=I(m.mapClipboard)?document.getElementById("copytextarea"):
null,z=null;R&&(R.value="");this.server=m.server;this.port=parseInt(m.port,10);this.sessionInfo={major:0,minor:0,width:0,height:0,bpp:0,bigEndian:!0,trueColor:!0};var x=null,B=!1,ka=!1,ea=0,wa="",oa=0,F=null;A.copyDialog=!0;var p=0,t=0,v=0,h=18,Pa=0,Ca="#000 #cd0000 #00cd00 #cdcd00 #0000ee #cd00cd #00cdcd #e5e5e5".split(" "),Wa="#7f7f7f #ff0000 #00ff00 #ffff00 #5c5cff #ff00ff #00ffff #ffffff".split(" "),ra=Ca,C=m.fgColor||ra[7],D=m.bgColor||ra[0],Va=0,na=!0;m.wraparoundMode&&(na=I(m.wraparoundMode));
var G=1,J=24,xa=0,La=!0,ja=document.getElementById("cursorID"),S=0,N=0,E=0,P=null;window.$ssh=this;var Z=new function(a){var b=0,c=0,d=new Uint8Array(a),e=this,f=new Na(0,null,0);this.needMore=!1;this.release=function(){e=d=f=null};this.getHandler=function(){return f};this.getData=function(){return d};this.getPosition=function(){return b};this.setPosition=function(a){b=a};this.getEnd=function(){return c};this.has=function(a){return c-b>=a};this.set=function(a){var e=a.length,f=c-b;if(1>f)c=e,d=a;
else{var k=d.subarray(b,c);c=f+e;e=new Uint8Array(c);e.set(k);e.set(a,f);d=e}b=0};this.handle=function(){f.handler(e,f)};this.setHandler=function(a){a&&1>a.need&&svGlobal.logger.warn("need < 1");(f=a)&&c-b>=a.need&&a.handler(e,a)};this.getByte=function(){return d[b++]};this.peekByte=function(){return d[b]};this.getBE32=function(){return d[b++]<<24|d[b++]<<16|d[b++]<<8|d[b++]};this.getBE16=function(){return d[b++]<<8|d[b++]};this.skip=function(a){b+=a};this.skipBack=function(a){b-=a};this.getBytes=
function(a,e){if(e)for(var c=0;c<a;c++)e[c]=d[b++];else return c=b,b+=a,d.subarray(c,b)};this.copyToByteArray=function(a,b,e,c){hi5.Arrays.arraycopy(d,e,a,b,c)}}(4194304);this.__que=Z;this.running=function(){return B};this.setColorTable=function(a){Ca=a};this.setColorTableBright=function(a){Wa=a};this.loadbalanceToken=A.loadbalanceTokenName?A.loadbalanceTokenName+"="+hi5.tool.uuid():"";var f=this,u=null;q||(q=window.innerWidth);m.width=q;g+="&width="+q;r||(r=window.innerHeight);m.height=r;g+="&height="+
r;y=(y=y||m.fontSize)?parseInt(y):13;m.fontSize?(y=parseInt(m.fontSize,10),m.fontSize=y):(m.fontSize=y,g+="&fontSize="+y);var Qa,O=document.createElement("canvas"),l;this.modifyURL=function(a){f.loadbalanceToken&&(a+="&"+f.loadbalanceToken);return a};this.__write=za;this.getFileUrl=function(a){return f.modifyURL(ia()+"/DOWNLOAD?s="+wa+"&f="+a)};this.listFiles=function(a,b){F&&F.list(a,b)};var H=new function(a){this.setJoinMode=f.setJoinMode;this.requestControl=f.requestControl;this.writeKeyComb=f.writeKeyComb;
this.localLockFlags=0;this.checkLockFlags=!0;this.getAppMode=function(){return f.mode};this.send=function(b){"891"!=b&&B&&a.__write(b)};this.sendInput=function(a){f.writeRawInput(a);if(f.onactivity)f.onactivity(a)};var b=null;this.getAppInfo=function(){return f.sessionInfo.appInfo};this.onresize=function(a){if(a=a.target.svSurface){a=a.getFreeSpace();var d=a.width,e=a.height;hi5.browser.isTouch||hi5.browser.isOpera||!B||(b&&(clearTimeout(b),b=null),b=setTimeout(function(){Ga(d,e);u.send("ED"+N+"\t"+
S+"\t"+q+"\t"+r)},200))}};this.onorientationchange=function(a){};this.getClipData=va;this.onfocus=function(a){};this.getShareFiles=a.listFiles;this.getFile=function(b){var d=a.getFileUrl(b);f.ondownload&&f.ondownload({fileName:b,url:d})||window.open(d)};this.getFileLink=a.getFileUrl;this.getGateway=function(){return g};this.reconnect=function(a,b,e){};this.sendKeyboardSyncFlags=function(a){return B?(this.remoteLockFlags=this.localLockFlags=a,!0):!1}}(this);void 0!=A.displayMsg&&(this.displayMsg=A.displayMsg);
void 0!=A.reconnectTimes&&(this.reconnectTimes=A.reconnectTimes);void 0!=A.openLink&&(this.openLink=A.openLink);void 0!=A.setTitle&&(this.setTitle=A.setTitle);"boolean"==typeof A.useWSS&&(g=(A.useWSS?"wss":"ws")+g.substring(g.indexOf("://")));this.getURL=function(){return g};var pb=parseInt(m.server_bpp||m.color||24);this.getColor=function(){return pb};this.run=function(){if(!B){if(Ka)u=Ka,Ha();else{Oa();var a=g+="&cols="+N+"&rows="+S;hi5.browser.binaryWS()&&(a+="&binary=on");var b=window.opener;
if(b){var c=null;try{c=b.__sparkUser}catch(d){}c&&(b=c.account,c=c.session,b&&(a+="&account="+b),c&&(a+="&session="+c))}g=a+("&pasteCap="+(hi5.browser.isChrome&&hi5.browser.isDesktop?3:0));a=0==f.mode&&A.wsPost?g.substring(0,g.indexOf("?"))+"?_METHOD=post":g;a=f.modifyURL(a);(c=hi5.browser.cookie.get("__SV_TOKEN_A"))&&(a+="&__SV_TOKEN_A="+encodeURIComponent(c));u=new WebSocket(a,"ssh");u.binaryType="arraybuffer"}svGlobal.logger.info(g);u.onopen=ib;void 0!=m.recording&&"on"==m.recording&&eb(m);u.onmessage=
function(a){a=a.data;if("string"!=typeof a){var b=new Uint8Array(a);null!=P&&P.add(new RecordingObj(b,0,a.byteLength));Z.set(b);Z.handle()}else{var c=parseInt(a.substring(0,2),16),b=a.substring(2);switch(c){case 0:a=g.substring(g.indexOf("?")+1);u.send("00"+a);u.send("87"+navigator.userAgent);break;case 15:a=JSON.parse(b);u.send("8D");if(f){f.sessionInfo.protocolVersion=a.protocolVersion;if(f.onready)f.onready();if(f.onloggedin)f.onloggedin();A.pingInterval&&f.startPing(A.pingInterval);F&&(F.enabled=
!0)}fa(!1);break;case 26:a=JSON.parse(b);if(a.name){svGlobal.logger.info("msg="+b);if(f.onerror)f.onerror(a);b=__svi18n.errorCode["S"+a.name]||"";b+=a.message;f.showMessage(b)}else 0<svGlobal.log&&console.erro("No error code for message:"+b);break;case 27:0!=A.drawLicense&&x.drawLicense(b);break;case 56:a=JSON.parse(b);wa=a.session;a.server=f.server;if(b=hi5.$("joinSelect"))b.value=a.joinMode;if(b=hi5.$("requestControl"))b.disabled=a.hasControl;var b=A.page&&A.page.joinssh||"joinssh.html",b=location.protocol+
"//"+location.host+"/"+b+"?id="+a.numericId,b=f.modifyURL(b),d=a.webAddress;d&&0<d.length&&(c=d.indexOf("://"),d=d.substring(c+3),c=d.indexOf("/"),0<c&&(d=d.substring(0,c)),d.toLowerCase()!=location.host.toLowerCase()&&(b+="&gateway="+d));a.joinLink=b;f.sessionInfo.appInfo=a;a.ver&&a.ver!=svGlobal.version&&svGlobal.logger.warn("Client:"+svGlobal.version+" server:"+a.ver);Ha();if(f.onsessionstart)f.onsessionstart(f.sessionInfo);break;case 58:if(F)if(a=parseInt(b.charAt(0),10),b=b.substring(1),5==a)F.notifyFiles(JSON.parse(b));
else switch(b=b.split("\t"),a){case 1:F.confirmId(b[0],b[1],b[2]);break;case 2:F.read(b[0],parseInt(b[1],10),parseInt(b[2],10));break;case 4:F.close(b[0]);break;case 9:a='<a href="'+b[0]+'" download="'+b[1]+'" target="_blank">'+__svi18n.info.fileReady+"</a>",surfaces.getFocused().showMessage({msg:a,title:__svi18n.info.download})}break;case 59:a=hi5.Base64.dec(b,0);ea=a[3]<<24|a[2]<<16|a[1]<<8|a[0];ea&64&&f.showMessage(__svi18n.info.recording);x.setFeature(ea);break;case 61:a=JSON.parse(b);switch(a.type){case 0:m.fontSize=
parseInt(a.fontSize);q=a.width;r=a.height;Ha();x.setAutoScale(!0);Ga(0,0,a.cols,a.rows);if(b=a.server)f.server=a.server,f.setTitle&&(document.title=m.displayName||f.server);(b=a.mapDisk)&&$a(x);fa(!1);bb=a.length;if(f.onopened)f.onopened(a);break;case 1:a=a.duration;if(f.onprogress)f.onprogress(a,bb);break;case 2:2==a.status?B=!0:(b=0==a.status,a.warn&&f.showMessage(b?__svi18n.info.sessionPaused:__svi18n.info.sessionResumed))}break;case 62:hb(b);break;case 91:ka=!0;aa(__svi18n.info.user||b);U=!0;
la();Da();break;case 93:t+=h;p=0;aa(__svi18n.info.password||b);sa=!0;la();Da();break;case 148:break;default:svGlobal.logger.warn("@TODO:"+a+"\n")}}};u.onclose=Aa;u.onerror=jb;f.setTitle&&(document.title=m.displayName||f.server)}};this.setJoinMode=function(a){B&&u.send("8E1"+a)};this.refuseControl=function(a){B&&u.send("8E3"+a)};this.giveControl=function(a){B&&u.send("8E4"+a)};this.requestControl=function(){B&&u.send("8E2")};this.play=function(){u.send("F3")};this.pause=function(){u.send("F2")};this.scan=
function(a){u.send("F4"+(a?"1":"0"))};this.seek=function(a){x&&B&&u.send("F4"+(a?"1":"0")+"\t"+(a/x.getScale()|0))};var K=null,U=!1,sa=!1,ca="",bb=0;this.hide=function(){x&&(fa(!0),x.hide())};this.showMessage=function(a){f.displayMsg&&a&&hi5.notifications.notify({msg:a})};this.close=function(){if(u&&B)try{u.send("85"),u.close()}catch(a){}else Aa()};hi5.browser.isChromeApp?chrome.runtime.onSuspend.addListener(Aa):window.addEventListener("unload",Aa,!1);var qb=new Na(1024,function(a){var b=p,c=t;for(a.needMore=
!1;a.has(1);){var d=a.getByte();if(31>=d)if(27==d){a:if(d=a,d.has(1)){var e=d.getByte();switch(e){case 40:d.getByte();break;case 41:d.getByte();break;case 55:break;case 61:break;case 62:break;case 68:Ua();break;case 77:Ta();break;case 92:console.log("ST");break;case 93:console.log("OSC:"+lb(d,7));break;case 91:d=kb(d);break a;default:console.log("unkown cmd for ESC:"+e)}d=!0}else d.skipBack(1),d=!1;if(!d)return}else Ra(d);else if(128<=d&&159>=d)switch(d){case 146:a.skip(2);break;default:console.log("C1:"+
d)}else{a.skipBack(1);d=aa;a:{for(var e=a,f=e.getPosition(),g,h="",l=e.getEnd(),m=e.getData();f<l;)if(g=m[f++],31<g&&(128>g||159<g)){if(177!=g)switch(g>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:h+=String.fromCharCode(g);break;case 12:case 13:if(f<l)h+=String.fromCharCode((g&31)<<6|m[f++]&63);else{e.needMore=!0;e=h;break a}break;case 14:if(1<l-f)h+=String.fromCharCode((g&15)<<12|(m[f++]&63)<<6|(m[f++]&63)<<0);else{e.needMore=!0;e=h;break a}}}else{f--;break}e.setPosition(f);e=h}d(e);
if(a.needMore)return}}b==p&&c==t||Da();la();W&&W.check()});Z.setHandler(qb);var T={mode:0,parameters:[0],count:0,trailing:0,command:0,toString:function(){var a="CSI, ";this.mode&&(a+="mode:"+String.fromCharCode(this.mode));0<this.count&&(a+=" parameters:"+this.parameters.slice(0,this.count).join(";"));this.trailing&&(a+=" trailing:"+String.fromCharCode(this.trailing));return a+=" cmd:"+String.fromCharCode(this.command)},parse:function(a){var b=0,c=!1,d=a.getByte();if(!d)return!1;if(60<=d&&63>=d)this.mode=
d,d=a.getByte();else if(this.mode=0,31>=d||128<=d&&159>=d)Ra(d),d=a.getByte();if(!d)return!1;for(this.count=0;48<=d&&57>=d||59==d;)if(59==d?(this.parameters[this.count]=c?b:null,this.count++,b=0,c=!1):(b=10*b+(d-48),c=!0),d=a.getByte(),!d)return!1;c?(this.parameters[this.count]=b,this.count++):0<this.count&&(this.parameters[this.count]=1,this.count++);if(32<=d&&47>=d){if(this.trailing=d,d=a.getByte(),!d)return!1}else this.trailing=0;64<=d&&127>=d?this.command=d:(this.command="",console.log("Invalid CSI final char:"+
String.fromCharCode(d)));return!0}};this.showHistory=Za;this.getUploadManager=function(){return F};this.addSurface=function(a){x=a;ab&&a.setPlayerMode();Qa=x.context;O.width=q;O.height=r;l=O.getContext("2d",{alpha:!1});a.forceTextArea=!0;a.alwaysPaste=!0;a.setAutoScale(0<f.mode);a.setSize(q,r);a.setController(H);a.setFastCopy(I(m.fastCopy));a.setTouchpad(I(m.touchpad));a.setClipboard(I(m.mapClipboard));$a(x);a.run(99997,!1,!0);a.onclipdata=mb};this.sendPing=function(a){Q("\u0005")};this.startPing=
function(a){W||(W=new hi5.tool.ResponseMonitor(function(){ka&&f.sendPing()},function(){ka&&W.check(1)}));W.setInterval(a,a);setTimeout(function(){W.check()},1E3*a)};this.stopPing=function(){W&&W.stop()};this.writeText=Q;this.writeScancode=function(a,b){Q(ba.process(a,b,0))};var rb={" ":57,space:57,pageup:201,pagedown:209,end:207,home:199,left:203,up:200,right:205,down:208,printscreen:183,insert:210,del:211,"delete":211,altgr:184,windows:219,windowsright:220,context:221,esc:1,backspace:14,tab:15,enter:28,
meta:29,command:29,ctrl:29,shift:42,alt:56,capslock:58,f1:59,f2:60,f3:61,f4:62,f5:63,f6:64,f7:65,f8:66,f9:67,f10:68,f11:87,f12:88,numlock:69,scrolllock:70,add:78};this.writeKeyComb=function(a){a=a.split("+");var b=a.length;if(0!=b)for(var c=null,d=0;d<b;d++){var e=a[d];""==e&&""==c&&(e="Add");if(""!=e){var c=e,g=rb[c.toLowerCase()];g?f.writeScancode(!0,g):console.log("Invalid key:"+c)}c=e}};var Ea=!1,ta=0,ua=0,Fa=0,ga=!1,cb=0,db=0,ha=null;this.writeRawInput=function(a){if(B){var b=parseInt(a.substring(0,
2),16);a=a.substring(2).split("\t");switch(b){case 128:ta=parseInt(a[0]);ua=parseInt(a[1]);Fa=parseInt(a[2]);ga=!1;Ea=!0;cb=Math.floor(ta/v)*v;db=Math.floor(ua/h)*h;oa&&Q("\u001b[M"+a[2]+String.fromCharCode(Math.floor(ta/v)+33)+String.fromCharCode(Math.floor(ua/h)+33));return;case 129:oa&&Q("\u001b[M3"+String.fromCharCode(Math.floor(parseInt(a[0])/v)+33)+String.fromCharCode(Math.floor(parseInt(a[1])/h)+33));Fa=parseInt(a[2]);2==Fa&&Ea&&!ga?(R&&(R.value=""),setTimeout(Za,50)):ga&&(a=z.getMultiLines(Math.floor(ta/
v)+1,Math.floor(ua/h+.1)+1,Math.floor(parseInt(a[0])/v+.4)+1,Math.floor(parseInt(a[1])/h-.4)+1))&&x&&x.copyToClip("text/plain;"+a);ha&&(x.removeWhiteboard(),ha=null);ga=Ea=!1;return;case 130:if(Ea){b=parseInt(a[0]);a=parseInt(a[1]);if(!ga){if(3>Math.abs(b-ta)&&3>Math.abs(a-ua))return;ga=!0}if(0==Fa){if(!ha){var c=x.initWhiteboard().getContext("2d");ha=new hi5.canvas.TextSelect(c,h,null,"1px",q)}ha.clear();ha.draw(cb,db,b,a)}}return;case 131:oa&&Q("\u001b[M"+("1"==a[2]?4:5)+String.fromCharCode(Math.floor(parseInt(a[0])/
v)+64)+String.fromCharCode(Math.floor(parseInt(a[1])/h)+64));return;case 132:c=0==a[0];b=parseInt(a[1]);U||sa?c&&(a=b,28==a?(u.send((U?"5B":"5D")+ca),ca="",U?U=!1:(sa=!1,t+=h,p=0)):14==a&&0<ca.length&&(ca=ca.substring(0,ca.length-1),U&&(Ia(),aa(" "),la(),Ia()))):(Q(ba.process(c,b,0)),28!=b&&(X||(X=M())));return;case 139:b=parseInt(a[1]);c=0==a[0];Q(ba.process(c,b,1));return;case 134:U||sa?Ya(a[0]):(X||(X=M()),Q(ba.process(!0,a[0],3)));return}svGlobal.logger.warn("Unknowncode: "+a[1]+" type:"+b)}};
var ba=new function(){var a=!1,b=!1,c=!1,d=0;this.setEscMode=function(a){d=a;console.log("Esc mode:"+a)};this.process=function(e,f,g){if(3==g)return f;if(0==g){switch(f){case 29:case 157:return a=e,"";case 56:case 184:return b=e,"";case 42:case 54:return c=e,""}if(e){switch(f){case 28:e="\r";break;case 200:e=0==d?"\u001b[A":"\u001bOA";break;case 208:e=0==d?"\u001b[B":"\u001bOB";break;case 205:e=0==d?"\u001b[C":"\u001bOC";break;case 203:e=0==d?"\u001b[D":"\u001bOD";break;case 59:e="\u001bOP";break;
case 60:e="\u001bOQ";break;case 61:e="\u001bOR";break;case 62:e="\u001bOS";break;case 63:e="\u001b[15~";break;case 64:e="\u001b[17~";break;case 65:e="\u001b[18~";break;case 66:e="\u001b[19~";break;case 67:e="\u001b[20~";break;case 68:e="\u001b[21~";break;case 87:e="\u001b[23~";break;case 88:e="\u001b[24~";break;case 15:e="\t";break;case 209:e="\u001b[6~";break;case 201:e="\u001b[5~";break;case 199:e=0==d?"\u001b[H":"\u001bOH";break;case 207:e=0==d?"\u001b[F":"\u001bOF";break;case 14:e=c?"\b":"\u007f";
break;case 211:e="\u001b[3~";break;case 197:e="\u00ff\u00f3";break;case 210:e="\u001b[2~";break;case 1:e="\u001b";break;case 55:e="*";break;case 71:e=H.localLockFlags&2?"7":0==d?"\u001b[H":"\u001bOH";break;case 72:e=H.localLockFlags&2?"8":0==d?"\u001b[A":"\u001bOA";break;case 73:e=H.localLockFlags&2?"9":"\u001b[5~";break;case 74:e="-";break;case 75:e=H.localLockFlags&2?"4":0==d?"\u001b[D":"\u001bOD";break;case 76:e=H.localLockFlags&2?"5":"\u001bOu";break;case 77:e=H.localLockFlags&2?"6":0==d?"\u001b[C":
"\u001bOC";break;case 78:e="+";break;case 79:e=H.localLockFlags&2?"1":0==d?"\u001b[F":"\u001bOF";break;case 80:e=H.localLockFlags&2?"2":0==d?"\u001b[B":"\u001bOB";break;case 81:e=H.localLockFlags&2?"3":"\u001b[6~";break;case 82:e=H.localLockFlags&2?"0":"\u001b[2~";break;case 83:e=H.localLockFlags&2?".":"\u001b[3~";break;case 156:e="\r";break;case 181:e="/";break;default:return console.log("Invalid code:"+f),""}b&&(e="\u001b"+e);return e}return""}if(1==g&&e&&a){if(64<f&&91>f)return String.fromCharCode(f-
64);switch(f){case 54:return"\u001e";case 219:return"\u001b";case 220:return"\u001c";case 221:return"\u001d";case 32:return"\x00";case 192:return"\u001e";case 191:return"\u001f";default:return console.log("Invalid key code:"+f),""}}if(b)return"\u001b"+String.fromCharCode(f).toLowerCase()}}};
