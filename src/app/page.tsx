"use client";

import TypographyH1 from "@/components/TypographyH1";
import TypographyH2 from "@/components/TypographyH2";
import TransactionsDataCards from "./components/TransactionsDataCards";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AddTransaction from "./components/AddTransaction";
import TransactionsHistory from "./components/transactions-history/TransactionsHistory";
import { useAlert } from "@/contexts/AlertContext";
import { useEffect, useState } from "react";
import { TransactionData } from "./components/transactions-history/TransactionRow";
import SpendeeApi from "@/classes/SpendeeApi";

export interface Transaction extends TransactionData {
    id: number;
}

export default function Home() {
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
    <>
      <header className="text-center mt-8">
        <TypographyH1>Spendee</TypographyH1>
        <TypographyH2>Manage your income and expenses with ease</TypographyH2>
      </header>
      { transactions && (
        <TransactionsDataCards transactions={ transactions } />
      )}
      <Tabs defaultValue="add-transaction">
        <TabsList className="w-full my-5 overflow-x-scroll">
          <TabsTrigger className="text-[16px]" value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="add-transaction">Add Transaction</TabsTrigger>
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>
        <TabsContent value="add-transaction"><AddTransaction /></TabsContent>
        { transactions && (
          <TabsContent value="transactions"><TransactionsHistory transactions={ transactions }/></TabsContent>
        )}
      </Tabs>
    </>
  );
}
