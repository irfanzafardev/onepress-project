import React, { useEffect, useState } from "react";
import "./form.css";

import { GrAdd } from "react-icons/gr";
import { useSelector } from "react-redux";
import axios from "axios";

import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from "../../firebase";
import { useNavigate } from "react-router-dom";

const Form = () => {
	const { currentUser } = useSelector((state) => state.user);

	const rootAPI = "https://one-press-blog-server.vercel.app";

	const [img, setImg] = useState(undefined);
	const [imgPerc, setImgPerc] = useState(0);
	const [inputs, setInputs] = useState(0);

	const navigate = useNavigate();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setInputs((prev) => {
			return { ...prev, [name]: value, username: currentUser.username };
		});
	};
	console.log(inputs);

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
		img && uploadFile(img, "photo");
	}, [img]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const res = await axios.post(rootAPI + `/posts`, inputs);
		// dispatch(updateSuccess(res));
		console.log(res.data);
		navigate("/");
	};
	return (
		<section className="form">
			<div className="container-fluid">
				<h1>Create a new story</h1>
				<form>
					{imgPerc ? "Uploading: " + imgPerc + "%" : ""}
					<div className="form-group">
						<label htmlFor="fileInput" className="file-input-icon">
							<GrAdd size="3rem" style={{ marginTop: "-10px" }} />
						</label>
						<input type="file" id="fileInput" className="file-input" accept="image/*" onChange={(e) => setImg(e.target.files[0])} />
						<input type="text" placeholder="Title" className="title-input" name="title" onChange={handleChange} autoFocus={true} />
					</div>
					<div className="form-group">
						<textarea placeholder="Tell your story..." type="text" className="body-input" name="desc" onChange={handleChange}></textarea>
					</div>
					<div className="form-group">
						<select className="form-select" aria-label="Default select example" name="categories" onChange={handleChange}>
							<option value="Sculpture">Sculpture</option>
							<option value="Literature">Literature</option>
							<option value="Abstract">Abstract</option>
						</select>
					</div>
					<button type="button" className="btn btn-outline-dark" onClick={handleSubmit}>
						Publish
					</button>
				</form>
			</div>
		</section>
	);
};

export default Form;
