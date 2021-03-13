import './App.css';
// import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/login';
import Signup from './components/signup';

function App() {
	return (
		<Router>
			<div>
				{/* <Nav /> */}
				<Switch>
					<Route exact path={['/logins', '/login']}>
						<Login />
					</Route>
					<Route exact path={'/signup'}>
						<Signup />
					</Route>
					<Route exact path={'/home'}>
						{/* <Signup /> */}
					</Route>
					{/* <Route exact path={['/', '/books']}> */}
					{/* <Books /> */}
					{/* </Route> */}
					{/* <Route exact path='/books/:id'> */}
					{/* <Detail /> */}
					{/* </Route> */}
					{/* <Route> */}
					{/* <NoMatch /> */}
					{/* </Route> */}
				</Switch>
			</div>
		</Router>

		//   <div className="App">
		//     <Login />
		// </div>
	);
}

export default App;
