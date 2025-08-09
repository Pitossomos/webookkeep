import { Edit } from "lucide-react";
import type { Account, Transaction } from "../../types/types";
import { useState } from "react";
import { getAccountById } from "../../data/defaultData";
import NotFound from "../../components/NotFound";
import SelectAccountOption from "./SelectAccountOptions";
import CurrencyInput from "./CurrencyInput";

type TransactionProps = {
  tx: Transaction;
  accounts: Account[];
};

const TransactionRow = ({ tx, accounts }: TransactionProps) => {
  const [isEditing, setEditing] = useState(false);

  const source = getAccountById(tx.source_account_id);
  const destination = getAccountById(tx.destination_account_id);

  if (!source || !destination) return <NotFound />;

  const [formValue, setFormValue] = useState({
    source: source.name,
    destination_account_id: destination.name,
    datetime: tx.datetime,
    description: tx.description,
    value: tx.value,
  });

  return (
    <tr key={tx.id} className="hover:bg-gray-50">
      <td className="p-3 whitespace-nowrap text-sm text-gray-800">
        <input
          type="date"
          className="border-b-2 disabled:border-white focus:outline-none focus:border-gray-300"
          value={new Date(formValue.datetime).toISOString().split("T")[0]}
          onChange={(e) =>
            setFormValue({ ...formValue, datetime: e.target.value })
          }
          disabled={!isEditing}
        />
      </td>

      <td className="py-3 px-4 text-sm text-gray-800">
        <input
          type="text"
          className="border-b-2 disabled:border-white focus:outline-none focus:border-gray-300"
          value={formValue.description}
          onChange={(e) =>
            setFormValue({ ...formValue, description: e.target.value })
          }
          disabled={!isEditing}
        />
      </td>

      <td
        className={`py-3 px-4 whitespace-nowrap text-sm ${
          tx.value < 0 ? "text-red-600" : "text-green-600"
        } font-medium`}
      >
        R$
        <CurrencyInput isEditing={isEditing} initialValue={formValue.value} />
      </td>

      <td className="py-3 px-4 text-sm text-gray-800">
        <select
          className="border-b-2 disabled:border-white focus:outline-none focus:border-gray-300"
          value={formValue.source}
          onChange={(e) =>
            setFormValue({ ...formValue, source: e.target.value })
          }
          disabled={!isEditing}
        >
          <SelectAccountOption accounts={accounts} />
        </select>
      </td>

      <td className="py-3 px-4 text-sm text-gray-800">
        <select
          className="border-b-2 disabled:border-white focus:outline-none focus:border-gray-300"
          disabled={!isEditing}
        >
          <SelectAccountOption accounts={accounts} />
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
