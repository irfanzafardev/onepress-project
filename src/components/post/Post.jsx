import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Comments from "../comment/Comments";
import "./post.css";

const Post = () => {
	// const dispatch = useDispatch();

	const path = useLocation().pathname.split("/")[2];
	const [post, setPost] = useState({});
	const [author, setAuthor] = useState({});

	const rootAPI = "https://one-press-blog-server.vercel.app";

	useEffect(() => {
		const getPost = async () => {
			const { data } = await axios.get(rootAPI + "/posts/" + path);
			setPost(data);
			console.log(data);
		};
		getPost();
	}, [path]);
	return (
		<section className="post">
			<div className="container-fluid">
				<div className="post-header">{post.photo && <img src={post.photo} alt="post-img"></img>}</div>
				<div className="post-title">
					<h1>{post.title}</h1>
				</div>
				<div className="post-detail">
					<h3>{post.username}</h3> <span>|</span>
					<h3>{new Date(post.createdAt).toDateString()}</h3>
				</div>
				<div className="post-body">
					<p>{post.desc}</p>
				</div>
				<div className="post-comment">
					<Comments />
				</div>
			</div>
		</section>
	);
};

export default Post;
