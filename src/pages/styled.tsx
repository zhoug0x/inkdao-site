import styled from 'styled-components';

export const Header = styled.div`
	display: flex;
	align-items: flex-end;
	border-bottom: 1px solid ${({ theme }) => theme.colors.secondaryText};
	padding-bottom: 1rem;

	h1 {
		font-size: 2.5em;
		letter-spacing: -0.05em;
		margin: 4rem 0 0 0;
	}

	span {
		font-size: 2.5em;
	}
`;

export const Content = styled.div`
	li {
		line-height: 1.75em;
	}
`;
