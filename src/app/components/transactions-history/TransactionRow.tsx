import { TableCell, TableRow } from "@/components/ui/table";
import { capitalize } from "@/utils/strings";

export interface TransactionData {
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
    const formattedDescription = capitalize(transaction.description);
    const formattedDate = new Date(transaction.date).toLocaleDateString();
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
            typeBackgroundColorClass = "bg-red-400";
            amountColorClass = "text-red-600";
            amountPrefix = "-";
            break;
    }

    return (
        <TableRow>
            <TableCell>{ formattedDate }</TableCell>
            <TableCell>
                <span className={
                    `${typeBackgroundColorClass} text-white rounded-3xl text-center inline-block w-[100px] py-0.5`
                }>
                    { transaction.type }
                </span>
            </TableCell>
            <TableCell>{ formattedDescription }</TableCell>
            <TableCell>{ transaction.description }</TableCell>
            <TableCell className={
                `${amountColorClass} font-medium`
            }>
                {amountPrefix}${ Number(transaction.amount).toLocaleString() }
            </TableCell>
        </TableRow>
    );
}