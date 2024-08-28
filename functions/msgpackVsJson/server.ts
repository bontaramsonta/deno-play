import { encode } from 'jsr:@std/msgpack';

const sampleData = {
  str: 'deno',
  arr: [1, 2, 3],
  bool: true,
  nil: null,
  map: {
    foo: 'bar',
  },
};

// create a deno tcp server that listens and
// sends the sampleData in msgpack format when a client sends a message containing the word "msgpack"
// sends the sampleData in json format when a client sends a message containing the word "json"

const server = Deno.listen({ port: 8080 });
console.log('Server listening on http://localhost:8080');

for await (const conn of server) {
  handleTCPConnection(conn);
}

async function handleTCPConnection(conn: Deno.Conn) {
  const txtDecoder = new TextDecoder();
  const txtEncoder = new TextEncoder();
  for await (const event of conn.readable) {
    // console.log(event);
    const data = txtDecoder.decode(event);
    if (data.includes('msgpack')) {
      conn.write(encode(sampleData));
    } else if (data.includes('json')) {
      conn.write(txtEncoder.encode(JSON.stringify(sampleData)));
    }
  }
}
