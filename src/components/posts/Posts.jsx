import React from "react";
import { Link } from "react-router-dom";

const Posts = ({ post }) => {
	return (
		<div className="col-12 col-lg-6 mb-4" key={post._id}>
			<Link to={`/post/${post._id}`} className="link">
				<div className="card">
					<img src={post.photo} className="card-img-top" alt="..."></img>
					<div className="card-body">
						<p className="card-text">{post.title}</p>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default Posts;
