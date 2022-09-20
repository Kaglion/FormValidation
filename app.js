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

let inputValue;
const specialChar = /[^a-zA-Z0-9]/; // Represents all characters that are not in the range from which the '^' is used.
const letter = /[a-z]/i;
const number = /[0-9]/

let objValidation = {
    symbol : 0,
    letter : 0,
    number : 0
}

userPassword.addEventListener('input', e => {

    inputValue = e.target.value;

    if (inputValue.search(specialChar) !== -1 ) {
        objValidation.symbol = 1
    }
    if (inputValue.search(letter) !== -1 ) {
        objValidation.letter = 1
    }
    if (inputValue.search(number) !== -1 ) {
        objValidation.number = 1
    }

    if (e.inputType = "deleteContentBackward") {

        if (inputValue.search(specialChar) === -1 ) {
            objValidation.symbol = 0
        }
        if (inputValue.search(letter) === -1 ) {
            objValidation.letter = 0
        }
        if (inputValue.search(number) === -1 ) {
            objValidation.number = 0
        }        
    }


    let allTest = 3;
    for (const property in objValidation) {
        if (objValidation[property] > 0 ) {
            allTest++;
        }
    }

    if (allTest < 6) {
        allSpan[2].style.display = 'inline';
        allImg[2].style.display = 'inline';
        allImg[2].src = 'ressources/error.svg';
    }
    else{
        allSpan[2].style.display = 'none';
        allImg[2].src = 'ressources/check.svg'
    }
    
    if (inputValue.length <= 6) {
        allLine[0].style.display = 'block';
        allLine[1].style.display = 'none';
        allLine[2].style.display = 'none';
    } else if (inputValue.length > 6 && inputValue.length <= 9 ) {
        allLine[0].style.display = 'block';
        allLine[1].style.display = 'block';
        allLine[2].style.display = 'none';
    }
    else if (inputValue.length > 9 ) {
        allLine[0].style.display = 'block';
        allLine[1].style.display = 'block';
        allLine[2].style.display = 'block';
    }
     
})
