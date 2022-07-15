import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Y.Emam Bolgs</h1>
      <Link className="a" id="home" to="/">
        Home
      </Link>
      <Link className="a" to="/create">
        New Blog
      </Link>
    </nav>
  );
};

export default Navbar;
