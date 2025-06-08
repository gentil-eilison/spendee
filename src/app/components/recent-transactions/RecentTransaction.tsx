import { Transaction } from "@/app/transactions/constants/types"
import { Card, CardContent } from "@/components/ui/card";
import { capitalize } from "@/utils/strings";
import { TrendingDown, TrendingUp } from "lucide-react";

interface RecentTransactionProps {
    transaction: Transaction;
}

export default function RecentTransaction({ transaction }: RecentTransactionProps) {
    const bgColorClass = transaction.type === "income" ? "bg-green-100" : "bg-red-100";

    function getTransactionIcon() {
        if (transaction.type === "income") {
            return (
                <TrendingUp  
                    color="var(--color-green-600)"
                />
            );
        }

        return (
            <TrendingDown 
                color="var(--color-red-600)"
            />
        );
    }

    function getTransactionAmountDisplay() {
        const symbol = transaction.type === "income" ? "+" : "-";
        const colorClass = transaction.type === "income" ? "text-green-600" : "text-red-600";
        return (
            <p 
                className={`${colorClass} font-bold text-right`}
            >
                    {symbol}${ Number(transaction.amount).toLocaleString() }
            </p>
        );
    }

    return (
        <Card>
            <CardContent className="flex justify-between">
                <div className="flex items-center gap-4">
                    <div className={`rounded-full p-2 ${ bgColorClass }`}>
                        { getTransactionIcon() }
                    </div>
                    <span>
                        <p className="font-bold">{ transaction.description }</p>
                        <p className="text-gray-600">{ capitalize(transaction.category) }</p>
                    </span>
                </div>
                <div>
                    { getTransactionAmountDisplay() }
                    <p className="text-gray-600">{ transaction.date }</p>
                </div>
            </CardContent>
        </Card>
    );
}