import ExpenseBreakdown from "./ExpenseBreakdown";
import MonthlyTrends from "./MonthlyTrends";

export default function Dashboard() {
    return (
        <div className="flex flex-col gap-5 md:grid md:grid-cols-2">
            <MonthlyTrends />
            <ExpenseBreakdown />
        </div>
    );
}