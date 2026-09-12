import { useEffect, useState } from "react";
import { CardsSectionText } from "../styles";
import { getCareerPath } from "../../shared/api";
import type { CareerPath } from "../types";
import { PathCard } from "./PathCard";

const Cards = () => {
	const [careerPathData, setCareerPathData] = useState<CareerPath[]>([]);
	const [isError, setError] = useState<boolean>(false);
	const [isNull, setNull] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		const fetchData = async () => {
			const careerPaths = await getCareerPath();
			if (careerPaths == undefined) {
				setError(true);
			} else if (careerPaths.length == 0) {
				setNull(true);
			} else {
				setCareerPathData(careerPaths);
			}
			setIsLoading(false);
		};

		fetchData();
	}, []);
	if (isLoading) return <p>...Loading</p>;
	if (isNull) return <p>There is currently no data available</p>;
	if (isError) return <p>Error</p>;

	return (
		<>
			{careerPathData.map((card) => (
				<PathCard
					displayName={card.displayName}
					jobs={card.jobs}
					careerStory={card.statement}
					pathTags={card.pathTags}
					key={card.userId}
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
