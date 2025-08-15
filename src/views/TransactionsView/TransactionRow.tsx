import { Check, Edit } from "lucide-react";
import type { Account, Transaction } from "../../types/types";
import { useState } from "react";
import { getAccountById } from "../../data/defaultData";
import SelectAccountOption from "./SelectAccountOptions";
import CurrencyInput from "./CurrencyInput";

type TransactionProps = {
  transaction?: Transaction;
  accounts: Account[];
};

const TransactionRow = ({ transaction, accounts }: TransactionProps) => {
  const [isEditing, setEditing] = useState<boolean>(!transaction);

  const source = transaction
    ? getAccountById(transaction.source_account_id)
    : null;
  const destination = transaction
    ? getAccountById(transaction.destination_account_id)
    : null;

  const [formValue, setFormValue] = useState({
    datetime: transaction?.datetime || new Date(),
    description: transaction?.description || "Nova transação",
    source: source?.name || "",
    destination_account_id: destination?.name || "",
    value: transaction?.value || 0,
  });

  return (
    <tr
      className={
        isEditing ? "bg-yellow-50 hover:bg-yellow-200/20" : "hover:bg-gray-200"
      }
    >
      <td className="p-3 whitespace-nowrap text-sm text-gray-800">
        <input
          type="date"
          value={new Date(formValue.datetime).toISOString().split("T")[0]}
          onChange={(e) =>
            setFormValue({ ...formValue, datetime: new Date(e.target.value) })
          }
          disabled={!isEditing}
        />
      </td>

      <td className="py-3 px-4 text-sm text-gray-800">
        <input
          type="text"
          value={formValue.description}
          onChange={(e) =>
            setFormValue({ ...formValue, description: e.target.value })
          }
          disabled={!isEditing}
        />
      </td>

      <td
        className={`py-3 px-4 whitespace-nowrap text-sm ${
          formValue.value < 0 ? "text-red-600" : "text-green-600"
        } font-medium`}
      >
        R$
        <CurrencyInput isEditing={isEditing} initialValue={formValue.value} />
      </td>

      <td className="py-3 px-4 text-sm text-gray-800">
        <select
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
        <select disabled={!isEditing}>
          <SelectAccountOption accounts={accounts} />
        </select>
      </td>
      <td className="py-3 px-4 whitespace-nowrap text-sm">
        <button
          title={isEditing ? "Concluir edição" : "Editar"}
          className={`p-2 text-white rounded-md transition-colors duration-100 ${
            isEditing
              ? "bg-blue-500 hover:bg-blue-600"
              : "bg-yellow-500 hover:bg-yellow-600"
          }`}
          onClick={() => setEditing(!isEditing)}
        >
          {isEditing ? <Check size={16} /> : <Edit size={16} />}
        </button>
      </td>
    </tr>
  );
};

export default TransactionRow;
