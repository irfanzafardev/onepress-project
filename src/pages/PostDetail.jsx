import React from "react";
import Navbar from "../components/navbar/Navbar";
import Post from "../components/post/Post";
import Footer from "../components/footer/Footer";
import Sidebar from "../components/sidebar/Sidebar";
import "./postdetail.css";

const PostDetail = () => {
	return (
		<>
			<Navbar />
			<div className="content row">
				<div className="col-9">
					<Post />
				</div>
				<div className="col-3">
					<Sidebar />
				</div>
			</div>
			<Footer />
		</>
	);
};

export default PostDetail;
