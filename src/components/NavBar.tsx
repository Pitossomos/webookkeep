import { Link } from "react-router";
import NavLinkButton from "./NavLinkButton";

const NavBar = () => {
  return (
    <nav className="flex space-x-4 bg-gray-800 p-4">
      <Link to="/" className="text-white text-xl font-bold">
        weBookkeep
      </Link>

      <div className="flex space-x-2">
        <NavLinkButton to="/">Home</NavLinkButton>
        <NavLinkButton to="books">Books</NavLinkButton>
      </div>
    </nav>
  );
};

export default NavBar;
