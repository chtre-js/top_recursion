function merge(left,right) {
  const arr = [];
  arr.push(...left);
  arr.push(...right);
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
