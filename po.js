<!--  
var frequencyCap = 5; 
function setCookie(cookieName,cookieValue, expirehours) {
  if (frequencyCap > 0) {
	var today = new Date();
	var expire = new Date();
 	expire.setTime(today.getTime() + 60000 * frequencyCap);
 	document.cookie = cookieName+"="+escape(cookieValue) + ";expires="+expire.toGMTString();
  } else {
 	document.cookie = cookieName+"="+escape(cookieValue);
  }
}
function ReadCookie(cookieName) {
 var theCookie=""+document.cookie;
 var ind=theCookie.indexOf(cookieName);
 if (ind==-1 || cookieName=="") return ""; 
 var ind1=theCookie.indexOf(';',ind);
 if (ind1==-1) ind1=theCookie.length; 
 return unescape(theCookie.substring(ind+cookieName.length+1,ind1));
}

if (ReadCookie('cookie_popup') != '1') { 
 setCookie('cookie_popup','1', 1);
if (ReadCookie('ck1') != '1') { 
 setCookie('ck1','1', frequencyCap); 
document.write("<script type=\"text/javascript\" data-cfasync=\"false\">");
document.write("/*<![CDATA[/* */");
document.write(" (function(){ var u=window;u[\"_po\x70\"]=[[\"\u0073\u0069t\u0065Id\",1738666],[\"\x6di\u006e\x42\x69d\",0],[\"po\x70\u0075n\x64e\x72s\x50\x65r\x49\u0050\",0],[\"\u0064\x65\u006ca\u0079B\u0065\u0074\u0077e\u0065n\",0],[\"d\x65\x66a\x75\u006ct\",false],[\"d\u0065\x66a\x75\u006c\x74\u0050e\u0072D\x61\u0079\",0],[\"t\u006f\x70\x6d\x6f\x73\u0074L\u0061\u0079er\",!0]];var x=[\"\u002f\x2f\x63\u0031\x2e\x70\x6f\x70\u0061\u0064s\x2en\x65\u0074\u002f\u0070\u006fp.js\",\"/\x2f\u0063\u0032.popa\u0064\u0073\u002e\u006ee\x74\x2f\u0070o\u0070.\x6as\",\"\u002f\x2fw\u0077\x77.\u0061\u0066d\x79\x66\x78\x66rw\u0062\x66\u0079\u002e\u0063o\x6d/\u0065\u002e\u006a\u0073\",\"\x2f\u002f\x77ww.\x6d\x75\u006bx\u0062\u006c\x72\u006b\x6f\x61\x61\u0061.\x63\u006fm\u002finm.\x6as\",\"\"],e=0,o,r=function(){if(\"\"==x[e])return;o=u[\"\x64\x6fcum\u0065\x6e\u0074\"][\"\x63\x72\x65\x61t\x65E\x6c\x65\x6d\x65\u006et\"](\"sc\x72ip\x74\");o[\"\x74y\x70e\"]=\"\u0074\u0065\x78\x74\u002f\x6a\u0061\x76a\u0073\u0063ri\x70t\";o[\"\u0061sy\u006e\u0063\"]=!0;var i=u[\"\u0064\x6f\x63\x75\u006d\u0065\x6e\x74\"][\"g\u0065\x74\x45\u006c\x65men\u0074\u0073By\x54a\x67\x4eame\"](\"\u0073\x63\x72\x69\u0070t\")[0];o[\"s\x72\x63\"]=x[e];if(e<2){o[\"cr\x6f\u0073s\x4f\u0072\u0069\u0067in\"]=\"a\x6eon\u0079\x6d\x6f\x75\x73\";};o[\"\u006fn\x65r\x72\u006f\x72\"]=function(){e++;r()};i[\"\u0070are\x6et\x4e\x6f\x64e\"][\"ins\x65\u0072\x74\x42e\x66\x6f\u0072e\"](o,i)};r()})();");
document.write("/*]]>/* */");
document.write("</script>");
}else if (ReadCookie('ck2') != '1') { 
 setCookie('ck2','1', frequencyCap); 
document.write("<script data-cfasync=\"false\" src=\"//d17ialcoirdn28.cloudfront.net/?claid=617091\"></script>");
}
}

// -->
