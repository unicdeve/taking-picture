import dataTypes from './types';

export const dataInitialState = {
	file: null,
};

export default function dataReducer(state = dataInitialState, action) {
	switch (action.type) {
		case dataTypes.FILE_INPUT:
			return {
				...state,
				file: action.payload.file,
			};

		default:
			return state;
	}
}
