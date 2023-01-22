import { assertEquals } from "https://deno.land/std@0.171.0/testing/asserts.ts";

const MAP: Record<string,number> = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
}

const STACK = ['I','V','X','L','C','D','M']


function romanToInt(roman: string): number {
  let value = 0
  const romanArr = roman.split('').reverse()
  let previous: string | null = null
  romanArr.forEach(char=> {
    console.log(char,previous, MAP[char])
    if(previous && STACK.indexOf(previous) > STACK.indexOf(char)) {
      console.log('[hit reduce]',previous, char)
      // reduce value
      value -= MAP[char]
    }else {
      value += MAP[char] ?? 0
    }
    previous = char
    console.log(value)
  })
  return value
}

Deno.test(function mainTest() {
  assertEquals(romanToInt('IV'), 4);
  // assertEquals(romanToInt(''), 7);
  assertEquals(romanToInt('VII'), 7);
  assertEquals(romanToInt('DCIX'), 609);
  assertEquals(romanToInt('DCXC'), 690);
  assertEquals(romanToInt('LMIV'), 954);
});