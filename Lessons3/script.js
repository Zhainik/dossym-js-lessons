// Объекты

// const firstName = 'Dossym'
// const lastName = 'Tulegenov'
// const age = 22
// const isStudent = true
// const country = 'Kazahstan'

// const firstName1 = 'Olzhas'
// const lastName1 = 'Otep'
// const age1 = 20
// const isStudent1 = false
// const country1 = 'Kazahstan'

// const person1 = { // key: value
//     firstName:'Dossym',
//     lastName:'Tulegenov',
//     age: 22,
//     isStudent: true,
//     country: 'Kazahstan',
//     isMale: true
// }

// const person2 = {
//     firstName: 'Olzhas',
//     lastName: 'Otep',
//     age: 20,
//     isStudent: false,
//     country: 'Kazahstan'
// }

// // console.log(person1.firstName)
// // console.log(person1['firstName']); // key это строка
// // console.log(person1.isMale)

// person2.isMale = true // Объект работает по ссылке

// const car1 = {
//     model: 'Toyota'
// }

// const car2 = {
//     model: 'Toyota'
// }

// console.log(car1 === car2)

// const car1 = {
//     model: 'Toyota'
// }

// const car2 = car1
// car2.model = 'BMW'

// console.log(car1);
// console.log(car2);

// JSON - javascript object notation

// const car1 = {
//     model: 'Toyota'
// }

// const jsonString = JSON.stringify(car1) // объект -> строка
// const car2 = JSON.parse(jsonString) // строка -> объект
// car2.model = 'BMW'

// console.log(car1)
// console.log(car2)

// person2.age = 22 // Добавление
// delete person2.age // Удаление
// console.log(person2)

// FOR IN

// const person1 = { // key: value
//     firstName:'Dossym',
//     lastName:'Tulegenov',
//     age: 22,
//     isStudent: true,
//     country: 'Kazahstan',
//     isMale: true
// }

// for (const key in person1) { // Для одного объекта работает
//     console.log(key)
// }

// for (const key in person1) {
//     console.log(person1[key]) // person1['firstName']
// }

// Задание 2
// const engineers = {
//     Den: 10000,
//     Matt: 5000,
//     Steve: 2000
// }
// for (const key in engineers) {
//     console.log(`Заработная плата ${key} составляет ${engineers[key]} рублей`) 
// }

// // ARRAY (Массив) - список
// const numbers = [1, 2, 3,]
// console.log(numbers[2]);

// const arr1 = [5, 'asdfgh', true, [1, 2, 3]]
// console.log(arr1);

// const numbers = [12, 4, 6, 94, 256]


// // for (let i = 0; i < numbers.length; i++) {
// //     console.log(numbers[i]); // number[0]
// }

// // FOR OFF
// for( const elemnt of numbers) {
//     console.log(elemnt)
// }

// const numbers = [1, 2, 3, 4, 5]
// for (let i = 1; i < numbers.length; i +=2){
//     console.log(numbers[i])
// }

// Задание 3
// let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]
// // for (let i = 0; i < numbers.length; i++) {
// //     console.log(`Индексу ${i} соответсвует числу ${numbers[i]}`)
// // }
// for (const number of numbers) {
//     console.log(numbers.indexOf(number))
// }

// 1 Задание 
// 
// const room = {
//     height: 1,
//     tv: 'samsung',
//     big: true,
// }
// // console.log(room)
// // console.log(room.big)
// // console.log(room.tv.length)
// // console.log(room.tv.length - 1)

// for (const key in room) {
//     if(key == 'big'){
//         console.log(key)
//     }
// }


// let questions = [
//     {
//         question: "What's the currency of the USA?",
//         choices: ["US dollar", "Ruble", "Horses", "Gold"],
//         corAnswer: 0
//     }, 
//     {
//         question: "Where was the American Declaration of Independence signed?",
//         choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
//         corAnswer: 0
//     }
// ];

// // 1 

// // for (const question of questions) {
// //     console.log(question)   
// // }

// // 2
// for (const question of questions) {
//     question.usersAnswer = null
// }

// console.log(questions)

let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]
// // 1)
// // for (const iterator of numbers) {
// //     console.log(iterator)
// // }
// // for (let i = 0; i < numbers.length; i++){
// //     console.log(numbers[i])
// // }
// // 2) 
// // let sum = 0
// // for (const number of numbers) {
// //     sum = sum + number // sum = 0 +
// // }
// // console.log(sum)
// // 3)
// let sum = 0
// for (const number of numbers) {
//     if (number % 2 === 0){
//         sum += number //sum = 156 + 68, sum = sum + number
//     }
// }
// console.log(sum)

// 4)
// let max = 0
// for (const number of numbers) {
//     if (max < number) {
//         max = number
//     }
// }

// 5)
// let max = 0
// let maxIndex = []
// for (let i = 0; i < numbers.length; i++) {
//     if (max < numbers[i]) {
//         max = numbers[i];
//     }
// }

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] === max) {
//         maxIndex.push(i)
//     }
// }

// console.log(maxIndex)


