import React from 'react';
import DataProvider from './src/context/data';

export const wrapRootElement = ({ element }) => (
	<DataProvider>{element}</DataProvider>
);
