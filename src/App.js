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
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import PrivateRoute from './Components/PrivateRoute';

function App() {
  localStorage.setItem("token", "123");

  return (
    <div className='main'>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/home" element={<Home />} />
        <Route path="/forgotpw" element={<ForgotPassword />} />
        <Route path="/transaction/:type" element={<Transaction />} />
        <Route path="/history" element={<TransactionHistory />} />
        <Route path="/user" element={<UserDetails />} />
        <Route path="/signup" element={<Sign_up />} />
        {/* <Route
            exact
            path="/home"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          /> */}
      </Routes>
    </div>
  );
}

export default App;
