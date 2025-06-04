import TypographyH1 from "@/components/TypographyH1";
import TypographyH2 from "@/components/TypographyH2";
import TransactionsDataCards from "./components/TransactionsDataCards";

export default function Home() {
  return (
    <>
      <header className="text-center mt-8">
        <TypographyH1>Spendee</TypographyH1>
        <TypographyH2>Manage your income and expenses with ease</TypographyH2>
      </header>
      <TransactionsDataCards />
    </>
  );
}
