import './App.css';

import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';
import AuthProvider from './providers/AuthProvider';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <Nav />
          <main className="form-signin">
            <Routes>
              <Route path="/" element={<Home />} exact />
              <Route path="/login" element={<Login />} exact />
              <Route path="/register" element={<Register />} exact />
            </Routes>
          </main>
        </div>
      </AuthProvider>
    </Router>

  )
}

export default App