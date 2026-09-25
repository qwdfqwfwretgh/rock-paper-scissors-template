import { useDispatch } from "react-redux";

import Button from "../../components/Button/Button.jsx";
import { GetBotChoice, GetGameWinner } from "../../utils/gameLogic.js";

import classes from "./ChoiceButtons.module.scss";

export default function ChoiceButtons() {
  const dispatch = useDispatch();

  const makeChoice = (choice) => {
    dispatch({
      type: "PLAYER_CHOICE",
      info: choice,
    });
    const botChoice = GetBotChoice();
    dispatch({
      type: "BOT_CHOICE",
      info: botChoice,
    });
    dispatch({
      type: "INCREMENT_ROUND",
    });
    const stateGame = GetGameWinner(choice, botChoice);
    dispatch({
      type: "RESULT_GAME",
      info: stateGame,
    });
  };

  return (
    <div className={classes.GameChoice}>
      <label>Choose your move, rock paper or scissors?</label>
      <div className={classes.GameButtons}>
        <Button onClick={() => makeChoice("rock")}>Rock</Button>
        <Button onClick={() => makeChoice("paper")}>Paper</Button>
        <Button onClick={() => makeChoice("scissors")}>Scissors</Button>
      </div>
    </div>
  );
}
