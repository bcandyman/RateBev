import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import makeStyles from '@material-ui/core/styles/makeStyles';

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
	const classes = useStyles();

	return (
		<Card raised='false' className={classes.root}>
			<FormControl>
				<InputLabel htmlFor='my-input'>Name</InputLabel>
				<Input id='signup-name' aria-describedby='signup password' />
			</FormControl>
			<FormControl>
				<InputLabel htmlFor='my-input'>Email address</InputLabel>
				<Input id='signup-email' aria-describedby='signup email' />
				<FormHelperText id='signup-email'>
					We'll never share your email.
				</FormHelperText>
			</FormControl>
			<br />
			<FormControl>
				<InputLabel htmlFor='my-input'>Password</InputLabel>
				<Input id='signup-password' aria-describedby='signup password' />
			</FormControl>
			<br />
			<Button id='signup' className={classes.but}>
				Signup
			</Button>
		</Card>
	);
}
