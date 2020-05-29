import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import NavBar from "./Components/navbar/index";
import Search from "./Components/search/index";
import Footer from "./Components/footer/index";
import GifContainer from "../src/Components/gifContainer/index";
import DisplayGif from "../src/Components/displayGif/index";
import { fetchAllGifs } from "./store/actions/count.action";

function App() {
	const [allGifs, setAllGifs] = useState([]);
  const [query, setQuery] = useState("");
   const [offset,setOffset] =useState(1)

	let dispatch = useDispatch();
	const {
		countReducer: { gifs,loading },
	} = useSelector((state) => state);

	const handleChange = ({ target }) => {
		setQuery(target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch(fetchAllGifs(query,offset));
		setAllGifs(gifs);
	};
const handleNext=()=>{
  console.log("Next")
  setOffset(offset+25);
  dispatch(fetchAllGifs(query,offset));
  	setAllGifs(gifs);
  console.log(offset)
}
const handlePrev=()=>{
  console.log("Prev")
  setOffset(offset-25);
  dispatch(fetchAllGifs(query,offset));
  	setAllGifs(gifs);
  console.log(offset)
}

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
            {
              !loading &&	(
              <>
               <GifContainer items={allGifs} onClickNext={handleNext} onClickPrev={handlePrev} />
               
              
              </>
             
                
                )
            }
            {
              loading && <div>Loading Gifs....</div>
            }
					
					</Route>

					<Route path="/display/:id" component={DisplayGif} />
				</Switch>
			</div>
      <Footer />
		</BrowserRouter>
	);
}

export default App;
