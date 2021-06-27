import styled from 'styled-components';

export const StyledWebCam = styled.div`
	width: 500px;
	height: 390px;
	border-radius: 20px;
	overflow: hidden;

	video {
		width: 100%;
		/* height: 100%; */
		-moz-border-radius: 20px;
		-webkit-border-radius: 20px;
		border-radius: 20px;
		overflow: hidden;
	}
`;
