import type { PathCard } from "../types";
import {
	PathCardContainer,
	CardJourney,
	CardProfile,
	CardJourneyContainer,
	StyledTags,
	CurrentRoleInfo,
} from "./styles";

export function PathCard({
	displayName,
	jobs,
	careerStory,
	pathTags,
}: PathCard) {
	const currentRole = jobs.filter((job) => job.isCurrent == true);
	const sortJobsByDate = jobs.sort(
		(a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime(),
	);

	return (
		<PathCardContainer>
			<CardProfile>
				<>
					<p>{displayName}</p>
				</>
				{currentRole.length > 0 && (
					<CurrentRoleInfo>
						<>
							<p>
								{currentRole[0].jobTitle} - {currentRole[0].timeInRole.years}
								{currentRole[0].timeInRole.years === 1 ? "yr" : "yrs"}{" "}
								{currentRole[0].timeInRole.months}{" "}
								{currentRole[0].timeInRole.months === 1 ? "month" : "months"} in
								the role
							</p>
						</>
					</CurrentRoleInfo>
				)}
			</CardProfile>
			<CardJourneyContainer>
				{sortJobsByDate?.map((role) => {
					return (
						<CardJourney>
							<p>{role.jobTitle}</p>
							<p>
								{role.timeInRole.years > 0 &&
									`${role.timeInRole.years} ${role.timeInRole.years === 1 ? "yr" : "yrs"} `}
								{role.timeInRole.months > 0 &&
									`${role.timeInRole.months}  ${role.timeInRole.years === 1 ? "month" : "months"}`}
							</p>
						</CardJourney>
					);
				})}
			</CardJourneyContainer>
			{careerStory && <p>"{careerStory.statement}"</p>}
			<StyledTags>
				{pathTags?.map((tag) => (
					<p>{tag}</p>
				))}
			</StyledTags>
		</PathCardContainer>
	);
}
