import styled from 'styled-components';

/*
 * Main Repository of commonly used styled components.
 * Catch all and replacement for CSS styling
 * Mostly for Headings, size classes, Formatting
 */


// general colors
export const colors = {
  blue: 'rgb(34, 69, 225)',
  white: 'rgb(255, 255, 255)', 
  black: 'rgb(0, 0, 0)',
  headerBlack: 'rgb(57, 57, 57)',
  headerGray: '#bbbaba',
  subheaderGray: 'rgb(187, 186, 186)',
  bgWhite: '#d8d8d8',
}

// general font types
const fonts = {
  mainFontFamily: 'Roboto',
  mainBoldFamily: 'Roboto-bold',
  bold: 'bold',
  thin: '300',
}

// Size classes for media queries
const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
  desktopL: '3840px',
}

// device object for use externally based on size classes
export const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktopL})`
};

// Main Container takes care of app margins
export const Container = styled.div `
  @media ${device.desktopL} {
    margin: 0px 640px;
  }
  @media ${device.desktop} {
    margin: 0px 150px;
  }
  @media ${device.laptopL} {
    margin: 0px 60px;
  }
`;

// HEADERS

// Base Header Component
const Header = styled.h1 `
  font-family: ${fonts.mainFontFamily};
  font-weight: ${fonts.bold};
  margin: 0;
`;

// Base Main Header, used for Top Five, Genre View, Movie Detail View
const MainHeader = styled(Header) `
  display: inline-block;

  @media ${device.desktopL} {
    font-size: 32px;
  }
  @media ${device.desktop} {
    font-size: 32px;
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

// Left side of main headers
export const MainHeaderLeft = styled(MainHeader) `
  color: ${colors.headerGray};
`;

// Right side of main headers
export const MainHeaderRight = styled(MainHeader) `
  margin-left: 5px;
  color: ${colors.headerBlack};
`;

// For BBG and MBA components
export const SectionHeaderTop = styled.h1 `
  display: block;
  font-family: ${fonts.mainFontFamily};
  font-weight: ${fonts.bold};
  color: ${colors.subheaderGray};
  margin: 0px;

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

// For BBG and MBA components
export const SectionHeaderBot = styled.h1 `
  display: inline-block;
  font-family: ${fonts.mainFontFamily};
  font-weight: ${fonts.bold};
  color: ${colors.headerBlack};
  margin: 5px 0px 20px 0px;

  @media ${device.desktopL} {
    font-size: 32px;
  }
  @media ${device.desktop} {
    font-size: 32px;
  }
  @media ${device.laptopL} {
    font-size: 32px;
  }
  @media ${device.laptop} {
    font-size: 32px;
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

// Basic flex grid for cards
export const CardList = styled.div `
  display: flex;
  flex-direction: row;
  list-style: none;
  justify-content: space-around;
`;

// Image class for poster cards. Determines sizing on different screen widths. Used in all main component views
export const PosterCardImg = styled.div `
  display: flex;
  border-radius: 4px;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.5);
  margin: 10px;

  @media ${device.desktopL} { 
    height: 527px;
    width: 350px;
  }
  @media ${device.desktop} {
    height: 337px;
    width: 223px;
  }
  @media ${device.laptopL} {
    height: 337px;
    width: 223px;
  }
  @media ${device.laptop} {
    height: 234px;
    width: 155px;
  }
  @media ${device.mobileL} {
    height: 168px;
    width: 111px;
  }
  @media ${device.mobileM} {
    height: 168px;
    width: 111px;
  }
  @media ${device.mobileS} {
    height: 168px;
    width: 111px;
  }
`;

// Slightly different Gri
export const CardGrid = styled.div `
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100vw - 120px;
  margin: 0 auto;
`;

// Basic Loading screen while waiting for props info to populate
export const Loading = styled.div `
  width: 100%;
  height: 500px;
  font-family: "Roboto";
  font-weight: bold;
  font-size: 45px;
  display: flex;
  align-items: center;
  margin: 60px;
  justify-content: center;
`;