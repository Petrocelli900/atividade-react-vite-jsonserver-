import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <span>|</span>
      <Link to="/create">Novo Usuário</Link>
    </nav>
  );
}

export default Navbar;
