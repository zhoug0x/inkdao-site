import React from 'react';

import { useThemeContext } from '../contexts/ThemeContext';

import * as S from './styled';
import Layout from '../components/Layout';
import { ExtLink, TwitterIcon } from '../components/Shared';

const HomePage: React.FC = () => {
	const { isDarkMode, setIsDarkMode } = useThemeContext();

	return (
		<Layout title="inkDAO">
			<S.Header>
				<h1>inkDAO</h1>
				<span>🖋️</span>
				<ExtLink href="https://twitter.com/ink_dao">
					<TwitterIcon />
				</ExtLink>
				<button onClick={() => setIsDarkMode(!isDarkMode)}>theme</button>
			</S.Header>
			<S.Content>
				<ol>
					<li>
						get <strong>inked,</strong>
					</li>
					<li>
						get <strong>DAO&apos;d,</strong>
					</li>
					<li>
						<em>enter the Citadel</em> 🏰
					</li>
				</ol>

				<ExtLink href="https://twitter.com/pet3rpan_/status/1441132311316074497?s=20">
					<small>do you want to know more?...</small>
				</ExtLink>
			</S.Content>
		</Layout>
	);
};

export default HomePage;
