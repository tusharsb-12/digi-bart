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
import Products from './pages/product/Products2';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<CreateAccount />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/user" element={<UserProfile />} />
                <Route path="/user/product" element={<UserProducts />} />
                <Route path="/user/offer" element={<UserOffers />} />
                <Route path="/user/setting" element={<UserSettings />} />
                <Route path='/products' element={<Products />} />
            </Routes>
        </Router>
    );
}

export default App;
