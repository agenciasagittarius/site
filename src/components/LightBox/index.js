import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { IoClose } from 'react-icons/io5';
import styled from 'styled-components';

const LightBox = ({ src, alt, isOpen, onClose }) => {
	useEffect(() => {
		function handleKeyDown(event) {
			if (event.key === 'Escape') {
				onClose();
			}
		}

		document.addEventListener('keydown', handleKeyDown);

		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, [onClose]);

	if (!isOpen) {
		return null;
	}

	let container = document.getElementById('dialog-root');

	if (!container) {
		container = document.createElement('div');
		container.setAttribute('id', 'dialog-root');
		document.body.appendChild(container);
	}

	return createPortal(
		<Overlay>
			<CloseButton
				type='button'
				onClick={onClose}
			>
				<IoClose />
			</CloseButton>
			<img src={src}
				alt={alt}
				style={{
					maxHeight: '90%',
					maxWidth: '90%'
				}}
				draggable="false"
			/>
		</Overlay >,
		container
	);

};



const Overlay = styled.div`
  position: fixed;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100vw;
	background-color: rgba(0,0,0,0.7);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 999
`

const CloseButton = styled.button`
	background: #CC2A49;
	position: absolute;
	top: 2rem;
	right: 2rem;
	font-size: 2rem;
	color: var(--white);

	width: 2.5rem;
	height: 2.5rem;
	border-radius: 2.5rem;

	display: flex;
	justify-content: center;
	align-items: center;

	cursor: pointer;
`

export default LightBox;