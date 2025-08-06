import type { Transaction } from "../../types/types";
import HeaderCell from "../../components/HeaderCell";
import TransactionRow from "./TransactionRow";

type TransactionsProps = {
  transactions: Transaction[];
  editing: boolean;
};

const Transactions = ({ transactions }: TransactionsProps) => {
  return transactions.length === 0 ? (
    <p className="text-gray-600 text-lg">
      Nenhuma transação cadastrada para esta conta. Comece criando uma nova
      transação!
    </p>
  ) : (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-lg shadow-lg border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <HeaderCell text="Data" />
            <HeaderCell text="Descrição" />
            <HeaderCell text="Valor" />
            <HeaderCell text="Conta Origem" />
            <HeaderCell text="Conta Destino" />
            <HeaderCell text="Ações" />
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {transactions.map((tx: Transaction) => (
            <TransactionRow key={tx.id} tx={tx} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
