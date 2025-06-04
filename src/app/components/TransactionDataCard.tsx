import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { JSX, ReactNode } from "react";
import React from "react";

interface TransactionDataCard {
    icon: JSX.Element;
    headerText: string;
    caption?: string;
    children: ReactNode;
    contentColorClass: string;
} ;

export default function TransactionDataCard({
    icon,
    headerText,
    caption,
    children,
    contentColorClass,
}: TransactionDataCard) {
    return (
        <Card className="w-full md:w-xs md:max-w-xs gap-1">
            <CardHeader className="flex items-center justify-between">
                <CardTitle>{ headerText }</CardTitle>
                {icon}
            </CardHeader>
            <CardContent>
                <p className={`${contentColorClass} text-3xl font-bold`}>{ children }</p>
            </CardContent>
            { caption && (
                <CardFooter className="text-gray-600">{ caption }</CardFooter>
            )}
        </Card>
    );
}