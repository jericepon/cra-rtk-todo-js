import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import theme from './MuiTheme'
import * as serviceWorkerRegistration from './pwa/serviceWorkerRegistration'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import { store } from './redux/store'

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<App />
			</ThemeProvider>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
)

serviceWorkerRegistration.register()
reportWebVitals()
