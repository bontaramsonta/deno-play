function average(salary: number[]) {
    let max = Number.NEGATIVE_INFINITY;
    let min = Number.POSITIVE_INFINITY;
    let sum = 0;
    for (let i = 0; i < salary.length; i++) {
        if (salary[i] > max) {
            max = salary[i];
        }
        if (salary[i] < min) {
            min = salary[i];
        }
        sum += salary[i];
    }
    return (sum - max - min) / (salary.length - 2);
}
if (import.meta.main) {
    const salary = [4000, 3000, 1000, 2000];
    console.log(average(salary));
}
