import { BrowserRouter, Routes, Route } from 'react-router';
import BooksView from './views/BooksView';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<h1>Hi</h1>} />

        <Route path="/books" element={<BooksView />}>
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
