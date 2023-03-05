let firstCard= 4
let secondCard = 6
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message

let messagEl = document.getElementById("message-el")
console.log(messagEl)

let sumEl= document.getElementById("sum-el")
let cardEl= document.getElementById("card-el")

function startGame() {
    cardEl.textContent = "Cards: " + firstCard + " " + secondCard
    sumEl.textContent = "Sum: " + sum
    if ( sum =>15){
        message= "Do you want to draw a card? "
    } else if (sum== 15){
        message= "wow, you had a black card! " 
        hasBlackJack = true
    } else {
        message = "You are no  in the game again!! " 
        isAlive = false
    }
    
    messagEl.textContent= message
}
