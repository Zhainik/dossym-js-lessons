// const age = 18
// if(age >= 18) {
//     console.log('Вы совершеннолетний!')
// }
// else {
//     console.log('Вы не совершеннолетний!')
// }

// Тернарный оператор:
// age >= 18 ? console.log('Вы совершеннолетний!') : console.log('Вы не совершенолетний!')
// const result = age >= 18 ? 'Вы совершеннолений!' : 'Вы не совершенолетний!'
// console.log(result)
// 

// Задание 2
// let country = 'Sweden'
// let access
// if (country == 'Sweden'){
//     access = true;
// } else {
//     access = false
// }

// let access = country == 'Sweden' ? true : false

// DRY - Don't Repeat YourseIt
// console.log('Привет Досым!')
// onsole.log('Привет Досым!')
// onsole.log('Привет Досым!')
// onsole.log('Привет Досым!')
// onsole.log('Привет Досым!')
// onsole.log('Привет Досым!')

// LOOP (Цикл)
// FOR LOOP (Цикл FOR)
// for(let i = 0; i < 10; i = i +1){
//     console.log('i: ', i)
//     console.log('Привет Dossym!')
//     console.log('Конец итерации')
// }

// let i = 0 => создание переменой
// i < 10 => условия работы цикла
// i = i + 1 => увелечение i++

// let num1 = 10
// for (let i = 0; i < 10; i = 10 + 1) {
//     num1++
//     console.log(num1)
// }

// Задание 3
// for(let i = 0; i < 10; i = i + 2) {
//     const numPlayer = +prompt('Введите ваше число: ')
//     console.log(numPlayer)
//     numPlayer === 10 ? console.log('Равна 10') : console.log('Не равна 10')
//     // let result = numPlayer === 10 ? 'Равна 10' : 'Не равна 10'
//     // console.log('result')
//     // console.log('numPlayer === 10 ? 'Равна 10' : 'Не равна 10'')
// }

// WHILLE LOOP (Цикл while)
// for(let i = 1; 1 <= 10; i++){
//     console.log('i: ', i)
// } // i++ работает всегда в конце

// let i = 1
// while(i <= 10) { // while(true)
//     console.log('i: ', i)
//     i++
// }

// while (true){ // бесконечный цикл

// }

// let i = 0
// while(i < 10) {
//     const numPlayer = +prompt('Введите ваше число: ')
//     console.log(numPlayer)
//     numPlayer === 10 ? console.log('Равна 10') : console.log('Не равна 10')
//     i = i + 2 
// }

// let i = 0
// while (i < 3){
//     alert(`number ${i}!`);
//     i++
// }

// FUNCTIONS (Функция)
// let num1 = 5
// execute(num1)

// let num2 = 2
// execute(num2)

// function execute(num) {
//     num = num**2 * 2 - 3
//     console.log(num)
// }

// Создадим фунцкию которая будет приветствовать человека по имени
// const personName = 'Dossym'
// alert(`Привет, ${personName} !`)

//  function sayHello(name){ // () => параметры или аргументы
//      alert(`Привет, ${name} !`)
//  }
// sayHello('Dossym')

// function sayHello(name, surname, age) {
//     alert(`Привет, ${surname} ${name}! Тебе ${age}`)
// }

// const personName = prompt ('Как тебя зовут?');
// const personSurname = prompt('Скажи свою фамилию:')
// const personAge = 22;
// sayHello(personName, personSurname, personAge)

// Создать функцию которая будет принимать числло и степень и возвращать число в степень
// function calculate(num, degree) { // она возвращает
//     return num ** degree
// }

// function calculate(num, degree) { // она не возвращает
//     console.log(num ** degree)
// }

// const result = calculate(10, 4)
// console.log(result)

// Задание 10

// function calcPrice(rentalDay){
//     if (rentalDay <= 2) {
//         console.log(rentalDay * 40)
//     }
//     else if (rentalDay <= 6) {
//         console.log(rentalDay * 40 - 20)
//     }
//     else if (rentalDay >= 7) {
//         console.log(rentalDay * 40 - 50)
//     }    
// }

// Задание 4 
function squareOfNumbers(num){
    if (!isNaN(num) && num > 0) {
        for (i = 0; i < num && i < 100; i++) {
            console.log(i ** 2);
        }
    } else {
        console.log('Вы ввели некорректное количество чисел');
    }
}        
let questionOfNumbers = +prompt('Задайте число ')

squareOfNumbers(questionOfNumbers)

// Задание 5 
// function number(num) {
//     for (num = 0; num <= 100; num++){
//         if (num % 5 === 0 && num % 3 === 0){
//             console.log(`${num} FizzBuzz`)
//         }
//         else if (num % 3 === 0) {
//             console.log(`${num} Fizz`)
//         }
//         else if (num % 5 === 0 ) {
//             console.log(`${num} Buzz`)
//         }
//     }
// }
// number(1)

// Задание 7
// function printSquares(min, max) {
//     for (let i = min; i < max; i++) {
//         console.log(i ** 2);
//     }
// }
// let questionOfNumbersNim =+prompt('Напишите минимум: ')
// let questionOfNumbersMax =+prompt('Напишите максимум: ')
// printSquares(questionOfNumbersNim, questionOfNumbersMax);

// Задание 8 
// function getRandomInteger(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
//     }
// function getRandomRgb(){
//     let red = getRandomInteger(0, 255)
//     let blue = getRandomInteger(0, 255)
//     let yellow = getRandomInteger(0, 255)
//     let rgbString = `${red}, ${blue}, ${yellow}`
//     return rgbString
// }

// let randomColor = getRandomRgb()

// console.log(randomColor)

// 9 Задание

// function wholeNumber (n) {
//    for (i = 1; i <= n; i +=0.5) {
//     if (Number.isInteger(i)) {
//         console.log(`${i} integer`);
//     } else {
//         console.log(`${i} decimal`);
//     }
//    }
// }
// wholeNumber(3)

