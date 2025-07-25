import { Edit, Plus, Repeat, Trash2, Wallet } from "lucide-react";
import MainWrapper from "../components/MainWrapper";
import TitleWrapper from "../components/TitleWrapper";
import PlusButton from "../components/PlusButton";

const AccountsView = () => {
  const accounts = [
    { id: 1, bookId: 1, name: 'Conta 1', description: 'Descrição da Conta 1', type: 'Checking' },
    { id: 2, bookId: 1, name: 'Conta 2', description: 'Descrição da Conta 2', type: 'Savings' },
  ]

  const book = { id: 1, name: 'Livro 1' };

  return (
    <MainWrapper>
      <TitleWrapper>
        <Wallet className="mr-3 text-purple-600" size={32} />
        Contas para "{book.name}"
      </TitleWrapper>
      <PlusButton pageThemeColor="purple">
        Criar Nova Conta
      </PlusButton>

      {accounts.length === 0 ? (
        <p className="text-gray-600 text-lg">Nenhuma conta cadastrada para este livro. Comece criando uma nova conta!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {accounts.map((account) => (
            <div key={account.id} className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{account.name}</h3>
              <p className="text-gray-600 mb-2 text-sm">{account.description || 'Sem descrição.'}</p>
              <p className="text-gray-700 font-medium text-sm mb-4">Tipo: {account.type}</p>
              <div className="flex space-x-3">
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200 flex items-center text-sm"
                >
                  <Repeat size={16} className="mr-1" />
                  Ver Transações
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

export default AccountsView