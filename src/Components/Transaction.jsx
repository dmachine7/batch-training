import React from 'react'
import { useParams } from 'react-router-dom'

const Transaction = () => {
  const { type } = useParams();

  return (
    <div>Transaction</div>
  )
}

export default Transaction