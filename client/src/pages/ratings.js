import React, { useState, useEffect } from 'react';
import { Select, MenuItem } from '@material-ui/core';
import API from '../utils/API';

function Ratings() {
	const [states, setStates] = useState();

	useEffect(() => {
		API.states()
			.then((res) => setStates(res.data))
			.catch((err) => console.log(err));
	}, []);

	return (
		<Select>
			{states
				? states.map((val, index) => (
						<MenuItem value={val.abbr}>{val.abbr}</MenuItem>
				  ))
				: null}
		</Select>
	);
}

export default Ratings;
