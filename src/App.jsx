import React from 'react'
import LoadingButton from '@mui/lab/LoadingButton'
import SaveIcon from '@mui/icons-material/Save'

function App() {
	const arr = [
		1, 2, 3
	]
	console.log(arr)
	return (
		<LoadingButton loading loadingPosition="start" startIcon={<SaveIcon />} variant="contained" >
			Save
		</LoadingButton>
	)
}

export default App