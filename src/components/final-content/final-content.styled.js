import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;

	.desktop {
		display: none;

		button {
			margin-top: 2.5rem;
		}
	}

	@media (min-width: 768px) {
		.desktop {
			display: flex;
			justify-content: center;

			.btn {
				margin-left: 2rem;
			}
		}
	}
`;

export const MBContent = styled.div`
	margin-top: 14rem;
	display: flex;
	flex-direction: column;
	align-items: center;

	.btn {
		margin-top: 0.1rem;
	}

	.no-bg-btn {
		margin-top: 1.5rem;
	}

	@media (min-width: 768px) {
		display: none;
	}
`;

export const StyledGeneral = styled.div`
	margin-top: 10rem;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 15px;
	flex-direction: column;

	.image-preview {
		width: 254px;
		height: 287px;
		background: #ffffff;
		box-shadow: 0px 0px 46px -8px rgba(0, 0, 0, 0.25);
		border-radius: 15px;

		img {
			width: 100%;
			height: 100%;
			border-radius: 15px;
			object-fit: cover;
		}
	}

	@media (min-width: 768px) {
		flex-direction: row;
		align-items: flex-start;
		margin-top: unset;
		border-radius: 20px;

		.image-preview {
			width: 400px;
			height: 390px;
			border-radius: 20px;

			img {
				border-radius: 20px;
			}
		}
	}

	@media (min-width: 1024px) {
		border-radius: 23px;

		.image-preview {
			width: 500px;
			height: 470px;
			border-radius: 23px;

			img {
				border-radius: 23px;
			}
		}
	}
`;
