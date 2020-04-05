import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

import { Modal } from './Modal';
import Img from 'gatsby-image/withIEPolyfill';

import { device } from '../utils/media';

const Photos = ({ photos: photosProp }) => {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const photos = photosProp.map(
    ({
      node: {
        name,
        photo: { fluid: photo },
        thumb: { fluid: thumb },
      },
    }) => ({ name, photo, thumb })
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
      {photos.map(({ name, thumb }, index) => (
        <ThumnailButton
          key={name}
          type="button"
          onClick={e => {
            e.preventDefault();
            setCurrentPhoto(index);
            setIsModalOpen(true);
          }}
        >
          <Thumbnail fluid={thumb} />
        </ThumnailButton>
      ))}
      {isModalOpen && (
        <Modal onOverlayClick={() => setIsModalOpen(false)}>
          <NavButtonLeft type="button" onClick={onArrowLeft}>
            &lsaquo;
          </NavButtonLeft>
          <Img
            fluid={photos[currentPhoto].photo}
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

const ThumnailButton = styled.button`
  border: none;
  padding: 0;
  background-color: transparent;
  margin-right: 16px;

  @media ${device.mobileL} {
    margin-right: 32px;
  }

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

const Thumbnails = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Thumbnail = styled(Img)`
  width: 80px;
  height: 80px;
  border-radius: 80px;

  @media ${device.mobileL} {
    width: 8vw;
    height: 8vw;
    border-radius: 8vw;
  }
`;

export default Photos;