import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
	const { currentUser } = useSelector((state) => state.user);

	const rootAPI = "https://one-press-blog-server.vercel.app";
	const [categories, setCategories] = useState([]);
	const fetchCategories = async () => {
		const { data } = await axios.get(rootAPI + "/categories");
		setCategories(data);
	};
	useEffect(() => {
		fetchCategories();
	}, []);
	return (
		<section className="header">
			<div className="container-fluid">
				<ul>
					{categories.map((item) => (
						<li key={item.id}>
							<Link to={`/category?cat=${item.data}`} className="link">
								<div className="dropdown-item">{item.data}</div>
							</Link>
						</li>
					))}
				</ul>
				<div className="heading">
					{currentUser ? (
						<h1>
							Halo saudara <span>{currentUser.name}</span>!, selamat datang di tempat para "artist" membagikan karya dan ceritanya.
						</h1>
					) : (
						<h1>Halo semua pengunjung situs, selamat datang di tempat para "artist" membagikan karya dan ceritanya.</h1>
					)}
				</div>
				<div className="content row">
					<div className="developer col-6 col-lg-4">
						<p>DEVS-</p>
						<span>
							Irfan Zafar
							<br />
							Reyvido Yoga
							<br />
							Dhiya Ulhaq
						</span>
					</div>
					<div className="location col-6 col-lg-4">
						<p>LOCATION-</p>
						<span>Jakarta, ID</span>
					</div>
					<div className="email col-6 col-lg-4">
						<p>GET IN TOUCH-</p>
						<span>hello@mail.com</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Header;
