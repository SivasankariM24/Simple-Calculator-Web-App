let display = document.getElementById("display");

// Append values to display
function appendToDisplay(value) {
    display.value += value;
}

// Clear display
function clearDisplay() {
    display.value = "";
}

// Delete last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculate the result
function calculateResult() {
    try {
        display.value = eval(display.value); // Evaluate expression
    } catch (error) {
        display.value = "Error"; // Handle invalid expressions
    }
}

// Keyboard support
document.addEventListener("keydown", function(event) {
    let key = event.key;
    if ((key >= "0" && key <= "9") || ["+", "-", "*", "/", ".", "%"].includes(key)) {
        appendToDisplay(key);
    } else if (key === "Enter") {
        calculateResult();
    } else if (key === "Backspace") {
        deleteLast();
    } else if (key === "Escape") {
        clearDisplay();
    }
});
