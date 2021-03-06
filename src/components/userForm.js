import "bootstrap/dist/css/bootstrap.min.css";uto-merging src/components/modifUser.js

i
import { useEffect,useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

const UserForm = (props) => {
	const [user, setuser] = useState({
		name:"",
		email:"",
		password:""
	});

    
	useEffect(() => {
		setuser(props.user);
	}, [props.user])


	const [errorMsg, setErrorMsg] = useState("");
	const { name, email, password } = user;

	const handleOnSubmit = (event) => {
		event.preventDefault();
		const values = [name, email, password];
		let errorMsg = "";
      console.log(user)
		const allFieldsFilled = values.every((field) => {
			const value = `${field}`.trim();
			return value !== "" && value !== "0";
		});

		if (allFieldsFilled) {
			props.handleSubmit(user, event);
		} else {
			errorMsg = "Please fill out all the fields.";
		}
		setErrorMsg(errorMsg);
	};

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		console.log(name, value);
		setuser((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};
	/**
	 * state updater from useState provides a callback pattern
     *  which returns you the previous state which you can use to update the current state
     * const [setSome, setSomeState] = useState({thing: 'loding', count: 1});
        setSomeState(prev => ({...prev, count: prev.count + 1}));
	 */

	return (
		<Container>
			{errorMsg && <p className="errorMsg">{errorMsg}</p>}
			<Form onSubmit={handleOnSubmit}>
				<Form.Group controlId="name">
					<Form.Label>user Name</Form.Label>
					<Form.Control
						className="input-control"
						type="text"
						name="name"
						defaultValue={props.user ? props.user.name : ""}

						onChange={handleInputChange}
						placeholder="Enter name of user"
					/>
				</Form.Group>
				<Form.Group controlId="email">
					<Form.Label>user email</Form.Label>
					<Form.Control
						className="input-control"
						type="text"
						name="email"
						defaultValue={props.user.email }

						onChange={handleInputChange}
						placeholder="Enter email of user"
					/>
				</Form.Group>

				<Form.Group controlId="password">
					<Form.Label>user password</Form.Label>
					<Form.Control
						className="input-control"
						type="text"
						name="password"
						defaultValue={props.user.password }
						onChange={handleInputChange}
						placeholder="Enter password of user"
					/>
				</Form.Group>
				<Button variant="primary" type="submit" className="submit-btn">
					Submit
				</Button>
			</Form>
		</Container>
	);
};

export default UserForm;
