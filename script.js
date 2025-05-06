const display = document.getElementById("display-panel")
const button = document.querySelectorAll("button");

if (display) {
    display.textContent = "0";
} else {
    console.log("Display panel not found!");
}

button.forEach(button => {
    button.addEventListener('click', function() {
        let btnText = this.textContent;
        console.log("Button clicked:", btnText)

        if (btnText == "AC") {
            display.textContent = "0";
        } else if (btnText == "+/-") {
            if (display.textContent = "0") {
                //
            } else if (display.textContent.includes("-")) {
                let oldText = display.textContent;
                let newText = oldText.slice(2, -1);
                display.textContent = newText;
            } else {
                display.textContent = "(-" + display.textContent + ")";
            }
        } else if (btnText == "%") {

        } else if (btnText == "/") {

        } else if (btnText == "-") {

        } else if (btnText == "+") {

        } else if (btnText == "=") {

        } else if (btnText == "?") {

        } else if (btnText == ".") {
            display.textContent.includes(".") ? null : display.textContent = display.textContent + btnText;
        } else if (display.textContent == "0") {
            display.textContent = btnText;
        } else {
            display.textContent = display.textContent + btnText;
        }
    })
})