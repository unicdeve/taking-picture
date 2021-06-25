import React from 'react';
import { navigate } from 'gatsby';

import { useData } from '../../context/data';

export default function PhoneCamera({ camRef }) {
	const { updateFile } = useData();

	const handleChange = (e) => {
		updateFile(e.target.files[0], () => {
			navigate('/image-preview');
		});
	};

	return (
		<input
			ref={camRef}
			type='file'
			accept='image/*'
			capture
			onChange={handleChange}
			style={{
				display: 'none',
			}}
		/>
	);
}
