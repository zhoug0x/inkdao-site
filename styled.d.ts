import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		colors: {
			text: string;
			secondaryText: string;
			link: string;
			background: string;
		};
		breakpoints: {
			sm: string;
			md: string;
			lg: string;
		};
	}
}
