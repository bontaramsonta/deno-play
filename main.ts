function isSameCombination(a: number[], b: number[]) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

function createCombinations(
  array: number[],
  sum: number,
  current: number[],
  result: number[][]
) {
  if (sum === 0) {
    // if the combination is same as the previous one, then skip it
    const lastResult = result[result.length - 1];
    if (lastResult && isSameCombination(result[result.length - 1], current))
      return;
    result.push([...current]);
    return;
  }
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element > sum) continue;
    current.push(element);
    createCombinations(array.slice(i), sum - element, current, result);
    current.pop();
  }
}

function combinationSum(a: number[], s: number): number[][] {
  const result: number[][] = [];
  createCombinations(a, s, [], result);
  return result;
}

if (import.meta.main) {
  const arr = [8, 1, 8, 6, 8];
  arr.sort((a, b) => a - b);
  const targetSum = 12;
  const result = combinationSum(arr, targetSum);
  console.log(result);
  console.log(result.length);
}
