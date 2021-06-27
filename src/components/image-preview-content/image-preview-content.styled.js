import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;

	.general {
		margin-top: 8rem;
		display: flex;
		justify-content: center;
		border-radius: 23px;

		.image-preview {
			width: 254px;
			height: 287px;
			background: #ffffff;
			box-shadow: 0px 0px 207px -18px rgba(255, 255, 255, 0.25);
			border-radius: 23px;

			img {
				width: 100%;
				height: 100%;
				border-radius: 23px;
				object-fit: cover;
			}
		}
	}

	.desktop {
		display: none;
	}

	@media (min-width: 768px) {
		.general {
			margin-top: 1rem;

			.image-preview {
				width: 400px;
				height: 390px;
			}
		}

		.desktop {
			display: flex;
			flex-direction: column;
			align-items: center;

			.btn {
				/* margin-top: 2.5rem; */
			}

			p {
				margin-top: 2rem;
			}
		}
	}

	@media (min-width: 1024px) {
		.general {
			margin-top: 2rem;

			.image-preview {
				width: 500px;
				height: 470px;
			}
		}
	}
`;

export const MBContent = styled.div`
	margin-top: 6rem;
	display: flex;
	flex-direction: column;
	align-items: center;

	.btn {
		margin-top: 5.5rem;
	}

	.no-bg-btn {
		margin-top: 1.5rem;
	}

	@media (min-width: 768px) {
		display: none;
	}
`;
