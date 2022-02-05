import * as React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Checkbox from '@mui/material/Checkbox'
import Typography from '@mui/material/Typography'
import theme from '../../MuiTheme'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
	ListItem: {
		'&::before': {
			content: '""',
			position: 'absolute',
			right: 'auto',
			left: 0,
			margin: 'auto',
			width: '100%',
			borderTop: `2px dashed ${theme.palette.grey[400]}`,
			maxWidth: '0%',
			transition: 'all 200ms ease-out'
		}
	},
	selectedItem: {
		'&::before': {
			maxWidth: '100%',
			transition: 'all 300ms ease-in'
		}
	}
})

export default function CheckboxList() {
	const classes = useStyles()
	const [
		checked, setChecked
	] = React.useState([
		0
	])

	const handleToggle = (value) => () => {
		const currentIndex = checked.indexOf(value)
		const newChecked = [
			...checked
		]

		if (currentIndex === -1) {
			newChecked.push(value)
		} else {
			newChecked.splice(currentIndex, 1)
		}

		setChecked(newChecked)
		console.info(checked)

	}

	return (
		<List sx={{ width: '100%', bgcolor: 'background.paper' }}>
			{[
				0, 1, 2, 3
			].map((value, index) => {
				const labelId = `checkbox-list-label-${value}`

				return (
					<ListItem
						className={`${classes.ListItem} ${checked.includes(index) ? classes.selectedItem : ''}`}
						key={value}
						secondaryAction={
							<Typography variant="body2" color={theme.palette.grey[500]}>7:00 am</Typography>
						}
						disablePadding
					>
						<ListItemButton role={undefined} onClick={handleToggle(value)} dense>
							<ListItemIcon>
								<Checkbox
									edge="start"
									checked={checked.indexOf(value) !== -1}
									tabIndex={-1}
									disableRipple
									inputProps={{ 'aria-labelledby': labelId }}
								/>
							</ListItemIcon>
							<ListItemText id={labelId} primary={`Line item ${value + 1}`} />
						</ListItemButton>
					</ListItem>
				)
			})}
		</List>
	)
}
