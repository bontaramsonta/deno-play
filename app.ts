import { Context, Hono } from '@hono/hono';

const app = new Hono();

app.get('/', (c: Context) => c.text('Hello Hono!'));

app.get('/api/users', (c: Context) => {
  // Example route, replace with actual logic
  return c.json([
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
  ]);
});

app.post('/api/users', async (c: Context) => {
  const body = await c.req.json();
  // Example route, replace with actual logic
  console.log('Received new user:', body);
  return c.json({ message: 'User created successfully' }, 201);
});

export default app;
// run with deno serve --watch [--parallel] app.ts
