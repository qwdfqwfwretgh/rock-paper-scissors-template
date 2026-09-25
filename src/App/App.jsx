import { useState } from "react";

import Layout from "../components/Layout.jsx";
import Game from "../pages/Game/Game.jsx";
import Menu from "../pages/Menu/Menu.jsx";

function App() {
  const [tab, setTab] = useState("Menu");

  return (
    <Layout>
      {tab === "Menu" ? (
        <Menu onChange={(current) => setTab(current)} />
      ) : (
        <Game />
      )}
    </Layout>
  );
}

export default App;
