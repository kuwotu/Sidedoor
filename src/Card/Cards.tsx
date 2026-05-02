import { useEffect, useState } from "react";
import { CardsSectionText } from "../styles";
import { getCareerPath } from "../api";
import type { CareerPath } from "../types";
import { PathCard } from "./PathCard";

const Cards = () => {
	const [careerPathData, setCareerPathData] = useState<CareerPath[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			const careerPaths = await getCareerPath();
			setCareerPathData(careerPaths);
		};

		fetchData();
	}, []);

	{
		const mappedPathCards = careerPathData.map((card) => (
			<PathCard
				firstName={card.firstName}
				lastName={card.lastName}
				currentRole={card.currentRole}
				previousRoles={card.previousRoles}
				statement={card.statement}
				pathTags={card.pathTags}
				key={card.id}
			/>
		));

		return mappedPathCards;
	}
};

export const CardsSection = () => {
	return (
		<>
			<CardsSectionText>Recently shared paths</CardsSectionText>
			<Cards />
		</>
	);
};
