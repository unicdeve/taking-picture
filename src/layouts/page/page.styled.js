import styled from 'styled-components';

export const StyledLayout = styled.main`
	min-height: 100vh;
	width: 100%;
	background-image: url('/images/bg.png');
	background-size: cover;
	display: flex;
	flex-direction: column;

	header {
		margin-top: 3rem;
		text-align: center;
		color: #fff;

		h1 {
			font-size: 3rem;
			text-transform: capitalize;
		}

		p {
			span {
				font-weight: 600;
			}
		}

		@media screen and (min-height: 600px) {
			margin-top: 4rem;
		}

		@media screen and (min-height: 900px) {
			margin-top: 6rem;
		}

		@media screen and (min-height: 1000px) {
			margin-top: 9rem;
		}
	}

	@media screen and (min-width: 768px) {
		header {
			h1 {
				text-transform: uppercase;
			}
		}
	}
`;
