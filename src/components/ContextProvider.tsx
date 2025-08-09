import { createContext } from "react";
import type { Account, Book, Transaction } from "../types/types";

export type ContextType = {
  book: Book | null;
  accounts: Account[];
  transactions: Transaction[];
  setContext: null | ((context: ContextType) => void);
};

const ContextProvider = createContext<ContextType>({
  book: null,
  accounts: [],
  transactions: [],
  setContext: () => {},
});

export default ContextProvider;
