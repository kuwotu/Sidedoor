import type { CareerPath } from "./types";

const careerPathData: CareerPath[] = [
	{
		firstName: "Kevwe",
		lastName: "Uwotu",
		currentRole: { title: "Software Engineer", yearsInRole: 4 },
		previousRoles: [
			{
				title: "Software Engineer",
				yearsInRole: 4,
				dates: [{ start: "20-01-22", end: "20-03-26" }],
			},
			{
				title: "Receptionist",
				yearsInRole: 2,
				dates: [{ start: "20-01-19", end: "20-06-22" }],
			},
			{
				title: "Recruiter",
				yearsInRole: 4,
				dates: [{ start: "20-01-17", end: "20-06-19" }],
			},
		],
		statement: "Best thing I ever done",
		pathTags: ["Apprentiship", "Self-taught", "Udemy", "Mentorship"],
	},
];

export default careerPathData;
