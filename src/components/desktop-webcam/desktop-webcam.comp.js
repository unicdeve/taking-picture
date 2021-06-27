import React from 'react';
import Webcam from 'react-webcam';
import { useData } from '../../context/data';
import { StyledWebCam } from './desktop-webcam.styled';

const videoConstraints = {
	facingMode: 'user',
};

export default function DesktopWebcam() {
	const { webcamRef } = useData();
	const { state } = useData();

	return (
		<StyledWebCam>
			{state.imagePreview ? (
				<img src={state.imagePreview} alt='' />
			) : (
				<Webcam
					audio={false}
					ref={webcamRef}
					screenshotFormat='image/jpeg'
					videoConstraints={videoConstraints}
				/>
			)}
		</StyledWebCam>
	);
}
