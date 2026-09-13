import { yearsAndMonthsInRole } from "../src/helpers/helpers";
import type { CareerPath, CareerStory } from "../src/types";

type JobHistory = {
	job_title: string;
	industry: string;
	is_current: boolean;
	start_date: string;
	end_date: string;
};

export type UserProfile = {
	user_id: string;
	display_name: string;
	career_story: CareerStory;
	job_history: JobHistory;
};
export type careerStoriesResponse = {
	first_name: string;
	last_name: string;
	display_name: string;
	user_id: string;
	career_story: CareerStory;
	job_history: JobHistory[];
};

const mapCareerEntires = (data: careerStoriesResponse[]): CareerPath[] =>
	data.map((item) => ({
		userId: item.user_id,
		displayName: item.display_name,
		careerStory: item.career_story,
		jobs: item.job_history.map((jobItem) => ({
			jobTitle: jobItem.job_title,
			startDate: jobItem.start_date,
			endDate: jobItem.end_date,
			isCurrent: jobItem.is_current,
			timeInRole: yearsAndMonthsInRole(jobItem.start_date, jobItem.end_date),
		})),
	}));

export const getCareerPath = async (): Promise<
	CareerPath[] | null | undefined
> => {
	try {
		const response = await fetch("http://localhost:3000/api/career-stories");
		if (!response.ok) {
			throw new Error(`HTTP error status: ${response.status}`);
		}
		const data: careerStoriesResponse[] = await response.json();
		if (data == null) {
			return null;
		} else {
			console.log("data", data);
			return mapCareerEntires(data);
		}
	} catch (error) {
		console.error("Error fetching career stories:", error);
		return undefined;
	}
};
