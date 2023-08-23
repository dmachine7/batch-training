import React from 'react'

const TransactionTable = ({transactions}) => {
  return (
    <div>
          <table style={{margin: "10px 20px"}} class="table table-bordered">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Transaction Id</th>
              <th scope="col">Sender</th>
              <th scope="col">Receiver</th>
              <th scope="col">Transaction Type</th>
              <th scope="col">Payment Mode</th>
              <th scope="col">Date</th>
              <th scope="col">Amount</th>
              <th scope="col">Remarks</th>
              {/* <th scope="col">Maturity Ins</th> */}
            </tr>
          </thead>
          <tbody>
            {transactions.map((trans, id) => {
              return (

                <tr key={id}>
                  <td>{trans.trans_id}</td>
                  <td>{trans.send_acc}</td>
                  <td>{trans.rec_acc}</td>
                  <td>{trans.trans_type}</td>
                  <td>{trans.payment_mode}</td>
                  <td>{trans.date}</td>
                  <td>{trans.amount}</td>
                  <td>{trans.remarks}</td>
                  {/* <td>{trans.maturity_ins}</td> */}
                </tr>
              )
            })}

          </tbody>
        </table>
    </div>
  )
}

export default TransactionTable