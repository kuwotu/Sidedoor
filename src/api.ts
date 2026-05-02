import type { CareerPath } from "./types";

type fetchCareerResponse = {
	first_name: string;
	id: string;
	last_name: string;
	user_statement: string;
	job_title: string;
	start_date: Date;
	end_date: Date;
	years_in_role: number;
};

const dataReducer = (
	accumulator: CareerPath[],
	currentItem: fetchCareerResponse,
) => {
	const existingObject = accumulator.find(
		(element) => element.id == currentItem.id,
	);

	if (!existingObject) {
		accumulator.push({
			firstName: currentItem.first_name,
			lastName: currentItem.last_name,
			id: currentItem.id,
			statement: currentItem.user_statement,
			jobs: currentItem.job_title
				? [
						{
							jobTitle: currentItem.job_title,
							startDate: currentItem.start_date,
							endDate: currentItem.end_date,
							yearsInRole: currentItem.years_in_role,
						},
					]
				: [],
		});
	} else {
		existingObject.jobs.push({
			jobTitle: currentItem.job_title,
			startDate: currentItem.start_date,
			endDate: currentItem.end_date,
			yearsInRole: currentItem.years_in_role,
		});
	}

	return accumulator;
};

const mapCareerEntires = (data: fetchCareerResponse[]): CareerPath[] =>
	data.reduce(dataReducer, []);

export const getCareerPath = async (): Promise<CareerPath[] | undefined> => {
	try {
		const response = await fetch("http://localhost:3000/api/career_path");
		if (!response.ok) {
			throw new Error(`HTTP error status: ${response.status}`);
		}
		const data: fetchCareerResponse[] = await response.json();
		return mapCareerEntires(data);
	} catch (error) {
		console.error("Error fetching career paths:", error);
		return undefined;
	}
};
