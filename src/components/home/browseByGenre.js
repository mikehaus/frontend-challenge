import React from 'react';
import styled from 'styled-components';
import { Container, SectionHeaderTop, SectionHeaderBot, CardGrid, device } from '../../styles/generalStyles';

const BrowseByGenreBG = styled.div `
  width: 100vw;
  background: rgb(244, 245, 251);
  padding: 60px 0;
`

const TextCard = styled.div `
  display: flex;
  border-radius: 4px;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.5);
  color: white;
  justify-content: center;
  align-items: center;
  font-family: Roboto;
  font-size: 24px;
  font-weight: bold;
  background: linear-gradient(-225deg, rgb(154, 76, 237) 0%, rgb(134, 127, 239) 46%, rgb(127, 199, 242) 100%);

  @media ${device.desktopL} {
    height: 258;
    width: 400;
  }
  @media ${device.desktop} {
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

const BrowseByGenre = () => {
  return (
    <div>
      <BrowseByGenreBG>
      <Container>
        <SectionHeaderTop>Browse</SectionHeaderTop>
        <SectionHeaderBot>by Genre</SectionHeaderBot>
        <CardGrid>
          <TextCard>Comedy</TextCard>
          <TextCard>Action</TextCard>
          <TextCard>Drama</TextCard>
          <TextCard>True Crime</TextCard>
        </CardGrid>
      </Container>
      </BrowseByGenreBG>
    </div>
  )
}

export default BrowseByGenre;