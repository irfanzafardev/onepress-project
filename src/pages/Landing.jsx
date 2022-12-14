import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Header from "../components/header/Header";
import FeaturedPost from "../components/featuredPost/FeaturedPost";
import Footer from "../components/footer/Footer";
import axios from "axios";

const Landing = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("http://localhost:3001/posts");
      setPosts(res.data);
      console.log(res);
    };
    fetchPosts();
  });
  return (
    <>
      <Navbar />
      <Header />
      <FeaturedPost posts={posts} />
      <Footer />
    </>
  );
};

export default Landing;
