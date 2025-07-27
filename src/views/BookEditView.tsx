import { useState, type FormEvent} from "react";

type BookEditViewProps = {
  editing: boolean;
};

const BookEditView = ({editing}: BookEditViewProps) => {
  const [book, setBook] = useState(editing ? { id: 1, name: "Livro 1", description: "Descrição do Livro 1" } : {id: null, name: "", description: ""});

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="bookName" className="block text-sm font-medium text-gray-700 mb-1">Nome do Livro</label>
        <input
          type="text"
          id="bookName"
          value={book.name}
          onChange={(e) => setBook({...book, name: e.target.value})}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          required
        />
      </div>
      <div>
        <label htmlFor="bookDescription" className="block text-sm font-medium text-gray-700 mb-1">Descrição</label>
        <textarea
          id="bookDescription"
          value={book.description}
          onChange={(e) => setBook({...book, description: e.target.value})}
          rows={3}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        ></textarea>
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
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
        >
          {editing ? 'Salvar Alterações' : 'Criar Livro'}
        </button>
      </div>
    </form>
  )
}

export default BookEditView;