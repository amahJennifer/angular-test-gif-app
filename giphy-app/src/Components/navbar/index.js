import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<nav className="navbar shadow fixed-top navbar-light bg-light">
			<Link className="navbar-brand" to="/">
				<strong>Giphy App</strong>
			</Link>
		</nav>
	);
}
