import ExpenseBreakdown from "./ExpenseBreakdown";

export default function Dashboard() {
    return (
        <div className="flex flex-col gap-5 md:grid md:grid-cols-2">
            <ExpenseBreakdown />
        </div>
    );
}