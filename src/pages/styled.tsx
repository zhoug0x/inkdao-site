import styled from 'styled-components';

export const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	border-bottom: 1px solid ${({ theme }) => theme.colors.secondaryText};
	margin: 4rem 0 1rem 0;
	padding-bottom: 0.25rem;

	h1 {
		font-size: 2.5em;
		letter-spacing: -0.075em;
		margin: 0;
	}

	span {
		font-size: 2.5em;
	}
`;

export const Branding = styled.div`
	display: flex;
	align-items: flex-end;
`;

export const Links = styled.div`
	display: flex;
	justify-content: flex-end;
	font-size: 2rem;

	& > *:not(:last-child) {
		margin-right: 0.5em;
	}

	& svg {
		font-size: 0.75em;
	}
`;

export const Content = styled.div`
	li {
		line-height: 1.75em;
	}
`;
