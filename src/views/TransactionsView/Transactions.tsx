import { Edit } from "lucide-react";
import type { Transaction } from "../../types/types";
import HeaderCell from "../../components/HeaderCell";

type TransactionsProps = {
  transactions: Transaction[];
  editing: boolean;
};

const Transactions = ({ transactions, editing = false }: TransactionsProps) => {
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
            <tr key={tx.id} className="hover:bg-gray-50">
              <td className="p-3 whitespace-nowrap text-sm text-gray-800">
                <input
                  type="date"
                  className="border-b-2 border-white focus:outline-none focus:border-gray-300"
                  disabled={!editing}
                  value={new Date(tx.datetime).toISOString().split("T")[0]}
                />
              </td>

              <td className="py-3 px-4 text-sm text-gray-800">
                <input
                  type="text"
                  className="border-b-2 border-white focus:outline-none focus:border-gray-300"
                  value={tx.description}
                />
              </td>

              <td
                className={`py-3 px-4 whitespace-nowrap text-sm ${
                  tx.value < 0 ? "text-red-600" : "text-green-600"
                } font-medium`}
              >
                R$
                <input
                  type="number"
                  step="0.01"
                  className="border-b-2 border-white focus:outline-none focus:border-gray-300 text-right"
                  value={tx.value.toFixed(2)}
                />
              </td>

              <td className="py-3 px-4 text-sm text-gray-800">
                <select
                  className="border-b-2 border-white focus:outline-none focus:border-gray-300"
                  value="Receita"
                >
                  <option value="Salário" label="Salário" />
                  <option value="Receita" label="Receita" />
                  <option value="Despesa" label="Despesa" />
                  <option value="Dívida" label="Dívida" />
                </select>
              </td>

              <td className="py-3 px-4 text-sm text-gray-800">
                <select className="border-b-2 border-white focus:outline-none focus:border-gray-300">
                  <option value="Salário" label="Salário" />
                  <option value="Receita" label="Receita" />
                  <option value="Despesa" label="Despesa" />
                  <option value="Dívida" label="Dívida" />
                </select>
              </td>

              <td className="py-3 px-4 whitespace-nowrap text-sm">
                <button className="p-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-colors duration-200">
                  <Edit size={16} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
