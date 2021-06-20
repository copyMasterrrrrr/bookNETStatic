var operator = "=";

function getCookieValue(keyStr) {
	var value = null;
	var s = document.cookie;
	var arr = s.split("; ");
	for (var i = 0; i < arr.length; i++) {
		var str = arr[i];
		var k = str.split(operator)[0];
		var v = str.split(operator)[1];
		if (k == keyStr) {
			value = v;
			break;
		}
	}
	return value;
}

function setCookieValue(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	var expires = "expires=" + d.toGMTString();
	document.cookie = cname + "=" + cvalue + "; " + expires;
}


function getUrlParam(key) {
	var url = decodeURI(window.location.toString());
	var arr = url.split("?");
	if (arr.length > 1) {
		var params = arr[1].split("&");
		for (var i = 0; i < params.length; i++) {
			var param = params[i];  //"pid=101"
			if (param.split("=")[0] == key) {
				return param.split("=")[1];
			}
		}
	}
	return null;
}