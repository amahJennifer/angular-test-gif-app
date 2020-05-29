import React from "react";

export default function SearchCard({
	onChange,
	value,
	onSubmit,
}) {
	return (
		<form className="bg-dark py-5 shadow fixed" onSubmit={onSubmit}>
			<div className="container px-5 py-5">
				<input
					className="form-control mr-sm-2"
					type="text"
					placeholder="Search gif"
					aria-label="Search"
					value={value}
					onChange={onChange}
				/>
			</div>

			<div className="container text-center">
				<button
          className="px-5 text-center btn btn-outline-light"
          type="submit"
				>
				Search
				</button>
			</div>
		</form>
	);
}
