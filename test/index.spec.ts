import { expect, test } from "vitest";
import { add } from "../src";

test("add", () => {
  expect(add(1, 2)).toBe(3);
});
