import { fibs } from "./fibs.js";

test("fibs of 0 is 0", () => {
  expect(fibs(0)).toBe(0)
})

test("fibs of 5 is 5", () => {
  expect(fibs(5)).toBe(5)
})
