import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function GifContainer({ items, onClickNext, onClickPrev }) {

	const {
		countReducer: {
			pagination: { count, offset, total_count },
		},
	} = useSelector((state) => state);

	return (
		<div
			className="container bg-white vh-100 py-5"
			style={{ marginBottom: 200 }}
		>
			<div className="row">
				{items.map((item) => (
					<div className="col" key={item.id}>
						<Link to={`/display/${item.id}`}>
							<img src={item.images.fixed_height_small.url} />
						</Link>
					</div>
				))}
			</div>
			{items && count > 0 && (
				<div className="d-flex mt-5 justify-content-between">
					{offset > 0 && (
						<button
							className="bg-dark px-5"
							style={{ color: "white" }}
							onClick={onClickPrev}
						>
							Previous
						</button>
					)}
					<span></span>
					{total_count > offset + count && (
						<button
							className="bg-dark px-5"
							style={{ color: "white" }}
							onClick={onClickNext}
						>
							Next
						</button>
					)}
				</div>
			)}
		</div>
	);
}

export default GifContainer;
