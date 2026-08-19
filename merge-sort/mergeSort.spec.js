import mergeSort from "./mergeSort.js";

test("mergeSort([]) returns an empty string", () => {
  expect(mergeSort([])).toStrictEqual([]);
});

test("mergeSort([2,1] returns [1,2]", () => {
  expect(mergeSort([2, 1])).toStrictEqual([1, 2]);
});

test("sort is correct", () => {
  expect(mergeSort([5, 4, 3, 2, 1])).toStrictEqual([1, 2, 3, 4, 5]);
});
