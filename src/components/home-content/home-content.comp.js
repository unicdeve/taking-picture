import React, { useState } from 'react';
import { homeData } from '../../mock-ups/home.data';

import { Container, MBWrapper, Step } from './home-content.styled';
import IconFrame from '../icon-frame/icon-frame.comp';

export default function HomeContent() {
	const [current] = useState(0);
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

			<MBWrapper>
				<div className='steps'>
					{homeData.map((d, i) => (
						<Step id={d.id} current={current === i} />
					))}
				</div>

				<div className='current-step'>
					<IconFrame icon={homeData[current].icon} />

					<h6>{homeData[current].mbTitle}</h6>

					<p>{homeData[current].mbContent}</p>
				</div>
			</MBWrapper>
		</Container>
	);
}
