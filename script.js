
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
  
  // Example usage:
const randomInteger = getRandomNumber(100000, 1000000); // Random integer between 100000 and 1000000
console.log(randomInteger);
  
let h3text=document.querySelector("h3") ;
let compGenerated=document.querySelector(".compGenerated") ;
let rememberScreen=document.querySelector(".rememberScreen")
let inputScreen=document.querySelector(".inputScreen")
let rightGuessed=document.querySelector(".right" ) ;
let wrongGuessed=document.querySelector(".wrong") ;
let newGame=document.querySelector(".newGame") ;


compGenerated.innerText=`${randomInteger}` ;

function remember(){
    rememberScreen.classList.add("hide") ;
    inputScreen.classList.remove("hide");
    h3text.innerText="Guess the number " ;
}


const refreshButton = document.getElementById('tryAgain');

refreshButton.addEventListener('click', () => {
  window.location.reload();
});


function getInputValue(){
    const inputElement = document.getElementById("numberInput");
    const inputValue = inputElement.value;
    return inputValue ;
}

function rightGuess(){
    rememberScreen.classList.add("hide") ;
    inputScreen.classList.add("hide");
    rightGuessed.classList.remove("hide") ;
    newGame.classList.remove("hide") ;
}

function wrongGuess(){
    rememberScreen.classList.add("hide") ;
    inputScreen.classList.add("hide");
    wrongGuessed.classList.remove("hide") ;
    newGame.classList.remove("hide") ;
}

function guessedNumber(){
    const userGuess = parseInt(getInputValue()) ;
    if(userGuess===randomInteger){
        rightGuess() ;
    }
    else{
        wrongGuess() ;
    }
}

// const guessButton = document.getElementById("guessButton");
// guessButton.addEventListener("click", guessedNumber);