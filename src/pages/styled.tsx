import styled from 'styled-components';

export const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	border-bottom: 1px solid ${({ theme }) => theme.colors.secondaryText};
	margin: 4rem 0 0 0;
	padding-bottom: 1rem;

	h1 {
		font-size: 2.5em;
		letter-spacing: -0.05em;
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
& > *:not(:last-child) {
	margin-right: 0.75em;
}

`

export const Content = styled.div`
	li {
		line-height: 1.75em;
	}
`;
