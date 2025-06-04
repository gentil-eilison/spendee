"use client";

import { useContext } from "react";

import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { UserContext } from "@/contexts/UserContext";

export default function Navbar() {
    const context = useContext(UserContext);

    function getAvatarFallback(): string {
        if (context) {
            if (context.user) {
                return context.user.firstName[0] + context.user.lastName[0]
            }
        }
        return "";
    }

    return (
        <nav className="flex p-2 items-center justify-between bg-white rounded">
            <ul className="flex gap-4">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About Us</Link></li>
            </ul>
            <Avatar>
                <AvatarImage src="" />
                <AvatarFallback>
                    {getAvatarFallback()}
                </AvatarFallback>
            </Avatar>
        </nav>
    );
}