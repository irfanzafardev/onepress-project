import React, { useEffect, useState } from "react";
import "./category.css";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Posts from "../../components/posts/Posts";

const Category = () => {
	const query = useLocation().search;
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		const fetchPosts = async () => {
			const { data } = await axios.get(`/posts${query}`);
			setPosts(data);
		};
		fetchPosts();
	}, [query]);
	console.log("postnya adalah", posts);
	return (
		<section className="category">
			<div className="container-fluid featured-post">
				<div className="heading">
					<h1>Category for "{query}"</h1>
				</div>
				<div className="row featured">
					{posts ? (
						<div>
							{posts.map((p) => (
								<Posts post={p} />
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

export default Category;
