import React from 'react';

import PageLayout from '../layouts/page/page.layout';
import GetStartedContent from '../components/get-started-content/get-started-content.comp';
import { useIsMobile } from '../utils/hooks/is-mobile';

const IndexPage = () => {
	const isMobile = useIsMobile();

	return (
		<PageLayout
			subTopic={
				isMobile
					? 'Guided Face Placement'
					: 'To raise your chances of taking a valid photo, please follow the guidelines below.'
			}
		>
			<GetStartedContent />
		</PageLayout>
	);
};

export default IndexPage;
