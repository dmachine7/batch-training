import React, { useState, useEffect } from 'react'


const TransactionHistory = () => {
  // var transactions = [
  //   {
  //     trans_id: 1,
  //     send_acc: 33234554,
  //     rec_acc: 5862540,
  //     trans_type: "fldj",
  //     trans_pass: "fkaldj",
  //     date: "14-8-2023",
  //     amount: 573489,
  //     remarks: "good",
  //     maturity_ins: 12,
  //   },
  //   {
  //     trans_id: 2,
  //     send_acc: 54987,
  //     rec_acc: 35879,
  //     trans_type: "fldj",
  //     trans_pass: "fkvcxm",
  //     date: "24-8-2023",
  //     amount: 8970,
  //     remarks: "nice",
  //     maturity_ins: 23,
  //   },
  // ]
  const [posts, setPosts] = useState([]);

  const getData = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:3030/posts", requestOptions)
      .then((response) => response.json())
      .then((result) => setPosts(result))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div><h1 style={{ textAlign: "center", padding: "20px" }}>Transaction History</h1></div>
      <div style={{ padding: "20px" }}>
        <h4>Name : { }</h4>
        <h4>Account no : { }</h4>
      </div>

      <div>
        <table class="table table-bordered">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Transaction Id</th>
              <th scope="col">Sender</th>
              <th scope="col">Receiver</th>
              <th scope="col">Transaction Type</th>
              <th scope="col">Transaction password</th>
              <th scope="col">Date</th>
              <th scope="col">Amount</th>
              <th scope="col">Remarks</th>
              <th scope="col">Maturity Ins</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((trans, id) => {
              return (

                <tr>
                  {/* // console.log(trans,id) */}
                  <td>{trans.trans_id}</td>
                  <td>{trans.send_acc}</td>
                  <td>{trans.rec_acc}</td>
                  <td>{trans.trans_type}</td>
                  <td>{trans.trans_pass}</td>
                  <td>{trans.date}</td>
                  <td>{trans.amount}</td>
                  <td>{trans.remarks}</td>
                  <td>{trans.maturity_ins}</td>
                </tr>
              )
            })}
            {/* <th scope="row">1</th> */}


          </tbody>
        </table>

      </div>

    </div>
  )
}

export default TransactionHistory;