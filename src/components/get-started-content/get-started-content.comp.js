import React, { useRef } from 'react';
import { navigate } from 'gatsby';

import { Container } from './get-started-content.styled';
import Button from '../button/button.comp';
import IconFrame from '../icon-frame/icon-frame.comp';
import { useIsMobile } from '../../utils/hooks/is-mobile';
import { list } from '../../mock-ups/get-started.data';
import { useData } from '../../context/data';

export default function GetStartedContent() {
	const isMobile = useIsMobile();
	const inputRef = useRef();

	const { updateFile } = useData();

	const handleChange = (e) => {
		updateFile(e.target.files[0], () => {
			navigate('/image-preview');
		});
	};

	const takePicture = () => {
		inputRef.current.click();
	};

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

			{/* For moble camera */}
			<input
				ref={inputRef}
				type='file'
				accept='image/*'
				capture
				onChange={handleChange}
				style={{
					display: 'none',
				}}
			/>

			<Button
				text='Take A Photo'
				variant={isMobile ? 'solid' : 'outline'}
				size='lg'
				className='btn'
				onClick={takePicture}
			/>
		</Container>
	);
}
