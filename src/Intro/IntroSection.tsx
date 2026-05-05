import { useState, type Dispatch, type SetStateAction } from "react";
import { Form } from "../Form/Form";
import {
	IntroStats,
	IntroStatsDiv,
	StyledH1,
	StyledButton,
	ButtonsContainer,
	StorySectionContainer,
	IntroSectionContainer,
	StyledHookline,
	IntroTextContainer,
} from "./styles";
import { Modal } from "../Modal/Modal";

type ShareStoryProp = {
	setIsFormModalOpen: Dispatch<SetStateAction<boolean>>;
};

const handleBrowseStory = () => {
	console.log("share story");
};

const Intro = () => {
	return (
		<IntroTextContainer>
			<StyledHookline>REAL CAREERS, REAL ROUTES </StyledHookline>
			<StyledH1>
				Browse step-by-step stories from people who took unexpected paths to
				their careers.
			</StyledH1>
		</IntroTextContainer>
	);
};
const StoryButtons = ({ setIsFormModalOpen }: ShareStoryProp) => {
	return (
		<ButtonsContainer>
			<StyledButton onClick={() => setIsFormModalOpen(true)}>
				Share your story
			</StyledButton>
			<StyledButton onClick={handleBrowseStory}>Browse stories</StyledButton>
		</ButtonsContainer>
	);
};

const StoryStats = () => {
	return (
		<IntroStatsDiv>
			<IntroStats>
				<p>{100}</p>
				<p>stories</p>
			</IntroStats>
			<IntroStats>
				<p>{100}</p>
				<p> career fields</p>
			</IntroStats>
			<IntroStats>
				<p>avg {4}</p>
				<p> steps before transitioning</p>
			</IntroStats>
		</IntroStatsDiv>
	);
};

const StorySection = () => {
	const [isFormModalOpen, setIsFormModalOpen] = useState<boolean>(false);
	return (
		<StorySectionContainer>
			<StoryStats />
			<StoryButtons setIsFormModalOpen={setIsFormModalOpen} />
			<Modal isOpen={isFormModalOpen} onClose={setIsFormModalOpen}>
				<Form setIsFormModalOpen={setIsFormModalOpen} />
			</Modal>
		</StorySectionContainer>
	);
};

const IntroSection = () => {
	return (
		<IntroSectionContainer>
			<Intro />
			<StorySection />
		</IntroSectionContainer>
	);
};

export default IntroSection;
