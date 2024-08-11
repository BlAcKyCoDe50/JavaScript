let randomnum = (parseInt(Math.random()*100+1));
const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remainig = document.querySelector('.lastResult')
const loworHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')
const reload = document.getElementById('reload')

//function for reloading the page

reload.addEventListener(('onclick',(ev)=>{
    location.reload()
}))

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true;    
if(playGame)
{
    submit.addEventListener('click',(ev)=>{
        ev.preventDefault() 
       const guess =  parseInt(userInput.value) //we need to convert it into the integer becuase .value returns string
       console.log(guess);
       validateGuess(guess)
    })
}

const validateGuess = (guess)=>{
    if(isNaN(guess))
    {
        alert('Enter a valid number!!')
    }
    else if(guess<1)
    {
        alert('Enter a number more than 1 !!')
    }
    else if(guess>=100)
    {
        alert('Enter a  number less than 100!!')
    }
    else{
        prevGuess.push(guess)
        if(numGuess=== 11)
        {
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomnum}`)
            endGame()
        }
        else
        {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

const checkGuess = (guess)=>{
    if(guess === randomnum)
    {
        displayMessage(`You guessed it right!`)
        endGame()
    }
    else if(guess<randomnum)
    {
        displayMessage(`Number is too low`)
    }
    else if(guess > randomnum)
    {
        displayGuess('Number is too high')
    }
}

const displayMessage = (message)=>
{
    loworHi.innerHTML = `<h2>${message}</h2>`
}

const displayGuess = (guess)=>{
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `
    numGuess++;
    remainig.innerHTML = `${(11 - numGuess)+1} `
}

const newGame = ()=>{
 const newGamebutton =    document.querySelector('#newGame')
 newGamebutton.addEventListener('click',(ev)=>{
    randomnum = (parseInt(Math.random()*100+1));
    prevGuess = []
    numGuess = 1
    guessSlot.innerHTML = ''
    remainig.innerHTML = `${11 - numGuess} `
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame = true
 })

}

const endGame  = ()=>{
   //here first we are clearing the fields and disabling the userinput
    userInput.value = ''
   userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id ="newGame">New Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()

}