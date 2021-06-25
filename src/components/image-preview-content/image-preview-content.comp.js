import React, { useEffect } from 'react';
import { navigate } from 'gatsby';

import { Container, MBContent } from './image-preview-content.styled';
import Button from '../button/button.comp';
import PhoneCamera from '../phone-camera/phone-camera.comp';
import { useData } from '../../context/data';
import { useCamera } from '../../utils/hooks/use-camera';

export default function ImagePreviewContent() {
	const { state } = useData();
	const { camRef, takePicture } = useCamera();

	useEffect(() => {
		if (!state.imagePreview) navigate('/get-started');
	}, [state.imagePreview]);

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
					onClick={() => navigate('/image')}
				/>
			</div>
			<MBContent>
				<Button
					// to='/get-started'
					text='Next'
					variant='solid'
					size='lg'
					className='btn'
					onClick={() => navigate('/image')}
				/>

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
