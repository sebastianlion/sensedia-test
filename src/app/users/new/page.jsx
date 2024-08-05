"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

import "../../styles/userForm.css";
import floaterIcon from "../../images/floater_icon.svg";
import heartIcon from "../../images/heart_icon.svg";
import smileIcon from "../../images/smile_icon.svg";

const daysOfWeek = [
	{ id: "lun", label: "Lun" },
	{ id: "mart", label: "Mart" },
	{ id: "miérc", label: "Miérc" },
	{ id: "juev", label: "Juev" },
	{ id: "vier", label: "Vier" },
	{ id: "sáb", label: "Sáb" },
	{ id: "dom", label: "Dom" },
];

function UserForm() {
	const router = useRouter();
	const [selectedDays, setSelectedDays] = useState(
		daysOfWeek.reduce((acc, day) => ({ ...acc, [day.id]: true }), {})
	);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleCheckboxChange = (event) => {
		const { id, checked } = event.target;
		setSelectedDays((prev) => ({ ...prev, [id]: checked }));
	};

	async function createUser(name, email, password) {
		const res = await fetch("http://localhost:8080/api/v1/users/create", {
			method: "POST",
			body: JSON.stringify(name, email, password),
			headers: {
				"Content-Type": "application/json",
			},
		});
		const newUser = await res.json();
		router.push("/users");
	}

	return (
		<div>
			<div className="helpArea">
				<h1 className="userTitle">Registro</h1>
				<div className="cardContainer">
					<div className="userCard">
						<h2 className="userCard_title">¿Necesita ayuda?</h2>
						<div className="userCard_content">
							<Image
								src={floaterIcon}
								className="userCard_icon"
								width={45}
								height={45}
								alt="Icono de ayuda"
							/>
							<p className="userCard_text">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua.
							</p>
						</div>
					</div>
					<div className="userCard">
						<h2 className="userCard_title">¿Por qué registrarse?</h2>
						<div className="userCard_content">
							<Image
								src={heartIcon}
								className="userCard_icon"
								width={45}
								height={45}
								alt="Icono de registro"
							/>
							<p className="userCard_text">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua.
							</p>
						</div>
					</div>
					<div className="userCard">
						<h2 className="userCard_title">¿Qué está pasando?...</h2>
						<div className="userCard_content">
							<Image
								src={smileIcon}
								className="userCard_icon"
								width={45}
								height={45}
								alt="Icono de novedades"
							/>
							<p className="userCard_text">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="formContainer">
				<h2 className="formContainer_title">REGISTRO</h2>
				<form
					onSubmit={async (e) => {
						e.preventDefault();
						await createUser({
							name,
							email,
							password,
						});
						setEmail("");
						setName("");
						setPassword("");
					}}
					className="form"
				>
					<div className="form_formGroup">
						<input
							type="text"
							className="grayInput"
							placeholder="Nombre de usuario *"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<input type="text" className="grayInput" placeholder="Ciudad *" />
					</div>
					<div className="form_formGroup">
						<input
							type="text"
							className="grayInput"
							placeholder="Nombre completo *"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
						<label type="text" className="form_formLabel">
							DIAS DE LA SEMANA
						</label>
					</div>
					<div className="form_formGroup">
						<input
							type="text"
							className="grayInput"
							placeholder="E-mail *"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<div className="form_formGroupCheckbox">
							{daysOfWeek.map((day) => (
								<label
									key={day.id}
									className="form_formCheckboxLabel"
									htmlFor="input-assumpte"
								>
									<input
										type="checkbox"
										id={day.id}
										className="form_formCheckbox"
										checked={selectedDays[day.id]}
										onChange={handleCheckboxChange}
									/>
									{day.label}
								</label>
							))}
						</div>
					</div>
					<div className="form_formButtonGroup">
						<button type="submit" className="form_formRegisterButton">
							REGISTRAR
						</button>
						<button type="button" className="form_formCancelButton">
							CANCELAR
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default UserForm;
