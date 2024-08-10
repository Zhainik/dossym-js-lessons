const firstName = document.querySelector('#firstName')
const lastName = document.querySelector('#lastName')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const repeatPassword = document.querySelector('#repeatPassword')
const checkForm = document.querySelector('#checkForm')
const submitBtn = document.querySelector('#submitBtn')

submitBtn.addEventListener('click', (event) => {
    event.preventDefault()
    if (firstName.value === ''){
        alert('Enter first name please!')
        return
    }
    if (lastName.value === '') {
        alert('Enter last name please!')
        return 
    }
    if (email.value === '') {
        alert('Enter email please!')
        return
    }
    if (validateEmail(email.value) === null){
        alert('Email is invalid!')
        return
    }
    if (password.value === ''){
        alert('Enter password please!')
        return
    }
    if (repeatPassword.value === ''){
        alert('Enter password please!')
        return
    }
    if (!checkPassword(password.value, repeatPassword.value)){
        alert('Password is invalid!')
        return
    }
    if (password.value !== repeatPassword.value){
        alert('Passwords dont match!')
        return
    }
    if (!checkForm.checked){
        alert("Click 'I agree' please!")
        return
    }
})

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

function checkPassword(str)
  {
    var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return re.test(str);
  }

