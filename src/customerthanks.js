import React from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';
export default function CustomerThank() {
  let navigate = useNavigate();
  return (
    <>
      <div>thanks customer we register your profile please check your mail</div>
      <p>
        <button onClick={() => navigate('/App')}>Back To DashBoard </button>
      </p>
    </>
  );
}
