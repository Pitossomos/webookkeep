export type Transaction = {
  id: number;
  bookId: number;
  source_account_id: number;
  destination_account_id: number;
  datetime: Date;
  description: string;
  value: number;
};

export type Account = {
  id: number;
  bookId: number;
  name: string;
  description?: string;
  type: "Asset" | "Liability" | "Income" | "Expense" | "Equity";
};

export type Book = {
  id: number;
  name: string;
  description?: string;
};

export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
};
