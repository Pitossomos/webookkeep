import { Repeat } from "lucide-react";
import MainWrapper from "../components/MainWrapper";
import TitleWrapper from "../components/TitleWrapper";
import PlusButton from "../components/PlusButton";
import Transactions from "../components/Transactions";

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
      <PlusButton>
        Criar Nova Transação
      </PlusButton>

      <Transactions transactions={transactions} getAccountNameById={getAccountNameById} />

    </MainWrapper>
  );
};

export default TransactionsView;