import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-content">
        <Link to="/" className="nav-logo">
          D&D Campaign Manager
        </Link>
        <div className="nav-links">
          <Link to="/" className="nav-item">
            Home
          </Link>
          <Link to="/dungeon-master" className="nav-item">
            Dungeon Master
          </Link>
          <Link to="/player" className="nav-item">
            Player
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
