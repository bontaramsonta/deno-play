const priorityMap: Record<string, number> = {
    'a': 1,
    'b': 2,
    'c': 3,
    'd': 4,
    'e': 5,
    'f': 6,
    'g': 7,
    'h': 8,
    'i': 9,
    'j': 10,
    'k': 11,
    'l': 12,
    'm': 13,
    'n': 14,
    'o': 15,
    'p': 16,
    'q': 17,
    'r': 18,
    's': 19,
    't': 20,
    'u': 21,
    'v': 22,
    'w': 23,
    'x': 24,
    'y': 25,
    'z': 26,
    'A': 27,
    'B': 28,
    'C': 29,
    'D': 30,
    'E': 31,
    'F': 32,
    'G': 33,
    'H': 34,
    'I': 35,
    'J': 36,
    'K': 37,
    'L': 38,
    'M': 39,
    'N': 40,
    'O': 41,
    'P': 42,
    'Q': 43,
    'R': 44,
    'S': 45,
    'T': 46,
    'U': 47,
    'V': 48,
    'W': 49,
    'X': 50,
    'Y': 51,
    'Z': 52,
};

if (import.meta.main) {
    const contents = Deno.readFileSync('in.txt');
    const decoder = new TextDecoder('utf-8');
    const text = decoder.decode(contents);
    const lines = text.split('\n').map((
        line,
    ) => [
        line.substring(0, line.length / 2),
        line.substring((line.length / 2) + 1),
    ]);
    let totalPriority = 0;
    lines.forEach((line, index) => {
        const [firstLine, secondLine] = line;
        const first = new Set(firstLine);
        const second = new Set(secondLine);
        const intersection = new Set([...first].filter((x) => second.has(x)));
        intersection.forEach((char) => {
            totalPriority += priorityMap[char];
            console.log(index, char, priorityMap[char], totalPriority);
        });
    });
}
