if (localStorage.getItem("theme") === null | localStorage.getItem("theme") === undefined) {
    localStorage.setItem("theme", "1")
}
if (localStorage.getItem("se") === null | localStorage.getItem("se") === undefined) {
    localStorage.setItem("se", "1")
}
if (localStorage.getItem("tab-name") === null | localStorage.getItem("tab-name") === undefined) {
    localStorage.setItem("tab-name", "Startpage")
}

function changeTheme() {
    localStorage.setItem("theme", document.getElementById("theme-picker").value);
    location.reload();
}
function changeSearchEngine() {
    localStorage.setItem("se", document.getElementById("search-engine-picker").value);
}
function changeFont() {
    localStorage.setItem("font", document.getElementById("font-picker").value);
    location.reload();
}
function changeTabName() {
    localStorage.setItem("tab-name", document.getElementById("tab-name-picker").value);
    document.getElementsByTagName("title")[0].innerHTML = localStorage.getItem("tab-name");
}

document.getElementById("tab-name-picker").value = localStorage.getItem("tab-name");
document.getElementById("theme-picker").value = localStorage.getItem("theme");
document.getElementById("search-engine-picker").value = localStorage.getItem("se");
document.getElementById("font-picker").value = localStorage.getItem("font");

document.getElementById("font-picker").addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.key === "Enter") {
        changeFont();
    }
});
document.getElementById("tab-name-picker").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        changeTabName();
    }
});