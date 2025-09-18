let currentInput = "";

function valueNumber(num) {
    currentInput += num;
    updateDisplay();
}

function valueOperator(op) {
    if (currentInput === "") return;
    const lastChar = currentInput.slice(-1);
    if ("+-*/%".includes(lastChar)) return; 
    currentInput += op;
    updateDisplay();
}

function valueDot() {
    const parts = currentInput.split(/[\+\-\*\/]/);
    const lastPart = parts[parts.length - 1];
    if (!lastPart.includes(".")) {
        currentInput += ".";
        updateDisplay();
    }
}

function clearDisplay() {
    currentInput = "";
    updateDisplay();
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

function updateDisplay() {
    document.getElementById("display").value = currentInput || "0";
}

function calculate() {
    try {
        const result = eval(currentInput.replace(/x/g, '*'));
        currentInput = result.toString();
        updateDisplay();
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}

function calculateSquare() {
    if (currentInput === "") return;
    try {
        const result = eval(currentInput);
        currentInput = (result * result).toString();
        updateDisplay();
    } catch {
        document.getElementById("display").value = "Error";
    }
}

function calculateSqrt() {
    if (currentInput === "") return;
    try {
        const result = Math.sqrt(eval(currentInput));
        currentInput = result.toString();
        updateDisplay();
    } catch {
        document.getElementById("display").value = "Error";
    }
}