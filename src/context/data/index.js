import React, {
	useReducer,
	createContext,
	useMemo,
	useContext,
	useCallback,
} from 'react';
import dataReducer, { dataInitialState } from './reducer';
import dataTypes from './types';

// Context
export const DataContext = createContext();

function DataProvider(props) {
	const [state, dispatch] = useReducer(dataReducer, dataInitialState);

	const updateFile = useCallback((file, cb) => {
		const imagePreview = URL.createObjectURL(file);

		dispatch({
			type: dataTypes.UPDATE_FILE,
			payload: {
				file,
				imagePreview,
			},
		});

		cb && cb();
	}, []);

	const value = useMemo(() => {
		return {
			state,
			updateFile,
		};
	}, [state, updateFile]);

	return (
		<DataContext.Provider value={value} {...props}>
			{props.children}
		</DataContext.Provider>
	);
}

export const useData = () => useContext(DataContext);

export default DataProvider;
