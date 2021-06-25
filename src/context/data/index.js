import React, { useReducer, createContext, useMemo, useContext } from 'react';
import dataReducer, { dataInitialState } from './reducer';
// import dataTypes from './types';

// Context
const DataContext = createContext();

function DataProvider(props) {
	const [state, dispatch] = useReducer(dataReducer, dataInitialState);

	const value = useMemo(() => {
		return {
			state,
		};
	}, [state]);

	return <DataContext.Provider value={value} {...props} />;
}

const useData = () => useContext(DataContext);

export { DataContext, useData };

export default DataProvider;
