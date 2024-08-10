// Методы строки:

// function ucFirst(str){
//     return str.charAt(0).toUpperCase() + str.slice(1)
// }

//  const string = 'dossym'
// console.log(string.charAt(2))
// console.log(string.toUpperCase());
// console.log(string.toLowerCase());   

// const string1 = 'Hello'
// console.log(string.concat(string1))

// const string2 = '           Dossym'
// console.log(string2.trim())

// const string3 = 'Tulegenov Dossym'
// console.log(string3.slice(5, 11))

// console.log(ucFirst(names))

// Остальные методы массивов

// const string4 = 'Olzhas Dossym Denis Elena'
// console.log(string4.split(' '))

// const array = ['Olzhas Dossym Denis Elena']
// console.log(array.join(', '))
// console.log(array.reverse())
// console.log(array.includes('Olzhas')) // содержит ли?

// BOM и DOM
// console.log(window.navigator);
// console.log(window.navigator);
// console.log(window.history);
// console.log(window.screen);

// DOM - Document Object Model - это дерево тегов 

// Любой тег - DOM элемент 
// console.log(document)

// children
// console.log(document.children); // позволяет вытащить дочерный элемент

// Пойск элементов на странице

// getElementById()
// console.log(document.getElementById('help'))

// querySelector()
// console.log(document.querySelector('#help'));

// const titleElement = document.querySelector('.title')
// titleElement.innerText = 'Dossym'
// titleElement.innerHTML = '<i>Dossym<i>'

// titleElement.style.color = 'red'

// Задание 2

// const listElement = document.querySelector('#list')

// const liElements = listElement.children

// for (let liElement of liElements) {
//     console.log(liElement.innerText)
// }

// // 2.2. Поменять имена в списке выше на числа от 0 по порядку (0, 1, 2 и т.д.)

// for (let i = 0; i < liElements.length; i++) {
//     liElements[i].innerText = i 
// }

// Задание 9
// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'badWord' или 'XXX', а иначе false.
// Функция должна быть нечувствительна к регистру.

// function checkSpam(str) {
//     (console.log(str.toLowerCase().includes('badWord') || str.toLowerCase().includes('XXX')))
// }
// const checkSay = prompt('Введите слово: ')
// checkSpam(checkSay)

// Задание 10

// Написать функцию, которой на вход подается строка, на выход она дает 
// символы наоборот (разворачивает строку). Пример: «привет, Женя» -> «янеЖ ,тевирп»
// Обратите внимание: метод reverse существует только у массивов.

// function splitString(str){
//     return newStr = str.split('').reverse().join('')
// }

// function splitString(str){
//     let newStr = '' // newStr = 'p'
//     for (let i = str.length - 1; i >= 0; i--){
//         newStr = newStr +str[i]; // newStr = 'p' + 't'
//     }
//     return newStr
// }

// const str = 'Dossym'
// console.log(splitString(str))

// Задание 11

// Массив содержит строки с информацией о железнодорожных станциях на севере Англии. 
// Строки представляют собой трёхбуквенный код станции, затем некоторые машиночитаемые данные, 
// за которыми следует точка с запятой, а затем название станции, пригодное для чтения человеком. 

// let stations = [

// 'MAN675847583748sjt567654;Manchester Piccadilly',

// 'GNF576746573fhdg4737dh4;Greenfield',

// 'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',

// 'SYB4f65hf75f736463;Stalybridge',

// 'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'

// ];

// Необходимо извлечь код станции и имя и поместить их в строку со следующей структурой:

// MAN: Manchester Piccadilly

// Вывести эти строки в консоль

// ПОДСКАЗКА:
// 1. Извлеките трёхбуквенный код станции и сохраните его в новой переменной.
// 2. Найдите номер символьного номера точки с запятой.
// 3. Извлеките название для чтения человеком, используя номер индекса точки с запятой 
// в качестве контрольной точки и сохраните его в новой переменной.
// 4. Объедините две новые переменные и строк

// function processStation(station) {
//     const code = station.slice(0, 3);

//     const semicolonIndex = station.indexOf(';');

//     const name = station.slice(semicolonIndex + 1);

//     return `${code}: ${name}`;
// }

// stations.forEach(station => {
//     console.log(processStation(station));
// })

// Задание 12
// Напишите функцию unique(arr), которая принимает массив, а возвращает новый массив,
// содержащий только уникальные элементы arr.

// Пример:

// const strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];
// console.log(unique(strings) ); // должен вывести "кришна, харе, :-O"

// function unique(arr){
//     let uniqueArray = []
//     arr.forEach(item => {
//         if (!uniqueArray.includes(item)){
//             uniqueArray.push(item)
//         }
//     })
    
//     return uniqueArray
// }

// console.log(unique())

// ПОДСКАЗКА
// - создать новый массив
// - обойти исходный массив, если элемент отсутствует в новом - добавлять его в новый. 
// Таким образом в новый добавятся только уникальные.


// Задание 13

// Женя и Юля изучают кошек. Каждая из них узнала у 10 владельцев кошек о возрасте их кошки и 
// сохранила данные в массиве (по одному массиву для каждой девочки). На данный момент им просто
// интересно узнать, является ли кошка взрослой или котёнком.
// Кошка считается взрослой, если ей не менее 2 лет, и котёнком, если ей менее 2 лет.
// Создайте функцию verifyCats, которая принимает 2 массива возрастов кошек (catsJane и catsJulia) 
// и выполняет следующие действия:
// 1. Женя выяснила, что владельцы первой и последней кошки на самом деле имеют собак, а не кошек! 
// Поэтому удалите возраст собак из Жениного массива.
// 2. Создайте общий массив с данными Жени (исправленными) и Юли.
// 3. Для каждой кошки этого общего массива выведите в консоль текст:
// - если кошка взрослая -  Кошка № 1 взрослая, ей 6 лет
// - если котёнок - Кошка № 2 ещё котёнок
// 4. Вызовите функцию для двух наборов тестовых данных.
// Тестовые данные:
// 1.  Данные Жени [4, 5, 3, 11, 6, 2, 4, 1, 5, 9]
// Данные Юли [2, 4, 5, 1, 13, 2, 15, 8, 3, 7]
// 2.  Данные Жени [3, 5, 9, 14, 1, 2, 6, 8, 3, 10]
// Данные Юли [8, 2, 10, 1, 2, 5, 6, 3, 1, 4]

// В задании необходимо использовать методы массивов: forEach, slice, concat

// let catsJane1 = [4, 5, 3, 11, 6, 2, 4, 1, 5, 9]
// let catsJulia1 = [2, 4, 5, 1, 13, 2, 15, 8, 3, 7]

// let catsJane2 = [3, 5, 9, 14, 1, 2, 6, 8, 3, 10]
// let catsJulia2 = [8, 2, 10, 1, 2, 5, 6, 3, 1, 4]

// function veriCats(catsJane, catsJulia) {
//     let correctedCatsJane = catsJane.slice(1, -1)
//     let allCats = correctedCatsJane.concat(catsJulia)
//     allCats.forEach((age, index) => {
//         if(age >=2) {
//             console.log(`Кошка № ${index + 1} взрослая, ей ${age} лет`)
//         } else {
//             console.log(`Кошка № ${index + 1} еще котенок`)
//         }
//     }); 
// }

// veriCats(catsJane1, catsJulia1)

// veriCats(catsJane2, catsJulia2)

// Задание 14

// Решить 4 задание из прошлой темы, используя метод filter

// Определить массив, например let arr = [5, 4, 3, 8, 0];
// Создать функцию filterFor(arr, a). Функция должна вернуть новый массив 
// из элементов arr, но в нем должны содержаться элементы, которые больше 
// или равны (>=) значения переменной a.
// Например, запуск функции filterFor(arr, 5) дает результат [5,8]
// запуск функции filterFor(arr, 10) дает результат []
// запуск функции filterFor(arr, 3.11) дает результат [4,5,8

// let arr = [5, 4, 3, 8, 0];

// function filterFor(arr, a){
//     return arr.filter(element => element >= a);
// }

// console.log(filterFor(arr, 5));   // [5, 8]
// console.log(filterFor(arr, 10));  // []
// console.log(filterFor(arr, 3.11)); // [4, 5, 8]

// Задание 15

// Описать функцию, которая принимает массив строк и возвращает массив, содержащий
// только строки более 3-х символов.
// Проверить работу функции на примере:  ['yes', 'hello', 'no', 'easycode', 'what'].

// function filterString(string) {
//     return string.filter(str => str.length > 3);
// }

// const exampleArray = ['yes', 'hello', 'no', 'easycode', 'what'];
// const filteredArray = filterString(exampleArray);

// console.log(filteredArray);
 
// Массивы и объекты надо еще поделать

// Remove

// const titleTag = document.querySelector('#title')
// console.log(titleTag)

// titleTag.remove()

// const containerTag = document.querySelector('#container')
// console.log(containerTag);
// const newChilds = containerTag.removeChild(containerTag.children[0])
// console.log(newChilds)

// const forRemoveTag = document.querySelectorAll('.forRemove')
// for (let i = 0; i < forRemoveTag.length; i++) {
//     forRemoveTag[i].remove();
// }

// Создание createElement

// const newH2Tag = document.createElement('h2') // 1 - создать тэг
// newH2Tag.innerText = 'Dossym' // 2 - изменить тег

// const containerTag = document.querySelector('#container') // 3 - вытащить любой тэг (контейнер)
// containerTag.appendChild(newH2Tag) // 4 - положить новый тэг в какой то другой тэг (контейнер)

// Создать 4 тега <a>  и дай им текст, ссылку

// const containerTagA = document.querySelector('#container')

// const tags = []

// for (let i = 0; i < 4; i++) {
//     const newAtag = document.createElement('a')
//     newAtag.innerText = ' Olzhas'
//     newAtag.href = '#'
//     tags.push(newAtag)
// }
// console.log(tags)

// containerTagA.append(...tags) // [a, a, a, a] => a, a, a, a

// Задание 4

// const containerTagP = document.querySelector('#container');
// const newPTag = document.createElement('p')
// newPTag.innerText = 'Hello World!'
// newPTag.style.fontSize = '36px'
// newPTag.style.fontWeight = '400'
// containerTagP.appendChild(newPTag)

// Задание 5 

// const tag1 = createTag('p','red','dossym')
// const containerTagP = document.querySelector('#container');
// containerTagP.appendChild(tag1)

// function createTag(nameTags,nameColor,text){
//     const newTag = document.createElement(nameTags)
//     newTag.innerText = text
//     newTag.style.color = nameColor
//     containerTag.appendChild(newTag)
//     return newTag
// }

// console.log(createTag('p','red','dossym'))

// Задание 6

// const containerTag = document.querySelector('#container')
// const newSelectTag = document.createElement('select')
// const startYear = 1960
// const endYear = 2020

// for (let year = startYear; year <= endYear; year++) {
//     const option = document.createElement('option')
//     option.innerText = year
//     newSelectTag.appendChild(option)
// }

// containerTag.appendChild(newSelectTag)

// Задание 7 

// const containerTag = document.querySelector('#container')

// const clients = [
//     {name: "Женя", order: true}, 
//     {name: "Кристина", order: true},
//     {name: "Павел", order: false},
//     {name: "Виолетта", order: false},
//     {name: "Костя", order: true}
// ]

// const newUlTag = document.createElement('ul')

// const liTags = clients.map( client => {
//     const newLiTag = document.createElement('li')
//     newLiTag.innerText = `Клиент ${client.name} ${client.order ? 'Отменил' : 'Оплатил'} заказ}`
//     return newLiTag
// }) 
 
// console.log(liTags)

// newUlTag.append(...liTags)
// containerTag.appendChild(newUlTag)

// Проект кнопка подписаться

// const subscribeBtn = document.querySelector('#subscribeBtn"')
// // subscribeBtn.classList.add('subscribed')
// subscribeBtn.innerText = 'Отписаться'

// subscribeBtn.onclick = () => {
//     subscribeBtn.classList.add('subscribed')
//     subscribeBtn.innerHTML = 'Отписаться'
// }