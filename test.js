curl = require('./build/default/curl');
assert = require('assert');

// import symbols into the global namespace
for (var k in curl) {
	global[k] = curl[k];
}

ch = curl_easy_init();
curl_easy_setopt(ch, CURLOPT_URL, 'https://encrypted.google.com/');
curl_easy_setopt(ch, CURLOPT_CERTINFO, 1);
curl_easy_setopt(ch, CURLOPT_WRITEFUNCTION, function(data) {
	console.error(data.toString());
});

curl_easy_perform(ch, function(ex) {
	// TODO
});

for (var k in global) {
	if (0 == k.indexOf('CURLINFO_')) {
		console.error(k, curl_easy_getinfo(ch, global[k]));
	}
}