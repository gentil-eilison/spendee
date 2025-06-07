"use client";

import { CalendarDays, TrendingDown, TrendingUp, Wallet } from "lucide-react";
import TransactionDataCard from "./TransactionDataCard";
import Transactions from "@/app/transactions/classes/Transactions";
import { useTransactions } from "@/contexts/TransactionsContext";

export default function TransactionsDataCards() {
    const { transactions } = useTransactions();
    const totalIncome = Transactions.calculateTotalByType(transactions, "income");
    const totalExpenses = Transactions.calculateTotalByType(transactions, "expense");
    const balance = totalIncome - totalExpenses;
    const balanceColorClass = balance > 0 ? "text-green-600" : "text-red-600";

    return (
        <div className="flex flex-col md:flex-row justify-between gap-4 mt-6">
            <TransactionDataCard
                icon={<TrendingUp className="text-green-600"/>}
                headerText="Total Income"
                contentColorClass="text-green-600"
            >
                ${totalIncome.toLocaleString() || 0}
            </TransactionDataCard>
            <TransactionDataCard
                icon={<TrendingDown className="text-red-600"/>}
                headerText="Total Expenses"
                contentColorClass="text-red-600"
            >
                ${totalExpenses.toLocaleString() || 0}
            </TransactionDataCard>
            <TransactionDataCard
                icon={<Wallet className="text-blue-600"/>}
                headerText="Balance"
                contentColorClass={ balanceColorClass }
            >
                ${ balance }
            </TransactionDataCard>
            <TransactionDataCard
                icon={<CalendarDays className="text-purple-600"/>}
                headerText="This month"
                contentColorClass="text-purple-600"
                caption="transactions"
            >
                { transactions.length }
            </TransactionDataCard>
        </div>
    );
}