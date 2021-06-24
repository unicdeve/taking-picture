import React from 'react';

import { StyledIconFrame } from './icon-frame.styled';

export default function IconFrame({ icon }) {
	return (
		<StyledIconFrame>
			<div className='icon-container'>
				<img src={icon} alt='' />
			</div>
		</StyledIconFrame>
	);
}
