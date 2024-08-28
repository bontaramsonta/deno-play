const conn = await Deno.connect({ hostname: '0.0.0.0', port: 8080 });

async function sendAndReceive(message: string) {
    const encoder = new TextEncoder();
    const data = encoder.encode(message);
    await conn.write(data);
    console.log(`Sent: ${message}`);

    const buffer = new Uint8Array(1024);
    const bytesRead = await conn.read(buffer);
    if (bytesRead) {
        const decoder = new TextDecoder();
        const response = decoder.decode(buffer.subarray(0, bytesRead));
        console.log(`Received response length: ${response.length}`);
    }
}

try {
    await sendAndReceive('msgpack');
    await sendAndReceive('json');
} catch (error) {
    console.error('Error:', error);
} finally {
    conn.close();
}

console.log('Connection closed');
