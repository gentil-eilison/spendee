import { Transaction } from "@/app/page";

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
}