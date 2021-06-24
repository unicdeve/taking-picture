import React from 'react';
import { homeData } from '../../mock-ups/home.data';

import { Container } from './home-content.styled';
import IconFrame from '../icon-frame/icon-frame.comp';

export default function HomeContent() {
	return (
		<Container>
			<div className='icons'>
				{homeData.map(({ id, icon }) => {
					return (
						<>
							<IconFrame key={id} icon={icon} />
						</>
					);
				})}
			</div>
		</Container>
	);
}
