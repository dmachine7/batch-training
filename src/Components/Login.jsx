import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = () => {
    return (
        <div>
            <h1>Login Page</h1>
            <div>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicUserId">
                        <Form.Label>User ID</Form.Label>
                        <Form.Control type="text" placeholder="Enter User Id" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default Login;