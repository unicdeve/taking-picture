import React from 'react';

import { Container } from './get-started-content.styled';
import Button from '../button/button.comp';
import PhoneCamera from '../phone-camera/phone-camera.comp';
import IconFrame from '../icon-frame/icon-frame.comp';
import { useIsMobile } from '../../utils/hooks/use-is-mobile';
import { list } from '../../mock-ups/get-started.data';
import { useCamera } from '../../utils/hooks/use-camera';

export default function GetStartedContent() {
	const isMobile = useIsMobile();
	const { camRef, takePicture, desktopNext } = useCamera();

	return (
		<Container>
			<div className='content'>
				<h5>Guidelines</h5>

				<div className='wrapper'>
					<ul>
						{list.map((l, i) => (
							<li
								key={l.id}
								style={{ margin: i === list.length - 1 ? '0' : '0 0 3rem 0' }}
							>
								{l.text}
							</li>
						))}
					</ul>

					<ol>
						{list.map((l, i) => (
							<li
								key={l.id}
								style={{ margin: i === list.length - 1 ? '0' : '0 0 3rem 0' }}
							>
								{l.text}
							</li>
						))}
					</ol>

					<div className='icon-wrapper'>
						<IconFrame icon='/images/icons/avatar.svg' />
					</div>
				</div>
			</div>

			{/* For moble camera */}
			{isMobile && <PhoneCamera camRef={camRef} />}

			<Button
				text='Take A Photo'
				variant={isMobile ? 'solid' : 'outline'}
				size='lg'
				className='btn'
				onClick={isMobile ? takePicture : desktopNext}
			/>
		</Container>
	);
}
