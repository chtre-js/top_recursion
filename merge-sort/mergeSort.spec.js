import mergeSort from "./mergeSort.js"

test("mergeSort([]) returns an empty string", () => {
  expect(mergeSort([])).toStrictEqual([])
})
