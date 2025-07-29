if (localStorage.getItem("theme") === null | localStorage.getItem("theme") === undefined) {
    localStorage.setItem("theme", "1")
}
if (localStorage.getItem("se") === null | localStorage.getItem("se") === undefined) {
    localStorage.setItem("se", "1")
}


let themes = [
    ["Catppuccin mocha", "css/themes/ctp-mocha.css"],
    ["Catppuccin macchiato", "css/themes/ctp-macchiato.css"],
    ["Catppuccin frappe", "css/themes/ctp-frappe.css"],
    ["Catppuccin latte", "css/themes/ctp-latte.css"],
    ["Nord dark", "css/themes/nord-dark.css"],
    ["Nord light", "css/themes/nord-light.css"],
];


var theme = parseInt(localStorage.getItem("theme"));
var themeName = themes[theme - 1][0];

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("theme").href = themes[theme - 1][1];
});
