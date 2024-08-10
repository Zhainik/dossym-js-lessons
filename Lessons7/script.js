// Задание 7

// Вставить в страницу (в html документ) ul.
// Предусмотреть в коде следующий массив:

// const clients = [
// {name: "Женя", order: true},
// {name: "Кристина", order: true},
// {name: "Павел", order: false},
// {name: "Виолетта", order: false},
// {name: "Костя", order: true}
// ]

// Маска получается такой: "Клиент ИМЯ СТАТУС заказ", где имя - свойство объекта 
// (а объект здесь - это текущая ячейка массива), статус зависит от от свойства order: 
// если true – то оплатил, если false – то отменил.

// Перебирать массив, для каждого элемента массива создать li, наполнить li текстом:
// - Клиент Женя оплатил заказ
// - Клиент Павел отменил заказ
// ... остальные li с контентом


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
//     const newLitag = document.createElement('li')
//     newLitag.innerText = `Клиент ${client.name} ${client.order ? 'Оплатил' : 'Отменил''} заказ`
//     return newLitag
// })

// console.log(liTags)

// newUlTag.append(...liTags)
// containerTag.appendChild(newUlTag)


// Задание 8

// Есть массив ссылок:

// let linksArr = [
//     'https://www.amazon.com/', 
//     'https://www.youtube.com/', 
//     'https://devby.io/', 
//     'https://www.google.com/', 
//     'https://apple.com/' 
// ]

// Вам нужно:
// 1) при помощи JS создать DIV, задать ему css стили (фон, паддинги)
// 2) при помощи цикла пройтись по массиву 'linksArr', для каждого из 
// элементов массива сформировать ссылку (тег c атрибутом href и текстом из массива)
// и добавить эту ссылку в созданный DIV из пункта 1
// При нажатии на ссылки адреса должны открываться в новой вкладке (атрибут target="_blank")
// 3) Добавить DIV из пункта 1 (со ссылками внутри ) в BODY

// 1)

// const divTag = document.createElemnt('div')
// divTag.style.background = 'yellow'
// divTag.style.padding = '3rem'


// linksArr.forEach(link => {
//     const aTag = document.createElement('a')
//     aTag.href = link
//     aTag.innerText = link
//     aTag.target = '_blank'
//     aTag.style.display = 'block'
//     divTag.appendChild(aTag)
// })

// 3)
// document.body.appendChild(divTag)

// Задание 9

// Есть массив объектов с полями name, age. Например:

// const users = [
// {name: 'Mark', age: 12},
// {name: 'Olga', age: 30},
// {name:'Tom', age: 25},
// {name:'Den', age: 43}
// ]

// Создать в html таблицу (table).
// C помощью js заполнить таблицу информацией из массива, в одной колонке будут имена, 
// во второй возраст. Имена должны быть красного цвета, age - синего.
// ПОДСКАЗКА, Таблица состоит из строк (tr) и ячеек (td) внутри этих строк. Строк должно 
// создаваться столько, сколько объектов внутри массива, и их количество может быть любым.

// const tableTag = document.querySelector('#container')

// const table = document.createElement('table')
// const thead = document.createElement('thead')
// const headerRow = document.createElement('tr')
// const nameHeader = document.createElement('th')
// nameHeader.innerText = 'Имя'
// const ageHeader = document.createElement('th')
// ageHeader.innerText = 'Возраст'

// headerRow.appendChild(nameHeader)
// headerRow.appendChild(ageHeader)
// thead.appendChild(headerRow)
// table.appendChild(thead)


