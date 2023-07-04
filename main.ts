const scoreMap: Map<string, number> = new Map();
scoreMap.set('A X', 3);
scoreMap.set('A Y', 4);
scoreMap.set('A Z', 8);
scoreMap.set('B X', 1);
scoreMap.set('B Y', 5);
scoreMap.set('B Z', 9);
scoreMap.set('C X', 2);
scoreMap.set('C Y', 6);
scoreMap.set('C Z', 7);

if (import.meta.main) {
    const contents = Deno.readFileSync('in.txt');
    const decoder = new TextDecoder('utf-8');
    const text = decoder.decode(contents);
    const lines = text.split('\n').map((line) => line.split(' '));
    let totalScore = 0;
    lines.forEach((line) => {
        const p1Move = line[0];
        const p2Move = line[1];
        const score = scoreMap.get(`${p1Move} ${p2Move}`) as number;
        totalScore += score;
        console.log(`${p1Move} ${p2Move}`, totalScore);
    });
}
