import React, {
	useReducer,
	createContext,
	useMemo,
	useContext,
	useCallback,
	useRef,
} from 'react';
import dataReducer, { dataInitialState } from './reducer';
import dataTypes from './types';

// Context
export const DataContext = createContext();

function DataProvider(props) {
	const [state, dispatch] = useReducer(dataReducer, dataInitialState);
	const webcamRef = useRef(null);

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

	const capture = useCallback(() => {
		console.log(webcamRef.current.getScreenshot());

		dispatch({
			type: dataTypes.UPDATE_FILE,
			payload: {
				file: webcamRef.current.getScreenshot(),
				imagePreview: webcamRef.current.getScreenshot(),
			},
		});
	}, []);

	const value = useMemo(() => {
		return {
			state,
			updateFile,
			webcamRef,
			capture,
		};
	}, [state, updateFile, capture]);

	return (
		<DataContext.Provider value={value} {...props}>
			{props.children}
		</DataContext.Provider>
	);
}

export const useData = () => useContext(DataContext);

export default DataProvider;
