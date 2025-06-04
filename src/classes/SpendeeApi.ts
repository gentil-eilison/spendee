import { User } from "@/contexts/UserContext";

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
}