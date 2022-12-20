import React, { useEffect, useState } from "react";
import "./profile.css";

import { useSelector } from "react-redux";
import axios from "axios";

const Profile = () => {
	const { currentUser } = useSelector((state) => state.user);
	const [user, setUser] = useState([]);

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const { data } = await axios.get(`user/profil/${currentUser.userId}`);
				setUser(data[0]);
			} catch (err) {}
		};
		fetchUser();
	}, [currentUser.userId]);
	return (
		<section className="profile">
			<div className="container-fluid">
				<div className="profile-heading">
					<h1>Profile</h1>
				</div>
				<div className="profile-form">
					<div className="form-group">
						<label htmlFor="">Profile Picture</label>
						<div className="profile-pic">{user.image ? <img src={user.image} alt="" /> : <img src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" alt="" />}</div>
					</div>
					<div className="form-group">
						<label htmlFor="profilePicInput" className="profile-pic-btn">
							<p>Upload Image</p>
						</label>
						<input type="file" id="profilePicInput" className="d-none" />
					</div>
					<div className="form-group">
						<label>Name</label>
						<input type="text" placeholder={user.name} />
					</div>
					<div className="form-group">
						<label>Username</label>
						<input type="text" placeholder={user.username} />
					</div>
					<div className="form-group">
						<label>Email</label>
						<input type="email" placeholder={user.email} />
					</div>
					<div className="form-group">
						<label>Description</label>
						<textarea type="text" placeholder={user.about}></textarea>
					</div>
					<button type="button" className="btn btn-outline-dark">
						Update
					</button>
				</div>
			</div>
		</section>
	);
};

export default Profile;
