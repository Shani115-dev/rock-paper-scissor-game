const choices = document.querySelectorAll('.choice');
const resultText = document.getElementById('result-text');
const outcomes = {
  rock: { scissors: 'win', paper: 'lose', rock: 'draw' },
  paper: { rock: 'win', scissors: 'lose', paper: 'draw' },
  scissors: { paper: 'win', rock: 'lose', scissors: 'draw' },
};

choices.forEach((choice) => {
  choice.addEventListener('click', () => {
    const playerChoice = choice.id;
    const computerChoice = getComputerChoice();
    const outcome = outcomes[playerChoice][computerChoice];

    displayResult(playerChoice, computerChoice, outcome);
  });
});

function getComputerChoice() {
  const options = ['rock', 'paper', 'scissors'];
  return options[Math.floor(Math.random() * options.length)];
}

function displayResult(player, computer, result) {
  resultText.innerHTML = `
    You chose <b>${capitalize(player)}</b>.<br>
    Computer chose <b>${capitalize(computer)}</b>.<br>
    <span style="color: ${
      result === 'win' ? 'green' : result === 'lose' ? 'red' : 'gray'
    }">${capitalize(result)}</span>!
  `;
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
