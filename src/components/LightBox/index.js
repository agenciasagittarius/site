import React, { useState } from 'react';

const LightBox = ({ children, src, alt, Wrapper = 'div', zIndex = 100 }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleIsOpen = () => {
		setIsOpen(!isOpen);
	};

	return (
		<Wrapper onClick={toggleIsOpen} style={{cursor: 'pointer'}}>
			{children}
			{isOpen ?
				<div onClick={toggleIsOpen} style={{
					position: 'fixed',
					top: '0',
					left: '0',
					height: '100vh',
					width: '100vw',
					backgroundColor: 'rgba(0,0,0,0.7)',
					cursor: 'pointer',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
					zIndex
				}}>
					<img src={src}
						alt={alt}
						style={{
							maxHeight: '90%',
							maxWidth: '90%'
						}}
            draggable="false"
					/>
				</div>
				: null}
		</Wrapper>
	);
};

export default LightBox;