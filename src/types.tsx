export interface Role {
	jobTitle: string;
	yearsInRole: number;
	isCurrent: boolean;
}

export interface RolesHistory extends Role {
	startDate: string;
	endDate: string;
}

export type CareerStory = {
	story_id: string;
	statement: string;
};

export type CareerPath = {
	displayName: string;
	userId: string;
	careerStory: CareerStory;
	jobs: RolesHistory[];
	pathTags?: string[];
};

export type PathCard = Omit<CareerPath, "userId">;
