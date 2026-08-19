function merge(left,right) {
  const arr = [];

  let i = 0, j = 0;
  while (i < left.length && j < right.length) {
    arr.push(left[i] <= right[i] ? left[i++] : right[j++])
  }
  arr.push(...left.slice(i), ...right.slice(j));
  return arr;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

export default mergeSort;
