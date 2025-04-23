function load(url, successCallback, errorCallback) {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", url, true);
	if ("overrideMimeType" in xhr) {
		xhr.overrideMimeType("text/plain");
	}
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4) {
			if (xhr.status === 0 || xhr.status === 200) {
				successCallback(xhr.responseText);
			} else {
				errorCallback();
				throw new Error("Could not load " + url);
			}
		}
	};
	xhr.send(null);
}
