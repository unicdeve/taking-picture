import React, { useEffect } from 'react';
import { navigate } from 'gatsby';

import {
	Container,
	MBContent,
	StyledActions,
	StyledRadioInput,
	StyledGeneral,
} from './image-content.styled';
import Button from '../button/button.comp';
import PhoneCamera from '../phone-camera/phone-camera.comp';
import { useData } from '../../context/data';
import { useCamera } from '../../utils/hooks/use-camera';

export default function ImageContent() {
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

				<StyledActions>
					<div className='action top-label'>
						<div className='inputs'>
							<div className='left'>Yes</div>
							<div>No</div>
						</div>
					</div>

					<div className='action border'>
						<span className='label'>Did you remove any eyewear?</span>

						<div className='inputs'>
							<StyledRadioInput className='left' />
							<StyledRadioInput />
						</div>
					</div>

					<div className='action border'>
						<span className='label'>
							Is your face centered within the frame?
						</span>

						<div className='inputs'>
							<StyledRadioInput className='left' />
							<StyledRadioInput />
						</div>
					</div>

					<div className='action border'>
						<span className='label'>Are you against a white background?</span>

						<div className='inputs'>
							<StyledRadioInput className='left' />
							<StyledRadioInput />
						</div>
					</div>

					<div className='action border'>
						<span className='label'>
							Is your face clearly visible with no obscuring shadows or filters?
						</span>

						<div className='inputs'>
							<StyledRadioInput className='left' />
							<StyledRadioInput />
						</div>
					</div>

					<div className='action'>
						<span className='label'>
							Do you have a neutral facial expression?
						</span>

						<div className='inputs'>
							<StyledRadioInput className='left' />
							<StyledRadioInput />
						</div>
					</div>
				</StyledActions>
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
