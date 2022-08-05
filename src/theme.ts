import { createTheme } from '@suid/material'
import { blue } from '@suid/material/colors'

export const theme = createTheme({
	palette: {
		mode: 'dark',
		background: {
			paper: '#34444c',
			default: '#263238',
		},
		primary: blue as any,
	},
})
