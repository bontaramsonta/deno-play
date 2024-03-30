import { env } from '@env';
const body = new FormData();

export const multipartRequest = async (url: string, file: Uint8Array) => {
  body.append('file', new Blob([file]));
  const res = await fetch(
    url,
    {
      method: 'POST',
      body: body,
      keepalive: true,
    },
  );
  const data = await res.json();
  if (!res.ok) {
    console.error(res);
    Deno.exit(1);
  }
  return data;
};

if (import.meta.main) {
  const image = Deno.readFileSync('./images/car.webp');
  const data = await multipartRequest(env.FETCH_URL, image);
  const selector = data.body.top1;
  const type = data.classes[selector];
  console.log(type);
}
