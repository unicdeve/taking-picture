import React from 'react';

import { Container, MBContent } from './image-preview-content.styled';
import Button from '../button/button.comp';
import { useData } from '../../context/data';

export default function ImagePreviewContent() {
	const { state } = useData();

	return (
		<Container>
			<div className='general'>
				<div className='image-preview'>
					<img src={state.imagePreview} alt='' />
				</div>
			</div>

			<div className='desktop'>
				<Button
					// to='/get-started'
					text='Next'
					variant='outline'
					size='lg'
					className='btn'
				/>
			</div>

			<MBContent>
				<Button
					// to='/get-started'
					text='Next'
					variant='solid'
					size='lg'
					className='btn'
				/>
			</MBContent>
		</Container>
	);
}
