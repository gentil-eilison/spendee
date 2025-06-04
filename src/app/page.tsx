import TypographyH1 from "@/components/TypographyH1";
import TypographyH2 from "@/components/TypographyH2";
import TransactionsDataCards from "./components/TransactionsDataCards";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AddTransaction from "./components/AddTransaction";

export default function Home() {
  return (
    <>
      <header className="text-center mt-8">
        <TypographyH1>Spendee</TypographyH1>
        <TypographyH2>Manage your income and expenses with ease</TypographyH2>
      </header>
      <TransactionsDataCards />
      <Tabs defaultValue="add-transaction">
        <TabsList className="w-full my-5 overflow-x-scroll">
          <TabsTrigger className="text-[16px]" value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="add-transaction">Add Transaction</TabsTrigger>
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>
        <TabsContent value="add-transaction"><AddTransaction /></TabsContent>
      </Tabs>
    </>
  );
}
