const initialState = {
  playerChoice: "rock",
  botChoice: "rock",
  winner: "draw",
  playerScore: 0,
  botScore: 0,
  round: 0,
};

export default function gameReducer(state = initialState, action) {
  switch (action.type) {
    case "PLAYER_CHOICE":
      return {
        ...state,
        playerChoice: action.info,
      };
    case "BOT_CHOICE":
      return {
        ...state,
        botChoice: action.info,
      };
    case "RESULT_GAME":
      if (action.info === "player") {
        return {
          ...state,
          winner: action.info,
          playerScore: state.playerScore + 1,
        };
      } else if (action.info === "bot") {
        return {
          ...state,
          winner: action.info,
          botScore: state.botScore + 1,
        };
      } else {
        return {
          ...state,
          winner: action.info,
        };
      }
    case "INCREMENT_ROUND":
      return {
        ...state,
        round: state.round + 1,
      };
    case "RESET_GAME":
      return initialState;
    default:
      return state;
  }
}
