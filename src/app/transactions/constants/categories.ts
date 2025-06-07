interface TransactionCategory {
    id: string;
    label: string;
}

export const TRANSACTION_CATEGORIES = new Map<string, TransactionCategory>([
    ["rent", { id: "rent", label: "Rent" }],
    ["groceries", { id: "groceries", label: "Groceries" }],
    ["utilities", { id: "utilities", label: "Utilities" }],
    ["entertainment", { id: "entertainment", label: "Entertainment" }],
    ["transportation", { id: "transportation", label: "Transportation" }],
    ["healthcare", { id: "healthcare", label: "Healthcare" }],
    ["other", { id: "other", label: "Other" }]
]);