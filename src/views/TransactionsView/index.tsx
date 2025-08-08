import { Repeat } from "lucide-react";
import MainWrapper from "../../components/MainWrapper";
import TitleWrapper from "../../components/TitleWrapper";
import PlusButton from "../../components/PlusButton";
import Transactions from "./Transactions";
import { getBookById, getTransactionsByBookId } from "../../data/defaultData";
import { useParams, redirect } from "react-router";

const TransactionsView = () => {
  const { bookId } = useParams();
  const bookIdNumber =
    bookId && !isNaN(Number(bookId)) ? Number(bookId) : undefined;

  if (!bookIdNumber) {
    redirect("/books");
    return;
  }

  const book = getBookById(bookIdNumber);

  if (!book) {
    redirect("/books");
    return;
  }

  const transactions = getTransactionsByBookId(bookIdNumber) || [];

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
