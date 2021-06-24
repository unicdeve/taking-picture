import React from 'react';
import { StyledButton, StyledLink } from './button.styled';

export default function Button({
	text,
	to,
	variant,
	className,
	size,
	...rest
}) {
	if (to)
		return (
			<StyledLink
				className={className}
				to={to}
				variant={variant}
				size={size}
				{...rest}
			>
				{text}
			</StyledLink>
		);

	return (
		<StyledButton className={className} variant={variant} size={size} {...rest}>
			{text}
		</StyledButton>
	);
}

Button.defaultProps = {
	variant: 'solid',
	size: 'sm',
};
