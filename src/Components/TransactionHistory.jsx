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
      .then((result) => setPosts(result.transaction))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getData();
    console.log(posts)
  }, []);
  return (
    <div>
      <h1 style={{ textAlign: "center", padding: "20px" }}>Transaction History</h1>

      <div>
        <TransactionTable transactions={posts} />

      </div>

    </div>

  )
}

export default TransactionHistory;