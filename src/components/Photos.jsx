import React, { useCallback, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

import { Modal } from './Modal';
import Img from 'gatsby-image/withIEPolyfill';

import { device } from '../utils/media';

const Photos = ({ photos: photosProp }) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const photos = photosProp
    .map(
      ({
        node: {
          name,
          photo: { fluid: photo },
          thumb: { fluid: thumb },
        },
      }) => ({ name, photo, thumb })
    )
    .sort((a, b) => a.name - b.name);

  const onArrowLeft = useCallback(
    e => {
      setIsLoading(true);
      e.stopPropagation();
      setCurrentPhotoIndex(
        currentPhotoIndex - 1 <= 0 ? photos.length - 1 : currentPhotoIndex - 1
      );
    },
    [currentPhotoIndex, photos.length]
  );

  const onArrowRight = useCallback(
    e => {
      setIsLoading(true);
      e.stopPropagation();
      setCurrentPhotoIndex(
        currentPhotoIndex + 1 < photos.length ? currentPhotoIndex + 1 : 0
      );
    },
    [currentPhotoIndex, photos.length]
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

  const currentPhoto = photos[currentPhotoIndex].photo;
  const { aspectRatio } = currentPhoto;

  return (
    <Thumbnails>
      {photos.slice(0, 3).map(({ name, thumb }, index) => (
        <ThumnailButton
          key={name}
          type="button"
          onClick={e => {
            e.preventDefault();
            setCurrentPhotoIndex(index);
            setIsModalOpen(true);
          }}
        >
          <Thumbnail fluid={thumb} />
        </ThumnailButton>
      ))}
      {isModalOpen && (
        <Modal onOverlayClick={() => setIsModalOpen(false)}>
          <NavButtonLeft type="button" onClick={onArrowLeft} />
          <PhotoWrapper
            width={aspectRatio > 1 ? '82vw' : `calc(82vh * ${aspectRatio})`}
            height={aspectRatio > 1 ? `calc(82vw / ${aspectRatio})` : '82vh'}
            onClick={onArrowRight}
          >
            <CloseButton onClick={() => setIsModalOpen(false)} />
            {isLoading ? (
              <StyledSpinner viewBox="0 0 50 50">
                <circle
                  className="path"
                  cx="25"
                  cy="25"
                  r="20"
                  fill="none"
                  strokeWidth="2"
                />
              </StyledSpinner>
            ) : null}
            <Img
              fluid={currentPhoto}
              fadeIn={false}
              durationFadeIn={1000}
              objectFit="contain"
              onLoad={() => setIsLoading(false)}
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

  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: 0 auto;
  background-color: black;
  transform: scale(0.75);

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }
`;

const StyledSpinner = styled.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 50px;

  & .path {
    stroke: #fff;
    stroke-linecap: round;
    animation: dash 1s ease-in-out infinite;
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;

export default Photos;
