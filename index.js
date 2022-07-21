const sumText = document.querySelector(".sumText")
const sumEl = document.querySelector(".sumEl")
const cardsText = document.querySelector(".cardsEl")
const dealerText = document.querySelector(".dealerEl")
const start = document.querySelector(".startGame")
const takeCard = document.querySelector(".newCard")
const restart = document.querySelector(".restartGame")
const end = document.querySelector(".endGame")
let cards =[]
let sum = 0
let dealerSum = 0
let dealerCardOne = 0
let dealerCardTwo = 0
function getRandomCard(){
    let random = Math.floor(Math.random()*13) + 1
    if (random > 10) {
        return 10
    } else if (random === 1) {
        return 11
    } else {
        return random
    }
}
function renderGame(){
    cardsText.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsText.textContent += cards[i] + " "
    } 
    sumEl.textContent = "Sum: " + sum
    if(sum > 21){
        restart.style.display = "flex"
        takeCard.style.display = "none"
        end.style.display = "none"
        sumText.textContent = "Dealer won!"
        dealerText.textContent += " " +dealerCardOne + " " + dealerCardTwo
    }
    else if(sum === 21){
        sumText.textContent = "You won!"
        restart.style.display = "flex"
        takeCard.style.display = "none"
        end.style.display = "none"
        dealerText.textContent += " " +dealerCardOne + " " + dealerCardTwo
    } if(sum <= 20){
        sumText.textContent = "Do you want to take new card?"
    }
}
function startGame(){
    start.style.display = "none"
    restart.style.display = "none"
    takeCard.style.display = "flex"
    end.style.display = "flex"
    dealer()
    newCard() 
    newCard() 
    getRandomCard()
    renderGame()
}
function restartGame() {
    sum = 0
    cards = []
    start.style.display = "flex"
    restart.style.display = "none"
    takeCard.style.display = "none"
    end.style.display = "none"
    sumEl.textContent = "Sum: "
    sumText.textContent = ""
    cardsText.textContent = "Cards: "
    dealerText.textContent = "Dealer:"
}
function dealer(){
    dealerCardOne = getRandomCard() - 1
    dealerCardTwo = getRandomCard() - 1
    dealerSum = dealerCardOne + dealerCardTwo
}
function endGame(){
    if(dealerSum > sum){
        sumText.textContent = "Dealer won!"
    } else if(dealerSum === sum){
        sumText.textContent = "Tie!"
    } else if(dealerSum < sum){
        sumText.textContent = "You won!"
    }
    restart.style.display = "flex"
    takeCard.style.display = "none"
    end.style.display = "none"
    dealerText.textContent += " " +dealerCardOne + " " + dealerCardTwo
}
function newCard(){
    let number = getRandomCard()
    sum += number
    cards.push(number)
    renderGame()
}