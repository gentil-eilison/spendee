"use client";

import { Cell, Pie, PieChart } from "recharts";
import { 
    ChartConfig, 
    ChartContainer, 
} from "@/components/ui/chart";
import { TRANSACTION_CATEGORIES } from "../../transactions/constants/categories";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import TypographyH1 from "@/components/TypographyH1";
import TypographyH2 from "@/components/TypographyH2";
import Transactions from "../../transactions/classes/Transactions";
import { useTransactions } from "@/contexts/TransactionsContext";

const COLORS_BY_CATEGORY = new Map<string, string>([
    ["rent", "#2A9D8F"],
    ["groceries", "#E76F51"],
    ["utilities", "#264653"],
    ["entertainment", "#E9C46A"],
    ["transportation", "#A8DADC"],
    ["healthcare", "#2A9D8F"],
    ["other", "#A3B18A"]
]);

const chartConfig = {
    rent: {
        label: TRANSACTION_CATEGORIES.get("rent")?.label,
        color: "#2A9D8F",
    },
    groceries: {
        label: TRANSACTION_CATEGORIES.get("groceries")?.label,
        color: "#E76F51",
    },
    utilities: {
        label: TRANSACTION_CATEGORIES.get("utilities")?.label,
        color: "#264653",
    },
    entertainment: {
        label: TRANSACTION_CATEGORIES.get("entertainment")?.label,
        color: "#E9C46A",
    },
    transportation: {
        label: TRANSACTION_CATEGORIES.get("transportation")?.label,
        color: "#A8DADC",
    },
    healthcare: {
        label: TRANSACTION_CATEGORIES.get("healthcare")?.label,
        color: "#2A9D8F",
    },
    other: {
        label: TRANSACTION_CATEGORIES.get("other")?.label,
        color: "#A3B18A",
    }
} satisfies ChartConfig;

export default function ExpenseBreakdown() {
    const { transactions } = useTransactions();
    const percentageByCategoryData = Transactions.getPercentageByCategory(
        transactions
    );
    const chartData = percentageByCategoryData.map(({ category, percentage }) => ({
        name: TRANSACTION_CATEGORIES.get(category)?.label || category,
        value: percentage,
        color: COLORS_BY_CATEGORY.get(category) || "#000"
    }));

    return (
        <Card>
            <CardHeader>
                <header>
                    <TypographyH1>Expense Breakdown</TypographyH1>
                    <TypographyH2>Spending by category</TypographyH2>
                </header>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <PieChart accessibilityLayer>
                        <Pie
                            data={chartData} 
                            dataKey="value" 
                            nameKey="name"
                            label={({ name, value }) => `${name} ${(value).toFixed(0)}%`}
                            outerRadius={80}
                        >
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                    </PieChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
}