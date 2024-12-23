const display = document.getElementById('display');

// Append value to the display
function appendToDisplay(value) {
    display.value += value;
}

// Clear the entire display
function clearDisplay() {
    display.value = '';
}

// Remove the last character
function backspace() {
    display.value = display.value.slice(0, -1);
}

// Calculate the result
function calculate() {
    try {
        // Use eval to compute the expression, including brackets
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

// Calculate factorial
function factorial() {
    try {
        const number = parseInt(display.value);
        if (isNaN(number) || number < 0) {
            display.value = 'Error';
            return;
        }
        let fact = 1;
        for (let i = 1; i <= number; i++) {
            fact *= i;
        }
        display.value = fact;
    } catch (error) {
        display.value = 'Error';
    }
}
