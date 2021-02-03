import React from 'react';
import styled from 'styled-components';
import { colors as Color } from '../../styles/generalStyles';

const Nav = styled.div `
  width: 100vw;
  height: 72px;
  position: fixed;
  display: block;
  top: 0;
  background-color: white;
  box-shadow: 0px 2px 8px 0px rgba(58, 58, 58, 0.23);
  margin: 0 0 60px 0;
`;

const LogoBox = styled.div `
  width: 60px;
  height: 72px;
  position: absolute;
  display: inline-block;
  left: 0;
  top: 0;
  background-color: ${Color.blue};
`;

const NavHeader = styled.h2 `
  position: relative;
  display: inline-block;
  margin: auto 80px;
`;

const NavSpacer = styled.section `
  position: relative;
  display: block;
  margin: 120px auto;
`

const NavBar = () => {

  return(
    <div>
      <Nav>
        <LogoBox />
        <NavHeader>Reel Cinema</NavHeader>
      </Nav>
      <NavSpacer />
    </div>
  );
}

export default NavBar;