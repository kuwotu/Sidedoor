import type { CareerPath } from "../types";
import { PathCardStyle } from "./styles";

export function PathCard({
	firstName,
	lastName,
	currentRole,
	previousRoles,
	statement,
	pathTags,
}: CareerPath) {
	const initial = lastName.charAt(0);

	return (
		<div>
			<h1>
				{firstName}. {initial}
			</h1>
			{currentRole ? (
				<>
					<h1>{currentRole.title}</h1>
					<h1>({currentRole.yearsInRole} years)</h1>
				</>
			) : null}

			{previousRoles
				? previousRoles.map((role) => (
						<PathCardStyle>
							<p style={{ color: "blue" }}>{role.title}</p>
							<p>({role.yearsInRole} years)</p>
						</PathCardStyle>
					))
				: null}
			<p>{statement}</p>
			<p>{pathTags}</p>
		</div>
	);
}
