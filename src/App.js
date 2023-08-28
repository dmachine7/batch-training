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
import SetPassword from './Components/SetPassword';
import AdminSearch from './Components/AdminSearch';
import TransactionSearch from './Components/TransactionSearch';
import AdminHome from './Components/AdminHome';

function App() {
  localStorage.setItem("token", "null"); // jwt auth token
  localStorage.setItem("type", "customer"); //type of user

  return (
    <div className='main'>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route 
          path="/home" 
          element={
            <PrivateRoute routeType={"customer"}>
              <Home />
            </PrivateRoute>
          }
        />
        <Route 
          path="/admin" 
          element={
            <PrivateRoute routeType={"admin"}>
              <Admin />
            </PrivateRoute>
          }
        />
        <Route path="/forgotpw" element={<ForgotPassword />} />
        <Route path="/registeracc" element={<RegisterAccount />} />
        <Route path="/signup" element={<SignUp />} />

      </Routes>
    </div>
  );
}

export default App;
