import React from "react";
import { useLocation } from "react-router-dom";
import "./search.css";

const Search = () => {
	const query = useLocation().search;
	return (
		<section className="search">
			<div className="container-fluid">
				<div className="heading">
					<h1>Search "{query}"</h1>
				</div>
			</div>
		</section>
	);
};

export default Search;
