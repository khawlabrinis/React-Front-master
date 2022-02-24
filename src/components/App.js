// import logo from './logo.svg';
import axios from "axios";
import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "../App.css";
import AddUser from "./addUser";
import Header from "./header";
import ModifUser from "./modifUser";
import UserList from "./userList";

const baseUrl = "http://localhost:5000/users";

function App() {
	let navigate = useNavigate();

	const [users, setUsers] = React.useState([]);

	React.useEffect(() => {
		axios.get(baseUrl).then((response) => {
			setUsers(response.data);
		});
	}, []);

	const handleRemoveUser = (id) => {
		axios.delete(baseUrl + `/${id}`).then((response) => {
			setUsers(users.filter((user) => user._id !== id));
		});
	};

	const handleCreate = (user, e) => {
		e.preventDefault();

		axios
			.post(baseUrl, {
				name: user.name,
				email: user.email,
				password: user.password,
			})
			.then((response) => {
				setUsers([...users, user]);

				navigate("/");
			});
	};

	const handleModifClick = (event, user, id) => {
		event.preventDefault();
		axios.put(`${baseUrl}/${id}`, user).then((response) => {
			console.log(response);
		});

		console.log(baseUrl);
		console.log(id);

		let updatedUser = users.filter((user) => user._id === id);

		updatedUser = user;

		console.log(updatedUser);
		setUsers([...users, updatedUser]);

		navigate("/");
	};

	return (
		<div>
			<Header />

			<Routes>
				<Route
					path="/"
					element={
						<UserList
							url={baseUrl}
							users={users}
							handleRemoveUser={handleRemoveUser}
						/>
					}
				/>
				<Route path="/add" element={<AddUser handleCreate={handleCreate} />} />
				<Route
					path="/modif/:id"
					element={
						<ModifUser url={baseUrl} handleModifClick={handleModifClick} />
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
