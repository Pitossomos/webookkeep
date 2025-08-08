import { createContext } from "react";
import type { Account, Book, Transaction } from "../types/types";

type ContextType = {
  book: Book | null;
  accounts: Account[];
  transactions: Transaction[];
};

const ContextProvider = createContext<ContextType>({
  book: null,
  accounts: [],
  transactions: [],
});

export default ContextProvider;
