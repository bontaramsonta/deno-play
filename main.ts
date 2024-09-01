function maxPathSum(
  arr1: number[],
  arr2: number[],
) {
  let i = 0, j = 0;
  let result = 0, sum1 = 0, sum2 = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      sum1 += arr1[i];
      i++;
    } else if (arr1[i] > arr2[j]) {
      sum2 += arr2[j];
      j++;
    } else {
      result += Math.max(sum1, sum2) + arr1[i];
      sum1 = 0;
      sum2 = 0;
      i++;
      j++;
    }
  }

  while (i < arr1.length) {
    sum1 += arr1[i];
    i++;
  }

  while (j < arr2.length) {
    sum2 += arr2[i];
    j++;
  }
  result += Math.max(sum1, sum2);
  return result;
}

const arr1 = [2, 3, 7, 10, 12];
const arr2 = [1, 5, 7, 8];

const result = maxPathSum(arr1, arr2);
console.log(result);
