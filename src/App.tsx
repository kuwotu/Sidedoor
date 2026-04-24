import "./App.css";
import { PathCard } from "./Card/pathCard";
import careerPathData from "./careerPathData";

function App() {
	const mappedPathCards = careerPathData.map((card) => (
		<PathCard
			firstName={card.firstName}
			lastName={card.lastName}
			currentRole={card.currentRole}
			previousRoles={card.previousRoles}
			statement={card.statement}
			pathTags={card.pathTags}
		/>
	));

	return mappedPathCards;
}

export default App;
