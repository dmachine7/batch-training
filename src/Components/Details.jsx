import React from 'react'

const Details = (props) => {
    return (
        <div style={{ border:"1px solid black", backgroundColor: "whlte", boxShadow: "2px 2px grey",marginBottom: "40px",padding: "15px 20px", borderRadius: "8px", color: "black", margin: "10px 50px", width: "400px" }}>
            <p>{`Name : ${props.name}`}</p>
            <p>{`Email Id : ${props.email}`}</p>
            <p>{props.type == "user" ? `Account No : ${props.acc_no}` : ""}</p>

        </div>
    )
}


export default Details                     