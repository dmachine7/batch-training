import { useParams } from 'react-router-dom'
import React, { useState } from "react";
import { Form, Button, Card, Row, Col } from "react-bootstrap";
import { toast } from 'react-toastify';

const Service = () => {
	const localData = JSON.parse(localStorage.getItem("user"))

	const [formData, setFormData] = useState({
		type: "",
		from_acc: localData ? localData.accNo : "",
		to_acc: localData ? localData.accNo : "",
		amount: 0,
		date: "",
		remark: "",
		trans_pass: "",
		payment_type: ""
	});

	const [error, setError] = useState("");

	const handleChange = (e) => {
		const { name, value } = e.target;
		console.log(name, value, "filedssssssssss")
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};


	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);

		if (formData.amount <= 0) {
			console.log("fill all the fields");
			setError("Invalid amount");
			return;
		};

		setError("");

		fetch("http://localhost:8080/api/transaction/sendDataSelf", {
			method: "POST",
			redirect: "follow",
			headers: {
				"Content-Type": "application/json"
			},

			//make sure to serialize your JSON body
			body: JSON.stringify({
				"send_acc": formData.from_acc,
				"rec_acc": formData.to_acc,
				"trans_pass": formData.trans_pass,
				"trans_type": formData.payment_type == "debit" ? "Withdraw" : "Deposit",
				"payment_type": formData.payment_type,
				// "date": formData.date,
				"amount": formData.amount,
				"remarks": formData.remark,
				"maturity_ins": "",
			})
		})
			.then((response) => {
				//do something awesome that makes the world a better place
				console.log(response, "transaction post done");
				response.status != 200 ? toast.error("Invalid entry") :
				toast.success("Successful transaction")
				setFormData({
					type: "",
					from_acc: localData ? localData.accNo : "",
					to_acc: localData ? localData.accNo : "",
					amount: 0,
					date: "",
					remark: "",
					trans_pass: "",
					payment_type: ""
				})
			})
			.catch((err) => {
				toast.error("Could not perform transaction")
			})
	}

	return (
		<div>
			<div>
				<div className="wrapper">
					<Card style={{ width: "600px" }}>
						<Card.Body>
							<Card.Title style={{ textAlign: "center", padding: "15px" }}>Withdrawal / Deposit form</Card.Title>
							<Form onSubmit={handleSubmit}>
								<div className="form-group" >

									<Form.Group
										className="mb-3" controlId="payment_type">
										<Form.Label>Select Transaction type </Form.Label>
										<Form.Control required as="select" name="payment_type" value={formData.payment_type} onChange={handleChange}>
											<option value="">Select</option>
											<option value="debit">Withdraw</option>
											<option value="credit">Deposit</option>
										</Form.Control>
									</Form.Group>
								</div>

								<Col>
									<Form.Group className="mb-3" controlId="amount">
										<Form.Label>Amount</Form.Label>
										<Form.Control
											type="Number"
											name="amount"
											value={formData.amount}
											onChange={handleChange}
											required
										/>
									</Form.Group>
								</Col>

								{/* <Col>
									<Form.Group className="mb-3" controlId="date">
										<Form.Label>Date</Form.Label>
										<Form.Control
											type="date"
											name="date"
											value={formData.date}
											onChange={handleChange}
											required
										/>
									</Form.Group>
								</Col> */}

								<Col>
									<Form.Group className="mb-3" controlId="remark">
										<Form.Label>Remark</Form.Label>
										<Form.Control
											type="text"
											name="remark"
											value={formData.remark}
											onChange={handleChange}
											required
										/>
									</Form.Group>
								</Col>

								<Col style={{ margin: "10px 0px" }}>
									<Form.Group
										className="mb-3" controlId="trans_pass">
										<Form.Label>Transaction Password</Form.Label>
										<Form.Control
											type="text"
											name="trans_pass"
											value={formData.trans_pass}
											onChange={handleChange}
											required
										/>
									</Form.Group>
								</Col>


								<p style={{ color: "red" }}>{error}</p>
								<Button variant="primary" type="submit">
									Submit
								</Button>
							</Form>
						</Card.Body>
					</Card>
				</div>
			</div>
		</div>
	)
}

export default Service