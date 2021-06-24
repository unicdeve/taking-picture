import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;

	.content {
		display: none;

		.wrapper {
			.arrow {
				margin: auto 1rem;
			}
		}

		.btn {
			margin-top: 3.5rem;
		}
	}

	@media (min-width: 768px) {
		.content {
			display: flex;
			flex-direction: column;
			align-items: center;

			.wrapper {
				display: flex;
				justify-content: center;
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
		margin-top: 3.5rem;
	}

	.steps {
		margin-bottom: 8rem;
		display: flex;
		justify-content: center;
	}

	.current-step {
		display: flex;
		align-items: center;
		flex-direction: column;
		text-align: center;

		h6 {
			color: #2b40ac;
			font-size: 18px;
			margin-block-start: 2.63em;
			margin-block-end: 0.33em;
		}

		p {
			color: #808080;
			font-size: 15px;
			line-height: 1.5;
			width: 85%;
		}
	}

	@media (min-width: 768px) {
		display: none;
	}
`;

export const Step = styled.span`
	background: ${({ current }) => (current ? '#2b40ac' : '#fff')};
	width: ${({ current }) => (current ? '59px' : '13px')};
	height: 13px;
	margin: 0 1rem;
	border: 0.5px solid #2b40ac;
	display: block;
	border-radius: ${({ current }) => (current ? '30px' : '50%')};
`;
