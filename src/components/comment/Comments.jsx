import React from "react";
import Comment from "./Comment";
import "./comments.css";

const Comments = () => {
	return (
		<section className="comments">
			<h2>Comment</h2>
			<div className="comment-form">
				<div className="user-profile">
					<img src="https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
				</div>
				<div className="form-input">
					<p>Username</p>
					<input type="text" placeholder="Add a comment..." />
				</div>
			</div>
			<div className="comment-list">
				<Comment />
			</div>
		</section>
	);
};

export default Comments;
