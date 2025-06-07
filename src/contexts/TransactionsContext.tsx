"use client";

import { Transaction } from "@/app/transactions/constants/types";
import { 
    createContext, 
    Dispatch, 
    ReactNode, 
    SetStateAction, 
    useContext, 
    useEffect, 
    useState 
} from "react";
import { useAlert } from "./AlertContext";
import SpendeeApi from "@/classes/SpendeeApi";

export interface TransactionsContextType {
    transactions: Transaction[],
    setTransactions: Dispatch<SetStateAction<Transaction[] | []>>
}

export const TransactionsContext = createContext<TransactionsContextType | undefined>(undefined);

export default function TransactionsProvider({ children }: { children: ReactNode }) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const { showAlert } = useAlert();

    useEffect(() => {
      const fetchTransactions = async () => {
          const spendee = new SpendeeApi();
          const data = await spendee.getTransactions();
          if (!data) {
              showAlert({
                  message: "Failed to fetch transactions, try again later",
                  type: "error"
              });
              return;
          }
          setTransactions(data);
      }
      fetchTransactions();
  }, []);

    return (
        <TransactionsContext.Provider value={{ transactions, setTransactions }}>
            { children }
        </TransactionsContext.Provider>
    );
}

export function useTransactions() {
    const context = useContext(TransactionsContext);
    if (context === undefined) {
        throw new Error("useTransactions must be used inside TransactionsProvider")
    }
    return context;
}