import { BrowserRouter, Routes, Route, Link } from "react-router";
import BooksView from "./views/BooksView";
import AccountsView from "./views/AccountsView";
import TransactionsView from "./views/TransactionsView";
import NavLinkButton from "./components/NavLinkButton";
import AccountEditView from "./views/AccountEditView";
import BookEditView from "./views/BookEditView";
import BookView from "./views/BookView";

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
        </div>
      </nav>

      <Routes>
        <Route index element={<h1>Hi</h1>} />
        <Route path="books">
          <Route index element={<BooksView />} />

          <Route path=":bookId">
            <Route index element={<BookView />} />
            <Route path="edit" element={<BookEditView editing={true} />} />
            <Route path="transactions" element={<TransactionsView />} />
            <Route path="accounts">
              <Route index element={<AccountsView />} />
              <Route
                path=":accountId/edit"
                element={<AccountEditView editing={true} />}
              />
              <Route path="new" element={<AccountEditView editing={false} />} />
            </Route>
          </Route>
          <Route path="new" element={<BookEditView editing={false} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
