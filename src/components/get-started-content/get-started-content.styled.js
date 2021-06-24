import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	@media (min-width: 768px) {
		.content {
		}
	}
`;
