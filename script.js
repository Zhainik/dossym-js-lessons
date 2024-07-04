// Переменнае это какое-то пространство где хранится информация, это декларирование
// Декларирование создание через const les
// Интерпритуриемый сверху вниз читается

// const { text } = require("express")

// Движок

// Initialising - создаю переменную и сразу присваеваем это только в const обязательно
// const fistName = 'Dossym' // camelCase
// console.log(fistName)

// console.log(num1)
// var num1 = 10
// console.log(num1)

// Примитивные типы данных:
// STRING - строка
// const carName = 'BMW' // "BMW"., `BMW`

// // Number - цифры
// const num1 = 5
// const num2 = 0.5
// const num3 = 0.333333

// // BOOLEWAN - булевое (истена или ложь) (true of false)
// const isDossymLearning = true
// const isDossymLearningBackend = false
// const hasDossymMac = false

// NULL - нуля
// const nul = null
// constole.log(nul)

// INFINITY - бесконечность
// const num1 = Infinity
// console.log(num1)

// SYMBOL - символ
// console.log(Symbol'Olzhas' === Symbol'Olzhas')

// Nonprimitive data types
//OBJECT совокупность нескольких переменных в одном объекте
// const fistName = 'Dossym'
// const lastName = 'Tulegenov'
// const age = 20

// const personal = {
//     fistName: 'Dossym',
//     lastName: 'Tulegenov',
//     age: 20
// }

// console.log(personal)

// Operators
// Assigment operator (присваивания) =
// const name = 'Dossym

// Ariphmetic operators
// const result1 = 10/5
// console.log(result1)

// Reminder operators (модуль) %
// const result2 = 10 % 5
// console.log(result2)

// Сокращение оператора
// let num1 = 5
// let num2 = 10
// num1 = num1 + num2 // num1 = 5+10
// num1 +=num2 // num1 = 5+10

// let num1 = 5
// num1 = 5 + 1
// num1++ // ++ прибавляет +1
// console.log(num1)

// Степень
// console.log(5 ** 3 ) // ** это степень

// Comparison operators (сравнение -> true/false)
// const result3 ='10' === 10
// console.log(result3) //false

// const result4 = 10 >= 10 // больше или равно
// console.log(result3) //true

// const result5 = 10 !== 10
// console.log(result5) // ! - не

// String concatenation (Конкантентация строк)
// console.log('Dossym' + "Tulegenov")
// console.log('Dossym' + " Tulegenov")
// console.log('Dossym ' + "Tulegenov")
// console.log('Dossym' + " " + "Tulegenov")

// const fistName = 'Tulegenov'
// const lastName = 'Dossym'
// console.log(fistName + " " + lastName)

// // console.log('10' + 10)
// console.log(1012 - 10)
// console.log('10' - '10')

// const text1 = 'Мое имя - '
// const name = 'Dossym'
// const text3 = ', и я изучаю фронтенд'

// console.log(text1 + name + text3)

//console.log(`Мое имя - ${name}, и изучаю фортенд`)

// LESSONS 2 27.06.24

// ALERT
// alert(`ошибка сервера`)  // На движке V8 на браузерах

//PROMPT
// const age = prompt(`Сколько тебе лет?`) //Все что пишется возвращается как строка
// console.log(age)
// console.log(+age) // + тут конвертирует в строку

// CONFIRM
// const answer = confirm('Согласны ли вы с условием пользователся?') // Блокирует процесс выполнения кода
// console.log(answer)

// TRUE of FALSE
// 5 > 5 => false
// 6 <= 6 => true

// IF ELSE STATEMENT
// const statement = 5 === 5
// if (statement) {// Условия if(ture)
//     console.log('Ответ верный!')
// }
// else {
//     console.log('Ответ верный!')
// }

// Задача
// Создать код, который будет спрашивать у пользователя 2 цифры. Если 2 цифры одинаковые в alert-у выводить "числа равны",
// в остальном случае выводить "числа не равны"

// Решение:
// const questionNumberOne = prompt('Введите первую цифру')
// const questionNumberTwo = prompt('Введите вторую цифру')

// if (isNaN(+questionNumberOne)) {
//     alert('Ваш первый ответ не числ! Пожалуйста попробуйте еще раз')
// }
// else if (isNaN(+questionNumberTwo)) {
//     alert('Ваш второй ответ не числ! Пожалуйста попробуйте еще раз')
// }
// else if (+questionNumberOne === +questionNumberTwo) {
//     alert("Числа ровны!")
// }
// else {
//     alert("Числа не равны")
// }


// const num1 = '18'
// console.log(+num1)

// ОПЕРАТОРЫ И/ИЛИ
// // && - И
// // || - ИЛИ

// if(true || false) { // if(true)
//     console.log('true')
// }

// if(false || true) { // if(true)
//     console.log('true')
// }

// if(true || true) { // if(ture)
//     console.log('true')
// }

// if(false || false) { // if(false)
//     console.log('false')
// }

// // И
// // if(ture && false) { // if(false)
// //     console.log(true&&false)
// // }
// // if(false && true) { // if(false)
// //     console.log('false && true')
// // }

// if(5 > 10 || 20 > 5) { // if(false || true)
//     console.log('5 > 10 || 20 > 5')
// }
// if(10 !== 5 )


// Можно ли пить алкоголь
// const age = +prompt('Введите ваш возраст числами:')
// if (isNaN(+age)) {
//     alert('Введите возраст числами! Пожалуйста попробуйте еще раз')
// }
// else if (age >= 21) {
//     alert('Вам можно пить алкоголь. Поздравляем!!!')
// }
// else {
//     alert('Увы, вам нельзя пить алкоголь')
// }

// Задача:
// Придумай код который проверяет человека на то что он подросток. 13-19
// const age = +prompt('Введите ваш возраст числами:')
// if (isNaN(+age)) {
//     alert('Вы подросток? Введите ваш возраст')
// }
// else if (age <= 12) {
//     alert('Вы еще не подросток')
// }
// else if (age >= 20) {
//     alert('Вы уже старше подростка. Поздравляем!!!')
// }
// else if (age >= 13 && age <= 19) {
//     alert('Поздравляю вы подросток!')
// }

// Как прошще
// const age = +prompt('Введите ваш возраст числами:')
// if (isNaN(+age)) {
//     alert('Вы подросток? Введите ваш возраст')
// }
// else if (age >= 13 && age <= 19) { // интервал (от чего до чего-то) -> &&
//     alert('Поздравляю вы подросток!')
// }
// else {
//     alert('Увы, вы не подросток!')
// }

//Задача 1
// const name = prompt('Введите ваше имя:')
// alert(`Привет, ${name}!`)

//Задача 2
// const number = prompt('Ввеите ваше число: ')
// const numberDegree = prompt('В какую степень возвести ваше число?')
// console.log(number ** numberDegree)

// Задача 4
// let textOne = 'my text'

// if (textOne === 'some text') {
//     textOne = 'another text'
// }
// else {
//     textOne = 'some text'
// }
// alert(textOne)

// Задача 5
// let number = 1
// if (number === 0) {
//     number = 1
// }
// else if (number < 0) {
//     number = 'less then zero'
// }
// else {
//     number *= 10 // number = number * 10
// }
// console.log(number)

// Задача 6
// const number = +prompt('Введите ваше число:')
// if (isNaN(number)) {
//     console.log('Введите цифрами!')
// }
// else if (number < 5) {
//     console.log('Ваше число 0')
// }
// else {
//     console.log('Ваше число 1')
// }

// Задача 7
// const numberOne = +prompt('Введите первое число: ')
// const numberTwo = +prompt('Введите второе число: ')
// if (isNaN(numberOne && numberTwo1)) {
//     console.log('Введите цифрами!')
// }
// else if (numberOne <= numberTwo) {
//     1
//     console.log(`Ваше максимальное число: ${numberTwo} `)
// }
// else if (numberOne >= numberTwo) {
//     console.log(`Ваше максимальное число: ${numberOne}`)
// }

// Задача 8
// const num1 = +prompt('Введите первое число: ')
// const num2 = +prompt('Введите второе число: ')
// if (num1 % num2 === 0) {
//     console.log(`${num1} кратно ${num2}`)
// }
// else {
//     console.log(`${num1} не кратно ${num2}`)
// }

// Задача 9
// const question = +prompt('Введите Ваш средний бал: ')
// if (question <= 4) {
//     console.log('Двоечник, иди учись!')
// }
// else if (question <= 8) {
//     console.log('Неплохо, но давай еще поднажмем!')
// }
// else if (question >= 9) {
//     console.log('Ого, да ты настоящий отличник!')
// }

// Задача 10
// const questionExam = +prompt('Напишите свой балл за экзамен (от 0 до 100): ')
// const questionProjects = +prompt('Напишите количество выполненых проектов (от 0 и больше)')
// if (questionExam > 90 || questionProjects > 10) {
//     console.log('Ваш балл: 100')
// }
// else if (questionExam > 75 || questionProjects > 5) {
//     console.log('Ваш балл: 90')
// }
// else if (questionExam > 50 || questionProjects > 2) {
//     console.log('Ваш балл: 75')
// }
// else {
//     console.log('Ваш балл: 0')
// }

// Задача 11
// const rentalDay = +prompt('На какой количество дней хотите арендовать машину? ')
// rentalOneDay = 40
// discountThreeDay = 20
// discountSevenDay = 50
// if (rentalDay <= 2) {
//     console.log(rentalDay * rentalOneDay)
// }
// else if (rentalDay <= 65) {
//     console.log(rentalDay * rentalOneDay - discountThreeDay)
// }
// else if (rentalDay >= 7) {
//     console.log(rentalDay * rentalOneDay - discountSevenDay)
// }

































