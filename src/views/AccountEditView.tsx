import { useState, type FormEvent } from "react";

type AccountEditViewProps = {
  editingAccount: boolean
}

const AccountEditView = ({ editingAccount }: AccountEditViewProps ) => {

  const [account, setAccount] = useState({ id: 1, name: 'Conta 1', description: 'Descrição da Conta 1', type: 'Checking' });
  const handleSubmitAccount = (e: FormEvent) => {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmitAccount} className="m-8 space-y-4 max-w-xl">
      <div>
        <label htmlFor="accountName" className="block text-sm font-medium text-gray-700 mb-1">Nome da Conta</label>
        <input
          type="text"
          id="accountName"
          value={account.name}
          onChange={(e) => setAccount({ ...account, name: e.target.value })}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
          required
        />
      </div>
      <div>
        <label htmlFor="accountDescription" className="block text-sm font-medium text-gray-700 mb-1">Descrição</label>
        <textarea
          id="accountDescription"
          value={account.description}
          onChange={(e) => setAccount({ ...account, description: e.target.value })}
          rows={3}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
        ></textarea>
      </div>
      <div>
        <label htmlFor="accountType" className="block text-sm font-medium text-gray-700 mb-1">Tipo</label>
        <select
          id="accountType"
          value={account.type}
          onChange={(e) => setAccount({ ...account, type: e.target.value })}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
        >
          <option value="Checking">Conta Corrente</option>
          <option value="Savings">Poupança</option>
          <option value="Credit Card">Cartão de Crédito</option>
          <option value="Investment">Investimento</option>
          <option value="Cash">Dinheiro</option>
        </select>
      </div>
      <div className="flex justify-end space-x-3">
        <button
          type="button"
          className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition-colors duration-200"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors duration-200"
        >
          {editingAccount ? 'Salvar Alterações' : 'Criar Conta'}
        </button>
      </div>
    </form>
  );
}

export default AccountEditView;