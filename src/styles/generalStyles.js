import styled from 'styled-components';
import style from 'styled-components';
import device from './mediaQuery';

export const colors = {
  blue: 'rgb(34, 69, 225)',
  white: 'rgb(255, 255, 255)', 
  black: 'rgb(0, 0, 0)',
  headerBlack: 'rgb(57, 57, 57)',
  headerGray: '#bbbaba',
  subheaderGray: 'rgb(99, 114, 125)',
  bgWhite: '#d8d8d8',
}

const boxShadows = {
  boxShadowPoster: '0px 2px 8px 0px rgba(0, 0, 0, 0.5)',
  boxShadowNav: '0px 2px 8px 0px rgba(58, 58, 58, 0.23)',
}

const fonts = {
  mainFontFamily: 'Roboto',
  mainBoldFamily: 'Roboto-bold',
  bold: 'bold',
  thin: '300',
}

const borderRadius = '4px';

export const Container = styled.div `
  margin: 20px 60px;
`;


// HEADERS
const Header = styled.h1 `
  display: inline-block;
  font-family: ${fonts.mainFontFamily};
  font-weight: ${fonts.bold};
  margin: 10px 0;
`

const MainHeader = styled(Header) `
  @media ${device.desktopL} {
    font-size: 32px;
  }
  @media ${device.desktop} {
    font-size: 30px;
  }
  @media ${device.laptopL} {
    font-size: 28px;
  }
  @media ${device.laptop} {
    font-size: 24px;
  }
  @media ${device.mobileL} {
    font-size: 22px;
  }
  @media ${device.mobileM} {
    font-size: 22px;
  }
  @media ${device.mobileS} {
    font-size: 22px;
  }
`;

export const MainHeaderLeft = styled(MainHeader) `
  color: ${colors.headerGray};
`;

export const MainHeaderRight = styled(MainHeader) `
  color: ${colors.headerBlack};
`

export const SectionHeaderTop = styled(Header) `
  @media ${device.desktopL} {
    font-size: 24px;
  }
  @media ${device.desktop} {
    font-size: 24px;
  }
  @media ${device.laptopL} {
    font-size: 24px;
  }
  @media ${device.laptop} {
    font-size: 24px;
  }
  @media ${device.mobileL} {
    font-size: 20px;
  }
  @media ${device.mobileM} {
    font-size: 20px;
  }
  @media ${device.mobileS} {
    font-size: 20px;
  }
`;

export const SectionHeaderBot = styled(Header) `
  @media ${device.desktopL} {
    font-size: 32px;
  }
  @media ${device.desktop} {
    font-size: 30px;
  }
  @media ${device.laptopL} {
    font-size: 28px;
  }
  @media ${device.laptop} {
    font-size: 24px;
  }
  @media ${device.mobileL} {
    font-size: 22px;
  }
  @media ${device.mobileM} {
    font-size: 22px;
  }
  @media ${device.mobileS} {
    font-size: 22px;
  }
`;

export const MainText = styled.div `
  @media ${device.desktopL} {
    font-size: 18px;
  }
  @media ${device.desktop} {
    font-size: 18px;
  }
  @media ${device.laptopL} {
    font-size: 16px;
  }
  @media ${device.laptop} {
    font-size: 16px;
  }
  @media ${device.mobileL} {
    font-size: 14px;
  }
  @media ${device.mobileM} {
    font-size: 14px;
  }
  @media ${device.mobileS} {
    font-size: 14px;
  }
`;

export const CardGrid = styled.div `
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const CardList = styled.div `
  list-style: none;
`

const card = styled.div `
  width: height * .628;
  height: auto;
  border-radius: ${borderRadius};
  box-shadow: ${boxShadows.boxShadowPoster};
`

export const PosterCard = styled(card) `
  object-fit: cover;
  background: black;
  margin: 20px 10px;

  @media ${device.desktopL} {
    min-height: 337px;
    max-height: 527px;
    min-width: 230px;
    max-width: 360px;
  }
  @media ${device.desktop} {
    min-height: 337px;
    max-height: 527px;
    min-width: 230px;
    max-width: 360px;
  }
  @media ${device.laptopL} {
    min-height: 234px;
    max-height: 337px;
    min-width: 160px;
    max-width: 230px;
  }
  @media ${device.laptop} {
    min-height: 234px;
    max-height: 337px;
    min-width: 160px;
    max-width: 230px;
  }
  @media ${device.mobileL} {
    min-height: 168px;
    max-height: 191px;
    min-width: 100;
    max-width: 130;
  }
  @media ${device.mobileM} {
    min-height: 168px;
    max-height: 191px;
    min-width: 100;
    max-width: 130;
  }
  @media ${device.mobileS} {
    min-height: 168px;
    max-height: 191px;
    min-width: 100;
    max-width: 130;
  }
`