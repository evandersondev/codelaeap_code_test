import { styled } from '../../../../styles'

export const HomePostContent = styled('div', {})

export const PostWrapper = styled('div', {
	borderRadius: '16px',
	overflow: 'hidden',
	border: '1px solid $gray400',

	header: {
		width: '100%',
		height: '70px',
		background: '$purple500',
		padding: '1.5rem',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',

		h3: {
			color: '$white',
			fontSize: '$xl',
		},

		div: {
			display: 'flex',
			alignItems: 'center',
			gap: '1.5rem',

			button: {
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				background: 'transparent',
				border: 0,
				color: '$white',
			},
		},
	},

	section: {
		padding: '1.5rem',
		color: '$gray300',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',

		span: {
			'&:first-child': {
				fontWeight: 700,
			},
		},
	},

	p: {
		fontSize: '$lg',
		display: 'block',
		padding: '0 1.5rem 1.5rem 1.5rem',
	},
})
