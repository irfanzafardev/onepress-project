import React from "react";
import Comments from "../comment/Comments";
import "./post.css";

const Post = ({ post }) => {
	// const dispatch = useDispatch();
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
