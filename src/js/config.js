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

document.getElementById("theme-picker").value = localStorage.getItem("theme");
document.getElementById("search-engine-picker").value = localStorage.getItem("se");
document.getElementById("font-picker").value = localStorage.getItem("font")
document.getElementById("font-picker").addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.key === "Enter") {
        changeFont();
    }
});