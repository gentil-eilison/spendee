"use client";

import TypographyH1 from "@/components/TypographyH1";
import TypographyH2 from "@/components/TypographyH2";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useTransactions } from "@/contexts/TransactionsContext";
import RecentTransaction from "./RecentTransaction";

export default function RecentTransactions() {
    const { transactions } = useTransactions();

    return (
        <Card className="mt-6">
            <CardHeader>
                <header>
                    <TypographyH1>Recent Transactions</TypographyH1>
                    <TypographyH2>Your latest financial activies</TypographyH2>
                </header>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
                { transactions && (
                    transactions.toReversed().slice(0, 5).map(transaction => (
                        <RecentTransaction 
                            key={ transaction.id } 
                            transaction={ transaction } 
                        />
                    ))
                ) }
            </CardContent>
        </Card>
    );
}