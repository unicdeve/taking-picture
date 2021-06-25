import { useEffect, useState } from 'react';

export const useIsMobile = () => {
	const [isMobile, setIsMobile] = useState(window.innerWidth < 500);

	const onWindowResize = () => {
		setIsMobile(window.innerWidth < 500);
	};

	useEffect(() => {
		window.addEventListener('resize', onWindowResize);

		return () => window.removeEventListener('resize', onWindowResize);
	}, []);

	return isMobile;
};
