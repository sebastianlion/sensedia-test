"use client";
import { useState, useEffect } from "react";

import { HiTrash } from "react-icons/hi";

import "../styles/userList.css";

function UserList() {
	// const [albums, setAlbums] = useState([]);
	const [posts, setPosts] = useState([]);
	const [users, setUsers] = useState([]);
	const [search, setSearch] = useState("");

	// Albums
	async function getAlbumById(id) {
		// return "hola";
		const res = await fetch(`http://localhost:8080/api/v1/users/${id}/albums`);
		const data = await res.json();
		console.log(data);
		console.log(data.albums.length);
		return data.albums.length;
		// return "data.albums.length;";
	}

	// Posts
	async function getPosts() {
		const res = await fetch("http://localhost:8080/api/v1/posts");
		const data = await res.json();
		setPosts(data.posts);
	}

	function setUsersPosts(id) {
		return posts.filter((post) => post.user_id === id).length;
	}

	// Users

	async function getUsers() {
		const res = await fetch("http://localhost:8080/api/v1/users");
		const data = await res.json();
		setUsers(data.users);
	}

	async function deleteUser(id) {
		const res = await fetch(`http://localhost:8080/api/v1/users/${id}`, {
			method: "DELETE",
		});
		const data = await res.json();
		setUsers(users.filter((user) => user.id !== id));
	}

	const filteredUsers = users.filter(
		(user) =>
			user.id.includes(search) ||
			user.name.includes(search) ||
			user.email.includes(search) //extra
	);

	useEffect(() => {
		getUsers();
		getPosts();

		// getAlbumById("2a1495b6-1374-4a11-9cdb-271f4d5676bb");
	}, []);

	return (
		<div>
			<div className="listContainer">
				<h1 className="userTitle">Usuarios</h1>
				<div className="tableContainer">
					<input
						type="text"
						className="searchInput"
						placeholder="Buscar"
						value={search}
						onChange={(e) => setSearch(e.target.value)}
					/>
					<table>
						<thead>
							<tr className="tableHeader">
								<th>USUARIO</th>
								<th>NOMBRE</th>
								<th>CORREO ELECTRONICO</th>
								<th>CIUDAD</th>
								<th>DIAS DE LA SEMANA</th>
								<th>POSTS</th>
								<th>ALBUMS</th>
							</tr>
						</thead>
						<tbody>
							{filteredUsers.map((user) => (
								<tr className="tableBody" key={user.id}>
									<td>{user.id}</td>
									<td>{user.name}</td>
									<td>{user.email}</td>
									<td>Abraham</td>
									<td>todos</td>
									<td>{setUsersPosts(user.id)}</td>
									<td>1</td>
									<td className="tableBody_button">
										<button
											onClick={async () => {
												console.log("this is click of id: ", user.id);
												console.log("this is click of id: ", typeof user.id);
												if (
													confirm("Are you sure you want to delete this note?")
												) {
													await deleteUser(user.id);
												}
											}}
										>
											<HiTrash className="text-2xl text-red-600" />
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}

export default UserList;
