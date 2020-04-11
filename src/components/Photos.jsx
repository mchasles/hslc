import React, { useCallback, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

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

  const previousPhotoIndex =
    currentPhoto - 1 < 0 ? photos.length - 1 : currentPhoto - 1;
  const nextPhotoIndex =
    currentPhoto - 1 < 0 ? photos.length - 1 : currentPhoto - 1;
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
          <NavButtonLeft type="button" onClick={onArrowLeft} />
          <PhotoWrapper onClick={onArrowRight}>
            <CloseButton onClick={() => setIsModalOpen(false)} />
            <Img
              fluid={photos[previousPhotoIndex].photo}
              style={{ display: 'none' }}
            />
            <Img
              fluid={photos[currentPhoto].photo}
              fadeIn={false}
              durationFadeIn={1000}
              objectFit="contain"
            />
            <Img
              fluid={photos[nextPhotoIndex].photo}
              style={{ display: 'none' }}
            />
          </PhotoWrapper>
          <NavButtonRight type="button" onClick={onArrowRight} />
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

  @media ${device.tablet} {
    margin-right: 24px;
  }

  &:active,
  &:focus {
    outline: 0;
  }

  &:last-child {
    margin: 0;
  }
`;

const NavButtonCommonStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  padding: 0;
  background-color: transparent;
  height: 14vw;
  width: 14vw;
  border-radius: 14vw;
  background-color: rgba(0, 0, 0, 0.5);

  @media ${device.tablet}, (orientation: landscape) {
    height: 8vw;
    width: 8vw;
    border-radius: 8vw;
  }

  &:before,
  &:after {
    opacity: 0.6;
  }

  &:hover {
    &:before,
    &:after {
      opacity: 1;
    }
  }
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  ${NavButtonCommonStyles};

  &:after {
    display: block;
    position: absolute;
    content: ' ';
    height: 2.4vw;
    width: 2.4vw;
    background-color: transparent;
    border-color: white;
    border-style: solid;
  }

  &:active,
  &:focus {
    outline: 0;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  ${NavButtonCommonStyles};
  transform: translate(50%, -50%);

  &:before,
  &:after {
    content: ' ';
    height: 4vw;
    width: 2px;
    background-color: white;
  }
  &:before {
    transform: rotate(45deg);
    transform-origin: right;
  }
  &:after {
    transform: rotate(-45deg);
    transform-origin: left;
  }

  &:active,
  &:focus {
    outline: 0;
  }
`;

const NavButtonLeft = styled(NavButton)`
  left: 0;
  transform: translate(-50%, -50%);

  &:after {
    border-width: 0 0 2px 2px;
    transform: translateX(25%) rotate(45deg);
  }
`;

const NavButtonRight = styled(NavButton)`
  right: 0;
  transform: translate(50%, -50%);

  &:after {
    border-width: 2px 2px 0 0;
    transform: translateX(-25%) rotate(45deg);
  }
`;

const Thumbnails = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Thumbnail = styled(Img)`
  width: 68px;
  height: 68px;
  border-radius: 68px;

  @media ${device.tablet} {
    width: 8vw;
    height: 8vw;
    border-radius: 8vw;
  }
`;

const PhotoWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 80%;
  margin: 0 auto;
  background-color: black;
`;

export default Photos;
