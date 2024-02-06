function game() {
  let playGame = confirm("Shall we play rock, paper and scissors ?");
if (playGame) {
  console.log(playGame);
  let playerChoice = prompt("Plz., enter rock, paper or scissors...");
  
  console.log(typeof playerChoice)
  if (playerChoice) {
    let playerOne = playerChoice.trim().toLowerCase();
    let computerChoice = Math.floor(Math.random() * 3 + 1);

    if (
      playerChoice === "rock" ||
      playerChoice === "paper" ||
      playerChoice === "scissors"
    ) {
      let computer =
        computerChoice === 1
          ? "rock"
          : computerChoice === 2
          ? "paper"
          : "scissors";
      let result =
        playerChoice === computer
          ? "Game Tie :)"
          : playerChoice === "rock" && computer === "scissors"
          ? `You: ${playerChoice} \n Computer: ${computer} \n You wins :)`
          : playerChoice === "paper" && computer === "rock"
          ? `You: ${playerChoice} \n Computer: ${computer} \n You wins :)`
          : playerChoice === "scissors" && computer === "paper"
          ? `You: ${playerChoice} \n Computer: ${computer} \n You wins :)`
          : `You: ${playerChoice} \n Computer: ${computer} \n Computer wins :(`;
      alert(result);
      let playAgain = confirm("Play Again!");
      playAgain ? game() : alert("Okk Thanks :)");
    } else {
      alert("You have entered a valid option :(");
    }
  } else {
    alert("I guess change your mind. May be next time :)");
  }
} else {
  alert("Okk :(, May be next time :)");
}

}