import { fibs } from "./fibs.js";

test("fibs of 1 is [0, 1]", () => {
  expect(fibs(1)).toStrictEqual([0]);
});

test("fibs of 2 is [0,1,1]", () => {
  expect(fibs(2)).toStrictEqual([0, 1]);
});

test("fibs of 8 is [0, 1, 1, 2, 3, 5, 8, 13]", () => {
  expect(fibs(8)).toStrictEqual([0,1,1,2,3,5,8,13]);
});
