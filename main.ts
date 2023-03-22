import { readAllSync } from 'https://deno.land/std@0.180.0/streams/read_all.ts';
import { readLines } from 'https://deno.land/std@0.180.0/io/read_lines.ts';

if (import.meta.main) {
    // way 1
    const decoder = new TextDecoder();
    for await (const chunk of Deno.stdin.readable) {
        const dLine = decoder.decode(chunk);
        console.log(dLine);
        console.log('=====');
    }

    // way2
    const decoder = new TextDecoder();
    const buffer = readAllSync(Deno.stdin);
    const decoded = decoder.decode(buffer);
    console.log(decoded.length);

    // way 3
    for await (const line of readLines(Deno.stdin)) {
        console.log(line);
    }
}
