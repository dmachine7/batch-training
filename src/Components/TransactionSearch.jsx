import React, { useEffect, useState } from 'react'
import { Form, Button, Card, Row, Col } from "react-bootstrap";
import TransactionTable from './TransactionTable';


const TransactionSearch = () => {
    const [searchText, setSearchText] = useState("")

    const [posts, setPosts] = useState([]);

    const getTransaction = () => {
        var requestOptions = {
            method: "GET",
            redirect: "follow",
            headers: { "Content-Type": "application/json" }
        };

        const url = "http://localhost:8080/api/transaction/" + searchText;

        fetch(url, requestOptions)
            .then((response) => response.json())
            .then((result) => setPosts(result))
            .catch((error) => console.log("error", error));
    };


    const handleSearch = (e) => {
        const searchTerm = e.target.value;
        setSearchText(searchTerm);
        getTransaction();
        console.log(posts, "trnas")
    }
    return (
        <div>
            <div>
                <div><h1 style={{ textAlign: "center", padding: "20px" }}>Admin Dashboard</h1></div>
                <div style={{ padding: "10px" }} >
                    <Form.Group style={{ width: "30%", marginBottom: "20px" }} controlId='acc_no'>
                        <Form.Label>Search By Account No :</Form.Label>
                        <Form.Control
                            type='text'
                            name='acc_no'
                            value={searchText}
                            onChange={handleSearch}
                        />
                    </Form.Group>

                    <div>
                        <TransactionTable transactions={posts} />

                    </div>
                </div>

            </div>
        </div>
    )
}

export default TransactionSearch