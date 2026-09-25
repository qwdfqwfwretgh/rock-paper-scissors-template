import Button from "../../components/Button/Button.jsx";

import classes from "./Menu.module.scss";

export default function Menu({ onChange }) {
  return (
    <div className={classes.playSection}>
      <Button onClick={() => onChange("Game")}>play</Button>
      <span className={classes.playText}>Rock Paper Scissors The game</span>
    </div>
  );
}
