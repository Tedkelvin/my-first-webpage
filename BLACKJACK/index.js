let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")


function getRandomcard() {
    let number = Math.floor(Math.random() * 13) + 1
    if  (number >10) {
        return 10
    } else if(number===1) {
        return 11
    } else{
        return number
    }
}

function startGame() {
    fcard = getRandomcard()
    scard =  getRandomcard()
    sum = fcard + scard
    cards = [fcard, scard]
    isAlive = true
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards:"
    for (let c = 0; c < cards.length; c++) 
    { 
        cardsEl.textContent += cards[c]+" "
    }
    sumEl.textContent = "Sum:" + sum
    if (sum<=20) {
        message="Do you want to draw a new  card"
    } else if (sum===21) {
        message="You've got a blackjack"
    } else {
        message="You're out of the game"
        isAlive = false
    }  
    messageEl.textContent= message
}
function newCard() {
    if (isAlive===true && sum<21) {
        let tcard = getRandomcard()
        cards.push(tcard)
         sum += tcard
        renderGame()
    }
    
}
let player = {
  name: "Kelvin",
  chips: 145
}
let playerName = "Kelvin"
let playerChips = 145
playerEl.textContent = player.name + ": $" + player.chips

console.log(startGame)