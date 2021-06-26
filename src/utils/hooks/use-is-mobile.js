import { useEffect, useState } from 'react';
import { isBrowser } from '../constants';

export const useIsMobile = () => {
	const [isMobile, setIsMobile] = useState(
		isBrowser && window.innerWidth < 500
	);

	const onWindowResize = () => {
		setIsMobile(isBrowser && window.innerWidth < 500);
	};

	useEffect(() => {
		window.addEventListener('resize', onWindowResize);

		return () => window.removeEventListener('resize', onWindowResize);
	}, []);

	return isMobile;
};
