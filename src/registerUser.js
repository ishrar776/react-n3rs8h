import React from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';
export default function RegisterUser() {
  let navigate = useNavigate();
  return (
    <>
      <div>Details List of all RegisterUser</div>
      <p>
        <button onClick={() => navigate('/register')}>
          Back To Register Deatils Page{' '}
        </button>
      </p>
      <p>Register user Details 2023</p>
    </>
  );
}
