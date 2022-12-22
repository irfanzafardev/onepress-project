import React, { useEffect, useState } from "react";
import "./category.css";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Posts from "../../components/posts/Posts";

const Category = () => {
	const query = useLocation().search;
	const path = useLocation().search.substring(query.indexOf("=") + 1);
	const [posts, setPosts] = useState([]);

	const rootAPI = "https://one-press-blog-server.vercel.app";

	useEffect(() => {
		const fetchPosts = async () => {
			const { data } = await axios.get(rootAPI + `/posts${query}`);
			setPosts(data);
		};
		fetchPosts();
	}, [query]);
	return (
		<section className="category">
			<div className="container-fluid featured-post">
				<div className="heading">
					<h1>Category for "{path}"</h1>
				</div>
				<div className="row featured">
					{posts ? (
						<>
							{posts.map((post) => (
								<Posts post={post} key={post._id} />
							))}
						</>
					) : (
						<p>No posts found</p>
					)}
				</div>
			</div>
		</section>
	);
};

export default Category;
