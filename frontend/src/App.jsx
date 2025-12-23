import React from 'react'
import Home from './pages/dashboard/Home'
import Expense from './pages/dashboard/Expense'
import Income from './pages/dashboard/Income'
import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup'
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import {Toaster} from 'react-hot-toast';
import UserProvider from './context/UserContext'
import { useEffect } from 'react';
const App = () => {
  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <UserProvider>
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/dashboard" exact element={<Home />} />
          <Route path="/expense" exact element={<Expense />} />
          <Route path="/income" exact element={<Income />} />
        </Routes>
      </Router>
    </div>
    <Toaster toastOptions={{className:"", style:{fontSize:'13px'},}}/>
    </UserProvider>
  )
}

export default App

const Root = () => {
  //check if token exists in localStorage
  const isAuthenticated = !!localStorage.getItem("token")
  //redirect to dashboard if token exists, otherwise redirect to login
  return isAuthenticated ? (<Navigate to="/dashboard"/>) : (<Navigate to="/login"/>)
}