import React from 'react';

import PageLayout from '../layouts/page/page.layout';
import FinalContent from '../components/final-content/final-content.comp';
import { useIsMobile } from '../utils/hooks/use-is-mobile';

const Final = () => {
	const isMobile = useIsMobile();

	return (
		<PageLayout
			subTopic={isMobile ? 'Everything Checks Out' : 'Everything checks out!'}
			title='Final preview'
		>
			<FinalContent />
		</PageLayout>
	);
};

export default Final;
