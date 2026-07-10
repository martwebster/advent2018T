import "../utility/extensions";
import { describe, expect, test } from "vitest";
import { readTestData } from "../utility/fileHelper";
import { exampleFunction } from "./day1";

const dayNumber = "1";
describe(`day ${dayNumber}`, () => {
	test("sample", () => {
		expect(exampleFunction("1")).toBe(1);
	});

	test("part1", () => {
		const data = readTestData(`./src/day${dayNumber}/input.txt`);
		const sum = data.map((line) => exampleFunction(line)).sum();
		expect(sum).toBe(6);
	});
});
