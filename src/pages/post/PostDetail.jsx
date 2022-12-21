import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Post from "../../components/post/Post";
import Footer from "../../components/footer/Footer";
import Sidebar from "../../components/sidebar/Sidebar";
import "./postdetail.css";
import { useLocation } from "react-router-dom";
import axios from "axios";

const PostDetail = () => {
	const path = useLocation().pathname.split("/")[2];
	const [post, setPost] = useState({});

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
		<>
			<Navbar />
			<div className="content row">
				<div className="col-12 col-lg-9">
					<Post post={post} />
				</div>
				<div className="col-3 d-none d-lg-block">
					<Sidebar post={post} />
				</div>
			</div>
			<Footer />
		</>
	);
};

export default PostDetail;
