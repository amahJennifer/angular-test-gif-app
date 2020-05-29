import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

//const defaultGif = { images: { original: {} } };

const DisplayGif = (props) => {
	const [gif, setGif] = useState();
	const [loading, setLoading] = useState(true);

	const {
		countReducer: { gifs },
	} = useSelector((state) => state);

	const {
		match: {
			params: { id },
		},
	} = props;

	useEffect(() => {
		// use the param id to find the gif from store
		if (id) {
			// find the gif from the list of gifs
			const gifItem = gifs.find((item) => {
				return item.id === id;
			});

			// set the gif on state
			setGif(gifItem);
		}
	}, gif);

	return (
		<div className=" pt-4" style={{ marginTop: 200 }}>
			{loading && <div>loading ...</div>}

			{gif && (
				<div className="container d-flex">
					<div className="shadow">
						<img
							src={gif.images.original.url}
							onLoad={() => {
								setLoading(false);
							}}
						/>
					</div>

					<div className="ml-5">
						<p>
							<strong>Type</strong>: {gif.type}
						</p>
						<p>
							<strong>Slug</strong>: {gif.slug}
						</p>
						<p>
							<strong>Title</strong>: {gif.title}
						</p>
						<p>
							<strong>Source</strong>: {gif.source}
						</p>
						<p>
							<strong>Rating</strong>: {gif.rating}
						</p>
						<p>
							<strong>Import Date</strong>: {gif.import_datetime.slice(0, 10)}
						</p>
						<p>
							<strong>Import Time</strong>: {gif.import_datetime.slice(11, 16)}
						</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default DisplayGif;
