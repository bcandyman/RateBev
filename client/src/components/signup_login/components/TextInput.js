import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

export default function Login(props) {
	return (
		<FormControl>
			<InputLabel htmlFor='my-input'>{props.children}</InputLabel>
			<Input {...props} />
		</FormControl>
	);
}
