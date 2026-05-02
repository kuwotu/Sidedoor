export interface Role {
	title: string;
	yearsInRole: number;
}

export type RoleDates = {
	start: string;
	end: string;
};

export interface PreviousRoles extends Role {
	dates: RoleDates[];
}

export type CareerPath = {
	firstName: string;
	lastName: string;
	id: string;
	currentRole: Role;
	statement?: string;
	previousRoles?: PreviousRoles[];
	pathTags?: string[];
};

export type PathCard = Omit<CareerPath, "id">;
