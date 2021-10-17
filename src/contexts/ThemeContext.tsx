import { createContext, useContext, useEffect, useState } from 'react';
import { ThemeProvider as StyledProvider } from 'styled-components';

import GlobalStyle from '../styles/GlobalStyle';
import { lightTheme, darkTheme } from '../styles/themes';

interface ThemeContextProps {
	isDarkMode: boolean;
	setIsDarkMode: Function;
}

const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps);

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProvider: React.FC = ({ children }) => {
	const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

	// TODO: create setter override to handle local storage plumbing
	// localStorage.setItem("isDarkMode", !isDarkMode);

	useEffect(() => {
		// TODO: check local storage for saved theme setting
		// const stored = localStorage.getItem("isDarkMode");
	}, []);

	return (
		<ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
			<StyledProvider theme={isDarkMode ? darkTheme : lightTheme}>
				<GlobalStyle />
				{children}
			</StyledProvider>
		</ThemeContext.Provider>
	);
};
