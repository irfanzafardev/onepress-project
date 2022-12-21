import React from "react";
import { useSelector } from "react-redux";
import Comment from "./Comment";
import "./comments.css";

const Comments = () => {
	const { currentUser } = useSelector((state) => state.user);
	return (
		<section className="comments">
			{currentUser ? (
				<>
					<h2>Comment</h2>
					<div className="comment-form">
						<div className="user-profile">{currentUser.image ? <img src={currentUser.image} alt="" /> : <img src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" alt="" />}</div>
						<div className="form-input">
							<p>{currentUser.name}</p>
							<input type="text" placeholder="Add a comment..." />
						</div>
					</div>
					<div className="comment-list">
						<Comment />
					</div>
				</>
			) : (
				""
			)}
		</section>
	);
};

export default Comments;
