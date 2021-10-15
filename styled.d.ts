import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		colors: {
			text: string;
			lightText: string;
			link: string;
			background: string;
		};
		breakpoints: {
			sm: string;
			md: string;
			lg: string;
		};
		widths: {
			smContainer: string;
			mdContainer: string;
			lgContainer: string;
		};
	}
}
