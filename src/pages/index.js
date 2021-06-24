import React from 'react';

import PageLayout from '../layouts/page/page.layout';
import { StyledHome } from '../components/styled/home.styled';

const IndexPage = () => {
	return (
		<PageLayout>
			<StyledHome>
				<p>Home page</p>
			</StyledHome>
		</PageLayout>
	);
};

export default IndexPage;
