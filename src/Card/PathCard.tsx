import { monthsOrYears } from "../helpers/helper";
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
								{currentRole[0].jobTitle} -{" "}
								{monthsOrYears(currentRole[0].yearsInRole)} in the role
							</p>
						</>
					</CurrentRoleInfo>
				)}
			</CardProfile>
			<CardJourneyContainer>
				{sortJobsByDate?.map((role) => {
					console.log(`${role.jobTitle}`, role.yearsInRole);
					return (
						<CardJourney>
							<p>{role.jobTitle}</p>
							<p>({monthsOrYears(role.yearsInRole)})</p>
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
