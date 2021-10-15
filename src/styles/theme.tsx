import { DefaultTheme } from 'styled-components';

// Update 'DefaultTheme' interface in 'styled.d.ts' when adding new props!
const theme: DefaultTheme = {
	colors: {
		text: '#333',
		lightText: '#555',
		link: 'dodgerblue',
		background: '#FFF',
	},
	breakpoints: {
		sm: '576px',
		md: '768px',
		lg: '992px',
	},
	widths: {
		smContainer: '540px',
		mdContainer: '720px',
		lgContainer: '960px'
	}
};

export default theme;
