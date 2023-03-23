/** Additional task
 * read space seperated lines numbers from a file
 * and output the sum of prime numbers in the line to another file
 * example
 * in.txt
 * 2 13 17 84 43
 * 34 53 67 56
 * out.txt
 * 75
 * 120
 *
 * DON'T READ THE WHOLE FILE IN MEMORY
 */
import {
    TextLineStream,
    toTransformStream,
} from 'https://deno.land/std@0.181.0/streams/mod.ts';

export function sumOfPrimes(inPath: string, outPath: string) {
    const precomputedPrimes = [
        2,
        3,
        5,
        7,
        11,
        13,
        17,
        19,
        23,
        29,
        31,
        37,
        41,
        43,
        47,
        53,
        59,
        61,
        67,
        71,
        73,
        79,
        83,
        89,
        97,
    ];
    const readStream = Deno.openSync(inPath).readable;
    const writeStream = Deno.openSync(outPath, { write: true }).writable;
    readStream
        .pipeThrough(new TextDecoderStream())
        .pipeThrough(new TextLineStream())
        .pipeThrough(toTransformStream(async function* (src) {
            for await (const chunk of src) {
                yield chunk
                    .split(' ')
                    .map((str) => parseInt(str))
                    .filter((n) => precomputedPrimes.includes(n))
                    .reduce((acc, val) => acc + val, 0)
                    .toString() + '\n';
            }
        }))
        .pipeThrough(new TextEncoderStream())
        .pipeTo(writeStream);
}

if (import.meta.main) {
    sumOfPrimes('./in.txt', './out.txt');
}
