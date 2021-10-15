import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	padding-right: 2rem;
	padding-left: 2rem;
	margin-right: auto;
	margin-left: auto;

	@media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		max-width: ${({ theme }) => theme.widths.smContainer};
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		max-width: ${({ theme }) => theme.widths.mdContainer};
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		max-width: ${({ theme }) => theme.widths.lgContainer};
	}
`;
