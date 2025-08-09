import { Repeat } from "lucide-react";
import MainWrapper from "../../components/MainWrapper";
import TitleWrapper from "../../components/TitleWrapper";
import PlusButton from "../../components/PlusButton";
import Transactions from "./Transactions";
import { getBookByIdString } from "../../data/defaultData";
import { useParams } from "react-router";
import NotFound from "../../components/NotFound";

const TransactionsView = () => {
  const { bookId } = useParams();
  const book = getBookByIdString(bookId);

  return book ? (
    <MainWrapper>
      <TitleWrapper>
        <Repeat className="mr-3 text-teal-600" size={32} />
        Transações para Livro: "{book.name}"
      </TitleWrapper>
      <PlusButton>Criar Nova Transação</PlusButton>

      <Transactions book={book} />
    </MainWrapper>
  ) : (
    <NotFound />
  );
};

export default TransactionsView;
