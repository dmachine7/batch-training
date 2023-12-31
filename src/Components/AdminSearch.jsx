import React, { useEffect, useState } from 'react'
import { Form } from "react-bootstrap";


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

		const filteredUsers = users.filter(user =>
			user.email.toLowerCase().includes(searchTerm.toLowerCase())
		);
			console.log(filteredUsers,"filter")
		setSearchedUsers(filteredUsers);
	}

	useEffect(() => {
		getUsers();
	}, [])

	return (
		<div>
			<div>
				<div><h1 style={{ textAlign: "center", padding: "20px" }}>User Details</h1></div>
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
						<table style={{width: "80%"}} class="table table-bordered">
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
								{searchedUsers.length ==0 ? <p style={{color: "red"}}>enter valid search text</p> : <p></p>}
							</tbody>
						</table>
					</div>
				</div>

			</div>
		</div>
	)
}

export default AdminSearch
