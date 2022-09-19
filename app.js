const userName = document.querySelector('.form-group:nth-child(1) input');
const userEmail = document.querySelector('.form-group:nth-child(2) input');
const userPassword = document.querySelector('.form-group:nth-child(3) input');
const userPswConfirm = document.querySelector('.form-group:nth-child(4) input');

const allImg = document.querySelectorAll('.check-icon');
const allLine = document.querySelectorAll('.line div');
const allSpan = document.querySelectorAll('span');

userName.addEventListener('input', (e) => {

    if(e.target.value.length >= 3 ){
        allSpan[0].style.display = 'none'
        allImg[0].style.display = 'inline';
        allImg[0].src = 'ressources/check.svg'
    }
    else {
        allSpan[0].style.display = 'inline';
        allImg[0].style.display = 'inline';
        allImg[0].src = 'ressources/error.svg' 
    }
})

userEmail.addEventListener('input', e => {

    const regexEmail = /\S+@\S+\.\S+/;

    if(e.target.value.search(regexEmail) === 0){
        allSpan[1].style.display = 'none'
        allImg[1].style.display = 'inline';
        allImg[1].src = 'ressources/check.svg'
    }
    else  if(e.target.value.search(regexEmail)  === -1){
        allSpan[1].style.display = 'inline';
        allImg[1].style.display = 'inline';
        allImg[1].src = 'ressources/error.svg'
    }
})