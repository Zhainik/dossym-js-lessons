// Hoisting (всплытие)

// Задание 
// Задание - отобразить специальности в виде списка
const localStorageSpecialities = localStorage.getItem('itSpecialities')

let itSpecialities;
if(localStorageSpecialities) {
    itSpecialities = JSON.parse(localStorageSpecialities)
}
else {
    const defaultData = ['System admin', 'Frontend Developer', 'Backend Developer', 'IOS Developer', 'CI/CD Developer']
    itSpecialities = defaultData
    localStorage.setItem('itSpecialities', JSON.stringify(defaultData))
}
const listElement = document.getElementById('itSpecialities')
const submitBtn = document.getElementById('submitBtn')
const addBtn = document.getElementById('addBtn')

itSpecialities.forEach(speciality => {
    const listItem = document.createElement('li') // создаем <li></li>
    const inputElement = document.createElement('input') // создаем <input/>
    const deleteElement = document.createElement('button')
    deleteElement.innerText = 'delete'
    deleteElement.addEventListener('click', () => {
        itSpecialities = itSpecialities.filter(value => value !== speciality)
        listItem.remove()
        localStorage.setItem('itSpecialities', JSON.stringify(itSpecialities))
    })
    inputElement.value = speciality // <input value="System admin" />
    listItem.appendChild(inputElement)
    listItem.appendChild(deleteElement)
    // <li>
    //      <input value="System admin" />
    // </li>
    listElement.appendChild(listItem)
})

submitBtn.addEventListener('click', () => {
    const newITSpecialities = []
    for (const liItem of listElement.children) {
        const inputItem = liItem.querySelector('input')
        newITSpecialities.push(inputItem.value)
    }
    itSpecialities = newITSpecialities.filter(value => trim(value))
    localStorage.setItem('itSpecialities', JSON.stringify(itSpecialities))
})

addBtn.addEventListener('click', () => {
   const listItem = document.createElement('li')
   const inputElement = document.createElement('input')
   inputElement.value = ''
   listItem.appendChild(inputElement)
   listElement.appendChild(listItem)
})


