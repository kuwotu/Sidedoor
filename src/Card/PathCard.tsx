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
	currentRole,
	previousRoles,
	statement,
	pathTags,
}: PathCard) {
	const initial = lastName.charAt(0);

	return (
		<PathCardContainer>
			<CardProfile>
				<>
					<p>
						{firstName}. {initial}
					</p>
				</>
				<CurrentRoleInfo>
					<>
						<p>{currentRole.title}</p>
						<p> -{currentRole.yearsInRole} years in the role</p>
					</>
				</CurrentRoleInfo>
			</CardProfile>
			<CardJourneyContainer>
				{previousRoles?.map((role) => (
					<CardJourney>
						<p>{role.title}</p>
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
