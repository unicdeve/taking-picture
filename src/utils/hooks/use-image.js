import { useState } from 'react';

export const useImageAction = () => {
	const [values, setValues] = useState({});

	const handleClick = (name, value) => {
		setValues({ ...values, [name]: value });
	};

	return {
		handleClick,
		values,
	};
};
