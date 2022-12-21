import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./search.css";
import Posts from "../../components/posts/Posts";

const Search = () => {
	const query = useLocation().search;
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		const fetchPosts = async () => {
			const { data } = await axios.get(`/search${query}`);
			setPosts(data);
		};
		fetchPosts();
	}, [query]);
	return (
		<section className="search">
			<div className="container-fluid">
				<div className="heading">
					<h1>Search "{query}"</h1>
				</div>
				{posts.map((p) => (
					<Posts post={p} />
				))}
			</div>
		</section>
	);
};

export default Search;
