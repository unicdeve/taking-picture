import React from 'react';
import LoadingSpinner from '../loading-spinner/loading-spinner.comp';
import { StyledButton, StyledLink } from './button.styled';

export default function Button({
	text,
	to,
	variant,
	className,
	size,
	loading,
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
				{loading ? <LoadingSpinner /> : text}
			</StyledLink>
		);

	return (
		<StyledButton className={className} variant={variant} size={size} {...rest}>
			{loading ? <LoadingSpinner /> : text}
		</StyledButton>
	);
}

Button.defaultProps = {
	variant: 'solid',
	size: 'sm',
};
