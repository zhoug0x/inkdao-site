import { DefaultTheme } from 'styled-components';
import baseTheme from './base';

// Update the interface in 'styled.d.ts' when adding new colors! This enforces type safety across light/dark themes
const colors = {
	text: '#FFF',
	secondaryText: '#999',
	link: 'cornflowerblue',
	background: '#333',
};

const lightTheme: DefaultTheme = { colors, ...baseTheme };

export default lightTheme;
