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
const DataContext = createContext();

function DataProvider(props) {
	const [state, dispatch] = useReducer(dataReducer, dataInitialState);

	const updateFile = useCallback((file, cb) => {
		dispatch({
			type: dataTypes.UPDATE_FILE,
			payload: file,
		});

		cb && cb();
	}, []);

	const value = useMemo(() => {
		return {
			state,
			updateFile,
		};
	}, [state, updateFile]);

	return <DataContext.Provider value={value} {...props} />;
}

const useData = () => useContext(DataContext);

export { DataContext, useData };

export default DataProvider;
