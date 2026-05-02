export interface Role {
	jobTitle: string;
	yearsInRole: number;
}

export interface RolesHistory extends Role {
	startDate: Date;
	endDate: Date;
}

export type CareerPath = {
	firstName: string;
	lastName: string;
	id: string;
	statement?: string;
	jobs: RolesHistory[];
	pathTags?: string[];
};

export type PathCard = Omit<CareerPath, "id">;
