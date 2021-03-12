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
				<InputLabel htmlFor='my-input'>Email address</InputLabel>
				<Input id='login-email' aria-describedby='login email' />
			</FormControl>
			<br />
			<FormControl>
				<InputLabel htmlFor='my-input'>Password</InputLabel>
				<Input id='login-password' aria-describedby='login password' />
			</FormControl>
			<br />
			<Button id='login' className={classes.but}>
				Login
			</Button>
		</Card>
	);
}
