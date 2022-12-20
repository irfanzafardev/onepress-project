import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import FeaturedPost from "../../components/featuredPost/FeaturedPost";
import Footer from "../../components/footer/Footer";

const Landing = () => {
	return (
		<>
			<Navbar />
			<Header />
			<FeaturedPost />
			<Footer />
		</>
	);
};

export default Landing;
