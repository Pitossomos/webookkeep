import { Book, Edit, Eye, Plus, Trash2 } from "lucide-react";
import MainWrapper from "../components/MainWrapper";
import TitleWrapper from "../components/TitleWrapper";
import PlusButton from "../components/PlusButton";

const BooksView = () => {
  const books = [
    { id: 1, name: "Livro 1", description: "Descrição do Livro 1" },
    { id: 2, name: "Livro 2", description: "Descrição do Livro 2" },
  ]

  return (
    <MainWrapper>
      <TitleWrapper>
        <Book className="mr-3 text-blue-600" size={32} />
        Meus Livros
      </TitleWrapper>
      <PlusButton pageThemeColor="blue">
        Criar Novo Livro
      </PlusButton>

      {books.length === 0 ? (
        <p className="text-gray-600 text-lg">Nenhum livro cadastrado. Comece criando um novo livro!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book) => (
            <div key={book.id} className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{book.name}</h3>
              <p className="text-gray-600 mb-4 text-sm">{book.description || 'Sem descrição.'}</p>
              <div className="flex space-x-3">
                <button
                  className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors duration-200 flex items-center text-sm"
                >
                  <Eye size={16} className="mr-1" />
                  Ver Contas
                </button>
                <button
                  className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-colors duration-200 flex items-center text-sm"
                >
                  <Edit size={16} className="mr-1" />
                  Editar
                </button>
                <button
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-200 flex items-center text-sm"
                >
                  <Trash2 size={16} className="mr-1" />
                  Excluir
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </MainWrapper>
  );
};

export default BooksView;