import React, { useState, useEffect } from 'react'
import { Form, Button, Card, Row, Col } from "react-bootstrap";
import Details from './Details';

const Admin = () => {
    // const [users, setUsers] = useState();
    const [approved, setApproved] = useState(false);

    const users = [
        {
            "id": 1,
            "acc_no": 1001,
            "title": "Mr",
            "name": "singh",
            "father_name": "rahul",
            "mobile": "1234567890",
            "email": "rahul@temp.com",
            "aadhar": "123443211234",
            "dob": "2023-08-10T18:30:00.000+00:00",
            "per_address": "abc",
            "res_address": "qsw",
            "occ_type": "employee",
            "source_income": "self",
            "gross_annual_income": "100",
            "account_status": 0,
            "balance": 1000

        },
        {
            "id": 2,
            "acc_no": 1002,
            "title": "Mr",
            "name": "atul",
            "father_name": "atul",
            "mobile": "9876543211",
            "email": "atul@temp.com`",
            "aadhar": "324145677689",
            "dob": "2023-08-10T18:30:00.000+00:00",
            "per_address": "def",
            "res_address": "def",
            "occ_type": "employee",
            "source_income": "self",
            "gross_annual_income": "100",
            "account_status": 1,
            "balance": 23345
        },
        {
            "id": 1,
            "acc_no": 1001,
            "title": "Mr",
            "name": "singh",
            "father_name": "rahul",
            "mobile": "1234567890",
            "email": "rahul@temp.com",
            "aadhar": "123443211234",
            "dob": "2023-08-10T18:30:00.000+00:00",
            "per_address": "abc",
            "res_address": "qsw",
            "occ_type": "employee",
            "source_income": "self",
            "gross_annual_income": "100",
            "account_status": 0,
            "balance": 1000

        },
        {
            "id": 2,
            "acc_no": 1002,
            "title": "Mr",
            "name": "atul",
            "father_name": "atul",
            "mobile": "9876543211",
            "email": "atul@temp.com`",
            "aadhar": "324145677689",
            "dob": "2023-08-10T18:30:00.000+00:00",
            "per_address": "def",
            "res_address": "def",
            "occ_type": "employee",
            "source_income": "self",
            "gross_annual_income": "100",
            "account_status": 2,
            "balance": 23345

        }
    ];

    // const getData = () => {
    //     var requestOptions = {
    //         method: "GET",
    //         redirect: "follow",
    //         headers: { "Content-Type": "application/json" }
    //     };

    //     fetch("http://localhost:8080/api/customer/getAll", requestOptions)
    //         .then((response) => response.json())
    //         .then((result) => setUsers(result))
    //         .catch((error) => console.log("error", error));
    // };

    useEffect(() => {
        // getData();
    }, []);

    const handleApprove = (e,user) => {
        e.preventDefault();
        // console.log(user, "approved")
        user.account_status = 1;
        
        console.log(user, "approved after")

        fetch("http://localhost:8080/api/customer/update/id", {
            method: "PUT",
            redirect: "follow",
            headers: {
                "Content-Type": "application/json"
            },

            //make sure to serialize your JSON body
            body: user
        })
            .then((response) => {
                //do something awesome that makes the world a better place
                console.log(response, "approved user");
            });
    }

    const handleDeny = (e,user) => {
        e.preventDefault();
        // console.log(user, "approved")
        user.account_status = 2;
        
        console.log(user, "approved after")

        // fetch("http://localhost:8080/api/customer/update/id", {
        //     method: "POST",
        //     redirect: "follow",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },

        //     //make sure to serialize your JSON body
        //     body: JSON.stringify({
        //         body: user
        //     })
        // })
        //     .then((response) => {
        //         //do something awesome that makes the world a better place
        //         console.log(response, " deny user");
        //     });
    }

    return (
        <div>
            <div>
                <div><h1 style={{ textAlign: "center", padding: "20px" }}>Admin Dashboard</h1></div>
      <Details name="Admin Admin" email= "admin@gmail.com"/>
               
            </div>

            {/* <div style={{ margin: "0px 20px" }}>
                <Button style={{ margin: "0px 5px", fontSize: "20px", padding: "10px 20px", backgroundColor: "green", borderWidth: "0px" }} onClick={setApproved(true)} variant="primary" type="submit">
                    Approved Customers
                </Button>

                <Button style={{ margin: "0px 5px", backgroundColor: "red", fontSize: "20px", padding: "10px 20px", borderWidth: "0px" }} onClick={setApproved(false)} variant="primary" type="submit">
                    Pending Customers
                </Button>
            </div> */}

            <div>
                <table style={{ margin: "10px 20px" }} class="table table-bordered">
                    <thead class="thead-dark">
                        <tr>
                            {/* <th scope="col">Id</th> */}
                            <th scope="col">Name</th>
                            <th scope="col">Email Id</th>
                            <th scope="col">Mobile</th>
                            {/* <th scope="col">DOB</th> */}
                            {/* <th scope="col">Aadhar</th> */}
                            <th scope="col">Account No</th>
                            <th scope="col">Balance</th>
                            <th scope="col">Status</th>
                            <th scope="col">Actions</th>

                        </tr>
                    </thead>


                    <tbody>
                        {users.map((user, id) => {
                            console.log(user, id);
                            // if (user.account_status == 0) {
                            return (

                                <tr key={id}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.mobile}</td>
                                    {/* <td>{user.dob}</td> */}
                                    {/* <td>{user.aadhar}</td> */}
                                    <td>{user.acc_no}</td>
                                    <td>{user.balance}</td>
                                    <td>{user.account_status ==0 ? "Pending" : user.account_status==1 ? "Approved" : "Disabled"}</td>

                                    {/* <td>{user.gross_annual_income}</td> */}
                                    {user.account_status == 0 ?
                                        <td style={{}}>
                                            <Button style={{ margin: "0px 5px", backgroundColor: "green", borderWidth: "0px" }} onClick={e => handleApprove(e, user)} variant="primary" type="submit">
                                                Approve
                                            </Button>

                                            <Button style={{ margin: "0px 5px", backgroundColor: "red", borderWidth: "0px" }} onClick={e => handleDeny(e,user)} variant="primary" type="submit">
                                                Disable
                                            </Button>

                                           
                                        </td> : user.account_status ==1 ? 
                                        <td> 
                                             <Button style={{ margin: "0px 5px", backgroundColor: "red", borderWidth: "0px" }} onClick={e => handleDeny(e,user)} variant="primary" type="submit">
                                                Disable
                                            </Button>
                                        </td> : <td>No Actions</td>
                                    }
                                </tr>
                            )
                        }
                        )}

                    </tbody>
                </table>

            </div>
        </div >
    )
}

export default Admin