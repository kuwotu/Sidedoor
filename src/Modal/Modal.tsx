// Modal.tsx
import type { Dispatch, SetStateAction } from "react";
import { createPortal } from "react-dom";
import { StyledModal, StyledOverlay } from "./styles";

type ModalProps = {
	isOpen: boolean;
	onClose: Dispatch<SetStateAction<boolean>>;
	children: React.ReactNode;
};

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
	if (!isOpen) return null;

	return createPortal(
		<StyledOverlay>
			<StyledModal onClick={(e) => e.stopPropagation()}>
				<button onClick={() => onClose(false)}>✕</button>
				{children}
			</StyledModal>
		</StyledOverlay>,
		document.body,
	);
};
