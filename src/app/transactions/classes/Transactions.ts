import { getLastSixMonths } from "@/utils/dates";
import { Transaction } from "../constants/types";

export default class Transactions {
    public static calculateTotalByType(
        transactions: Transaction[], 
        type: string
    ): number {
        return transactions
                    .filter(transaction => transaction.type === type)
                    .reduce((accumulator, transaction) => {
                        return accumulator + Number(transaction.amount)
                    }, 0);
    }

    public static getPercentageByCategory(
        transactions: Transaction[]): { category: string; percentage: number}[] 
    {
        if (!transactions?.length) return [];
        
        const totalTransactions = transactions.length;
        const categoryCounts = new Map<string, number>();

        transactions.forEach(({ category }) => {
            categoryCounts.set(category, (categoryCounts.get(category) || 0) + 1);
        });

        return Array.from(categoryCounts.entries().map(([ category, count ]) => ({
            category,
            percentage: Number(((count / totalTransactions) * 100).toFixed(2))
        })));
    }

    public static getLastSixMonthsTransactionsByType(
        transactions: Transaction[]
    ): { month: string; expense: number, income: number }[] {
        const data: { month: string; expense: number, income: number }[] = [];
        const monthsNumbers = new Map<number, string>([
            [0, "January"],
            [1, "February"],
            [2, "March"],
            [3, "April"],
            [4, "May"],
            [5, "June"],
            [6, "July"],
            [7, "August"],
            [8, "September"],
            [9, "October"],
            [10, "November"],
            [11, "December"],
        ]);
        const lastSixMonths = getLastSixMonths();
        for (let i = 0; i < lastSixMonths.length; i++) {
            let monthName = monthsNumbers.get(lastSixMonths[i].getMonth()) || "";
            let expensesCount = transactions
                                        .filter(transaction => {
                                            const transactionMonth = Number(
                                                transaction.date[5] + 
                                                transaction.date[6]
                                            ) - 1
                                            return (
                                                transactionMonth  === lastSixMonths[i].getMonth() 
                                                && 
                                                transaction.type === "expense"
                                            )
                                        }).length;
            let incomeCount = transactions
                                        .filter(transaction => {
                                            const transactionMonth = Number(
                                                transaction.date[5] + 
                                                transaction.date[6]
                                            ) - 1
                                            return (
                                                transactionMonth  === lastSixMonths[i].getMonth() 
                                                && 
                                                transaction.type === "income"
                                            )
                                        }).length;
            data.push({
                month: monthName,
                expense: expensesCount,
                income: incomeCount
            });
        }
        data.reverse();
        return data;
    }
}