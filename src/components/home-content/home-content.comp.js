import React, { useState } from 'react';
import { homeData } from '../../mock-ups/home.data';

import { Container, MBContent, Step } from './home-content.styled';
import IconFrame from '../icon-frame/icon-frame.comp';
import Button from '../button/button.comp';

export default function HomeContent() {
	const [current, setCurrent] = useState(0);

	const next = () => {
		setCurrent((prev) => {
			if (prev <= 1) return prev + 1;
			return prev;
		});
	};

	return (
		<Container>
			<div className='content'>
				<div className='wrapper'>
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

				<Button
					to='/get-started'
					text='Get Started'
					variant='outline'
					size='lg'
					className='btn'
				/>
			</div>

			<MBContent>
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

				{current <= 1 && <Button text='Next' className='btn' onClick={next} />}

				{current === 2 && (
					<Button
						to='/get-started'
						text='Get Started'
						variant='solid'
						size='lg'
						className='btn'
					/>
				)}
			</MBContent>
		</Container>
	);
}
