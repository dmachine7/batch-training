import React, { useState, useEffect } from 'react'


const TransactionHistory = () => {
 
  const [posts, setPosts] = useState([]);

  const getData = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: {"Content-Type": "application/json"}
    };

    fetch("http://localhost:8080/api/transaction/getAll", requestOptions)
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
      <div><h1 style={{ textAlign: "center", padding: "20px" }}>Transaction History</h1></div>
      <div style={{ padding: "20px" }}>
        <h4>Name : { }</h4>
        <h4>Account no : { }</h4>
      </div>

      <div>
        <table style={{margin: "10px 20px"}} class="table table-bordered">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Transaction Id</th>
              <th scope="col">Sender</th>
              <th scope="col">Receiver</th>
              <th scope="col">Transaction Type</th>
              <th scope="col">Date</th>
              <th scope="col">Amount</th>
              <th scope="col">Remarks</th>
              <th scope="col">Maturity Ins</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((trans, id) => {
              return (

                <tr key={id}>
                  <td>{trans.trans_id}</td>
                  <td>{trans.send_acc}</td>
                  <td>{trans.rec_acc}</td>
                  <td>{trans.trans_type}</td>
                  <td>{trans.date}</td>
                  <td>{trans.amount}</td>
                  <td>{trans.remarks}</td>
                  <td>{trans.maturity_ins}</td>
                </tr>
              )
            })}

          </tbody>
        </table>

      </div>

    </div>
  )
}

export default TransactionHistory;