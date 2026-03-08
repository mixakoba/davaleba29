function rollDice() {

    const diceOne = Math.floor(Math.random() * 6) + 1;
    const diceTwo = Math.floor(Math.random() * 6) + 1;

    const dice1Image = document.getElementById("dice1");
    const dice2Image = document.getElementById("dice2");

    dice1Image.src = `images/dice${diceOne}.png`;
    dice2Image.src = `images/dice${diceTwo}.png`;

    const title = document.getElementById("result");

    if (diceOne > diceTwo) {
        title.textContent = "Player 1 Wins!";
    }
    else if (diceTwo > diceOne) {
        title.textContent = "Player 2 Wins!";
    }
    else {
        title.textContent = "Draw";
    }

}

rollDice();