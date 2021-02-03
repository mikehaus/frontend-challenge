import styled from 'styled-components';
import style from 'styled-components';

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

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`
};


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
  margin-left: 5px;
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
  justify-content: space-between;
  width: 100vw - 120px;
  margin: 0 auto;
`;

export const CardList = styled.div `
  list-style: none;
`;

const card = styled.div `
  display: flex;
  border-radius: ${borderRadius};
  box-shadow: ${boxShadows.boxShadowPoster};
`

export const PosterCard = styled(card) `
  margin: 30px 15px;

  @media ${device.desktopL} { 
    height: 527px;
    width: 350px;
  }
  @media ${device.desktop} {
    height: 337px;
    width: 225px;
  }
  @media ${device.laptopL} {
    height: 337px;
    width: 225px;
  }
  @media ${device.laptop} {
    height: 234px;
    width: 150px;
  }
  @media ${device.mobileL} {
    height: 168px;
    width: 95px;
  }
  @media ${device.mobileM} {
    height: 168px;
    width: 95px;
  }
  @media ${device.mobileS} {
    height: 168px;
    width: 95px;
  }
`;