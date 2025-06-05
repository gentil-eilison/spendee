import { TableCell, TableRow } from "@/components/ui/table";

interface TransactionData {
    date: string;
    type: string;
    category: string;
    description: string;
    amount: number;
}

interface TransactionRowProps {
    transaction: TransactionData;
}

export default function TransactionRow({ transaction }: TransactionRowProps) {
    return (
        <TableRow>
            <TableCell>{ transaction.date }</TableCell>
            <TableCell>{ transaction.type }</TableCell>
            <TableCell>{ transaction.category }</TableCell>
            <TableCell>{ transaction.description }</TableCell>
            <TableCell>{ transaction.amount }</TableCell>
        </TableRow>
    );
}