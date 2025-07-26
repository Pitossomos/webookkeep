import { BrowserRouter, Routes, Route, Link } from 'react-router';
import BooksView from './views/BooksView';
import AccountsView from './views/AccountsView';
import TransactionsView from './views/TransactionsView';
import NavLinkButton from './components/NavLinkButton';
import AccountEditView from './views/AccountEditView';

function App() {
  return (
    <BrowserRouter>
      <nav className="flex space-x-4 bg-gray-800 p-4">
        <Link to="/" className="text-white text-xl font-bold">
          weBookkeep
        </Link>

        <div className="flex space-x-2">
          <NavLinkButton to="/">Home</NavLinkButton>
          <NavLinkButton to="books">Books</NavLinkButton>
          <NavLinkButton to="transactions">Transactions</NavLinkButton>
          <NavLinkButton to="accounts">Accounts</NavLinkButton>
        </div>
      </nav>
      
      <Routes>
        <Route index element={<h1>Hi</h1>} />
        <Route path="books" element={<BooksView />} />
        <Route path="accounts"> 
          <Route index element={<AccountsView />} />
          <Route path=":accountId/edit" element={<AccountEditView editingAccount={true} />} />
          <Route path="new" element={<AccountEditView editingAccount={false} />} />
        </Route>
        <Route path="transactions" element={<TransactionsView />}>
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
