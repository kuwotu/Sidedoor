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
	firstName,
	lastName,
	jobs,
	statement,
	pathTags,
}: PathCard) {
	const initial = lastName.charAt(0);

	const currentRole = jobs.filter((job) => job.endDate == null);
	// console.log("currentRole", currentRole);
	const sortJobsByDate = jobs.sort(
		(a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime(),
	);

	return (
		<PathCardContainer>
			<CardProfile>
				<>
					<p>
						{firstName}. {initial}
					</p>
				</>
				{currentRole.length > 0 && (
					<CurrentRoleInfo>
						<>
							<p>{currentRole[0].jobTitle}</p>
							<p> -{currentRole[0].yearsInRole} years in the role</p>
						</>
					</CurrentRoleInfo>
				)}
			</CardProfile>
			<CardJourneyContainer>
				{sortJobsByDate?.map((role) => (
					<CardJourney>
						<p>{role.jobTitle}</p>
						<p>({role.yearsInRole} years)</p>
					</CardJourney>
				))}
			</CardJourneyContainer>
			{statement && <p>"{statement}"</p>}
			<StyledTags>
				{pathTags?.map((tag) => (
					<p>{tag}</p>
				))}
			</StyledTags>
		</PathCardContainer>
	);
}
