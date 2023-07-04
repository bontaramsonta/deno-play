const movePoint: Record<string, number> = {
    X: 1,
    Y: 2,
    Z: 3,
};

const winMap: Map<string, number> = new Map();
winMap.set('A X', 0);
winMap.set('A Y', 2);
winMap.set('A Z', 1);
winMap.set('B X', 1);
winMap.set('B Y', 0);
winMap.set('B Z', 2);
winMap.set('C X', 2);
winMap.set('C Y', 1);
winMap.set('C Z', 0);

if (import.meta.main) {
    const contents = Deno.readFileSync('in.txt');
    const decoder = new TextDecoder('utf-8');
    const text = decoder.decode(contents);
    const lines = text.split('\n').map((line) => line.split(' '));
    let totalScore = 0;
    lines.forEach((line) => {
        const p1Move = line[0];
        const p2Move = line[1];
        const p2MovePoint = movePoint[p2Move] as number;
        totalScore += p2MovePoint;
        const win = winMap.get(`${p1Move} ${p2Move}`) as number;
        if (win === 2) {
            totalScore += 6;
        } else if (win === 0) {
            totalScore += 3;
        }
        console.log(`${p1Move} ${p2Move}`, win, p2MovePoint, totalScore);
    });
}
