import { css } from 'styled-components';

export const getGreenFrameStyles = () => css`
	&::after {
		content: '';
		position: absolute;
		top: 5%;
		left: 5%;
		width: 90%;
		height: 90%;
		background: url('/images/square-frame-green.svg');
		background-size: 100% 100%;
		color: red;
	}
`;
