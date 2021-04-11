import React, { useState, useEffect } from 'react';
import { Select, MenuItem } from '@material-ui/core';
import API from '../utils/API';

function Ratings() {
	const [states, setStates] = useState();
	const [state, setState] = React.useState('');

	const handleChange = (event) => {
		setState(event.target.value);
	};

	useEffect(() => {
		API.states()
			.then((res) => setStates(res.data))
			.catch((err) => console.log(err));
	}, []);

	return (
		<Select value={state} onChange={handleChange}>
			{states
				? states.map((val, index) => (
						<MenuItem key={val.id} value={val.abbr}>
							{val.abbr}
						</MenuItem>
				  ))
				: null}
		</Select>
	);
}

export default Ratings;
