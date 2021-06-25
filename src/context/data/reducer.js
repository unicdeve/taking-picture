import dataTypes from './types';

export const dataInitialState = {
	file: null,
	imagePreview: null,
};

export default function dataReducer(state = dataInitialState, action) {
	console.log(action.payload);
	switch (action.type) {
		case dataTypes.UPDATE_FILE:
			return {
				...state,
				file: action.payload.file,
				imagePreview: action.payload.imagePreview,
			};

		default:
			return state;
	}
}
