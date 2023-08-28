import React from 'react'
import { Table } from 'react-bootstrap'

const TransactionTable = ({transactions}) => {

  return (
    <div style={{ padding: "3rem" }}>
    {transactions && transactions.length ==0 ? <p style={{margin: "0px auto ", fontSize: "20p"}}>No Transactions yet</p> :
          <Table striped bordered hover>

          <thead class="thead-dark">
            <tr>
              <th scope="col">Transaction Id</th>
              <th scope="col">Sender</th>
              <th scope="col">Receiver</th>
              <th scope="col">Transaction Type</th>
              <th scope="col">Date</th>
              <th scope="col">Amount</th>
              <th scope="col">Remarks</th>
              {/* <th scope="col">Maturity Ins</th> */}
            </tr>
          </thead>
          <tbody>
            {transactions && transactions.map((trans, id) => {
              return (

                <tr key={id}>
                  <td>{trans.trans_id}</td>
                  <td>{trans.send_acc}</td>
                  <td>{trans.rec_acc}</td>
                  <td>{trans.trans_type}</td>
                  <td>{trans.date.substring(0,10)}</td>
                  <td>{trans.amount}</td>
                  <td>{trans.remarks}</td>
                  {/* <td>{trans.maturity_ins}</td> */}
                </tr>
              )
            })}

          </tbody>
        </Table>
   }
 </div>
  )
}

export default TransactionTable