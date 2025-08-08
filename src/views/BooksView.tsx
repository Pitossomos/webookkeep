import { Book, Edit, Eye, Wallet } from "lucide-react";
import MainWrapper from "../components/MainWrapper";
import TitleWrapper from "../components/TitleWrapper";
import PlusButton from "../components/PlusButton";
import { Link } from "react-router";
import { DEFAULT_DATA } from "../data/defaultData";

const BooksView = () => {
  const books = DEFAULT_DATA.books;

  return (
    <>
      <MainWrapper>
        <TitleWrapper>
          <Book className="mr-3 text-blue-600" size={32} />
          Meus Livros
        </TitleWrapper>
        <PlusButton>Criar Novo Livro</PlusButton>

        {books.length === 0 ? (
          <p className="text-gray-600 text-lg">
            Nenhum livro cadastrado. Comece criando um novo livro!
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {books.map((book) => (
              <div
                key={book.id}
                className="bg-white p-6 rounded-lg shadow-lg border border-gray-200"
              >
                <Link to={book.id.toString()} className="block mb-4">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    {book.name}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {book.description || "Sem descrição."}
                  </p>
                </Link>

                <div className="flex flex-wrap">
                  <button className="px-4 py-2 m-1 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition-colors duration-200 flex items-center text-sm">
                    <Link
                      to={book.id + "/transactions"}
                      className="flex items-center"
                    >
                      <Eye size={16} className="mr-1" />
                      Ver Transações
                    </Link>
                  </button>
                  <button className="px-4 py-2 m-1 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition-colors duration-200 flex items-center text-sm">
                    <Link
                      to={book.id + "/accounts"}
                      className="flex items-center"
                    >
                      <Wallet size={16} className="mr-1" />
                      Ver Contas
                    </Link>
                  </button>
                  <button className="px-4 py-2 m-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-colors duration-200 flex items-center text-sm">
                    <Link to={book.id + "/edit"} className="flex items-center">
                      <Edit size={16} className="mr-1" />
                      Editar Livro
                    </Link>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </MainWrapper>
    </>
  );
};

export default BooksView;
