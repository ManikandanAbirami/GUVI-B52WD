import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import RegistrationForm from './components/RegistrationForm'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import LoginForm from './components/LoginForm'
import jwt_decode from 'jwt-decode'
import { UserProvider } from './components/UserContext'
import Landing from './components/Landing'

function App() {
  const token = localStorage.getItem('userToken');
  const decoded = token ? jwt_decode(token) : {};
  const userRole = decoded.user.role;
  console.log(userRole);

  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path='/register' Component={RegistrationForm}></Route>
          <Route path='/login' Component={LoginForm}></Route>
          <Route path='/landing' Component={Landing}></Route>
          <Route path="/" element={<Navigate replace to="/register" />} />
        </Routes>
      </Router>
    </UserProvider>

  )
}

export default App
