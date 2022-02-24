import React from "react";
import UserForm from "./userForm";

function AddUser({ handleCreate }) {
	return (
		<div>
			<h1>Add new Member</h1>
			<React.Fragment>
				<UserForm handleSubmit={handleCreate} />
			</React.Fragment>
		</div>
	);
}

export default AddUser;
