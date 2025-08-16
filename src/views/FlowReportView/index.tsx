import type { Transaction } from "../../types/types";
import {
  getAccountById,
  getBookByIdString,
  getTransactionsByBook,
} from "../../data/defaultData";
import { useParams } from "react-router";
import NotFound from "../../components/NotFound";
import MainWrapper from "../../components/MainWrapper";
import TitleWrapper from "../../components/TitleWrapper";
import { LineChart } from "lucide-react";

type MonthReportType = {
  accountReports: Record<number, number>; // accountId -> monthly balance
  totalExpenses: number;
  totalIncome: number;
};

const FlowReportView = () => {
  const bookId = useParams().bookId;
  const book = getBookByIdString(bookId);

  if (!book) return <NotFound />;

  const transactions: Transaction[] = getTransactionsByBook(book);

  if (!transactions || transactions.length === 0) {
    return <div>No transactions found.</div>;
  }

  const thisYear = new Date().getFullYear();
  const yearTransactions = transactions.filter(
    (transaction) => transaction.datetime.getFullYear() === thisYear
  );

  if (yearTransactions.length === 0) {
    return <div> No transactions for this year.</div>;
  }

  const monthNames = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  const monthReports: MonthReportType[] = monthNames.map(() => {
    return {
      accountReports: {},
      totalExpenses: 0,
      totalIncome: 0,
    };
  });

  transactions.forEach(
    (transaction) => {
      const monthId = transaction.datetime.getMonth();

      const sourceAccount = getAccountById(transaction.source_account_id);
      const destinationAccount = getAccountById(
        transaction.destination_account_id
      );

      if (!sourceAccount || !destinationAccount) return;

      const sourceType = sourceAccount.type;
      const destinationType = destinationAccount.type;

      if (sourceAccount.type === "Income")
        monthReports[monthId].totalIncome += transaction.value;
      if (sourceAccount.type === "Expense")
        monthReports[monthId].totalExpenses -= transaction.value;
      if (destinationAccount.type === "Income")
        monthReports[monthId].totalIncome -= transaction.value;
      if (destinationAccount.type === "Expense")
        monthReports[monthId].totalExpenses += transaction.value;

      monthReports[monthId].accountReports[sourceAccount.id] =
        monthReports[monthId].accountReports[sourceAccount.id];
    },
    [monthReports]
  );

  return (
    <MainWrapper>
      <TitleWrapper>
        <LineChart className="mr-3 text-green-600" size={32} />
        <h1>Relatório de Fluxo</h1>
        {/* TODO */}
      </TitleWrapper>
      <section></section>
    </MainWrapper>
  );
};

export default FlowReportView;
