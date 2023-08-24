import React, { useEffect, useState } from 'react'
import { Form, Button, Card, Row, Col } from "react-bootstrap";


const AdminSearch = () => {
	const [accNo, setAccNo] = useState("");
	const [users, setUsers] = useState([]);
	const [searchedUsers, setSearchedUsers] = useState([]);


	const getUsers = () => {
		var requestOptions = {
			method: "GET",
			redirect: "follow",
			headers: { "Content-Type": "application/json" }
		};

		fetch("http://localhost:8080/api/customer/getAll", requestOptions)
			.then((response) => response.json())
			.then((result) => {setUsers(result); setSearchedUsers(result); console.log(users, "adjlfkjakl")})
			.catch((error) => console.log("error", error));
			
	};


	const handleSearch = (e) => {
		const searchTerm = e.target.value;
		setAccNo(searchTerm);
		console.log(searchTerm);

		const filteredUsers = users.filter(user =>
			user.email.toLowerCase().includes(searchTerm.toLowerCase())
		);
			console.log(filteredUsers,"filter")
		setSearchedUsers(filteredUsers);
	}

	useEffect(() => {
		getUsers();
		console.log(users)
	}, [])

	return (
		<div>
			<div>
				<div><h1 style={{ textAlign: "center", padding: "20px" }}>Search Users</h1></div>
				<div style={{ padding: "10px" }} >
					<Form.Group style={{ width: "30%", marginBottom: "20px" }} controlId='acc_no'>
						<Form.Label>Search By Email Id</Form.Label>
						<Form.Control
							type='text'
							name='acc_no'
							value={accNo}
							onChange={handleSearch}
						/>
					</Form.Group>

					<div>
						<table style={{}} class="table table-bordered">
							<thead class="thead-dark">
								<tr>
									<th scope="col">Account No</th>
									<th scope="col">Name</th>
									<th scope="col">Email</th>
									<th scope="col">Mobile</th>
									<th scope="col">Aadhar</th>
								</tr>
							</thead>
							<tbody>
								{searchedUsers.map((user, id) => {
									return (

										<tr key={id}>
											<td>{user.acc_no}</td>
											<td>{user.name}</td>
											<td>{user.email}</td>
											<td>{user.mobile}</td>
											<td>{user.aadhar}</td>
										</tr>
									)
								})}
							</tbody>
						</table>
					</div>
				</div>

			</div>
		</div>
	)
}

export default AdminSearch
