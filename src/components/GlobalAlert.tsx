"use client";

import { useAlert } from "@/contexts/AlertContext";
import { Alert, AlertDescription } from "./ui/alert";

export default function GlobalAlert() {
    const { show, alertData } = useAlert();

    if (!show) return null;

    let textColorClass = "";
    switch(alertData.type) {
        case "success":
            textColorClass = "text-green-600";
            break;
        case "warning":
            textColorClass = "text-yellow-600";
            break;
        case "error":
            textColorClass = "text-red-600";
        default:
            break;
    }

    return (
        <Alert className="w-1/3 py-5 text-center fixed bottom-10 translate-x-[90%]">
            <AlertDescription className={ textColorClass }>{ alertData.message }</AlertDescription>
        </Alert>
    );
}