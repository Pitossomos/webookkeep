import { Edit } from "lucide-react"
import type { Transaction } from "../types/types"

type TransactionsProps = {
  transactions: Transaction[];
  getAccountNameById: (id: number) => string;
}

const Transactions = ({transactions, getAccountNameById}: TransactionsProps) => {
  return (transactions.length === 0) 
    ? <p className="text-gray-600 text-lg"> 
        Nenhuma transação cadastrada para esta conta. Comece criando uma nova transação!
      </p>
    : <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-lg border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Data</th>
            <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Descrição</th>
            <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Valor</th>
            <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Conta Origem</th>
            <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Conta Destino</th>
            <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Ações</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {transactions.map((tx: Transaction) => (
            <tr key={tx.id} className="hover:bg-gray-50">
              <td className="py-3 px-4 whitespace-nowrap text-sm text-gray-800">
                {new Date(tx.datetime).toLocaleDateString()}
              </td>
              <td className="py-3 px-4 text-sm text-gray-800">
                {tx.description}</td>
              <td className={`py-3 px-4 whitespace-nowrap text-sm ${tx.value < 0 ? 'text-red-600' : 'text-green-600'} font-medium`}>
                {tx.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
              </td>
              <td className="py-3 px-4 text-sm text-gray-800">
                {getAccountNameById(tx.source_account_id)}
              </td>
              <td className="py-3 px-4 text-sm text-gray-800">
                {getAccountNameById(tx.destination_account_id)}
              </td>
              <td className="py-3 px-4 whitespace-nowrap text-sm">
                <button
                  className="p-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-colors duration-200"
                >
                  <Edit size={16} />
                </button>
              </td>
            </tr>
          )
        )}
      </tbody>
      </table>
    </div>
}

export default Transactions;