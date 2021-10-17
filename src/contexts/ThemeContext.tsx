import { createContext, useContext, useEffect, useState } from 'react';
import { ThemeProvider as StyledProvider } from 'styled-components';

import GlobalStyle from '../styles/GlobalStyle';
import { lightTheme, darkTheme } from '../styles/themes';

interface ThemeContextProps {
	isDarkMode: boolean;
	setDarkMode: Function;
}

const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps);
export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProvider: React.FC = ({ children }) => {
	const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

	// Check local storage for saved theme setting
	useEffect(() => {
		const stored = localStorage.getItem('isDarkMode');

		if (stored) {
			const isDark = stored.toLowerCase() === 'true';
			setIsDarkMode(isDark);
		}
	}, []);

	// Set theme toggle in local storage, then states
	const setDarkMode = (bool: boolean) => {
		setIsDarkMode(bool);
		localStorage.setItem('isDarkMode', bool.toString());
	};

	return (
		<ThemeContext.Provider value={{ isDarkMode, setDarkMode }}>
			<StyledProvider theme={isDarkMode ? darkTheme : lightTheme}>
				<GlobalStyle />
				{children}
			</StyledProvider>
		</ThemeContext.Provider>
	);
};
