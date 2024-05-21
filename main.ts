import { debounce } from 'jsr:@std/async/debounce';

console.log('[%s] Started', 'main');

const log = debounce((event: Deno.FsEvent) => {
  console.log('[%s] %s', event.kind, event.paths[0]);
}, 200);

const shouldReadDirectory = await Deno.permissions.request({
  name: 'read',
  path: './',
});

if (!shouldReadDirectory) {
  throw new Error('Permission denied');
}

const watcher = Deno.watchFs('./');

for await (const event of watcher) {
  log(event);
}
