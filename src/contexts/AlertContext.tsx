"use client";

import { createContext, ReactNode, useContext, useState } from "react";

interface AlertData {
    message: string;
    type: "success" | "warning" | "error" | "info";
}

interface AlertContextType {
    show: boolean;
    alertData: AlertData;
    showAlert: (data: AlertData) => void;
    hideAlert: () => void;
}

export const AlertContext = createContext<AlertContextType | undefined>(undefined);

export default function AlertProvider({ children }: { children: ReactNode }) {
    const [alertData, setAlertData] = useState<AlertData>({
        message: "",
        type: "info"
    });
    const [show, setShow] = useState<boolean>(false);

    const showAlert = (data: AlertData) => {
        setAlertData(data);
        setShow(true);
        setTimeout(() => {
            setShow(false);
        }, 5000)
    }

    const hideAlert = () => {
        setShow(false);
    }

    return (
        <AlertContext.Provider value={{ show, alertData, showAlert, hideAlert }}>
            { children }
        </AlertContext.Provider>
    );
}

export function useAlert() {
    const context = useContext(AlertContext);
    if (context === undefined) {
        throw new Error("useAlert must be used within an AlertProvider");
    }
    return context;
}