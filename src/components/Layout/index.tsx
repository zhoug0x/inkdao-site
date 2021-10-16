import React from 'react';
import Head from 'next/head';

import * as S from './styled';

const FAVICON_STRING =
	'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🖋️</text></svg>';

interface LayoutProps {
	title: string;
}

const Layout: React.FC<LayoutProps> = ({ title, children }) => {
	return (
		<S.Container>
			<Head>
				<link rel="icon" href={FAVICON_STRING} />
				<title>{title}</title>
			</Head>
			{children}
		</S.Container>
	);
};

export default Layout;
