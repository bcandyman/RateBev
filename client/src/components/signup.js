import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
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

	const handleOnSignup = () => {
		API.signup(formObject).then(history.push('/home')).catch(console.log('fail'));
	};

	return (
		<Card raised='false' className={classes.root}>
			<form id='signup'>
				<FormControl>
					<InputLabel htmlFor='my-input'>First Name</InputLabel>
					<Input
						id='first-name'
						aria-describedby='signup first name'
						onChange={handleInputChange}
						name='firstName'
					/>
				</FormControl>
				<FormControl>
					<InputLabel htmlFor='my-input'>Last Name</InputLabel>
					<Input
						id='last-name'
						aria-describedby='signup last name'
						onChange={handleInputChange}
						name='lastName'
					/>
				</FormControl>
				<FormControl>
					<InputLabel htmlFor='my-input'>Email address</InputLabel>
					<Input
						id='signup-email'
						aria-describedby='signup email'
						onChange={handleInputChange}
						name='email'
					/>
					<FormHelperText id='signup-email'>
						We'll never share your email.
					</FormHelperText>
				</FormControl>
				<br />
				<FormControl>
					<InputLabel htmlFor='my-input'>Password</InputLabel>
					<Input
						id='signup-password'
						aria-describedby='signup password'
						onChange={handleInputChange}
						name='password'
					/>
				</FormControl>
				<br />
				<Button id='signup' className={classes.but} onClick={handleOnSignup}>
					Signup
				</Button>
			</form>
		</Card>
	);
}
