import dataTypes from './types';

export const dataInitialState = {
	file: null,
	imagePreview: null,
	uploading: false,
};

export default function dataReducer(state = dataInitialState, action) {
	switch (action.type) {
		case dataTypes.UPDATE_FILE:
			return {
				...state,
				file: action.payload.file,
				imagePreview: action.payload.imagePreview,
				uploading: false,
			};

		case dataTypes.UPLOADING:
			return {
				...state,
				uploading: action.payload,
			};

		default:
			return state;
	}
}
