import { DefaultTheme } from 'styled-components';
import baseTheme from './base';

// Update the interface in 'styled.d.ts' when adding new colors! This enforces type safety across light/dark themes
const colors = {
	text: '#333',
	secondaryText: '#555',
	link: 'dodgerblue',
	background: '#FFF',
};

const lightTheme: DefaultTheme = { colors, ...baseTheme };

export default lightTheme;
