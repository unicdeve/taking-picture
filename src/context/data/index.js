import React, {
	useReducer,
	createContext,
	useMemo,
	useContext,
	useCallback,
	useRef,
} from 'react';
import axios from 'axios';
import dataReducer, { dataInitialState } from './reducer';
import dataTypes from './types';
import { api_url } from '../../utils/constants';

const toBase64 = (file) =>
	new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => resolve(reader.result);
		reader.onerror = (error) => reject(error);
	});

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
		dispatch({
			type: dataTypes.UPLOADING,
			payload: true,
		});
		setTimeout(() => {
			dispatch({
				type: dataTypes.UPDATE_FILE,
				payload: {
					file: webcamRef.current.getScreenshot(),
					imagePreview: webcamRef.current.getScreenshot(),
				},
			});
		}, 5000);
	}, []);

	const retakeImage = useCallback(() => {
		dispatch({
			type: dataTypes.UPDATE_FILE,
			payload: {
				file: null,
				imagePreview: null,
			},
		});
	}, []);

	// console.log('image in mb', state);

	const uploadImageMB = useCallback(async () => {
		dispatch({
			type: dataTypes.UPLOADING,
			payload: true,
		});

		const base64 = await toBase64(state.file);

		axios
			.post(`${api_url}/api/image-upload`, { file: base64 })
			.then((res) => {
				dispatch({
					type: dataTypes.UPDATE_FILE,
					payload: {
						imagePreview: res.data.secure_url,
						file: res.data.secure_url,
					},
				});
			})
			.catch((err) => {
				console.error('Error uploading image', err);
				dispatch({
					type: dataTypes.UPLOADING,
					payload: false,
				});
			});
	}, [state.file]);

	const uploadImage = useCallback(() => {
		dispatch({
			type: dataTypes.UPLOADING,
			payload: true,
		});

		axios
			.post(`${api_url}/api/image-upload`, { file: state.imagePreview })
			.then((res) => {
				dispatch({
					type: dataTypes.UPDATE_FILE,
					payload: {
						imagePreview: res.data.secure_url,
						file: res.data.secure_url,
					},
				});
			})
			.catch((err) => {
				console.error('Error uploading image', err);
				dispatch({
					type: dataTypes.UPLOADING,
					payload: false,
				});
			});
	}, [state.imagePreview]);

	const value = useMemo(() => {
		return {
			state,
			updateFile,
			webcamRef,
			capture,
			retakeImage,
			uploadImage,
			uploadImageMB,
		};
	}, [state, updateFile, capture, retakeImage, uploadImage, uploadImageMB]);

	return (
		<DataContext.Provider value={value} {...props}>
			{props.children}
		</DataContext.Provider>
	);
}

export const useData = () => useContext(DataContext);

export default DataProvider;
