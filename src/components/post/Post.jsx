import React from "react";
import "./post.css";

const Post = () => {
	return (
		<section>
			<div className="container-fluid post">
				<div className="row">
					<div className="col-9">
						<div className="post-header">
							<img src="https://images.pexels.com/photos/383568/pexels-photo-383568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="post-img"></img>
						</div>
						<div className="post-title">
							<h1>Post Title</h1>
						</div>
						<div className="post-detail">
							<div className="author">
								<h3>Author</h3>
							</div>
							<div className="created-at">
								<h3>01.01.01</h3>
							</div>
						</div>
						<div className="post-body">
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
						</div>
					</div>
					<div className="col-3">
						<h3>About Author</h3>
						<div className="author-img">
							<img src="https://images.pexels.com/photos/2387335/pexels-photo-2387335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
						</div>
						<h3>Author</h3>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam accusantium mollitia dignissimos officia! Sequi vel, ipsa quam beatae ea aliquam sint, impedit distinctio, ad soluta ex nesciunt adipisci dignissimos voluptas.</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Post;
