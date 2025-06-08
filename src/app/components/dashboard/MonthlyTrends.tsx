"use client";

import Transactions from "@/app/transactions/classes/Transactions";
import TypographyH1 from "@/components/TypographyH1";
import TypographyH2 from "@/components/TypographyH2";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { useTransactions } from "@/contexts/TransactionsContext";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

const chartConfig = {
    income: {
        label: "Income",
        color: "var(--color-green-600)"
    },
    expense: {
        label: "Expense",
        color: "var(--color-red-600)"
    },
} satisfies ChartConfig;

export default function MonthlyTrends() {
    const { transactions } = useTransactions();
    const chartData = Transactions.getLastSixMonthsTransactionsByType(
        transactions
    );

    return (
        <Card>
            <CardHeader>
                <header>
                    <TypographyH1>Monthly Trends</TypographyH1>
                    <TypographyH2>Income vs Expenses over time</TypographyH2>
                </header>
            </CardHeader>
            <CardContent>
                <ChartContainer config={ chartConfig }>
                    <LineChart
                        accessibilityLayer
                        data={ chartData }
                    >
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis 
                            dataKey="month"
                        />
                        <YAxis />
                        <Line
                            dataKey="expense"
                            type="monotone"
                            stroke="var(--color-red-600)"
                            strokeWidth={2}
                        />
                        <Line
                            dataKey="income"
                            type="monotone"
                            stroke="var(--color-green-600)"
                            strokeWidth={2}
                        />
                    </LineChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
}