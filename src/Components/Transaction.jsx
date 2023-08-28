import { useNavigate, useParams } from 'react-router-dom'
import React, { useState } from "react";
import { Form, Button, Card, Row, Col } from "react-bootstrap";
import { toast } from 'react-toastify';


const Transaction = () => {
  const { type } = useParams();
  const localData = JSON.parse(localStorage.getItem("user"))

  const [formData, setFormData] = useState({
    type: "IMPS",
    from_acc: localData ? localData.accNo : "",
    to_acc: 0,
    amount: 0,
    date: "",
    maturity: "",
    remark: "",
    trans_pass: ""
  });

  const [error, setError] = useState("");
  const [transactionType, setTransactionType] = useState("");


  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name,value)
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // setFormData((prevData) => ({
    //   ...prevData,
    //   "type": transactionType,
    // }));

    console.log(formData);

    if (formData.type === "" || formData.from_acc === 0 || formData.to_acc == 0 || formData.amount == 0 ||
      formData.remark === "" || formData.date === "") {
      console.log("fill all the fields");
      setError("fill all the fields");
      return;
    };

    setError("");

    fetch("http://localhost:8080/api/transaction/sendData", {
      method: "POST",
      redirect: "follow",
      headers: {
        "Content-Type": "application/json"
      },

      //make sure to serialize your JSON body
      body: JSON.stringify({
        "send_acc":  formData.from_acc, 
        "rec_acc":  formData.to_acc,
        "trans_pass": formData.trans_pass,
        "trans_type":  formData.type,
        "date": formData.date,
        "amount": formData.amount,
        "remarks": formData.remark,
        "maturity_ins": formData.maturity,
      })
    })
      .then((response) => {
        //do something awesome that makes the world a better place
        console.log(response, "transaction post done");
        response.status != 200 ? toast.error("Invalid entry") :
				toast.success("Successful transaction")
        setFormData({
          type: "IMPS",
          from_acc: localData ? localData.accNo : "",
          to_acc: 0,
          amount: 0,
          date: "",
          maturity: "",
          remark: "",
          trans_pass: ""
        })
        navigate("/home")
      })
      .catch((err) => {
        toast.error("Trouble requesting transaction")
        navigate("/home")
      })
    console.log(transactionType);
  }

  return (
    <div>
      <div className="wrapper">
        <Card style={{ width: "600px" }}>
          <Card.Body>
            <Card.Title style={{ textAlign: "center", padding: "15px" }}>Transaction form</Card.Title>
            <Form onSubmit={handleSubmit}>
              <div className="form-group" >
                {/* <label htmlFor="selectField">Select transaction type :</label> */}
                {/* <select
                  className="form-control"
                  id="selectField"
                  value={transactionType}
                  onChange={(e) => {
                    setTransactionType(e.target.value);
                    console.log(e.target.value);
                  }}
                >
                  <option value="">Select...</option>
                  <option value="IMPS">IMPS</option>
                  <option value="NEFT">NEFT</option>
                  <option value="RTGS">RTGS</option>
                </select> */}
                <Form.Group
                  className="mb-3" controlId="type">
                  <Form.Label>Select Transaction type </Form.Label>
                  <Form.Control as="select" name="type" value={formData.type} onChange={handleChange}>
                  <option value="IMPS">IMPS</option>
                  <option value="NEFT">NEFT</option>
                  <option value="RTGS">RTGS</option>
                  </Form.Control>
                </Form.Group>
              </div>

              <Col style={{ margin: "10px 0px" }}>
                <Form.Group
                  className="mb-3" controlId="from_acc">
                  <Form.Label>From Account</Form.Label>
                  <Form.Control
                    type="text"
                    name="from_acc"
                    value={formData.from_acc}
                    onChange={handleChange}
                    required
                    disabled
                  />
                </Form.Group>
              </Col>


              <Col>
                <Form.Group className="mb-3" controlId="to_acc">
                  <Form.Label>To Account</Form.Label>
                  <Form.Control
                    type="text"
                    name="to_acc"
                    value={formData.to_acc}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>


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

              <Col>
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
              </Col>

              {formData.type == "NEFT" ? "" : (
                <Col>
                  <Form.Group className="mb-3" controlId="maturity">
                    <Form.Label>Maturity Instructions</Form.Label>
                    <Form.Control
                      type="text"
                      name="maturity"
                      value={formData.maturity}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
              )}

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
  )
}

export default Transaction