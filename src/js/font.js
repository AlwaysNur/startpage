var font = localStorage.getItem("font");
document.getElementById("font").href = `https://fonts.googleapis.com/css2?family=${font.replaceAll(" ", "+")}&display=swap`
document.getElementById("font-set").innerText = `body, input::placeholder, input,select,option{font-family: "${font}", sans-serif;}`