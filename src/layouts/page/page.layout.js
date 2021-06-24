import React from 'react';

import '../../../static/css/index.css';

import { StyledLayout } from './page.styled';

export default function PageLayout({ title, children }) {
	return (
		<StyledLayout>
			<title>{title ? title : 'Home Page'}</title>

			{children}
		</StyledLayout>
	);
}
