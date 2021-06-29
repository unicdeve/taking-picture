import styled from 'styled-components';
import { getGreenFrameStyles } from '../styled';

export const StyledWebCam = styled.div`
	width: 500px;
	height: auto;
	border-radius: 23px;
	overflow: hidden;
	box-shadow: 0px 0px 207px -18px rgba(255, 255, 255, 0.25);
	position: relative;

	img {
		width: 100%;
		height: 100%;
		border-radius: 23px;
		object-fit: cover;
	}

	video {
		width: 100%;
		/* height: 100%; */
		-moz-border-radius: 20px;
		-webkit-border-radius: 20px;
		border-radius: 20px;
		overflow: hidden;
	}

	${getGreenFrameStyles}
`;
