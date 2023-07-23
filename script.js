let displayValue = "";
let firstNumber = "";
let operator = "";
let secondNumber = "";
let isDecimalAdded = false;

function appendNumber(number) {
    displayValue += number;
    updateDisplay();
}

function appendOperator(op) {
    if (displayValue !== "") {
        firstNumber = displayValue;
        operator = op;
        displayValue = "";
        isDecimalAdded = false;
    }
}

function appendDecimal() {
    if (!isDecimalAdded) {
        if (displayValue === "") {
            displayValue += "0.";
        } else {
            displayValue += ".";
        }
        isDecimalAdded = true;
        updateDisplay();
    }
}

function clearDisplay() {
    displayValue = "";
    firstNumber = "";
    operator = "";
    secondNumber = "";
    isDecimalAdded = false;
    updateDisplay();
}

function backspace() {
    displayValue = displayValue.slice(0, -1);
    updateDisplay();
}

function updateDisplay() {
    const display = document.getElementById("display");
    display.value = displayValue;
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Cannot divide by zero";
    }
    return a / b;
}

function operate(op, a, b) {
    switch (op) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case 'x':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            return "Error: Invalid operator";
    }
}

function calculate() {
    if (firstNumber === "" || operator === "" || displayValue === "") {
        return;
    }

    secondNumber = displayValue;
    const result = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
    displayValue = result.toString();
    firstNumber = displayValue;
    operator = "";
    secondNumber = "";
    isDecimalAdded = displayValue.includes(".");
    updateDisplay();
}
