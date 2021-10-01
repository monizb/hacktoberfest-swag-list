import React from 'react';
import {Button, Popover} from '@mui/material';
import classes from './SortBy.module.css';

function SortBy({sortBy, onChangeSortBy}) {
	const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

	const open = Boolean(anchorEl);
	const id = open ? 'sortby-popover' : undefined;

	const handleResetSortBy = () => {
		onChangeSortBy(null);
		handleClose();
	};

	const handleChangeSortBy = (e) => {
		const updatedSortBy = {
			...sortBy,
			[e.target.name]: e.target.value,
		};
		onChangeSortBy(updatedSortBy);
		handleClose();
	};

  return (
    <div className={classes.container}>
			<Button
				aria-describedby={id}
				variant="contained"
				size="medium"
				onClick={handleClick}
				style={{backgroundColor: '#B53A26'}}
			>
				Sort
			</Button>
			<Popover
				id={id}
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'right',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
			>
				<div className={classes.popover}>
					<div>
						<p>Sort by:</p>
						<Button
							size="small"
							onClick={handleResetSortBy}
							color="error"
						>
							Reset
						</Button>
					</div>
					<div className={classes.difficultySort}>
						<p>Difficulty</p>
						<select name="difficulty" value={sortBy?.difficulty} onChange={handleChangeSortBy}>
							<option value="" disabled>- Select Difficulty -</option>
							<option value="least-to-most">Least to Most</option>
							<option value="most-to-least">Most to Least</option>
						</select>
					</div>
				</div>
			</Popover>
    </div>
  )
}

export default SortBy;