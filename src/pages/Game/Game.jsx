import { useSelector } from "react-redux";

import ChoiceButtons from "../../components/ChoiceButtons/ChoiceButtons.jsx";
import Scoreboard from "../../components/ScoreBoard/ScoreBoard.jsx";
import VersusSection from "../../components/VersusSection/VersusSection.jsx";

import classes from "./Game.module.scss";

export default function Game() {
  const winner = useSelector((state) => state.winner);

  return (
    <div className={classes.Game}>
      <div className={classes.GameTitle}>Rock Paper Scissors</div>
      <Scoreboard />
      <div
        className={
          winner === "player" || winner === "bot"
            ? classes.Win
            : `${classes.Draw} ${classes.Win}`
        }
      >
        {winner === "player"
          ? "You won ! 🎉"
          : winner === "bot"
            ? "Computer won ! 🎉"
            : "Draw"}
      </div>
      <VersusSection />
      <ChoiceButtons />
    </div>
  );
}
