import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <>
      <h1 id="homepage__header">Welcome to All Dnd!!!</h1>
      <div id="homepage__body">
        <h2 id="homepage__body__header">What do you want to be?</h2>
        <Link to="/dungeon-master-page">
          <button id="dungeonMasterButton">Dungeon Master</button>
        </Link>
        <Link to="/player-page">
          <button id="playerButton">Player</button>
        </Link>
      </div>
    </>
  );
}
