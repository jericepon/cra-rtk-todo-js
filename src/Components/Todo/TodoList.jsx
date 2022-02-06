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
import { red } from '@mui/material/colors'
import { getAllTodos } from '../../redux/todos/TodosSlice'
import { useDispatch, useSelector } from 'react-redux'

const useStyles = makeStyles({
	ListItem: {
		'&::before': {
			content: '""',
			position: 'absolute',
			right: 'auto',
			left: 0,
			margin: 'auto',
			width: '100%',
			borderTop: `4px dashed ${red[800]}`,
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

export default function TodoList() {
	const { todos: { todos, status: { loading, success, failed } } } = useSelector(state => state)
	const dispatch = useDispatch()
	React.useEffect(() => {
		dispatch(getAllTodos())
		console.info(loading,
			success,
			failed, todos, 1)
	}, [
	])

	const classes = useStyles()
	const [
		checked, setChecked
	] = React.useState([
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
	}

	return (
		<List sx={{ width: '100%', bgcolor: 'background.paper' }}>
			{todos.map((todo) => {
				const labelId = `checkbox-list-label-${todo.id}`
				return (
					<ListItem
						className={`${classes.ListItem} ${checked.includes(todo.id) ? classes.selectedItem : ''}`}
						key={todo.id}
						secondaryAction={
							<Typography variant="body2" color={theme.palette.grey[500]}>7:00 am</Typography>
						}
						disablePadding
					>
						<ListItemButton role={undefined} onClick={handleToggle(todo)} dense>
							<ListItemIcon>
								<Checkbox
									edge="start"
									checked={checked.indexOf(todo.id) !== -1}
									tabIndex={-1}
									disableRipple
									inputProps={{ 'aria-labelledby': labelId }}
								/>
							</ListItemIcon>
							<ListItemText id={labelId} primary={todo.title} />
						</ListItemButton>
					</ListItem>
				)
			})}
		</List>
	)
}
