"use client";

import { createContext, useState, useEffect, ReactNode } from "react";
import SpendeeApi from "@/classes/SpendeeApi";

export interface User {
    firstName: string;
    lastName: string;
    balance: string;
}

interface UserContextType {
    user: User | null;
    setUser: (user: User) => void;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);

export default function UserProvider({ children } : { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const fetchUser = async () => {
            const spendee = new SpendeeApi();
            const user = await spendee.getUser();
            setUser(user);
        }
        fetchUser();
    }, [])

    return (
        <UserContext.Provider value={{ user, setUser }}>
            { children }
        </UserContext.Provider>
    )
}