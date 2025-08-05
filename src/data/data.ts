import type { Account } from "../types/types";

export const TRANSACTIONS = [
  {
    id: 1,
    bookId: 1,
    source_account_id: 1,
    destination_account_id: 2,
    datetime: "2023-10-01T00:00:00Z",
    description: "Transação 1",
    value: 100,
  },
  {
    id: 2,
    bookId: 1,
    source_account_id: 2,
    destination_account_id: 1,
    datetime: "2023-10-02T00:00:00Z",
    description: "Transação 2",
    value: -50,
  },
];

export const ACCOUNTS: Account[] = [
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
];

export const BOOKS = [
  { id: 1, name: "Livro 1", description: "Descrição do Livro 1" },
  { id: 2, name: "Livro 2", description: "Descrição do Livro 2" },
];
