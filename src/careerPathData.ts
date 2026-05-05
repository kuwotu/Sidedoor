import type { CareerPath } from "./types";

const careerPathData: CareerPath[] = [
	{
		firstName: "Kevwe",
		lastName: "Uwotu",
		currentRole: { jobTitle: "Software Engineer", yearsInRole: 4 },
		id: "1",
		jobs: [
			{
				jobTitle: "Software Engineer",
				yearsInRole: 4,
				dates: [{ start: "20-01-22", end: "20-03-26" }],
			},
			{
				jobTitle: "Receptionist",
				yearsInRole: 2,
				dates: [{ start: "20-01-19", end: "20-06-22" }],
			},
			{
				jobTitle: "Recruiter",
				yearsInRole: 4,
				dates: [{ start: "20-01-17", end: "20-06-19" }],
			},
		],
		statement: "Best thing I ever done",
		pathTags: ["Apprentiship", "Self-taught", "Udemy", "Mentorship"],
	},
	{
		firstName: "Kevwe",
		lastName: "Uwotu",
		currentRole: { jobTitle: "Software Engineer", yearsInRole: 4 },
		id: "2",
		jobs: [
			{
				jobTitle: "Software Engineer",
				yearsInRole: 4,
				dates: [{ start: "20-01-22", end: "20-03-26" }],
			},
			{
				jobTitle: "Receptionist",
				yearsInRole: 2,
				dates: [{ start: "20-01-19", end: "20-06-22" }],
			},
			{
				jobTitle: "Recruiter",
				yearsInRole: 4,
				dates: [{ start: "20-01-17", end: "20-06-19" }],
			},
		],
		statement: "Best thing I ever done",
		pathTags: [],
	},
	{
		firstName: "Kevwe",
		lastName: "Uwotu",
		id: "3",
		currentRole: { jobTitle: "Software Engineer", yearsInRole: 4 },
		jobs: [
			{
				jobTitle: "Software Engineer",
				yearsInRole: 4,
				dates: [{ start: "20-01-22", end: "20-03-26" }],
			},
			{
				jobTitle: "Receptionist",
				yearsInRole: 2,
				dates: [{ start: "20-01-19", end: "20-06-22" }],
			},
			{
				jobTitle: "Recruiter",
				yearsInRole: 4,
				dates: [{ start: "20-01-17", end: "20-06-19" }],
			},
		],
		pathTags: ["Apprentiship", "Self-taught", "Udemy", "Mentorship"],
	},
];

export default careerPathData;
