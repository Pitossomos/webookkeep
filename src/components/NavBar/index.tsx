import { Link, useParams } from "react-router";
import NavLinkButton from "../NavLinkButton";
import Separator from "./Separator";
import React, { useContext } from "react";
import ContextProvider from "../ContextProvider";

const buildLinks = (bookId: string | undefined) => {
  const links = [
    { to: "/", label: "Início" },
    { to: "/books", label: "Livros" },
  ];

  if (!bookId) return links;

  const { book } = useContext(ContextProvider);
  if (book) {
    links.push(
      { to: `/books/${book.id}`, label: book.name },
      { to: `/books/${book.id}/edit`, label: "Editar Livro" },
      { to: `/books/${book.id}/transactions`, label: "Transações" },
      { to: `/books/${book.id}/accounts`, label: "Contas" }
    );
  }

  return links;
};

const NavBar = () => {
  const { bookId } = useParams();
  const links = buildLinks(bookId);

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
