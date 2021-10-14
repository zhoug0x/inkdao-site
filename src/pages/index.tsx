import React from 'react';

import Layout from '../components/Layout';
import { ExtLink, TwitterIcon } from '../components/Shared';

const HomePage: React.FC = () => {
	return (
		<Layout title="inkDAO🖋️">
			<div style={{ display: 'flex', alignItems: 'flex-end' }}>
				<h1 style={{ margin: '4rem 0 0 0' }}>inkDAO🖋️</h1>

				<ExtLink href="https://twitter.com/ink_dao">
					<TwitterIcon />
				</ExtLink>
			</div>
			<hr />
			<ol>
				<li>get inked,</li>
				<li>get DAO&apos;d,</li>
				<li>enter the Citadel 🏰</li>
			</ol>

			<ExtLink href="https://twitter.com/pet3rpan_/status/1441132311316074497?s=20">
				<small>do you want to know more?...</small>
			</ExtLink>
		</Layout>
	);
};

export default HomePage;
