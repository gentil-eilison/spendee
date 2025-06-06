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
    let typeBackgroundColorClass = "";
    let amountColorClass = "";
    let amountPrefix = "";

    switch(transaction.type) {
        case "income":
            typeBackgroundColorClass = "bg-black";
            amountColorClass = "text-green-600";
            amountPrefix = "+";
            break;
        default:
            typeBackgroundColorClass = "bg-red-600";
            amountColorClass = "text-red-600";
            amountPrefix = "-";
            break;
    }

    return (
        <TableRow>
            <TableCell>{ transaction.date }</TableCell>
            <TableCell>
                <span className={
                    `${typeBackgroundColorClass} text-white rounded-3xl text-center py-1 px-4`
                }>
                    { transaction.type }
                </span>
            </TableCell>
            <TableCell>{ transaction.category }</TableCell>
            <TableCell>{ transaction.description }</TableCell>
            <TableCell className={
                `${amountColorClass} font-medium`
            }>
                {amountPrefix}${ transaction.amount.toLocaleString() }
            </TableCell>
        </TableRow>
    );
}