import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Navbar() {
    return (
        <nav className="flex p-2 items-center justify-between bg-white rounded">
            <ul className="flex gap-4">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About Us</Link></li>
            </ul>
            <Avatar>
                <AvatarImage src="" />
                <AvatarFallback>GA</AvatarFallback>
            </Avatar>
        </nav>
    );
}