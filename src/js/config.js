function changeTheme() {
    localStorage.setItem("theme", document.getElementById("theme-picker").value)
    location.reload()
}
function changeSearchEngine() {
    localStorage.setItem("se", document.getElementById("search-engine-picker").value)
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("theme-picker").value = localStorage.getItem("theme");
    document.getElementById("search-engine-picker").value = localStorage.getItem("se");
});