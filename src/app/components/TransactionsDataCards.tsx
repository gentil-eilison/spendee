import { CalendarDays, TrendingDown, TrendingUp, Wallet } from "lucide-react";
import TransactionDataCard from "./TransactionDataCard";

export default function TransactionsDataCards() {
    return (
        <div className="flex flex-col md:flex-row justify-between gap-4 mt-6">
            <TransactionDataCard
                icon={<TrendingUp className="text-green-600"/>}
                headerText="Total Income"
                contentColorClass="text-green-600"
            >
                $3,500
            </TransactionDataCard>
            <TransactionDataCard
                icon={<TrendingDown className="text-red-600"/>}
                headerText="Total Expenses"
                contentColorClass="text-red-600"
            >
                $1,730
            </TransactionDataCard>
            <TransactionDataCard
                icon={<Wallet className="text-blue-600"/>}
                headerText="Balance"
                contentColorClass="text-green-600"
            >
                $1,770
            </TransactionDataCard>
            <TransactionDataCard
                icon={<CalendarDays className="text-purple-600"/>}
                headerText="This month"
                contentColorClass="text-purple-600"
                caption="transactions"
            >
                6
            </TransactionDataCard>
        </div>
    );
}