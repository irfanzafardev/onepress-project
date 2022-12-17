import React from "react";
import { useLocation } from "react-router-dom";
import "./search.css";

const Search = () => {
	const query = useLocation().search;
	return (
		<section className="search">
			<div className="container-fuild">ini search component {query}</div>
		</section>
	);
};

export default Search;
