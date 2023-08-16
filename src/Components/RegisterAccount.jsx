import React, { useState } from "react";
import { Form, Button, Card, Row, Col } from "react-bootstrap";

const RegisterAccount = () => {

    const [details, setDetails] = useState({});
    const [formData, setFormData] = useState({
        acc_no: "",
        login_pass: "",
        confirm_login_pass: "",
        trans_pass: "",
        confirm_trans_pass: "",
        // otp: "",
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const getAccount = (acc_no) => {
        console.log(acc_no);
        // var requestOptions = {
        //   method: "GET",
        //   redirect: "follow",
        //   headers: {"Content-Type": "application/json"}
        // };

        // fetch("localhost://8080/api/account/id", requestOptions)
        //   .then((response) => response.json())
        //   .then((result) => setDetails(result))
        //   .catch((error) => console.log("error", error));
        //   console.log(details,"account details");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // if(formData.acc_no == "" || formData.login_pass== "" || formData.confirm_login_pass == "" || formData.trans_pass == "" ||
        //  formData.confirm_trans_pass == "") {
        //     console.log("fill all the fields");
        //     return;
        //  }

        if (formData.login_pass !== formData.confirm_login_pass) {
            setError("login password does not match");
            console.log("login password does not match ");
            return;
        }
        if (formData.trans_pass !== formData.confirm_trans_pass) {
            setError("transaction password does not match ");
            console.log("transaction password does not match ");
            return;
        }
        setError("");
        console.log(formData, "user");
        // getAccount(formData.acc_no);
        console.log(formData.acc_no);
        var requestOptions = {
            method: "GET",
            redirect: "follow",
            headers: { "Content-Type": "application/json" }
        };

        fetch(`http://localhost:8080/api/account/${formData.acc_no}`, requestOptions)
            .then((response) => response.json())
            .then((result) => setDetails(result))
            .catch((error) => console.log("error", error));


        console.log(details, "account details");
        console.log(formData.acc_no, details.acc_no);

        if (formData.acc_no == details.acc_no) {
            // var requestOptions = 
            console.log("im in")
            fetch("http://localhost:8080/api/account/sendData", {
                method: "POST",
                redirect: "follow",
                headers: {
                    "Content-Type": "application/json"
                },

                //make sure to serialize your JSON body
                body: JSON.stringify({
                    "acc_no" : formData.acc_no,
                    "log_pass": formData.login_pass,
                    "trans_pass": formData.trans_pass,
                    "user_id": "7",
                    "customer_id": 35,
                })
            })
                .then((response) => {
                    //do something awesome that makes the world a better place
                    console.log(response,"post done");
                });
        }


        // localhost://8080/api/account/id

    };
    return (
        <div className="wrapper">
            <Card style={{ width: "600px" }}>
                <Card.Body>
                    <Card.Title style={{ textAlign: "center", padding: "15px" }}>Register for Internet Banking</Card.Title>
                    <Form onSubmit={handleSubmit}>
                        {/* <Row> */}
                        <Col>
                            <Form.Group className="mb-3" controlId="acc_no">
                                <Form.Label>Account Number</Form.Label>
                                <Form.Control
                                    type="Number"
                                    name="acc_no"
                                    value={formData.acc_no}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="login_pass">
                                <Form.Label>Login Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    name="login_pass"
                                    value={formData.login_pass}
                                    onChange={handleChange}
                                    minLength={5}
                                    maxLength={10}
                                    required
                                />
                            </Form.Group>
                        </Col>
                        {/* </Row> */}

                        <Form.Group className="mb-3" controlId="confirm_login_pass">
                            <Form.Label>Confirm Login Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="confirm_login_pass"
                                value={formData.confirm_login_pass}
                                onChange={handleChange}
                                minLength={5}
                                maxLength={10}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="trans_pass">
                            <Form.Label>Transaction Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="trans_pass"
                                value={formData.trans_pass}
                                onChange={handleChange}
                                minLength={4}
                                maxLength={4}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="confirm_trans_pass">
                            <Form.Label>Confirm Transaction Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="confirm_trans_pass"
                                value={formData.confirm_trans_pass}
                                onChange={handleChange}
                                minLength={4}
                                maxLength={4}
                                required
                            />
                        </Form.Group>
                        <p style={{ color: "red" }}>{error}</p>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}

export default RegisterAccount