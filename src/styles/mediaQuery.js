import styled from 'styled-components';
// media styled components

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
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
};

export default device;


/* ! USAGE
 * const Page = styled.div`
 * margin: auto;
 * font-family: "sans-serif";
 * text-align: center;

  ${props => props.primary && css`
    background: palevioletred;
    color: white;
  `}

 * @media ${device.laptop} { 
 *   max-width: 800px;
 * }

 * @media ${device.desktop} {
 *   max-width: 1400px;
 * }
`; */