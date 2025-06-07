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

    public static getPercentageByCategory(transactions: Transaction[]): { category: string; percentage: number}[] {
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
}