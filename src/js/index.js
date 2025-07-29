function formatTime(number) {
	return number < 10 ? '0' + number : number;
}

function getTime() {
	let date = new Date();

	let time = date.toLocaleString([], {
		hour: "2-digit",
		minute: "2-digit",
	});

	return (time)
}

let searchEngines = [
	["https://duckduckgo.com/search", "DuckDuckGo"],
	["https://google.com/search", "Google"],
	["https://bing.com/search", "Bing"],
	["https://www.searchencrypt.com/search", "Search Encrypt"]
];

var searchEngine = parseInt(localStorage.getItem("se")) - 1;
var searchEngineName = searchEngines[searchEngine][1];

document.addEventListener("DOMContentLoaded", function () {

	document.getElementById("time").innerHTML = getTime()
	document.getElementById("search-box").placeholder = `Search with ${searchEngineName}...`;
	document.getElementById("search").action = searchEngines[searchEngine][0];
});

setInterval(function () { document.getElementById("time").innerHTML = getTime() }, 30000);