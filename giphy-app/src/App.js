import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import NavBar from "./Components/navbar/index";
import Search from "./Components/search/index";
import Footer from "./Components/footer/index";
import GifContainer from "../src/Components/gifContainer";
import DisplayGif from "../src/Components/displayGif/index";
import { fetchAllGifs } from "./store/actions/count.action";

function App() {
	const [allGifs, setAllGifs] = useState([]);
	const [query, setQuery] = useState("");
	const limit = 25;

	let dispatch = useDispatch();
	const {
		countReducer: {
			gifs,
			loading,
			pagination: { offset },
		},
	} = useSelector((state) => state);

	const handleChange = ({ target }) => {
		setQuery(target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch(fetchAllGifs(query, offset));
		setAllGifs(gifs);
	};

	const handleNext = () => {
		dispatch(fetchAllGifs(query, limit, offset + limit));
		setAllGifs(gifs);
	};

	const handlePrev = () => {
		dispatch(fetchAllGifs(query, limit, offset - limit));
		setAllGifs(gifs);
	};

	return (
		<BrowserRouter>
			<div>
				<NavBar />
				<Switch>
					<Route exact path="/">
						<Search
							value={query}
							onChange={handleChange}
							onSubmit={handleSubmit}
						/>
						{!loading && (
							<>
								<GifContainer
									items={allGifs}
									onClickNext={handleNext}
									onClickPrev={handlePrev}
								/>
							</>
						)}
						{loading && <div>Loading Gifs....</div>}
					</Route>

					<Route path="/display/:id" component={DisplayGif} />
				</Switch>
			</div>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
