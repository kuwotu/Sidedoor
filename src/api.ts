import type { CareerPath } from "./types";

type fetchCareerResponse = {
	first_name: string;
	id: string;
	last_name: string;
	user_statement: string;
};

const mapData = (data: fetchCareerResponse[]): CareerPath[] => {
	return data.map((careerEntry: fetchCareerResponse) => {
		return {
			firstName: careerEntry.first_name,
			lastName: careerEntry.last_name,
			id: careerEntry.id,
			statement: careerEntry.user_statement,
			currentRole: {
				title: "Whatever",
				yearsInRole: 5,
			},
		};
	});
};

export const getCareerPath = async (): Promise<CareerPath[]> => {
	try {
		const response = await fetch("http://localhost:3000/api/career_path");
		if (!response.ok) {
			throw new Error(`HTTP error status: ${response.status}`);
		}
		const data: fetchCareerResponse[] = await response.json();
		return mapData(data);
	} catch (error) {
		console.error("Error fetching career paths:", error);
		throw error;
	}
};
