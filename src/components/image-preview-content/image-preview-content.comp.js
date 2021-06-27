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
		if (!state.imagePreview) navigate('/get-started');
	}, [state.imagePreview]);

	return (
		<Container>
			<div className='general'>
				{isMobile ? (
					<div className='image-preview'>
						<img src={state.imagePreview} alt='' />
					</div>
				) : (
					// <div className='image-preview'>
					<DesktopWebcam />
					// </div>
				)}
			</div>

			<div className='desktop'>
				{/* <Button
					text='Next'
					variant='outline'
					size='lg'
					className='btn'
					onClick={() => navigate('/image')}
				/> */}

				<Button
					text='Capture'
					variant='outline'
					size='lg'
					className='btn'
					onClick={capture}
				/>
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
