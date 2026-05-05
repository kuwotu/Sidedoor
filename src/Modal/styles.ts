import styled from "styled-components";

export const StyledModal = styled.div`
	position: fixed;
	margin: 0;
	width: 50%;
	height: 80%;
	border: 1px solid black;
	background-color: white;
	left: 25%;
	top: 10%;
	z-index: 1000;
`;
export const StyledOverlay = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.7);
	z-index: 1000;
`;
