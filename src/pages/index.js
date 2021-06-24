import React from 'react';

import PageLayout from '../layouts/page/page.layout';
import { StyledHome } from '../components/styled/home.styled';

const IndexPage = () => {
	return (
		<PageLayout
			subTopic={
				<>
					Take a passport sized photo using your own device and have it printed
					at <span>any</span> printicular booth.
				</>
			}
		>
			<StyledHome></StyledHome>
		</PageLayout>
	);
};

export default IndexPage;
