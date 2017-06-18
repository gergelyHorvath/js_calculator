var display = document.querySelector('.display');
var buttons = document.querySelectorAll('.buttons span');
var operators = ['+', '-', '*', '/', '%', '.'];

function handleClick(event) {
    var input = display.innerHTML;
    var button = event.target.innerHTML;
        
    if (button==='C'){
        display.innerHTML = '';
    }
    else if (button==='.'){
        if(dotable(input) && !isLastOperator(input))  {
            display.innerHTML = input + '.';
        }
    }
    else if (button === '=') {
        if (isLastOperator(input)) {
            input = input.substring(0, input.length - 1);
        }
        display.innerHTML = eval(input);
    }
    else if (operators.indexOf(button) > -1) {
        if (!isLastOperator(input)) {
            display.innerHTML = input + button;
        }
    }
    else {
        display.innerHTML = input + button;
    }
}

function isLastOperator(expression) {
    var lastChar = expression[expression.length - 1];
    if (operators.indexOf(lastChar) > -1) {
        var result = true;
    } else {
        var result = false;
    }
    return result;
}

function dotable(expression) {
    var result = true;
    for (i = 0; i < expression.length; i++) {
        if (expression[i] === '.') {
            result = false;
        }
        else if (['+', '-', '*', '/', '%'].indexOf(expression[i]) > -1) {
            result = true;
        }
    }
    return result;
}

for(i=0; i < buttons.length; i++){
    buttons[i].addEventListener('click', handleClick);
}


