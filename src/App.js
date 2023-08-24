import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Dashboard  from './Components/Dashboard';
import ForgotPassword from './Components/ForgotPassword';
import Home from './Components/Home';
import Transaction from './Components/Transaction';
import TransactionHistory from './Components/TransactionHistory';
import UserDetails from './Components/UserDetails';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import RegisterAccount from './Components/RegisterAccount';
import PrivateRoute from './Components/PrivateRoute';
import AdminLogin from './Components/AdminLogin';
import SignUp from './Components/SignUp';
import Admin from './Components/Admin';
import AdminSearch from './Components/AdminSearch';

function App() {
  localStorage.setItem("token", "123");

  return (
    <div className='main'>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/home" element={<Home />} />
        <Route path="/forgotpw" element={<ForgotPassword />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/history" element={<TransactionHistory />} />
        <Route path="/user" element={<UserDetails />} />
        <Route path="/registeracc" element={<RegisterAccount />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/adminSearch" element={<AdminSearch />} />

      </Routes>
    </div>
  );
}

export default App;
