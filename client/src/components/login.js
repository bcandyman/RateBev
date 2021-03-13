import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import makeStyles from '@material-ui/core/styles/makeStyles';
import API from '../utils/API';

const useStyles = makeStyles({
	root: {
		minWidth: 200,
		maxWidth: 300,
		paddingBottom: 15,
		textAlign: 'center',
	},
	but: {
		margin: 10,
	},
});

export default function Login() {
	const [formObject, setFormObject] = useState({});
	const history = useHistory();
	const classes = useStyles();

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormObject({ ...formObject, [name]: value });
	};

	const handleOnLogin = () => {
		API.login(formObject).then(history.push('/home')).catch(console.log('fail'));
	};

	return (
		<Card raised={true} className={classes.root}>
			<form id='login'>
				<FormControl>
					<InputLabel htmlFor='my-input'>Email address</InputLabel>
					<Input
						name='email'
						id='login-email'
						aria-describedby='login email'
						onChange={handleInputChange}
					/>
				</FormControl>
				<FormControl>
					<InputLabel htmlFor='my-input'>Password</InputLabel>
					<Input
						name='password'
						id='login-password'
						aria-describedby='login password'
						onChange={handleInputChange}
					/>
				</FormControl>
				<br />
				<Button id='login' className={classes.but} onClick={handleOnLogin}>
					Login
				</Button>
			</form>
		</Card>
	);
}
