import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import NavBar from "./Components/navbar/index";
import Search from "./Components/search/index";
import GifContainer from "../src/Components/gifContainer/index";
import DisplayGif from "../src/Components/displayGif/index";
import { fetchAllGifs } from "./store/actions/count.action";

function App() {
	const [users, setUsers] = useState([]);
	const [query, setQuery] = useState("");
	let dispatch = useDispatch();
	const {
		countReducer: { gifs },
	} = useSelector((state) => state);

	const handleChange = ({ target }) => {
		setQuery(target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch(fetchAllGifs(query));
		setUsers(gifs);
	};

	return (
		<BrowserRouter>
			<div>
				<NavBar />
				<Search value={query} onChange={handleChange} onClick={handleSubmit} />

				<Switch>
					<Route exact path="/">
						<GifContainer items={users} />
					</Route>

					<Route  path="/display" component={DisplayGif} />
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
