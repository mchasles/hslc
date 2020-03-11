import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

import { Modal } from '../Modal';
import Img from 'gatsby-image/withIEPolyfill';
import { Thumbnails, Thumbnail } from './layout';

const ThumnailButton = styled.button`
  border: none;
  padding: 0;
  background-color: transparent;
  margin-right: 2vw;

  &:active,
  &:focus {
    outline: 0;
  }

  &:last-child {
    margin: 0;
  }
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  padding: 0;
  background-color: transparent;
  font-family: 'Pintgram Regular';
  font-size: calc(4vw + 4vh + 0.8vmin);
  height: 100vh;
  width: 10vw;
  color: rgba(255, 255, 255, 0.6);
  text-align: center;

  &:active,
  &:focus {
    outline: 0;
  }
`;

const NavButtonLeft = styled(NavButton)`
  left: -10vw;
`;

const NavButtonRight = styled(NavButton)`
  right: -10vw;
`;

const Photos = ({ photos: photosProp }) => {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const photos = photosProp.map(
    ({
      node: {
        name,
        childImageSharp: { fluid },
      },
    }) => ({ name, fluid })
  );

  const onArrowLeft = useCallback(
    e => {
      e.stopPropagation();
      setCurrentPhoto(
        currentPhoto - 1 < 0 ? photos.length - 1 : currentPhoto - 1
      );
    },
    [currentPhoto, photos.length]
  );

  const onArrowRight = useCallback(
    e => {
      e.stopPropagation();
      setCurrentPhoto(
        currentPhoto - 1 < 0 ? photos.length - 1 : currentPhoto - 1
      );
    },
    [currentPhoto, photos.length]
  );

  const keyPressListener = useCallback(
    e => {
      if (e?.key === 'ArrowRight') {
        onArrowRight(e);
      } else if (e?.key === 'ArrowLeft') {
        onArrowLeft(e);
      } else if (e?.key === 'Escape') {
        setIsModalOpen(false);
      }
    },
    [onArrowRight, onArrowLeft, setIsModalOpen]
  );

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener('keydown', keyPressListener);
    }

    return () => {
      if (isModalOpen) {
        document.removeEventListener('keydown', keyPressListener);
      }
    };
  }, [isModalOpen, keyPressListener, onArrowRight, onArrowLeft]);

  return (
    <Thumbnails>
      {photos.map(({ name, fluid }, index) => (
        <ThumnailButton
          key={name}
          type="button"
          onClick={e => {
            e.preventDefault();
            setCurrentPhoto(index);
            setIsModalOpen(true);
          }}
        >
          <Thumbnail fluid={fluid} loading="eager" />
        </ThumnailButton>
      ))}
      {isModalOpen && (
        <Modal>
          <NavButtonLeft type="button" onClick={onArrowLeft}>
            &lsaquo;
          </NavButtonLeft>
          <Img
            fluid={photos[currentPhoto].fluid}
            fadeIn={false}
            durationFadeIn={1000}
            objectFit="contain"
          />
          <NavButtonRight type="button" onClick={onArrowRight}>
            &rsaquo;
          </NavButtonRight>
        </Modal>
      )}
    </Thumbnails>
  );
};

export default Photos;
