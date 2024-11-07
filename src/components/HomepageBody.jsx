import { Link } from "react-router-dom";

function HomepageBody() {
  return (
    <div id="homepage__body">
      <h1 id="homepage__body__header">What do you want to be?</h1>
      <Link to="/dungeon-master-page">
        <button id="dungeonMasterButton">Dungeon Master</button>
      </Link>
      <Link to="/player-page">
        <button id="playerButton">Player</button>
      </Link>
    </div>
  );
}

export default HomepageBody;
