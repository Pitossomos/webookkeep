import { Edit } from "lucide-react";
import type { Transaction } from "../../types/types";
import { useState } from "react";

type TransactionProps = {
  tx: Transaction;
};

const TransactionRow = ({ tx }: TransactionProps) => {
  const [isEditing, setEditing] = useState(false);

  return (
    <tr key={tx.id} className="hover:bg-gray-50">
      <td className="p-3 whitespace-nowrap text-sm text-gray-800">
        <input
          type="date"
          className="border-b-2 disabled:border-white focus:outline-none focus:border-gray-300"
          value={new Date(tx.datetime).toISOString().split("T")[0]}
          disabled={!isEditing}
        />
      </td>

      <td className="py-3 px-4 text-sm text-gray-800">
        <input
          type="text"
          className="border-b-2 disabled:border-white focus:outline-none focus:border-gray-300"
          value={tx.description}
          disabled={!isEditing}
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
          className="border-b-2 disabled:border-white focus:outline-none focus:border-gray-300 text-right"
          disabled={!isEditing}
          value={tx.value.toFixed(2)}
        />
      </td>

      <td className="py-3 px-4 text-sm text-gray-800">
        <select
          className="border-b-2 disabled:border-white focus:outline-none focus:border-gray-300"
          value="Receita"
          disabled={!isEditing}
        >
          <option value="Salário" label="Salário" />
          <option value="Receita" label="Receita" />
          <option value="Despesa" label="Despesa" />
          <option value="Dívida" label="Dívida" />
        </select>
      </td>

      <td className="py-3 px-4 text-sm text-gray-800">
        <select
          className="border-b-2 disabled:border-white focus:outline-none focus:border-gray-300"
          disabled={!isEditing}
        >
          <option value="Salário" label="Salário" />
          <option value="Receita" label="Receita" />
          <option value="Despesa" label="Despesa" />
          <option value="Dívida" label="Dívida" />
        </select>
      </td>

      <td className="py-3 px-4 whitespace-nowrap text-sm">
        <button
          className="p-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-colors duration-200"
          onClick={() => setEditing(!isEditing)}
        >
          <Edit size={16} />
        </button>
      </td>
    </tr>
  );
};

export default TransactionRow;
