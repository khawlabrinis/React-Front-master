import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

function ModifUser({ url, handleModifClick }) {
	let { id } = useParams();
	const [user, setUser] = useState({
		name: "",
		email: "",
		password: "",
	});

	React.useEffect(() => {
		axios.get(`${url}/${id}`).then((response) => {
			setUser(response.data);
		});
	}, []);

	return <div>heelo</div>;
}

export default ModifUser;
