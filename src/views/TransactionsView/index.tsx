import { Repeat } from "lucide-react";
import MainWrapper from "../../components/MainWrapper";
import TitleWrapper from "../../components/TitleWrapper";
import PlusButton from "../../components/PlusButton";
import Transactions from "./Transactions";
import { TRANSACTIONS as transactions, BOOKS } from "../../data/data";

const TransactionsView = () => {
  const book = BOOKS[0];

  return (
    <MainWrapper>
      <TitleWrapper>
        <Repeat className="mr-3 text-teal-600" size={32} />
        Transações para Livro: "{book.name}"
      </TitleWrapper>
      <PlusButton>Criar Nova Transação</PlusButton>

      <Transactions transactions={transactions} editing={false} />
    </MainWrapper>
  );
};

export default TransactionsView;
