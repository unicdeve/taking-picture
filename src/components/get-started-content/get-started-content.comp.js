import React from 'react';

import { Container } from './get-started-content.styled';
import Button from '../button/button.comp';
import IconFrame from '../icon-frame/icon-frame.comp';
import { useIsMobile } from '../../utils/hooks/is-mobile';
import { list } from '../../mock-ups/get-started.data';

export default function GetStartedContent() {
	const isMobile = useIsMobile();

	return (
		<Container>
			<div className='content'>
				<h5>Guidelines</h5>

				<div className='wrapper'>
					<ul>
						{list.map((l) => (
							<li key={l.id}>{l.text}</li>
						))}
					</ul>

					<ol>
						{list.map((l) => (
							<li key={l.id}>{l.text}</li>
						))}
					</ol>

					<div className='icon-wrapper'>
						<IconFrame icon='/images/icons/avatar.svg' />
					</div>
				</div>
			</div>

			<Button
				text='Take A Photo'
				variant={isMobile ? 'solid' : 'outline'}
				size='lg'
				className='btn'
			/>
		</Container>
	);
}
