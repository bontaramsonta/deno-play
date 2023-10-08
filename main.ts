if (import.meta.main) {
  const db = await Deno.openKv("test.sqlite");
  await db.set(["hello"], "foo1", { expireIn: 1000 });
  const sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  db.listenQueue(async (msg) => {
    await sleep(1000);
    console.log("test", msg);
  });

  const result = await db.enqueue(
    { channel: "test", msg: "hello" },
    {
      delay: 2000,
    }
  );
  console.log(result);
  db.close();
}
