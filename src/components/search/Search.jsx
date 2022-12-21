import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./search.css";
import Posts from "../../components/posts/Posts";

const rootAPI = "https://one-press-blog-server.vercel.app";

const Search = () => {
	const query = useLocation().search;
	const path = useLocation().search.substring(query.indexOf("=") + 1);

	const [posts, setPosts] = useState([]);
	useEffect(() => {
		const fetchPosts = async () => {
			const { data } = await axios.get(rootAPI + `/search${query}`);
			setPosts(data);
		};
		fetchPosts();
	}, [query]);
	return (
		<section className="search">
			<div className="container-fluid">
				<div className="heading mb-5">
					<h1>Search for "{path}"</h1>
				</div>
				<div className="row featured">
					{posts ? (
						<div>
							{posts.map((post) => (
								<Posts post={post} key={post._id} />
							))}
						</div>
					) : (
						<p>No posts found</p>
					)}
				</div>
			</div>
		</section>
	);
};

export default Search;
