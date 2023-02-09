Deno.bench({
  name: "baseline",
  group: "group",
  baseline: true,
  fn: () => {
  },
});

Deno.bench({
  name: "bigcase",
  group: "group",
  fn: () => {
  },
});
