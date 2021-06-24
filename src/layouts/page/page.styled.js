import styled from 'styled-components';

export const StyledLayout = styled.main`
	min-height: 100vh;
	width: 100%;
	background-image: url('/images/bg.png');
	background-size: cover;
	display: flex;
	flex-flow: column;

	header {
		margin-top: 3rem;
		text-align: center;
		color: #fff;

		h1 {
			font-size: 3rem;
			text-transform: capitalize;
		}

		p {
			font-style: ${({ isMobile }) => (isMobile ? 'normal' : 'italic')};
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

export const ChildContainer = styled.div`
	flex: 1;
	background: #fff;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	box-shadow: 0px 0px 171px -51px rgba(0, 0, 0, 0.25);
	border-radius: 100px 100px 0px 0px;
	margin-top: 2rem;

	@media (min-width: 768px) {
		align-items: center;
		background: unset;
		box-shadow: unset;
		border-radius: unset;
		margin-top: unset;
	}
`;
