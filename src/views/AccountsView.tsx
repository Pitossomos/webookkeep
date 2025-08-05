import { Wallet } from "lucide-react";
import MainWrapper from "../components/MainWrapper";
import TitleWrapper from "../components/TitleWrapper";
import PlusButton from "../components/PlusButton";
import Accounts from "../components/Accounts";
import { ACCOUNTS as accounts, BOOKS } from "../data/data";

const AccountsView = () => {
  const book = BOOKS[0];

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
