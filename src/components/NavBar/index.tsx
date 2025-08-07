import { Link } from "react-router";
import NavLinkButton from "../NavLinkButton";
import Separator from "./Separator";

const buildLinks = () => {
  const links = [
    { to: "/", label: "Início" },
    { to: "/books", label: "Livros" },
  ];

  return links;
};

const NavBar = () => {
  const links = buildLinks();

  return (
    <nav className="flex space-x-4 bg-gray-800 p-4 text-sm font-medium text-gray-300">
      <Link to="/" className="text-white text-xl font-bold">
        weBookkeep
      </Link>

      <div className="flex space-x-2">
        {links.map((link) => (
          <React.Fragment key={link.to}>
            <Separator />
            <NavLinkButton to={link.to}>{link.label}</NavLinkButton>
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
import React from "react";
