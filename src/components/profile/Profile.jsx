import React from "react";
import "./profile.css";

const Profile = () => {
	return (
		<section className="profile">
			<div className="container-fluid">
				<div className="profile-heading">
					<h1>Profile</h1>
				</div>
				<div className="profile-form">
					<div className="form-group">
						<label htmlFor="">Profile Picture</label>
						<div className="profile-pic">
							<img src="https://images.pexels.com/photos/2387335/pexels-photo-2387335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
						</div>
					</div>
					<div className="form-group">
						<label htmlFor="profilePicInput" className="profile-pic-btn">
							Upload Image
						</label>
						<input type="file" id="profilePicInput" className="d-none" />
					</div>
					<div className="form-group">
						<label>Name</label>
						<input type="text" placeholder="Name" />
					</div>
					<div className="form-group">
						<label>Username</label>
						<input type="text" placeholder="Username" />
					</div>
					<div className="form-group">
						<label>Email</label>
						<input type="email" placeholder="Email" />
					</div>
					<div className="form-group">
						<label>Description</label>
						<textarea type="text" placeholder="Description"></textarea>
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
