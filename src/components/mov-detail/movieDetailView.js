import React from 'react';
import styled from 'styled-components';
import NavBar from '../general/navBar';
import { Container, MainHeaderLeft, MainHeaderRight } from '../../styles/generalStyles';
import { Link, withRouter } from 'react-router-dom';
import BackArrow from '../../assets/BackArrow.svg';

const MenuFlex = styled.div `
  margin-top: 60px auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  background: white;
`;

const MenuSpacer = styled.div `

`;

const BackBtn = styled.div `
  display: flex;
  justify-content: center;
  margin: 5px 10px;
  width: 16px;
  height: 16px;
`;

const MovieDetailView = () => {

  return(
    <div>
      <NavBar />
      <Container>
        <MenuFlex>
          <Link to="/">
            <BackBtn>
              <img src={BackArrow} alt='back' />
            </BackBtn>
          </Link>
          <MainHeaderLeft>Movies: </MainHeaderLeft>
          <MainHeaderRight>Top 5</MainHeaderRight>
        </MenuFlex>
      </Container>
    </div>
  );
}

export default MovieDetailView;