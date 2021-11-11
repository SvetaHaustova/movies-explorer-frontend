import React from "react";
import "./App.css";
import { Route, Switch, useHistory } from 'react-router-dom';
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import PageNotFound from "../PageNotFound/PageNotFound";

function App() {
	
	const history = useHistory();
	const loggedInMain = false;
	const loggedIn = true;

	return (
		<div className="page">
			<Switch>
				<Route exact path="/">
					<Main loggedIn={loggedInMain} />
				</Route>
				<Route path="/movies">
					<Movies loggedIn={loggedIn} />
				</Route>
				<Route path="/saved-movies">
					<SavedMovies loggedIn={loggedIn} />
				</Route>
				<Route path="/profile">
					<Profile loggedIn={loggedIn} />
				</Route>
				<Route path="/signup">
					<Register />
				</Route>
				<Route path="/signin">
					<Login />
				</Route>
				<Route path="*">
					<PageNotFound history={history} />
				</Route>
			</Switch>
		</div>
	);
}

export default App;