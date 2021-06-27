import { useRef } from 'react';
import { navigate } from 'gatsby';

export const useCamera = () => {
	const camRef = useRef();

	const takePicture = () => {
		camRef.current.click();
	};

	const desktopNext = () => {
		navigate('/image-preview');
	};

	return {
		camRef,
		takePicture,
		desktopNext,
	};
};
