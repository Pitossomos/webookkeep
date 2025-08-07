import { Link, useParams } from "react-router";
import { Edit } from "lucide-react";
import type { Account } from "../../types/types";

type AccountsProps = {
  accounts: Account[];
};

const Accounts = ({ accounts }: AccountsProps) => {
  const { bookId } = useParams<{ bookId: string }>();

  return accounts.length === 0 ? (
    <p className="text-gray-600 text-lg">
      Nenhuma conta cadastrada para este livro. Comece criando uma nova conta!
    </p>
  ) : (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {accounts.map((account) => (
        <div
          key={account.id}
          className="bg-white p-6 rounded-lg shadow-lg border border-gray-200"
        >
          <h3 className="text-xl font-semibold mb-2 text-gray-800 flex justify-between">
            {account.name}
            <Link to={`/books/${bookId}/accounts/${account.id}/edit`}>
              <button className="p-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-colors duration-200">
                <Edit size={16} />
              </button>
            </Link>
          </h3>
          <p className="text-gray-700 font-medium text-sm mb-4">
            Tipo: {account.type}
          </p>
          <p className="text-gray-600 mb-2 text-sm">{account.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Accounts;
