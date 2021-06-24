import React from 'react';

import { Container } from './get-started-content.styled';
import Button from '../button/button.comp';
import { useIsMobile } from '../../utils/hooks/is-mobile';

export default function GetStartedContent() {
	const isMobile = useIsMobile();

	return (
		<Container>
			<div className='content'>
				<h1>Get Started</h1>

				<Button
					text='Take A Photo'
					variant={isMobile ? 'solid' : 'outline'}
					size='lg'
					className='btn'
				/>
			</div>
		</Container>
	);
}
