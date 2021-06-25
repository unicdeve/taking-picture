import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

const outlineStyles = css`
	background: #fff;
	color: #2b40ac;
	box-shadow: 0px 0px 171px -35px #ffffff;
	border-radius: 17px;
`;

const solidStyles = css`
	background: #2b40ac;
	color: #fff;
	box-shadow: 0px 0px 35px -6px rgba(120, 140, 250, 0.5);
	border-radius: 17px;
`;

const noBgStyles = css`
	background: #fff;
	color: #2b40ac;
`;

const outlineBorder = css`
	background: transparent;
	color: #fff;
	border: 1px solid #fff;
	border-radius: 17px;
`;

const lgStyles = css`
	width: 269px;
	height: 87px;
	font-weight: bold;
	font-size: 24px;

	@media (max-width: 450px) {
		width: 225px;
		height: 62px;
		font-size: 20px;
	}
`;

const smStyles = css`
	width: 175px;
	height: 55px;
	font-weight: bold;
	font-size: 20px;
`;

const getVariantStyles = ({ variant }) => {
	switch (variant) {
		case 'outline':
			return outlineStyles;

		case 'noBg':
			return noBgStyles;

		case 'outlineBorder':
			return outlineBorder;

		default:
		case 'solid':
			return solidStyles;
	}
};

const getSizeStyles = ({ size }) => {
	switch (size) {
		case 'lg':
			return lgStyles;

		default:
		case 'solid':
			return smStyles;
	}
};

export const StyledButton = styled.button`
	border: none;
	transition: all 0.3s ease 0s;

	${getVariantStyles}

	${getSizeStyles}

	&:focus {
		outline: none;
	}
`;

export const StyledLink = styled(Link)`
	background-color: #e4654b;
	text-decoration: none;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	transition: all 0.3s ease 0s;

	${getVariantStyles}

	${getSizeStyles}
`;
