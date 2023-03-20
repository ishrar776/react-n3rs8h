import React from 'react';
import './style.css';
import CustomerThank from './customerthanks';
//import App from './App';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from 'react-router-dom';
const MenuBar = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<CustomerThank />} />
        <Route path="/" element={<CustomerThank />} />
      </Routes>
    </Router>
  );
};
export default MenuBar;
