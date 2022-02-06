import { LoadingButton } from '@mui/lab'
import { FormControl, Modal, Paper, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import SaveIcon from '@mui/icons-material/Save'

const CreateTodoModal = ({ handleClose, open }) => {
	return (
		<div>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
			>
				<Box display='flex' width="100%" height="100%">
					<Box component={Paper} maxWidth='70%' width="100%" mx='auto' my='auto' p={4}>
						<form onSubmit={(e) => e.preventDefault()}>
							<FormControl sx={{ width: '100%', mb: 3 }}>
								<TextField
									label='Title'
									name='title'
								/>
							</FormControl>
							<LoadingButton endIcon={<SaveIcon />} loading={false} variant="contained">
								Save
							</LoadingButton>
						</form>
					</Box>
				</Box>
			</Modal>
		</div>
	)
}

export default CreateTodoModal
