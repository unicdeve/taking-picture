import React from 'react';

import PageLayout from '../layouts/page/page.layout';
import HomeContent from '../components/home-content/home-content.comp';
import { useIsMobile } from '../utils/hooks/use-is-mobile';

const IndexPage = () => {
	const isMobile = useIsMobile();

	return (
		<PageLayout
			subTopic={
				isMobile ? (
					'Three Simple Steps'
				) : (
					<>
						Take a passport sized photo using your own device and have it
						printed at <span>any</span> printicular booth.
					</>
				)
			}
		>
			<HomeContent />
		</PageLayout>
	);
};

export default IndexPage;
