import { useDispatch, useSelector } from "react-redux";

import classes from "./Scoreboard.module.scss";

export default function Scoreboard() {
  const dispatch = useDispatch();
  const playerScore = useSelector((state) => state.playerScore);
  const botScore = useSelector((state) => state.botScore);
  const handleClickReset = () => {
    dispatch({
      type: "RESET_GAME",
    });
  };

  return (
    <div className={classes.GameInfo}>
      <label onClick={handleClickReset} className={classes.buttonReset}>
        Reset The Score
      </label>
      <div className={classes.GameScore}>
        <label>Player score: {playerScore}</label>
        <label>Computer Score: {botScore}</label>
      </div>
    </div>
  );
}
