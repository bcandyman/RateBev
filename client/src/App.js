import './App.css';
// import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/signup_login/login';
import Signup from './components/signup_login/signup';
import Ratings from './pages/ratings';

function App() {
	return (
		<Router>
			<div>
				<Switch>
					<Route exact path={['/logins', '/login']}>
						<Login />
					</Route>
					<Route exact path={'/signup'}>
						<Signup />
					</Route>
					<Route exact path={'/ratings'}>
						<Ratings />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
