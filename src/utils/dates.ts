export function getLastSixMonths(): Date[] {
    const result: Date[] = [];
    const date = new Date();

    for (let i = 0; i < 6; i++) {
        const newDate = new Date(date);
        newDate.setMonth(date.getMonth() - i);

        if (newDate.getMonth() > date.getMonth()) {
            newDate.setFullYear(date.getFullYear() - 1);
        }

        result.push(newDate);
    }
    return result;
}