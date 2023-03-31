import React from 'react';
import './style.css';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
export default function CustomerThank() {
  const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
  const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;
  let navigate = useNavigate();
  return (
    <>
      <Wrapper>
        <Title>Hello World!</Title>
      </Wrapper>

      <div>thanks customer we register your profile please check your mail</div>
      <p>
        <button onClick={() => navigate('/App')}>Back To DashBoard </button>
      </p>
      <p>
        <Link to={'/RegisterUser'}>Details Registered User</Link>
      </p>
    </>
  );
}
