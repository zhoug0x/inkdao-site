import styled from 'styled-components';
import { Container } from 'react-bootstrap';

const Y_PADDING = '8rem';

export const LayoutContainer = styled(Container)`
	// Override Bootstrap container to have Y-axis padding at the largest width
	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		padding-left: ${Y_PADDING};
		padding-right: ${Y_PADDING};
	}
`;
