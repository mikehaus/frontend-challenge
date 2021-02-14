import styled from 'styled-components';
import { Container, SectionHeaderTop, SectionHeaderBot, CardGrid, device } from '../general/generalStyles';
import { Link } from 'react-router-dom';

/*
 *  Component: BrowseByGenre
 *  Description: Homepage Browse By Genre section - Contains header, and simple card grid for 4 movie genres
 *  About: On click routes user to GenreView
 */

const BrowseByGenre = () => {
  return (
    <div>
      <BrowseByGenreBG>
      <Container>
        <SectionHeaderTop>Browse</SectionHeaderTop>
        <SectionHeaderBot>by Genre</SectionHeaderBot>
        <CardGrid>
          <LinkNoStyle to="/genre/Comedy">
            <TextCard>Comedy</TextCard>
          </LinkNoStyle>
          <LinkNoStyle to="genre/Action">
            <TextCard>Action</TextCard>
          </LinkNoStyle>
          <LinkNoStyle to="/genre/Drama">
            <TextCard>Drama</TextCard>
          </LinkNoStyle>
          <LinkNoStyle to="/genre/Crime">
            <TextCard>True Crime</TextCard>
          </LinkNoStyle>
        </CardGrid>
      </Container>
      </BrowseByGenreBG>
    </div>
  )
}

// Background for BBG
const BrowseByGenreBG = styled.div `
  width: 100vw;
  background: rgb(244, 245, 251);
  padding: 60px 0;
`;

// Basic card for each genre
const TextCard = styled.div `
  display: flex;
  border-radius: 4px;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.5);
  color: white;
  margin: 20px 0;
  justify-content: center;
  align-items: center;
  font-family: Roboto;
  font-size: 30px;
  font-weight: bold;
  background: linear-gradient(-225deg, rgb(154, 76, 237) 0%, rgb(134, 127, 239) 46%, rgb(127, 199, 242) 100%);

  @media ${device.desktopL} {
    height: 358px;
    width: 500px;
  }
  @media ${device.desktop} {
    height: 278px;
    width: 450px;
  }
  @media ${device.fhd} {
    height: 202px;
    width: 312px;
  }
  @media ${device.laptopL} {
    height: 202px;
    width: 312px;
  }
  @media ${device.laptop} {
    height: 162px;
    height: 250px;
  }
  @media ${device.mobileL} {
    width: 202px;
    height: 130px;
  }
  @media ${device.mobileM} {
    width: 202px;
    height: 130px;
  }
  @media ${device.mobileS} {
    width: 202px;
    height: 130px;
  }
`;

// remove style of router link
const LinkNoStyle = styled(Link) `
  text-decoration: none;

  &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
  }
`;

export default BrowseByGenre;