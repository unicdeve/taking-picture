import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	.btn {
		margin-top: 15rem;
	}

	.content {
		display: flex;
		justify-content: center;
		flex-direction: column;

		h5 {
			margin: 8rem auto 10rem auto;
			color: #2b40ac;
			font-size: 18px;
		}

		.wrapper {
			display: flex;
			justify-content: center;
			align-items: center;

			ol {
				display: none;
			}

			ul {
				color: #808080;
				margin: 0 4rem;
				font-size: 15px;
			}

			li {
				margin: 0 0 4rem 0;
				padding-left: 1rem;
				line-height: 1.5;
			}

			.icon-wrapper {
				display: none;
			}
		}
	}

	@media (min-width: 768px) {
		.btn {
			margin-top: unset;
		}

		.content {
			flex-direction: row;

			h5 {
				display: none;
			}

			.wrapper {
				ol {
					display: block;
					width: 35%;
				}

				ul {
					display: none;
					color: #fff;
					margin: 0 3rem;
					font-size: 22px;
				}

				li {
					margin: 0 0 3rem 0;
					padding-left: 2rem;
				}

				.icon-wrapper {
					display: block;
					margin-left: 6rem;
				}
			}
		}
	}
`;
