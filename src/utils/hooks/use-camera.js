import { useRef } from 'react';

export const useCamera = () => {
	const camRef = useRef();

	const takePicture = () => {
		camRef.current.click();
	};

	return {
		camRef,
		takePicture,
	};
};
