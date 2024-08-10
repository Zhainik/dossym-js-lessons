// Задание 6 
// let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]

// 1) Вывести в консоль все элементы массива, используя 2 разных цикла: 
// for-of и for со счетчиком

// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i])
// }

// for (number of numbers) {
//     console.log(number)
// }

// 2) Посчитать и вывести в консоль сумму элементов в массиве.

// sum = 0

// for (let i = 0; i < numbers.length; i++) {
//     sum = sum + numbers[i]
// }
// console.log(sum)

// 3) Посчитать и вывести в консоль сумму только четных чисел в массиве.

// sum = 0

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//         sum = sum + numbers[i]
//     }
// }

// console.log(sum)

// 4) Найти и вывести в консоль максимальное число массива.

// max = 0; 

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > max) {
//         max = numbers[i]
//     }  
// }
// console.log(max)

// for (number of numbers){
//     if (number > max){
//         max = number
//     }
// }
// console.log(max)

// 5) Определить и вывести в консоль индекс максимального числа массива 
// (или индексы, если число встречается более одного раза). 
// Само максимальное число мы уже нашли в прошлой части задачи, 
// повторно его искать не нужно.

// max = 0
// indexMax = []

// for (let i = 0; i < numbers.length; i++){
//     if (numbers[i] > max){
//         max = numbers[i]
//     }
// }

// for (let i = 0; i < numbers.length; i++){
//     if (numbers[i] === max){
//         indexMax.push(i)
//     }
// }
// console.log(indexMax)

// Задание 7

// Определить массив let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0]
// Создать новый массив из элементов массива arr, но в новом должны 
// содержаться только положительные элементы. 
// Подсказка. Изначально нужно объявить пустой массив-хранилище 
// (например, let newArr = []). Затем пройтись в цикле по массиву arr,
//  и в каждой итерации, если элемент положительный, добавлять его в массив newArr.

// let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0]

// let newArr = []

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0){
//         newArr.push(arr[i])
//     }
// }
// console.log(newArr)

// Задание 8

// Определить массив, например let nums = [5, 4, 3, 8, 0] и переменную
// let limit = 5;
// Создать новый пустой массив. В цикле наполнить его элементами nums, 
// но в новом должны содержаться элементы, больше и равные (>=) значению переменной limit.

// let arr = [];
// let limit = 5;
// let nums = [5, 4, 3, 8, 0]

// for (const num of nums) {
//     if (num >= limit) {
//         arr.push(num)
//     }
// }

// console.log(arr)

// Задание 9
 
// Существует массив объектов, описывающих пользователей, например:
// const users = [{name: 'Vasya', age: 23}, {name: 'Olya', age: 12}, 
// {name: 'Anna', age: 22}, {name: 'Alex', age: 18}, {name: 'Valery', age: 8}]

// Пройти в цикле по массиву и вывести имена всех пользователей, возраст которых больше 15.

// const users = [{name: 'Vasya', age: 23}, {name: 'Olya', age: 12},  {name: 'Anna', age: 22}, {name: 'Alex', age: 18}, {name: 'Valery', age: 8}]

// for (let i = 0; i < users.length; i++) {
//     if (users[i].age > 15) {
//         console.log(users[i].name)
//     }
// }

// Задание 10

// Задать массив слов. Например:

// let vegetables = ["морковь", "баклажан", "репа", "топинамбур"];

// 1) Создать новый массив. С помощью цикла наполнить его объектами с ключами word
// (само слово), length (длина слова):[{word:'морковь', length: 7}, {word:'баклажан', length: 8} и т.п.]
// Вывести этот массив в консоль.
// Подсказка: длину строки можно определить с помощью метода .length. Например, для 
// переменной let string = 'text' это будет string.length (результат - 4, т.к. слово text состоит из 4 символов)

// let array = []

// for (let i = 0; i < vegetables.length; i++) {
//     array.push({
//         word: vegetables[i],
//         length: vegetables[i].length
//     })
// }
// console.log(array)


// 2) Пройтись по полученному массиву объектов и вывести в консоль строки вида "слово - длина_слова", 
// например "картошка - 8"

// for ( i = 0; i < array.length; i++) {
//     console.log(array[i].word + `-` array[i].length)
// }

console.log('hello')



