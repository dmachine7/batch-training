import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Dashboard  from './Components/Dashboard';
import ForgotPassword from './Components/ForgotPassword';
import Home from './Components/Home';
import Sign_up from './Components/Sign_up';
import Transaction from './Components/Transaction';
import TransactionHistory from './Components/TransactionHistory';
import UserDetails from './Components/UserDetails';

function App() {
  return (
    <div className='main'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/forgotpw" element={<ForgotPassword />} />
        <Route path="/transaction/:type" element={<Transaction />} />
        <Route path="/history" element={<TransactionHistory />} />
        <Route path="/user" element={<UserDetails />} />
        <Route path="/signuppw" element={<Sign_up />} />
      </Routes>
    </div>
  );
}

export default App;
