// function sumTwoNumbers(num1, num2) {
//     console.log(num1 + num2)
// }

// sumTwoNumbers(2, 3)

// const sumTwoNumbers = function(num1, num2) {
//     console.log(num1 + num2)
// }

// Стрелочная функция

// const sumTwoNumbers = (num1, num2) => {
//     console.log(num1 + num2)
// }

// // const [название функции] = (параметры) => {тело}

// function sumTwoNumbers (num1, num2) {
//     if (arguments.length !== 2){
//         console.log('Введите вторые данные')
//     }
//     else if (typeof num1 !== 'number' || typeof num2 !== 'number' ){
//         console.log('Введенное данные не являются числами')
//     }
//     else {
//         console.log(num1 + num2)
//     }
// }

// sumTwoNumbers(1, 2)

// Метод vs Функция 
// Метод по сути функция но встороенная в объект

// const teacher = {
//     name: 'Olzhas',
//     teach: function() {
//         console.log('Я учусь')
//     }
// }
// teacher.teach()
 
// forEach нельзя остановить цикл, нельзя создавать массив


// const numbers = [2, 5, 5, 8, 0]
// console.log(numbers)
// numbers.forEach(element => {
//     console.log(numbers)
// }); // callback - это функция которая вызывается в парамтрах другой функции

// for (const element of numbers) {
//     console.log(element)
// }

// const students = [
//     {
//         name: 'Olzhas',
//         grade: 90
//     },
//     {
//         name: 'Dossym',
//         grade: 96
//     },
//     {
//         name: 'Ortem',
//         grade: 79
//     },
//     {
//         name: 'Sasha',
//         grade: 95
//     },
// ]
// students.forEach((student) => {
//     console.log(`${student.name}, получил оценку ${student.grade}/100`)
// })


// const numbers = [2, 5, 5, 8, 0]
// const numberCopy = numbers.map((element) => {
//     if (element === 5){
//         return 'five'
//     }
//     return element 
// })


// console.log(numbers)
// console.log(numberCopy)

// Задание 4 

// function copyArr(arr) {
//     return newArr = arr.map((element) => {
//         return element
//     })
// }

// const numbers = [2, 5, 6]

// const numbersCopy = copyArr(numbers)
// console.log(numbersCopy)

// Задание 5

// arrayName = ['Dossym', 'Olzhas', 'Azamat', 'Erman']

// function copyArr(arr) {
//     return newArr = arr.map ((element) => {
//         return 'Hello ' + element
//     })
// }

// const nameCopy = copyArr(arrayName)

// console.log(nameCopy)

// Задание 2
// Измените функцию "square" так, чтобы в случае ее вызова без аргумента генерировалась консольная ошибка (console.error):
// "Функция "square" не может быть вызвана без аргумента"

// function square(a) {
//     if (typeof a === 'number'){
//         console.log(a * a)
//     }
//     else{
//         console.log('Функция "square" не может быть вызвана без аргумента')
//     }
// }
// square(10) // 100
// square()
// ДО: NaN
// ПОСЛЕ: Uncaught Error: Функция "square" не может быть вызвана без аргумента

// Задание 3
// Создать функцию "угадай число". Она принимает число от 1 до 10 (обязательно проверить, что число не больше 10 и не меньше 0). 
// Генерирует рандомное число от 1 до 10 и сравнивает с заданным числом.
// Если они совпали, то возвращает “Вы выиграли”, если нет - то “Вы не угадали, ваше число -  ...,  а выпало число ...”
// Функция создания случайного числа уже была ранее в материалах, в задаче по созданию случайного цвета.
// Написать функцию в стрелочном синтаксисе.

// const questionNumber = +prompt('Угадай число: ')
// function getrandomNumber(){
//     return Math.floor(Math.random() * 10) + 1
// }

// function numberAnswer() {
//     const randomNumber = getrandomNumber()
//     if (questionNumber === randomNumber){
//         console.log('Вы выйграли')
//     }
//     else{
//         console.log(`Вы не угадал, ваше число - ${questionNumber}, а выпало число ${randomNumber}`)
//     }
// }

// numberAnswer()

// Задание 6
// Напишите функцию, которая принимает массив объектов пользователей и возвращает новый массив, содержащий только их имена.

// let users = [{
//     name: 'Dossym',
//     age: 22
// },
// {
//     name: 'Azamat',
//     age: 22
// },
// {
//     name: 'Olzhas',
//     age: 22
// },
// {
//     name: 'Erman',
//     age: 22
// }]

// function getArrayNames(array){
//     const arrayName = []
//     for (let i = 0; i < array.length; i++){
//         arrayName.push(array[i].name)
//     }
//     return arrayName
// }

// function getArrayNames(array){
//     const newArray = array.map(element => {
//         return element.name
//     })
//     return newArray
// }

// console.log(getArrayNames(users))

// Задание 7
// Создайте функцию sumObjectValues, которая будет суммировать все значения свойств, которые являются числами. Сумму чисел необходимо вернуть из функции.
// Проверить работу функции можно на объекте:

// const objectWithNumbers = {
//   a: 10,
//   b: 20,
//   c: 'string',
//   d: 12,
// }

// function sumObjectValues(number) {
//     let sum = 0
//     for (let key in number) {
//         if (typeof number[key] === 'number'){
//             sum += number[key]
//         }
//     }
//     return sum
// }

// let result = sumObjectValues(objectWithNumbers)

// console.log(result)