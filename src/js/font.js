var font = localStorage.getItem("font");
var fontEscaped = font.replaceAll(" ", "+");
document.getElementById("font").href = `https://fonts.googleapis.com/css2?family=${fontEscaped}&display=swap`;
document.getElementById("font-set").innerText = `body, input::placeholder, input,select,option{font-family: "${font}", sans-serif;}`;