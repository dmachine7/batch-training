import React, { useState, useEffect } from 'react'
import TransactionTable from './TransactionTable';
// import Details from './Details';
import Card from 'react-bootstrap/Card';


const TransactionHistory = () => {

  const [posts, setPosts] = useState([]);
  const localData = JSON.parse(localStorage.getItem("user"))

  const getData = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: { "Content-Type": "application/json" }
    };

    fetch("http://localhost:8080/api/transaction/" + localData.accNo, requestOptions)
      .then((response) => response.json())
      .then((result) => setPosts(result))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getData();
    console.log(posts)
  }, []);
  return (
    <div>
      <h1 style={{ textAlign: "center", padding: "20px" }}>Transaction History</h1>
      <div className="dashboard-wrapper">
        <div className="dashboard-left">
          <Card style={{ margin: "1rem" }}>
            <Card.Body>
              <Card.Text>
                Signed in as
              </Card.Text>
              <Card.Title>{localData.username}</Card.Title>
            </Card.Body>
          </Card>
          <Card style={{ margin: "1rem" }}>
            <Card.Body>
              <Card.Text>
                Account no.
              </Card.Text>
              <Card.Title>{localData.accNo}</Card.Title>
            </Card.Body>
          </Card>
          <Card style={{ margin: "1rem" }}>
            <Card.Body>
              <Card.Text>
                Balance
              </Card.Text>
              <Card.Title>&#8377; {localData.balance}</Card.Title>
            </Card.Body>
          </Card>
        </div>
        <div className="dashboard-right">
          <TransactionTable transactions={posts} />
        </div>
      </div>

    </div>

  )
}

export default TransactionHistory;