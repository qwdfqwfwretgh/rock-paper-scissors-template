const winCombinations = {
  rock: "paper",
  paper: "scissors",
  scissors: "rock",
};

export function GetGameWinner(sign1, sign2) {
  if (sign1 === sign2) return "draw";
  else if (winCombinations[sign1] === sign2) return "bot";
  else return "player";
}

export function GetBotChoice() {
  let random = Math.floor(Math.random() * 100);
  if (random <= 33) {
    return "rock";
  } else if (random > 33 && random <= 66) {
    return "paper";
  } else {
    return "scissors";
  }
}
