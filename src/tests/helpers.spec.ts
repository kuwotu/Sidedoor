import { describe, it, expect } from "vitest";
import { yearsAndMonthsInRole } from "../helpers/helpers";

describe("yearsAndMonthsInRole", () => {
	it("should return 0 years and 5 months for Jan to Jun same year", () => {
		expect(yearsAndMonthsInRole("2018-01-01", "2018-06-01")).toEqual({
			years: 0,
			months: 5,
		});
	});
	it("should return 1 years and 5 months for Jan to Jun the following year", () => {
		expect(yearsAndMonthsInRole("2018-01-01", "2019-06-01")).toEqual({
			years: 1,
			months: 5,
		});
	});
	it("should return 3 years and 0 months for Jan 2018 to Jan 2021", () => {
		expect(yearsAndMonthsInRole("2018-01-01", "2021-01-31")).toEqual({
			years: 3,
			months: 0,
		});
	});
});
