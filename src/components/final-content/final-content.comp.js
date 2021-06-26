import React, { useEffect } from 'react';
import { navigate } from 'gatsby';

import { Container, MBContent, StyledGeneral } from './final-content.styled';
import Button from '../button/button.comp';
import PhoneCamera from '../phone-camera/phone-camera.comp';
import { useData } from '../../context/data';
import { useCamera } from '../../utils/hooks/use-camera';

export default function FinalContent() {
	const { state } = useData();
	const { camRef, takePicture } = useCamera();

	useEffect(() => {
		if (!state.imagePreview) navigate('/get-started');
	}, [state.imagePreview]);

	return (
		<Container>
			<StyledGeneral>
				<div className='image-preview'>
					<img src={state.imagePreview} alt='' />
				</div>
			</StyledGeneral>
			<div className='desktop'>
				<Button text='Retake Photo' variant='outlineBorder' size='lg' />

				<Button text='Next' variant='outline' size='lg' className='btn' />
			</div>
			<MBContent>
				<Button text='Next' variant='solid' size='lg' className='btn' />

				<Button
					// to='/get-started'
					text='Retake Photo'
					variant='noBg'
					size='lg'
					className='no-bg-btn'
					onClick={takePicture}
				/>
			</MBContent>
			<PhoneCamera camRef={camRef} />;
		</Container>
	);
}
