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
	statement: string;
	currentRole?: Role;
	previousRoles?: PreviousRoles[];
	pathTags?: string[];
};
