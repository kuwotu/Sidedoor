import { useEffect, useState } from "react";
import { CardsSectionText } from "../styles";
import { getCareerPath } from "../api";
import type { CareerPath } from "../types";
import { PathCard } from "./PathCard";

const Cards = () => {
	const [careerPathData, setCareerPathData] = useState<CareerPath[]>([]);
	const [isError, setError] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		const fetchData = async () => {
			const careerPaths = await getCareerPath();
			if (careerPaths == undefined) {
				setError(true);
			} else {
				setCareerPathData(careerPaths);
			}
			setIsLoading(false);
		};

		fetchData();
	}, []);

	if (isLoading) return <p>...Loading</p>;
	if (isError) return <p>Error</p>;

	return (
		<>
			{careerPathData.map((card) => (
				<PathCard
					firstName={card.firstName}
					lastName={card.lastName}
					jobs={card.jobs}
					statement={card.statement}
					pathTags={card.pathTags}
					key={card.id}
				/>
			))}
		</>
	);
};

export const CardsSection = () => {
	return (
		<>
			<CardsSectionText>Recently shared paths</CardsSectionText>
			<Cards />
		</>
	);
};
