import { Repeat, Plus, Edit, Trash2 } from "lucide-react";
import MainWrapper from "../components/MainWrapper";
import TitleWrapper from "../components/TitleWrapper";
import PlusButton from "../components/PlusButton";

const TransactionsView = () => {

  const transactions = [
    { id: 1, bookId: 1, source_account_id: 1, destination_account_id: 2, datetime: '2023-10-01T00:00:00Z', description: 'Transação 1', value: 100 },
    { id: 2, bookId: 1, source_account_id: 2, destination_account_id: 1, datetime: '2023-10-02T00:00:00Z', description: 'Transação 2', value: -50 },
  ]

  const accounts = [
    { id: 1, bookId: 1, name: 'Conta 1', description: 'Descrição da Conta 1', type: 'Checking' },
    { id: 2, bookId: 1, name: 'Conta 2', description: 'Descrição da Conta 2', type: 'Savings' },
  ];

  const getAccountNameById = (id: number) => {
    const account = accounts.find(acc => acc.id === id);
    return account ? account.name : 'Conta Desconhecida';
  };

  const book = { id: 1, name: 'Livro 1' };

  return (
    <MainWrapper>
      <TitleWrapper>
        <Repeat className="mr-3 text-teal-600" size={32} />
        Transações para Livro: "{book.name}"
      </TitleWrapper>
      <PlusButton pageThemeColor="teal">
        Criar Nova Transação
      </PlusButton>

      {transactions.length === 0 ? (
        <p className="text-gray-600 text-lg">Nenhuma transação cadastrada para esta conta. Comece criando uma nova transação!</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow-lg border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Data</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Descrição</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Valor</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Conta Origem</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Conta Destino</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {transactions.map((tx) => (
                <tr key={tx.id} className="hover:bg-gray-50">
                  <td className="py-3 px-4 whitespace-nowrap text-sm text-gray-800">{new Date(tx.datetime).toLocaleDateString()}</td>
                  <td className="py-3 px-4 text-sm text-gray-800">{tx.description}</td>
                  <td className={`py-3 px-4 whitespace-nowrap text-sm ${tx.value < 0 ? 'text-red-600' : 'text-green-600'} font-medium`}>
                    {tx.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-800">{getAccountNameById(tx.source_account_id)}</td>
                  <td className="py-3 px-4 text-sm text-gray-800">{getAccountNameById(tx.destination_account_id)}</td>
                  <td className="py-3 px-4 whitespace-nowrap text-sm">
                    <div className="flex space-x-2">
                      <button
                        className="p-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-colors duration-200"
                      >
                        <Edit size={16} />
                      </button>
                      <button
                        className="p-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-200"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </MainWrapper>
  );
};

export default TransactionsView;