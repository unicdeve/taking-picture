import React, { useEffect } from 'react';
import { navigate } from 'gatsby';

import { Container, MBContent } from './image-preview-content.styled';
import Button from '../button/button.comp';
import PhoneCamera from '../phone-camera/phone-camera.comp';
import { useData } from '../../context/data';
import { useCamera } from '../../utils/hooks/use-camera';
import { useIsMobile } from '../../utils/hooks/use-is-mobile';
import DesktopWebcam from '../desktop-webcam/desktop-webcam.comp';

export default function ImagePreviewContent() {
	const { state, capture } = useData();
	const { camRef, takePicture } = useCamera();
	const isMobile = useIsMobile();

	useEffect(() => {
		if (!state.imagePreview && isMobile) navigate('/get-started');
	}, [state.imagePreview, isMobile]);

	return (
		<Container>
			<div className='general'>
				{isMobile ? (
					<div className='image-preview'>
						<img src={state.imagePreview} alt='' />
					</div>
				) : (
					<DesktopWebcam />
				)}
			</div>

			<div className='desktop'>
				<p>There will be a 5 second countdown before capturing the image.</p>
				{state.imagePreview ? (
					<Button
						text='Next'
						variant='outline'
						size='lg'
						className='btn'
						onClick={() => navigate('/image')}
					/>
				) : (
					<Button
						text='Capture'
						variant='outline'
						size='lg'
						className='btn'
						onClick={capture}
						loading={state.uploading}
					/>
				)}
			</div>

			<MBContent>
				<Button
					text='Next'
					variant='solid'
					size='lg'
					className='btn'
					onClick={() => navigate('/image')}
				/>

				<Button
					text='Retake Photo'
					variant='noBg'
					size='lg'
					className='no-bg-btn'
					onClick={takePicture}
				/>
			</MBContent>
			<PhoneCamera camRef={camRef} />
		</Container>
	);
}
