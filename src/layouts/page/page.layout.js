import React from 'react';

import '../../../static/css/index.css';

import { StyledLayout, ChildContainer } from './page.styled';

export default function PageLayout({ title, subTopic, children }) {
	return (
		<StyledLayout>
			<title>{title ? title : 'Home Page'}</title>

			<header>
				<h1>passport photo creator</h1>

				{subTopic && <p>{subTopic}</p>}
			</header>

			<ChildContainer>{children}</ChildContainer>
		</StyledLayout>
	);
}
