import React from 'react';
import { homeData } from '../../mock-ups/home.data';

import { Container } from './home-content.styled';
import IconFrame from '../icon-frame/icon-frame.comp';

export default function HomeContent() {
	return (
		<Container>
			<div className='icons'>
				{homeData.map(({ id, icon, title }) => {
					return (
						<>
							<IconFrame key={id} icon={icon} title={title} />
							{id < 3 && (
								<img
									className='arrow'
									src='/images/icons/right-arrow.svg'
									alt=''
								/>
							)}
						</>
					);
				})}
			</div>
		</Container>
	);
}
