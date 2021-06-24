import React from 'react';

import '../../../static/css/index.css';
import { useIsMobile } from '../../utils/hooks/is-mobile';

import { StyledLayout, ChildContainer } from './page.styled';

export default function PageLayout({ title, subTopic, children }) {
	const isMobile = useIsMobile();

	return (
		<StyledLayout isMobile={isMobile}>
			<title>{title ? title : 'Home Page'}</title>

			<header>
				<h1>passport photo creator</h1>

				{subTopic && <p>{subTopic}</p>}
			</header>

			<ChildContainer>{children}</ChildContainer>
		</StyledLayout>
	);
}
