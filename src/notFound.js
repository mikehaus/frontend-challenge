import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const InfoBox = styled.div `
  width: 100%;
  height: 50%;
  margin: 200px auto;
  text-align: center;
`;

const NotFound = () => (
  <div>
    <InfoBox>
      <h2>Sorry! We couldn't find that page.</h2>
      <Link to="/">
        Return Home
      </Link>
    </InfoBox>
  </div>
);

export default NotFound;