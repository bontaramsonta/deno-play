import {
    assertEquals,
    assertNotEquals,
} from 'https://deno.land/std@0.171.0/testing/asserts.ts';

Deno.test(function baseTest() {
    assertNotEquals(2 - 2, 4);
    assertNotEquals(2 - 2, 4);
    assertEquals(2 + 2, 4);
});

Deno.test(function secondTest() {
    assertEquals(2 + 2, 4);
});
