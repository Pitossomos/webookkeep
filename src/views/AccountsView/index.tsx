import { Wallet } from "lucide-react";
import MainWrapper from "../../components/MainWrapper";
import TitleWrapper from "../../components/TitleWrapper";
import PlusButton from "../../components/PlusButton";
import Accounts from "./Accounts";
import { getAccountsByBookId, getBookById } from "../../data/defaultData";
import { useParams, redirect } from "react-router";

const AccountsView = () => {
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

  const accounts = getAccountsByBookId(bookIdNumber) || [];

  return (
    <MainWrapper>
      <TitleWrapper>
        <Wallet className="mr-3 text-purple-600" size={32} />
        Contas para "{book.name}"
      </TitleWrapper>
      <PlusButton>Criar Nova Conta</PlusButton>

      <Accounts accounts={accounts} />
    </MainWrapper>
  );
};

export default AccountsView;
