let themes = { "ctp-mocha": "./css/catppuccin/ctp-mocha.css" };
let searchEngines = [
	["duckduckgo.com/search?q=", "DuckDuckGo"],
	["google.com/search?q=", "Google"],
	["bing.com/search?q=", "Bing"],
];
// let searchEngineNames = [];

var theme = themes["ctp-mocha"];
var searchEngine = searchEngines[2][0];
var searchEngineName = searchEngines[2][1];

document.addEventListener("DOMContentLoaded", function () {
	document.getElementById("theme").href = theme;
	document.getElementById(
		"search-with"
	).innerHTML = `Search with ${searchEngineName}`;
	document.getElementById("search").action = `https://${searchEngine}`;
});
