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

const handleShareStory = () => {
	console.log("share story");
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
const StoryButtons = () => {
	return (
		<ButtonsContainer>
			<StyledButton onClick={handleShareStory}>Share your story</StyledButton>
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
	return (
		<StorySectionContainer>
			<StoryStats />
			<StoryButtons />
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
