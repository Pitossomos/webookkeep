import { Book } from "lucide-react";
import MainWrapper from "../components/MainWrapper";
import TitleWrapper from "../components/TitleWrapper";
import Transactions from "../components/Transactions";
import Accounts from "../components/Accounts";
import type { Account } from "../types/types";

const BookView = () => {
  const book = { id: 1, name: "Livro 1", description: "Descrição do Livro 1" }
  const accounts: Account[] = [
    { id: 1, bookId: 1, name: 'Conta 1', description: 'Descrição da Conta 1', type: 'Asset' },
    { id: 2, bookId: 1, name: 'Conta 2', description: 'Descrição da Conta 2', type: 'Income' },
    { id: 3, bookId: 1, name: 'Conta 3', description: 'Descrição da Conta 3', type: 'Liability' },
    { id: 4, bookId: 1, name: 'Conta 4', description: 'Descrição da Conta 4', type: 'Expense' },
  ];

  const transactions = [
    { id: 1, bookId: 1, source_account_id: 1, destination_account_id: 2, datetime: '2023-10-01T00:00:00Z', description: 'Transação 1', value: 100 },
    { id: 2, bookId: 1, source_account_id: 2, destination_account_id: 1, datetime: '2023-10-02T00:00:00Z', description: 'Transação 2', value: -50 },
    { id: 3, bookId: 1, source_account_id: 1, destination_account_id: 3, datetime: '2023-10-03T00:00:00Z', description: 'Transação 3', value: 200 },
    { id: 4, bookId: 1, source_account_id: 2, destination_account_id: 3, datetime: '2023-10-04T00:00:00Z', description: 'Transação 4', value: -150 },
    { id: 5, bookId: 1, source_account_id: 3, destination_account_id: 1, datetime: '2023-10-05T00:00:00Z', description: 'Transação 5', value: 300 },
    { id: 6, bookId: 1, source_account_id: 4, destination_account_id: 2, datetime: '2023-10-06T00:00:00Z', description: 'Transação 6', value: -100 },
    { id: 7, bookId: 1, source_account_id: 2, destination_account_id: 4, datetime: '2023-10-07T00:00:00Z', description: 'Transação 7', value: 50 },
  ];

  return (
    <MainWrapper>
      <TitleWrapper>
        <Book className="mr-3 text-blue-600" size={32} />
          <h1>{ book.name }</h1>
          <small className="text-gray-500 text-sm px-8">
            { book.description }
          </small>
      </TitleWrapper>

      <div className="flex md:flex-col lg:flex-row space-x-8 mb-6">
        <div>
          <h2 className="text-lg font-semibold p-4">Transações</h2>
          <Transactions transactions={transactions} getAccountNameById={(id) => accounts.find(acc => acc.id === id)?.name || 'Desconhecida'} />
        </div>
        <div>
          <h2 className="text-lg font-semibold p-4">Contas</h2>
          <Accounts accounts={accounts} />
        </div>
      </div>

    </MainWrapper>
  )
};

export default BookView;