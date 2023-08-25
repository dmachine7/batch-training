import React, { useState, useEffect } from 'react'
import { Form, Button, Card, Row, Col } from "react-bootstrap";
import Details from './Details';

const Admin = () => {
	const [users, setUsers] = useState([]);
	const [approved, setApproved] = useState(false);


	const getData = () => {
		var requestOptions = {
			method: "GET",
			redirect: "follow",
			headers: { "Content-Type": "application/json" }
		};

		fetch("http://localhost:8080/api/customer/getAll", requestOptions)
			.then((response) => response.json())
			.then((result) => { setUsers(result); console.log(result, "getall customer") })
			.catch((error) => console.log("error", error));
	};

	useEffect(() => {
		getData();
	}, []);

	const handleApprove = (e, user) => {
		e.preventDefault();
		
		const updatedUser = { ...user, accountStatus: 1 };

		console.log(user, "approved after")

		var requestOptions = {
			method: "PUT",
			redirect: "follow",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(updatedUser)
		};

		const url = "http://localhost:8080/api/customer/update/" + user.email
		// const url = "http://localhost:8080/api/transaction/" + searchText;
		fetch(url, requestOptions)
			.then(response => {
				if (!response.ok) {
					//   throw new Error('Network response was not ok');
					console.log(response, "res")
				}
				return response.json(); // Parse response data as JSON
			})
			.then(updatedData => {
				// Handle the updated data
				console.log('Updated Data:', updatedData);
				window.location.reload();
			})
			.catch(error => {
				// Handle errors
				console.log(error);
			});

	}

	const handleDeny = (e, user) => {
		e.preventDefault();
		const updatedUser = { ...user, accountStatus: 2 };

		console.log(user, "approved after")

		var requestOptions = {
			method: "PUT",
			redirect: "follow",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(updatedUser)
		};

		const url = "http://localhost:8080/api/customer/update/" + user.email
		fetch(url, requestOptions)
			.then(response => {
				if (!response.ok) {
					//   throw new Error('Network response was not ok');
					console.log(response, "res")
				}
				return response.json(); // Parse response data as JSON
			})
			.then(updatedData => {
				// Handle the updated data
				console.log('Updated Data:', updatedData);
				window.location.reload();
			})
			.catch(error => {
				// Handle errors
				console.log(error);
			});
	}

	return (
		<div>
			<div>
				<div><h1 style={{ textAlign: "center", padding: "20px" }}>Admin Dashboard</h1></div>
				<Details name="Admin Admin" email="admin@gmail.com" />

			</div>
			<div>
				<table style={{ margin: "10px 20px" }} class="table table-bordered">
					<thead class="thead-dark">
						<tr>
							<th scope="col">Account No</th>
							<th scope="col">Name</th>
							<th scope="col">Email Id</th>
							<th scope="col">Mobile</th>
							<th scope="col">Status</th>
							<th scope="col">Actions</th>

						</tr>
					</thead>


					<tbody>
						{users.map((user, id) => {
							console.log(user.accountStatus, "id")
							return (

								<tr key={id}>
									<td>{user.acc_no}</td>
									<td>{user.name}</td>
									<td>{user.email}</td>
									<td>{user.mobile}</td>
									<td>{user.accountStatus == 0 ? "Pending" : user.accountStatus == 1 ? "Approved" : "Disabled"}</td>

									{/* <td>{user.gross_annual_income}</td> */}
									{user.accountStatus == 0 ?
										<td style={{}}>
											<Button style={{ margin: "0px 5px", backgroundColor: "green", borderWidth: "0px" }} onClick={e => handleApprove(e, user)} variant="primary" type="submit">
												Approve
											</Button>

											<Button style={{ margin: "0px 5px", backgroundColor: "red", borderWidth: "0px" }} onClick={e => handleDeny(e, user)} variant="primary" type="submit">
												Disable
											</Button>


										</td> : user.accountStatus == 1 ?
											<td>
												<Button style={{ margin: "0px 5px", backgroundColor: "red", borderWidth: "0px" }} onClick={e => handleDeny(e, user)} variant="primary" type="submit">
													Disable
												</Button>
											</td> : <td>No Actions</td>
									}
								</tr>
							)
						})}

					</tbody>
				</table>

			</div>
		</div >
	)
}

export default Admin