import React from 'react';

import { StyledIconFrame } from './icon-frame.styled';

export default function IconFrame({ icon, title }) {
	return (
		<StyledIconFrame>
			<div className='icon-container'>
				<img src={icon} alt='' />
			</div>

			<span>{title}</span>
		</StyledIconFrame>
	);
}
