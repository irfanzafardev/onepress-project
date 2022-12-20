// import React, { useEffect, useState } from "react";
import "./featuredpost.css";

import { BsArrowDownShort } from "react-icons/bs";
import { Link } from "react-router-dom";
// import axios from "axios";

const FeaturedPost = () => {
	// const [posts, setPosts] = useState([]);

	// useEffect(() => {
	// 	const fetchPosts = async () => {
	// 		const { data } = await axios.get("/posts");
	// 		setPosts(data);
	// 	};
	// 	fetchPosts();
	// }, []);
	return (
		<section className="featured-post">
			<div className="container-fluid">
				<div className="heading">
					<h1>Latest Update</h1>
					<BsArrowDownShort className="icon" size="6rem" />
				</div>
				<div className="row latest-update">
					<div className="col-12">
						<Link to="/post/test" className="link">
							<div className="card">
								<img src="https://images.pexels.com/photos/1109354/pexels-photo-1109354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="card-img-top" alt="..."></img>
								<div className="card-body">
									<p className="card-text">Post title</p>
								</div>
							</div>
						</Link>
					</div>
				</div>
				<div className="row featured">
					<div className="heading">
						<h2>Featured</h2>
					</div>
					{/* {posts.map((p) => (
						<Posts post={p} />
					))} */}
					<div className="col-12 col-lg-6">
						<Link to={`/post/test`} className="link">
							<div className="card">
								<img src="https://images.pexels.com/photos/311458/pexels-photo-311458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="card-img-top" alt="..."></img>
								<div className="card-body">
									<p className="card-text">Title</p>
								</div>
							</div>
						</Link>
					</div>
					<div className="col-12 col-lg-6">
						<Link to={`/post/test`} className="link">
							<div className="card">
								<img src="https://images.pexels.com/photos/383568/pexels-photo-383568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="card-img-top" alt="..."></img>
								<div className="card-body">
									<p className="card-text">Title</p>
								</div>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FeaturedPost;
