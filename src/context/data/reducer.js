import dataTypes from './types';

export const dataInitialState = {
	file: null,
	imagePreview: null,
};

export default function dataReducer(state = dataInitialState, action) {
	switch (action.type) {
		case dataTypes.FILE_INPUT:
			return {
				...state,
				file: action.payload.file,
				imagePreview: action.payload.imagePreview,
			};

		default:
			return state;
	}
}
