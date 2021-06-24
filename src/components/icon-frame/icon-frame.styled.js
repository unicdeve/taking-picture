import styled from 'styled-components';

export const StyledIconFrame = styled.div`
	width: 31rem;
	height: 28.875rem;
	background: #2b40ac;
	border-radius: 23px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	span {
		margin-top: 1rem;
	}

	.icon-container {
		background-image: url('/images/square-frame.svg');
		background-size: 100% 100%;
		background-repeat: no-repeat;
		width: 125px;
		height: 125px;
		display: flex;
		justify-content: center;
		align-items: center;

		img {
			width: 85px;
			height: 85px;
		}
	}

	@media (min-width: 768px) {
		width: 15.5rem;
		height: 14.437rem;
		background: linear-gradient(
			180deg,
			rgba(255, 255, 255, 0.4) 0%,
			rgba(255, 255, 255, 0.2) 100%
		);
	}
`;
