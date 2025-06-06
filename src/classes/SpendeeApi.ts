import { AddTransactionData } from "@/app/components/AddTransaction";
import { User } from "@/contexts/UserContext";

interface Transaction extends AddTransactionData {
    id: number;
}

export default class SpendeeApi {
    private baseUrl = process.env.NEXT_PUBLIC_SPENDEE_API_BASE_URL;

    public async getUser(): Promise<User|null> {
        try {
            const response = await fetch(`${this.baseUrl}/profile`);
            if (response.status !== 200) {
                return null;
            }
            const data: User = await response.json();
            return data;
        } catch(error) {
            console.log(error);
            return null;
        }
    }

    public async postTransaction(transaction: AddTransactionData): Promise<Transaction|null> {
        try {
            const response = await fetch(`${this.baseUrl}/transactions`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(transaction),
            });
            if (response.status !== 201) {
                return null;
            }
            const data: Transaction = await response.json();
            return data;
        } catch(error) {
            console.log(error);
            return null;
        }
    }

    public async getTransactions(): Promise<Transaction[]|null> {
        try {
            const response = await fetch(`${this.baseUrl}/transactions`);
            if (response.status !== 200) {
                return null;
            } 
            return await response.json();
        } catch(error) {
            console.log(error);
            return null;
        }
    }
}