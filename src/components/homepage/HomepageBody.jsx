import { Link } from "react-router-dom";

function HomepageBody() {
  return (
    <div>
      <h1>What do you want to be?</h1>
      <Link to="/dungeon-master-page">
        <button>Dungeon Master</button>
      </Link>
      <Link to="/player-page">
        <button>Player</button>
      </Link>
    </div>
  );
}

export default HomepageBody;
