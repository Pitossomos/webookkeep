import { BrowserRouter, Routes, Route } from 'react-router';
import BooksView from './views/BooksView';
import AccountsView from './views/AccountsView';
import TransactionsView from './views/TransactionsView';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<h1>Hi</h1>} />

        <Route path="/books" element={<BooksView />} />
        <Route path="/accounts" element={<AccountsView />} />
        <Route path="/transactions" element={<TransactionsView />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
