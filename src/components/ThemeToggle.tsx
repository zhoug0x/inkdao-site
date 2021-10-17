import React from 'react';
import styled from 'styled-components';

import { useThemeContext } from '../contexts/ThemeContext';
import { SunIcon, MoonIcon } from '../components/Icons';

const ToggleBtn = styled.div`
	cursor: pointer;

	&:hover {
		opacity: 0.75;
	}
`;

const ThemeToggle: React.FC = () => {
	const { isDarkMode, setDarkMode } = useThemeContext();

	const onClick = () => setDarkMode(!isDarkMode);

	return (
		<ToggleBtn onClick={onClick}>
			{isDarkMode ? <SunIcon /> : <MoonIcon />}
		</ToggleBtn>
	);
};

export default ThemeToggle;
