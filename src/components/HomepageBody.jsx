import { Link } from "react-router-dom";

function HomepageBody() {
  return (
    <div id="homepage__body">
      <div id="bigCursor"></div>
      <h1 id="homepage__body__header">What do you want to be?</h1>
      <div id="homepage__buttons">

          <Link to="/dungeon-master-page">
            <button class="homepage-btn" id="dungeonMasterButton">Dungeon Master</button>
          </Link>

        <Link to="/player-page">
          <button class="homepage-btn" id="playerButton">Player</button>
        </Link>
      </div>
    </div>
  );
}

export default HomepageBody;
