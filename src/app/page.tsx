import TypographyH1 from "@/components/TypographyH1";
import TypographyH2 from "@/components/TypographyH2";
import TransactionsDataCards from "./components/TransactionsDataCards";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AddTransaction from "./components/AddTransaction";
import TransactionsHistory from "./components/transactions-history/TransactionsHistory";
import Dashboard from "./components/dashboard/Dashboard";
import RecentTransactions from "./components/recent-transactions/RecentTransactions";

export default function Home() {
  return (
    <>
      <header className="text-center mt-8">
        <TypographyH1>Spendee</TypographyH1>
        <TypographyH2>Manage your income and expenses with ease</TypographyH2>
      </header>
      <TransactionsDataCards />
      <Tabs defaultValue="dashboard">
        <TabsList className="w-full my-5 overflow-x-scroll">
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="add-transaction">Add Transaction</TabsTrigger>
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
        </TabsList>
        <TabsContent value="add-transaction">
          <AddTransaction />
        </TabsContent>
        <TabsContent value="transactions">
          <TransactionsHistory />
        </TabsContent>
        <TabsContent value="dashboard">
          <Dashboard />
        </TabsContent>
      </Tabs>
      <RecentTransactions />
    </>
  );
}
