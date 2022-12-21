import React, { useEffect, useState } from "react";
import "./profile.css";

import { useSelector } from "react-redux";
// import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from "../../firebase";

// import { updateSuccess } from "../../redux/userSlice";

const Profile = () => {
	const { currentUser } = useSelector((state) => state.user);
	const [user, setUser] = useState([]);

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const { data } = await axios.get(`user/profil/${currentUser.userId}`);
				setUser(data[0]);
				console.log(currentUser);
			} catch (err) {}
		};
		fetchUser();
	}, [currentUser.userId, currentUser]);

	// Edit form
	const [img, setImg] = useState(undefined);
	const [imgPerc, setImgPerc] = useState(0);
	const [inputs, setInputs] = useState(0);

	// const dispatch = useDispatch();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setInputs((prev) => {
			return { ...prev, [name]: value };
		});
	};

	const uploadFile = (file, urlType) => {
		const storage = getStorage(app);
		const fileName = new Date().getTime() + file.name;
		const storageRef = ref(storage, fileName);
		const uploadTask = uploadBytesResumable(storageRef, file);

		uploadTask.on(
			"state_changed",
			(snapshot) => {
				const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
				setImgPerc(progress);
				switch (snapshot.state) {
					case "paused":
						console.log("Upload is paused");
						break;
					case "running":
						console.log("Upload is running");
						break;
					default:
						break;
				}
			},
			(error) => {},
			() => {
				getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
					setInputs((prev) => {
						return { ...prev, [urlType]: downloadURL };
					});
				});
			}
		);
	};

	useEffect(() => {
		img && uploadFile(img, "image");
	}, [img]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const res = await axios.put(`/user/profil/edit/${currentUser.userId}`, inputs);
		// dispatch(updateSuccess(res));
		console.log(res.data);
		res.status === 200 && alert("upload sukses");
	};

	return (
		<section className="profile">
			<div className="container-fluid">
				<div className="profile-heading">
					<h1>Profile</h1>
				</div>
				<div className="profile-form">
					<div className="form-group">
						<label htmlFor="">Profile Picture</label>
						{imgPerc ? "Uploading: " + imgPerc + "%" : <div className="profile-pic">{user.image ? <img src={user.image} alt="" /> : <img src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" alt="" />}</div>}
					</div>
					<div className="form-group">
						<label htmlFor="profilePicInput" className="profile-pic-btn">
							<p>Upload Image</p>
						</label>
						<input type="file" accept="image/*" id="profilePicInput" className="d-none" onChange={(e) => setImg(e.target.files[0])} />
					</div>
					<div className="form-group">
						<label>Name</label>
						<input type="text" name="name" placeholder={user.name} onChange={handleChange} />
					</div>
					<div className="form-group">
						<label>Username</label>
						<input type="text" name="username" placeholder={user.username} onChange={handleChange} />
					</div>
					<div className="form-group">
						<label>Email</label>
						<input type="email" name="email" placeholder={user.email} onChange={handleChange} />
					</div>
					<div className="form-group">
						<label>About</label>
						<textarea type="text" name="about" placeholder={user.about} onChange={handleChange}></textarea>
					</div>
					<button type="button" className="btn btn-outline-dark" onClick={handleSubmit}>
						Update
					</button>
				</div>
			</div>
		</section>
	);
};

export default Profile;
