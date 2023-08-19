import React, { useState, useEffect } from 'react'
import { Form, Button, Card, Row, Col } from "react-bootstrap";

const Admin = () => {
    const [user, setUser] = useState([]);

    const getData = () => {
        var requestOptions = {
            method: "GET",
            redirect: "follow",
            headers: { "Content-Type": "application/json" }
        };

        fetch("http://localhost:8080/api/customer/getAll", requestOptions)
            .then((response) => response.json())
            .then((result) => setUser(result))
            .catch((error) => console.log("error", error));
    };

    useEffect(() => {
        getData();
    }, []);

    const handleApprove = (e) => {
        e.preventDefault();

        fetch("http://localhost:8080/api/customer/sendData", {
            method: "POST",
            redirect: "follow",
            headers: {
                "Content-Type": "application/json"
            },

            //make sure to serialize your JSON body
            body: JSON.stringify({
                
            })
        })
            .then((response) => {
                //do something awesome that makes the world a better place
                console.log(response, "approved user");
            });
    }

    const handleDeny = (e) => {
        e.preventDefault();

        fetch("http://localhost:8080/api/customer/sendData", {
            method: "POST",
            redirect: "follow",
            headers: {
                "Content-Type": "application/json"
            },

            //make sure to serialize your JSON body
            body: JSON.stringify({
                
            })
        })
            .then((response) => {
                //do something awesome that makes the world a better place
                console.log(response, " deny user");
            });
    }

    return (
        <div>
            <div>
                <div><h1 style={{ textAlign: "center", padding: "20px" }}>Admin Dashboard</h1></div>
                <div style={{ padding: "20px" }}>
                    <h4>Name : { }</h4>
                    <h4>Account no : { }</h4>
                </div>
            </div>

            <div>
                <table style={{ margin: "10px 20px" }} class="table table-bordered">
                    <thead class="thead-dark">
                        <tr>
                            {/* <th scope="col">Id</th> */}
                            <th scope="col">Name</th>
                            <th scope="col">Email Id</th>
                            <th scope="col">Mobile</th>
                            <th scope="col">DOB</th>
                            <th scope="col">Aadhar</th>
                            <th scope="col">Fathers Name</th>
                            <th scope="col">Annual Income</th>
                            <th scope="col">Occupation Type </th>
                            <th scope="col">Permenant address </th>
                            <th scope="col">Residential Address </th>
                            <th scope="col">Account No</th>
                            <th scope="col">Balance</th>
                            {/* <th scope="col">Actions</th> */}


                        </tr>
                    </thead>
                    <tbody>
                        {user.map((trans, id) => {
                            return (

                                <tr>
                                    {/* <td>{user.}</td>
                  <td>{user.}</td>
                  <td>{user.}</td>
                  <td>{user.}</td>
                  <td>{user.}</td>
                  <td>{user.}</td>
                  <td>{user.}</td>
                  <td>{user.}</td>
                  <td>{user.}</td>
                  <td>{user.}</td>
                  <td>{user.}</td>
                  <td>{user.}</td> */}
                                    <td style={{}}>
                                        <Button style={{ margin: "0px 5px" }} onClick={handleApprove} variant="primary" type="submit">
                                            Approve
                                        </Button>

                                        <Button style={{ margin: "0px 5px" }}  onClick={handleDeny} variant="primary" type="submit">
                                            Deny
                                        </Button>

                                    </td>


                                </tr>
                            )
                        })}

                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default Admin