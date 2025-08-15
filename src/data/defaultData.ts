import type { Account, Book, Transaction } from "../types/types";

export type DEFAULT_DATA_TYPE = {
  accounts: Account[];
  books: Book[];
  transactions: Transaction[];
};

export const DEFAULT_DATA: DEFAULT_DATA_TYPE = {
  accounts: [
    {
      id: 1,
      bookId: 1,
      name: "Conta 1",
      description: "Descrição da Conta 1",
      type: "Expense",
    },
    {
      id: 2,
      bookId: 1,
      name: "Conta 2",
      description: "Descrição da Conta 2",
      type: "Asset",
    },
  ],
  books: [
    { id: 1, name: "Livro 1", description: "Descrição do Livro 1" },
    { id: 2, name: "Livro 2", description: "Descrição do Livro 2" },
  ],
  transactions: [
    {
      id: 1,
      bookId: 1,
      source_account_id: 1,
      destination_account_id: 2,
      datetime: new Date("2023-10-01"),
      description: "Transação 1",
      value: 100,
    },
    {
      id: 2,
      bookId: 1,
      source_account_id: 2,
      destination_account_id: 1,
      datetime: new Date("2023-10-02"),
      description: "Transação 2",
      value: -50,
    },
  ],
};

export const getBooks = (): Book[] => {
  return DEFAULT_DATA.books;
};

export const getBookById = (id: number): Book | undefined => {
  return DEFAULT_DATA.books.find((book) => book.id === id);
};

export const getBookByIdString = (id: string | undefined): Book | undefined => {
  const bookIdNumber = id && !isNaN(Number(id)) ? Number(id) : undefined;
  if (!bookIdNumber) return;

  return getBookById(bookIdNumber);
};

export const getAccountsByBookId = (bookId: number): Account[] => {
  return DEFAULT_DATA.accounts.filter((account) => account.bookId === bookId);
};

export const getAccountsByBook = (book: Book) => getAccountsByBookId(book.id);

export const getAccountById = (id: number) => {
  return DEFAULT_DATA.accounts.find((account) => account.id === id);
};

export const getTransactionsByBookId = (bookId: number): Transaction[] => {
  return DEFAULT_DATA.transactions.filter(
    (transaction) => transaction.bookId === bookId
  );
};

export const getTransactionsByBook = (book: Book) =>
  getTransactionsByBookId(book.id);
