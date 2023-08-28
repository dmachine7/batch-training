import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const SetPassword = () => {
	const [email, setEmail] = useState("");
	const [buttonFlag, setButtonFlag] = useState(true);
	const [alert, setAlert] = useState(false);
	const [password, setPassword] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		setButtonFlag(false);
	}

	const handleCreatePassword = (e) => {
		e.preventDefault();
		console.log(email, password);
	}

	return (
		<div className="login">
			<div className="login-form">
				<Form>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Please enter your email id</Form.Label>
						<Form.Control
							type="email"
							placeholder="Enter email"
							onChange={(e) => setEmail(e.target.value)}
						/>
					</Form.Group>
					{
						alert ?
						<span>Your account is not approved yet. Please try again after some time</span>
						: null
					}
					{
						buttonFlag ?
							<div>
								<Button variant="primary" type="submit" onClick={handleSubmit}>
									Submit
								</Button>
							</div>
							:
							<div>
								<Form.Group className="mb-3" controlId="formBasicPassword">
									<Form.Label>Create a strong Password</Form.Label>
									<Form.Control
										type="password"
										placeholder="Password"
										onChange={(e) => setPassword(e.target.value)}
										minLength={8}
										maxLength={15}
									/>
								</Form.Group>
								<Button variant="primary" type="submit" onClick={handleCreatePassword}>
									Create
								</Button>
							</div>
					}
				</Form>
			</div>
		</div>
	)
}

export default SetPassword;