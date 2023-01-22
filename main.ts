export function isPalindrome(x: number): boolean {
  console.log(
    x
      .toString()
      .substring(0, Math.ceil(x.toString().length / 2))
      .split("")
      .reverse()
      .join("").length
  );
  console.log(
    x.toString().substring(Math.floor(x.toString().length / 2)).length
  );
  return (
    x
      .toString()
      .substring(0, Math.ceil(x.toString().length / 2))
      .split("")
      .reverse()
      .join("") == x.toString().substring(Math.floor(x.toString().length / 2))
  );
}

// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (import.meta.main) {
  console.log("Palindrome 121=", isPalindrome(121));
}
