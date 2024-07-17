document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    let currentInput = '';
    let operator = '';
    let firstOperand = '';
    let secondOperand = '';
    let result = '';
    let clearDisplay = false;

    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const action = button.getAttribute('data-action');

            if (action >= '0' && action <= '9') {
                if (clearDisplay) {
                    currentInput = action;
                    clearDisplay = false;
                } else {
                    currentInput += action;
                }
                display.innerText = currentInput;
            } else if (action === 'decimal') {
                if (!currentInput.includes('.')) {
                    currentInput += '.';
                }
                display.innerText = currentInput;
            } else if (action === 'clear') {
                currentInput = '';
                operator = '';
                firstOperand = '';
                secondOperand = '';
                display.innerText = '0';
            } else if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide' || action === 'modulo') {
                if (firstOperand && operator) {
                    secondOperand = currentInput;
                    result = performCalculation(firstOperand, secondOperand, operator);
                    display.innerText = result;
                    firstOperand = result;
                } else {
                    firstOperand = currentInput;
                }
                operator = action;
                currentInput = '';
                clearDisplay = true;
            } else if (action === 'square') {
                result = currentInput * currentInput;
                display.innerText = result;
                currentInput = result;
            } else if (action === 'equals') {
                if (firstOperand && operator) {
                    secondOperand = currentInput;
                    result = performCalculation(firstOperand, secondOperand, operator);
                    display.innerText = result;
                    firstOperand = '';
                    operator = '';
                    currentInput = result;
                }
            }
        });
    });

    function performCalculation(first, second, operator) {
        first = parseFloat(first);
        second = parseFloat(second);
        switch (operator) {
            case 'add':
                return first + second;
            case 'subtract':
                return first - second;
            case 'multiply':
                return first * second;
            case 'divide':
                return first / second;
            case 'modulo':
                return first % second;
        }
    }
});