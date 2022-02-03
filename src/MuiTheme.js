import { responsiveFontSizes } from '@mui/material'
import { createTheme } from '@mui/material/styles'
const { palette } = createTheme()
const { augmentColor } = palette
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } })

let theme = createTheme({
	palette: {
		mode: 'light',
		primary: createColor('#7B61FF'),
		common: { white: '#F6F6F6' }
	},
	typography: {
		// eslint-disable-next-line quotes
		fontFamily: "'Roboto', sans-serif",
	}
})

theme = responsiveFontSizes(theme)

export default theme
