import React from 'react';

import PageLayout from '../layouts/page/page.layout';
// import { StyledHome } from '../components/styled/home.styled';
import HomeContent from '../components/home-content/home-content.comp';

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
			{/* <StyledHome> */}
			<HomeContent />
			{/* </StyledHome> */}
		</PageLayout>
	);
};

export default IndexPage;
