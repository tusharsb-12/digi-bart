import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/auth/Login';
import ForgotPassword from './pages/auth/ForgotPassword';
import CreateAccount from './pages/auth/CreateAccount'
import UserProfile from './pages/user/UserProfile';
import UserProducts from './pages/user/UserProducts';
import UserOffers from './pages/user/UserOffers';
import UserSettings from './pages/user/UserSettings';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/create-account" element={<CreateAccount />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/user" element={<UserProfile />} />
                <Route path="/user/product" element={<UserProducts />} />
                <Route path="/user/offer" element={<UserOffers />} />
                <Route path="/user/setting" element={<UserSettings />} />
            </Routes>
        </Router>
    );
}

export default App;
