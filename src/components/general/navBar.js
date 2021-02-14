import styled from 'styled-components';
import { colors as Color } from './generalStyles';
import Logo from '../../assets/Logo.svg';

/*
 *  Component: NavBar
 *  Description: Main Navigation bar, used on top of all main components
 *  @Props: None
 */ 

const NavBar = () => {

  return(
    <div>
      <Nav>
        <LogoBox>
          <img src={Logo} alt="logo" width="24px" height="24px"/>
        </LogoBox>
        <NavHeader>Reel Cinema</NavHeader>
      </Nav>
      <NavSpacer />
    </div>
  );
}

const Nav = styled.div `
  width: 100vw;
  height: 72px;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  background-color: white;
  box-shadow: 0px 2px 8px 0px rgba(58, 58, 58, 0.23);
  margin: 0 0 60px 0;
  z-index: 50;
`;

const LogoBox = styled.div `
  width: 60px;
  height: 72px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  background-color: ${Color.blue};
`;

const NavHeader = styled.h2 `
  position: relative;
  display: inline-block;
  margin: 0 80px;
`;

const NavSpacer = styled.section `
  position: relative;
  display: block;
  margin: 120px auto;
`

export default NavBar;