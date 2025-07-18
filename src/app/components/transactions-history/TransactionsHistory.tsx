"use client";

import TypographyH1 from "@/components/TypographyH1";
import TypographyH2 from "@/components/TypographyH2";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { 
    Table, 
    TableBody, 
    TableHead,
    TableHeader, 
    TableRow 
} from "@/components/ui/table";
import TransactionRow from "./TransactionRow";
import { useTransactions } from "@/contexts/TransactionsContext";

export default function TransactionsHistory() {
    const { transactions } = useTransactions();

    return (
        <Card>
            <CardHeader>
                <header>
                    <TypographyH1>All Transactions</TypographyH1>
                    <TypographyH2>
                        Complete history of your financial activities
                    </TypographyH2>
                </header>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="text-gray-600">Date</TableHead>
                            <TableHead className="text-gray-600">Type</TableHead>
                            <TableHead className="text-gray-600">Category</TableHead>
                            <TableHead className="text-gray-600">Description</TableHead>
                            <TableHead className="text-gray-600">Amount</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        { transactions.map(transaction => (
                            <TransactionRow transaction={ transaction } key={ transaction.id } />
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}