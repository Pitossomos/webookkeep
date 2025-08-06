import { Book } from "lucide-react";
import MainWrapper from "../components/MainWrapper";
import TitleWrapper from "../components/TitleWrapper";
import Transactions from "./TransactionsView/Transactions";
import Accounts from "./AccountsView/Accounts";
import {
  BOOKS,
  ACCOUNTS as accounts,
  TRANSACTIONS as transactions,
} from "../data/data";

const BookView = () => {
  const book = BOOKS[0];

  return (
    <MainWrapper>
      <TitleWrapper>
        <Book className="mr-3 text-blue-600" size={32} />
        <h1>{book.name}</h1>
        <small className="text-gray-500 text-sm px-8">{book.description}</small>
      </TitleWrapper>

      <div className="flex md:flex-col lg:flex-row space-x-8 mb-6">
        <div>
          <h2 className="text-lg font-semibold p-4">Transações</h2>
          <Transactions transactions={transactions} editing={false} />
        </div>
        <div>
          <h2 className="text-lg font-semibold p-4">Contas</h2>
          <Accounts accounts={accounts} />
        </div>
      </div>
    </MainWrapper>
  );
};

export default BookView;
