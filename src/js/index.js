if (localStorage.getItem("theme") === null | localStorage.getItem("theme") === undefined) {
	localStorage.setItem("theme", "1")
}
if (localStorage.getItem("se") === null | localStorage.getItem("se") === undefined) {
	localStorage.setItem("se", "1")
}

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
var searchBox = document.getElementById("search-box");

document.getElementById("time").innerHTML = getTime();
searchBox.placeholder = `Search with ${searchEngineName}...`;
document.getElementById("search").action = searchEngines[searchEngine][0];

setInterval(function () { document.getElementById("time").innerHTML = getTime() }, 30000);