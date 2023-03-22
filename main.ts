// task : read a file and write the contents to another file without loading the whole content

if (import.meta.main) {
    const readableStream = Deno.openSync('./in.txt').readable;
    const writableStream = Deno.openSync('./out.txt', { write: true }).writable;
    await readableStream.pipeTo(writableStream);
}
