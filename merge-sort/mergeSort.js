function mergeSort(arr) {
  const sortedArr = [];
  if (arr.length < 1 || arr.length === 1) {
    sortedArr.push(...arr);
    return sortedArr;
  }
}

console.log(mergeSort([]))

export default mergeSort
