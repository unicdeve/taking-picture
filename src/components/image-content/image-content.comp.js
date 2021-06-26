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
import { imageData } from '../../mock-ups/image.data';
import { useImageAction } from '../../utils/hooks/use-image';

export default function ImageContent() {
	const { state } = useData();
	const { camRef, takePicture } = useCamera();

	useEffect(() => {
		if (!state.imagePreview) navigate('/get-started');
	}, [state.imagePreview]);

	const { values, handleClick } = useImageAction();

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

					{imageData.map(({ id, question, name }, i) => (
						<div
							key={id}
							className={`action ${i < imageData.length - 1 ? 'border' : ''}`}
						>
							<span className='label'>{question}</span>

							<div className='inputs'>
								<StyledRadioInput
									className='left'
									onClick={() => handleClick(name, 'true')}
									selected={values[name] === 'true'}
								/>
								<StyledRadioInput
									onClick={() => handleClick(name, 'false')}
									selected={values[name] === 'false'}
								/>
							</div>
						</div>
					))}
				</StyledActions>
			</StyledGeneral>
			<div className='desktop'>
				<Button text='Retake Photo' variant='outlineBorder' size='lg' />

				<Button
					text='Next'
					variant='outline'
					size='lg'
					className='btn'
					onClick={() => navigate('/final')}
				/>
			</div>
			<MBContent>
				<Button
					text='Next'
					variant='solid'
					size='lg'
					className='btn'
					onClick={() => navigate('/final')}
				/>

				<Button
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
