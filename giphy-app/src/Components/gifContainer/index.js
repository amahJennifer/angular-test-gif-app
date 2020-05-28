import React from "react";
import { Link } from "react-router-dom";

function index({ items }) {
	const handleClick = () => {
		console.log("Clicked");
	};

	return (
		<div className="container bg-white">
			<ul>
				{items.map((item) => (
					<li key={item.id} onClick={handleClick}>
						<Link to="/display">
							<img src={item.images.fixed_height_small.url} />
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}

export default index;
