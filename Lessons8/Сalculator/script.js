document.getElementById('calculator').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const number1 = parseFloat(document.querySelector('#number1').value);
    const number2 = parseFloat(document.querySelector('#number2').value);
    const operation = document.querySelector('#operation').value;
    let result;

    if (operation === '+') {
        result = number1 + number2;
    } else if (operation === '-') {
        result = number1 - number2;
    } else if (operation === '*') {
        result = number1 * number2;
    } else if (operation === '/') {
        if (number2 !== 0) {
            result = number1 / number2;
        } else {
            result = 'Ошибка: Деление на ноль';
        }
    }

    document.getElementById('result').innerText = `Результат: ${result}`;
});
