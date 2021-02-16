import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { PosterCardImg } from './generalStyles';
import Modal from './modal';

/*
 *  Component: PosterCard
 *  Description: General use PosterImage - No special styling
 *  @Props: 
 *  url: path to poster url
 * 
 *  Methods:
 * 
 *  useEffect => on initial load sets the poster path
 *  displayModal => On click, displays modal overlay poster image
 *  closeModal => closes modal display when clicking on screen again
 */


const PosterCard = (props) => {

  const [ posterPath, setPosterPath ] = useState(null);
  const [ modalOpen, setModalOpen ] = useState(false);

  useEffect(() => {
    setPosterPath(props.url)
  }, [modalOpen])

  const displayModal = (e) => {
    e.preventDefault();
    setModalOpen(true);
  }

  const closeModal = () => {
    setModalOpen(false);
  }

  return (
    <div>
      { modalOpen ? (
        <div>
          <ModalBG onClick={closeModal}>
            <Modal posterPath={posterPath} />
          </ModalBG>
        </div>
        ) : (
          null
        )     
      }
      <PosterCardImg onClick={displayModal}>   
        <img src={posterPath} alt="poster" />
      </PosterCardImg>
    </div>
  );
}

const ModalBG = styled.div `
  position: fixed;
  top: 0;
  z-index: 2;
  left: 0;
  width:100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
`;


export default PosterCard;
