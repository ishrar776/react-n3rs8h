import React from 'react';
import './style.css';
import CustomerThank from './customerthanks';
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
      </Routes>
    </Router>
  );
};
export default MenuBar;
