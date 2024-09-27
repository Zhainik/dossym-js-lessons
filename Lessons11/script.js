// const promise = new Promise((resolve, reject) => {
//     // resolve('Я смогу пойти с вами в кафе')
//     reject('У меня тут дела появились')
// })
// console.log(promise)
// promise.then((result) => [
//     console.log(result)
// ])
// promise.catch((err) => {
//     console.log('Ошибка' + err)
// })

// Квиз
// const question1 = prompt ('Какой язык программирование используется во фронтенде?')
// const question2 = prompt ('Как называется язык разметки во фронтенде?')
// const promise = new Promise((resolve, reject) => {
//     let grade = 0
//     if(question1 === 'Javascript') {
//         grade++
//     }
//     if(question2 === 'HTML') {
//         grade++
//     }
//     if(grade < 2) {
//         reject(`Вы набрали ${grade}/2. Вы провалили тест!`)
//     }
//     else(
//         resolve('Вы успешно прошли тест. Результата 2/2')
//     )
// })

// promise.then((result) => {
//     alert(result)
// }).catch((error) => {
//     console.log('Ошибка:' +error)
//     alert(error)
// })

//1
// async function names() {
//     try {
//         const response = await fetch ('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         const nameList = document.createElement('ul')
//         data.forEach(user => {
//             console.log(user.name)
//             const nameItem = document.createElement('li')
//             nameItem.innerText = user.name
//             nameList.appendChild(nameItem)
//         });
//         document.body.appendChild(nameList)
//     }
//     catch(err) {
//         alert('Ошибка при получении списка задач!')
//     }
// }

// names()