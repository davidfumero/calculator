const display = document.getElementById("display-panel")
const button = document.querySelectorAll("button");

if (display) {
    display.textContent = "0";
} else {
    console.log("Display panel not found!");
}

button.forEach(button => {
    button.addEventListener('click', function() {
        console.log("Button clicked:", this.textContent)
        if (this.textContent == "AC") {
            display.textContent = "0";
        } else if (this.textContent == "+/-") {

        } else if (this.textContent == "%") {

        } else if (this.textContent == "/") {

        } else if (this.textContent == "-") {

        } else if (this.textContent == "+") {

        } else if (this.textContent == "=") {

        } else if (this.textContent == "?") {

        } else {
            if (display.textContent == "0") {
                display.textContent = this.textContent;
            } else {
                display.textContent = display.textContent + this.textContent;
            }
        }
    })
})