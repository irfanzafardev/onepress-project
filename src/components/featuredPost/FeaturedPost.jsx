import React, { useEffect, useState } from "react";
import "./featuredpost.css";
import Posts from "../../components/posts/Posts";

import { BsArrowDownShort } from "react-icons/bs";
import { Link } from "react-router-dom";
import axios from "axios";

const FeaturedPost = () => {
	const [posts, setPosts] = useState([]);
	const [latestPosts, setLatestPosts] = useState([]);

	const rootAPI = "https://one-press-blog-server.vercel.app";

	const fetchPosts = async () => {
		const { data } = await axios.get(rootAPI + "/posts");
		setPosts(data);
	};

	const fetchLatestPosts = async () => {
		const { data } = await axios.get(rootAPI + "/posts/latest");
		setLatestPosts(data);
	};

	useEffect(() => {
		fetchPosts();
		fetchLatestPosts();
	}, []);
	return (
		<section className="featured-post">
			<div className="container-fluid">
				<div className="heading">
					<h1>Latest Update</h1>
					<BsArrowDownShort className="icon" size="6rem" />
				</div>
				<div className="row latest-update">
					{latestPosts.map((latestPost) => (
						<div className="col-12" key={latestPost._id}>
							<Link to={`/post/${latestPost._id}`} className="link">
								<div className="card">
									<img src={latestPost.photo} className="card-img-top" alt="..."></img>
									<div className="card-body">
										<p className="card-text">{latestPost.title}</p>
									</div>
								</div>
							</Link>
						</div>
					))}
				</div>
				<div className="row featured">
					<div className="heading">
						<h2>Featured</h2>
					</div>
					{posts.map((post) => (
						<Posts post={post} key={post._id} />
					))}
				</div>
			</div>
		</section>
	);
};

export default FeaturedPost;
