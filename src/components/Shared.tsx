export const ExtLink: React.FC<any> = ({ children, ...props }) => (
	<a {...props} target="_blank" rel="noreferrer noopener">
		{children}
	</a>
);
