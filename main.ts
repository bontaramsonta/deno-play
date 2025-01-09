import { assertEquals } from '@std/assert';

const printConfiguration = (obj: object): void => {
  Object.entries(obj).map((k, v) => `* ${k}: ${v}`);
  console.log(
    `CONFIGURED WITH OPTIONS:${JSON.stringify(obj, null, 2)}`,
  );
};
function parse(RELEASE_INFO: string) {
  const splits = RELEASE_INFO.trim().split(' ').filter(Boolean);
  const TICKET = splits[0]?.trim();
  const RELEASE_NAME = splits[1]?.trim();
  const PROJECT = TICKET.split('-')[0]?.trim();
  printConfiguration({ TICKET, RELEASE_NAME, PROJECT });
  if (!RELEASE_NAME || !PROJECT) {
    return false;
  }
  return true;
}

const testCases = [
  { input: '-235 RELEASE-1.0.3', expected: false },
  { input: 'AVHN-235     RELEASE-1.0.3', expected: true },
  { input: '  AMCC-2352464 RELESE-1353 ', expected: true },
  { input: '  AMCC REL  ', expected: true },
];

testCases.forEach((t) =>
  Deno.test(`on ${t.input}`, () => {
    const result = parse(t.input);
    assertEquals(result, t.expected);
  })
);
