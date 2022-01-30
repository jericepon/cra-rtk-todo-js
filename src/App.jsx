import React from 'react'
import LoadingButton from '@mui/lab/LoadingButton'
import SaveIcon from '@mui/icons-material/Save'

function App() {
	return (
		<LoadingButton loading loadingPosition="start" startIcon={<SaveIcon />} variant="contained" >
			Save
		</LoadingButton>
	)
}

export default App
