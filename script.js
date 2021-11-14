let hasBlackJack  = false
let isAlive = false
let message = "";
let result = 0;
let cards = [];

let sumEl = document.getElementById("sum");
let startGame = document.getElementById("start-game");
let messageEl = document.getElementById("message-el");
let cardsEl = document.getElementById("cards");
let getNewCard = document.getElementById("new-card");

let player = {
    name: "Player",
    chips: "175"
}

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + " $" + player.chips;



function getRandomCard(){
    let randomNumber = Math.floor(Math.random()*13) + 1;

    if(randomNumber === 1){
        return 11;
    }else if(randomNumber >= 11){
        return 10;
    }else{
        return randomNumber;
    }  
}


function start(){

    isAlive = true
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards.push(firstCard);
    cards.push(secondCard);
    result = firstCard + secondCard 
    renderGame()
}



function renderGame(){

    cardsEl.textContent = "Cards: "
    
    for(let i = 0; i<cards.length ;i++){
        cardsEl.textContent += cards[i] + " "
    }
    

    sumEl.textContent = "SUM: " + result;
    if (result < 21){
        message = "Do you want to drag another card?"
        
       
    }else if(result === 21){
        message = "You've got BlackJack";
       
        hasBlackJack = true;
    }else{
        message = "You're out of the game";
        
        isAlive = false;
    }

    messageEl.textContent = message;
}


function newCard(){

    if(isAlive == true && hasBlackJack == false){
        let card3 = getRandomCard();

        result += card3;

        cards.push(card3);
    
        renderGame()
    }

    
}






