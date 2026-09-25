import { useSelector } from "react-redux";

import Move from "../Move/Move.jsx";

import classes from "./VersusSection.module.scss";

export default function VersusSection() {
  const game = useSelector((state) => state);

  return (
    <div className={classes.GameVersus}>
      <div className={classes.wrapperPlayerSign}>
        <Move move={game.playerChoice}></Move>
      </div>
      <div>vs</div>
      <Move move={game.botChoice}></Move>
    </div>
  );
}
