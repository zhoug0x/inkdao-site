import React from 'react';

import * as S from '../../components/HomePage/styled';
import Layout from '../../components/Layout';
import ThemeToggle from '../../components/ThemeToggle';
import { ExtLink } from '../../components/Shared';
import { TwitterIcon } from '../../components/Icons';

const HomePage: React.FC = () => {
	return (
		<Layout title="inkDAO">
			<S.Header>
				<S.Branding>
					<h1>inkDAO</h1>
					<span>🖋️</span>
				</S.Branding>
				<S.Links>
					<ExtLink href="https://twitter.com/ink_dao">
						<TwitterIcon />
					</ExtLink>
					<ThemeToggle />
				</S.Links>
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
