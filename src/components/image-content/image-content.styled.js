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
	margin-top: 6rem;
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
	margin-top: 3rem;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 15px;
	flex-direction: column;

	.image-preview {
		width: 125px;
		height: 141px;
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

export const StyledActions = styled.div`
	margin: 4rem 3rem 0 3rem;

	.action {
		height: 6rem;
		font-size: 15px;
		color: #808080;
		padding-bottom: 1rem;
		padding-top: 0.5rem;
		margin-bottom: 0.5rem;
		width: 100%;
		display: flex;
		justify-content: space-between;

		&.border {
			border-bottom: 1px solid rgba(0, 0, 0, 0.1);
		}

		.inputs {
			display: inline-flex;

			.left {
				margin-right: 2.5rem;
			}
		}
	}

	.top-label {
		height: unset;
		color: #000;
		justify-content: flex-end;

		.inputs {
			.left {
				margin-right: 2.9rem;
			}
		}
	}

	@media (min-width: 768px) {
		margin: 0 0 0 4rem;
		width: 30vw;

		.action {
			height: 3rem;
			font-size: 20px;
			color: #fff;

			&.border {
				border-bottom: none;
			}
		}

		.top-label {
			.inputs {
				.left {
					margin-right: 2.5rem;
				}
			}
		}
	}

	@media (min-width: 1024px) {
		.action {
			font-size: 20px;
		}
	}
`;

export const StyledRadioInput = styled.div`
	width: 25px;
	height: 25px;
	background-color: ${({ selected }) => (selected ? '#2B40AC' : '#fff')};
	border: 1px solid #808080;
	border-radius: 50%;

	@media (min-width: 768px) {
		background-color: ${({ selected }) => (selected ? '#000' : '#fff')};
		width: 29px;
		height: 29px;
		border: unset;
	}
`;
