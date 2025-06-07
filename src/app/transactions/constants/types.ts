export interface Transaction {
    id?: number;
    date: string;
    type: string;
    category: string;
    description: string;
    amount: number;
}