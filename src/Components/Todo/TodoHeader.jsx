import React from 'react'
import { format } from 'date-fns'
import { Typography, Box, Fab } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import theme from '../../MuiTheme'
const date = new Date()
const today_date = `${format(date, 'EEEE, MMM yyyy')}`

const Header = () => {
	return (
		<>
			<Box
				width="100%"
				display="flex"
				flexDirection="row"
				justifyContent="space-between"
			>
				<Typography
					color={theme.palette.grey[700]}
					fontWeight={500}
					variant="h4"
				>
					{today_date}
				</Typography>
				<Fab color="primary" aria-label="add">
					<AddIcon />
				</Fab>
			</Box>
			<Typography color="primary" fontWeight={500} variant="subtitle1">
				3 Tasks
			</Typography>
		</>
	)
}

export default Header
