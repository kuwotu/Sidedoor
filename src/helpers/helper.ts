export const calculateYearsInRole = (
	startDate: string,
	endDate: string | null,
): number => {
	const start = new Date(startDate);
	const end = endDate ? new Date(endDate) : new Date();

	const dateDiff = Math.abs(Number(end) - Number(start));
	const years = dateDiff / (1000 * 60 * 60 * 24 * 365.25);
	return years;
};

export const monthsOrYears = (number: number): string => {
	if (number < 1) {
		const rawMonth = number * 12;
		const month = Math.round(rawMonth);
		return `${month} months`;
	} else {
		return `${Math.floor(number)} years`;
	}
};
