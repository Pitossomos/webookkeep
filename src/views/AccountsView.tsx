import { Wallet } from "lucide-react";
import MainWrapper from "../components/MainWrapper";
import TitleWrapper from "../components/TitleWrapper";
import PlusButton from "../components/PlusButton";
import Accounts from "../components/Accounts";
import type { Account } from "../types/types";

const AccountsView = () => {
  const accounts: Account[] = [
    { id: 1, bookId: 1, name: 'Conta 1', description: 'Descrição da Conta 1', type: 'Asset' },
    { id: 2, bookId: 1, name: 'Conta 2', description: 'Descrição da Conta 2', type: 'Income' },
  ]

  const book = { id: 1, name: 'Livro 1' };

  return (
    <MainWrapper>
      <TitleWrapper>
        <Wallet className="mr-3 text-purple-600" size={32} />
        Contas para "{book.name}"
      </TitleWrapper>
      <PlusButton>
        Criar Nova Conta
      </PlusButton>

      <Accounts accounts={accounts} />

    </MainWrapper>
  );
};

export default AccountsView