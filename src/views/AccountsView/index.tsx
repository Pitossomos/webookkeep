import { Wallet } from "lucide-react";
import MainWrapper from "../../components/MainWrapper";
import TitleWrapper from "../../components/TitleWrapper";
import PlusButton from "../../components/PlusButton";
import Accounts from "./Accounts";
import { getBookByIdString } from "../../data/defaultData";
import { useParams } from "react-router";
import NotFound from "../../components/NotFound";

const AccountsView = () => {
  const { bookId } = useParams();
  const book = getBookByIdString(bookId);

  return book ? (
    <MainWrapper>
      <TitleWrapper>
        <Wallet className="mr-3 text-purple-600" size={32} />
        Contas para "{book.name}"
      </TitleWrapper>
      <PlusButton>Criar Nova Conta</PlusButton>

      <Accounts book={book} />
    </MainWrapper>
  ) : (
    <NotFound />
  );
};

export default AccountsView;
