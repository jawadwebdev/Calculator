const display = document.getElementById("display");
let isError = false; // Flag to check if "Error" is displayed

function appendToDisplay(value) {
    if (isError) {
        // If there's an error, clear the display before appending new input
        display.value = value;
        isError = false; // Reset the error flag
    } else {
        display.value += value; // Append value to the display
    }
}

function clearDisplay() {
    display.value = "";
    isError = false; // Reset the error flag on clear
}

function calculate() {
    try {
        let result = eval(display.value); // Evaluate the expression
        if (result !== undefined) {
            display.value = result; // Display the result
        } else {
            display.value = ""; // Clear if the result is undefined
        }
    } catch (error) {
        display.value = 'Error'; // Display error on invalid expression
        isError = true; // Set the error flag
    }
}
