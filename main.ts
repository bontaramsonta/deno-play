export function datesGenerator() {
    let c = 0;
    const multiplier = (min: number, max: number) =>
        Math.floor(Math.random() * (max - min + 1)) + min;
    const dates: [Date | string][] = [];
    while (c < 100) {
        const day = 1000 * 60 * 60 * 24;
        const hour = 1000 * 60 * 60;
        const date = new Date(
            Date.now() + (day * multiplier(-5, 30)) +
                (hour * multiplier(0, 21)),
        );
        // console.log(date);
        if (Math.random() < 0.05) {
            dates.push(['N/A']);
        }
        dates.push([date]);
        c++;
    }
    return dates;
}

if (import.meta.main) {
    let dates = datesGenerator();
    const pastDates: { date: string; offset: number }[] = [];
    dates = dates.map((data) => {
        if (typeof data[0] === 'string') {
            pastDates.push({
                date: data[0],
                offset: Number.NEGATIVE_INFINITY,
            });
            return null;
        }
        const date = data[0];
        const offset = (date.getTime() - Date.now()) / (1000 * 3600 * 24);
        if (offset < 0) {
            pastDates.push({
                date: date.toLocaleString(),
                offset: offset,
            });
            return null;
        } else {
            return {
                date: date.toLocaleString(),
                offset: offset,
            };
        }
    }).filter<{ date: string; offset: number }>((a) => !!a);
    // ascending
    dates.sort((a, b) => a.offset - b.offset);
    pastDates.sort((a, b) => a.offset - b.offset);
    // descending
    dates.sort((a, b) => b.offset - a.offset);
    pastDates.sort((a, b) => b.offset - a.offset);
    // console.log();
    console.log(dates);
    console.log(pastDates);
}
