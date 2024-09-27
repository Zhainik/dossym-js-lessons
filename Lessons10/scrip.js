// JS Однопоточный, не компелироуемый, а интерпитируемый язык
// function eventLoop () {
//     console.log('1 + 1 = 2')
//     setTimeout(() => {
//         console.log('2 + 2 = 4')
//     }, 1000)
// }
// eventLoop()

// HTTP - это сетевой протокол
// reguest(запрос) - response (ответ -> 1. success, 2. error)

// const http = new XMLHttpRequest()

// подготовка запросу
// http.open('','') // methond -> GET, POST. DELETE, PUT, PATCH

// const name = [
// 'Сообщение номер 1',
// 'Сообщение номер 2',
// 'Сообщение номер 3',
// 'Сообщение номер 4',
// 'Сообщение номер 5'
// ]

// for (let i = 0; i < 5; i++) {
//     setTimeout(() => {
//         console.log(name[i])
//     }, i * 2000)
// }

// for (let i = 0; i <= 4; i++) {
//     setTimeout(() => {
//         console.log(`Сообщение номер ${i}`)
//     }, i * 2000)
// }

//2
// let num = 1
// const interval = setInterval(() => {
//     if(num === 5) {
//         clearInterval(interval)
//     }
//     console.log(`Сообщение номер ${num}`)
//     num++
// }, 2000)

// function updateClock () {
//     const now = new Date()
//     const hours = now.getHours()
//     const minutes = now.getMinutes()
//     const seconds = now.getSeconds()
//     document.getElementById('clock').innerText = `${hours < 10 ? ('0' + hours)}:${minutes < 10 ? ('0' + minutes)}:${seconds < 10 ? ('0' + seconds)}`
// }

// setInterval(updateClock, 1000)

// СРАВНИТЬ !!!!

// function updateClock () {
//     const now = new Date()
//     const hours = now.getHours()
//     const minutes = now.getMinutes()
//     const seconds = now.getSeconds()
//     document.getElementById('clock').innerText
//     =
//     `${hours < 10 ? ('0' + hours) : hours}:${minutes < 10 ? ('0' + minutes) : minutes}:${seconds < 10 ? ('0' + seconds) : seconds}`
// }

// setInterval(updateClock, 1000)

//3
// const request = new XMLHttpRequest()
// request.open('GET', 'https://jsonplaceholder.typicode.com/todos/1')
// request.send()
// request.onload = () =>{
//     const data = JSON.parse(request.response)
//     console.log(data)
//     const title = data.title
//     const titleDiv = document.getElementById('title')
//     titleDiv.innerText = title
// }

//4
// const reguest = new XMLHttpRequest ()
// reguest.open('GET', 'https://jsonplaceholder.typicode.com/todos')
// reguest.send()
// reguest.onload = () => {
//     const data = JSON.parse(reguest.response)
//     console.log(data)
//     const titleList = document.createElement('ul')
//     for (let i = 0; i < 20; i++) {
//         const title = data[i].title;
//         const listItem = document.createElement('li')
//         listItem.innerText = title
//         titleList.appendChild(listItem)
//     }    
//     document.body.appendChild(titleList)
// }

