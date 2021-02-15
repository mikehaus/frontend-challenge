import styled from 'styled-components';
import { useState } from 'react';
import { device } from './generalStyles';

const Modal = ({ posterPath }) => {

  return (
    <div>
      <ModalFlex>
        <ModalMain>
          <PosterCardImgModal>
            <img src={posterPath} alt="Poster Modal" />
          </PosterCardImgModal>
        </ModalMain>
      </ModalFlex>
    </div>
  );
}

const ModalFlex = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
`

const ModalMain = styled.div `
  position: absolute;
  border-radius: 4px;
  background: white;
  z-index: 3;
  width: auto;
  height: auto;
  top: 20%;
  margin: 0;
`;

const PosterCardImgModal = styled.div `
  display: flex;
  border-radius: 4px;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.5);
  position: relative;

  @media ${device.desktopL} { 
    height: 1000px;
    width: 662px;
  }
  @media ${device.desktop} {
    height: 800px;
    width: 500px;
  }
  @media ${device.fhd} {
    height: 500px;
    width: 313px;
  }
  @media ${device.laptopL} {
    height: 500px;
    width: 313px;
  }
  @media ${device.laptop} {
    height: 450px;
    width: 281px;
  }
  @media ${device.mobileL} {
    height: 400px;
    width: 250px;
  }
  @media ${device.mobileM} {
    height: 300px;
    width: 187px;
  }
  @media ${device.mobileS} {
    height: 300px;
    width: 187px;
  }
`;


export default Modal;