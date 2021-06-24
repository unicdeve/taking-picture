import React from 'react';

import PageLayout from '../layouts/page/page.layout';
import GetStartedContent from '../components/get-started-content/get-started-content.comp';

const IndexPage = () => {
	return (
		<PageLayout
			subTopic={
				'To raise your chances of taking a valid photo, please follow the guidelines below.'
			}
		>
			<GetStartedContent />
		</PageLayout>
	);
};

export default IndexPage;
