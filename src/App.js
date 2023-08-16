import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Dashboard  from './Components/Dashboard';
import ForgotPassword from './Components/ForgotPassword';
import Home from './Components/Home';
import SignUp from './Components/SignUp';

function App() {
  return (
    <div className='main'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/forgotpw" element={<ForgotPassword />} />
        <Route path="/signuppw" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
