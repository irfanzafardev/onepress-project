// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useLocation } from "react-router-dom";
import Comments from "../comment/Comments";
import "./post.css";

const Post = () => {
	// const { currentUser } = useSelector((state) => state.user);
	// const dispatch = useDispatch();

	// const path = useLocation().pathname.split("/")[2];
	// const [post, setPost] = useState({});
	// const [author, setAuthor] = useState({});

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		try {
	// 			const postRes = await axios.get("/posts/");
	// 		} catch (error) {}
	// 	};
	// });
	return (
		<section className="post">
			<div className="container-fluid">
				<div className="post-header">
					<img src="https://images.pexels.com/photos/383568/pexels-photo-383568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="post-img"></img>
				</div>
				<div className="post-title">
					<h1>Post Title</h1>
				</div>
				<div className="post-detail">
					<h3>Author</h3> <span>|</span>
					<h3>01.01.01</h3>
				</div>
				<div className="post-body">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					<br />
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				</div>
				<div className="post-comment">
					<Comments />
				</div>
			</div>
		</section>
	);
};

export default Post;
