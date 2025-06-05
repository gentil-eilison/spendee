import TypographyH1 from "@/components/TypographyH1";
import TypographyH2 from "@/components/TypographyH2";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { 
    Table, 
    TableBody, 
    TableCell, 
    TableHead,
    TableHeader, 
    TableRow 
} from "@/components/ui/table";
import TransactionRow from "./TransactionRow";

export default function TransactionsHistory() {
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
                        <TransactionRow transaction={{ date: "2025-01-01", type: "income", category: "Healthcare", description: "Urologist appointment", amount: 2000 }} />
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}