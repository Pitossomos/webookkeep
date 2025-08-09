import { BrowserRouter, Routes, Route } from "react-router";
import BooksView from "./views/BooksView";
import AccountsView from "./views/AccountsView";
import TransactionsView from "./views/TransactionsView";
import AccountEditView from "./views/AccountEditView";
import BookEditView from "./views/BookEditView";
import BookView from "./views/BookView";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

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

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
