import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { device } from '../utils/media';

const HamburgerButton = styled.button`
  position: fixed;
  z-index: 22;
  top: 12px;
  right: 12px;

  display: flex;
  justify-content: center;

  width: 56px;
  height: 56px;
  border: none;
  border-radius: 100%;

  background: rgba(0, 0, 0, 0.9);
  outline: none;
  transition: opacity 0.2s ease-out;

  @media ${device.tablet} {
    display: none;
  }

  &:before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    height: 30%;
    width: 35%;
    margin: auto;

    content: '';
    transition: opacity 0.2s ease-out, width 0.2s 0.2s ease-out;

    background: linear-gradient(
      to bottom,
      white,
      white 18%,
      transparent 18%,
      transparent 42%,
      white 42%,
      white 60%,
      transparent 60%,
      transparent 82%,
      white 82%,
      white 100%
    );
  }

  &:after {
    opacity: 0;

    content: '×';

    color: white;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 44px;
    transition: opacity 0.4s ease-out;
  }

  .open & {
    background-color: transparent;

    &:before {
      opacity: 0;
    }

    &:after {
      opacity: 1;

      transform: translate3d(0, 0, 0) rotate(180deg);
      transition: transform 0.4s 1.2s ease-out, opacity 0.4s 1.2s ease-out;
    }
  }
`;

const menuAnimation = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.04) translateY(300%);
  }
  40% {
    transform: scale(0.04) translateY(0);
    transition: ease-out;
  }
  40% {
    transform: scale(0.04) translateY(0);
  }
  60% {
    opacity: 1;
    transform: scale(0.02) translateY(0px);
  }
  61% {
    transform: scale(0.04);
  }
  99.9% {
    height: 0;
    padding-bottom: 100%;
    border-radius: 100%;
  }
  100% {
    transform: scale(2);
    height: 100%;
    padding-bottom: 0;
    border-radius: 0;
  }
`;

const List = styled.ul`
  position: fixed;
  z-index: 20;
  top: -100%;

  display: flex;
  flex-direction: column;

  overflow: hidden;
  width: 100%;
  height: 100%;
  padding: 16%;

  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  box-sizing: border-box;

  &:before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    overflow: hidden;
    margin: auto;
    padding-bottom: 100%;
    border-radius: 100%;

    background-color: rgba(0, 0, 0, 0.8);

    content: '';

    transform: scale(0.04), translateY(9999px);
  }

  @media ${device.tablet} {
    top: 0;

    flex-direction: row;
    align-items: center;

    height: 64px;
    padding: 0 32px;

    &:before {
      border-radius: 0;
    }
  }

  .open & {
    top: 0;

    &:before {
      animation: ${menuAnimation} 0.6s ease-out forwards;
    }
  }

  li {
    position: relative;
    opacity: 0;
    margin: 0 auto;

    @media ${device.tablet} {
      opacity: 1;
      margin: 0 32px 0 0;
    }

    .open & {
      opacity: 1;
      transition: opacity 0.2s 0.6s ease-out;
    }
  }

  a {
    display: block;
    width: 100%;

    line-height: 72px;

    color: white;
    text-align: center;
    text-transform: uppercase;
    font-size: 18px;
    text-decoration: none;

    @media ${device.tablet} {
      opacity: 0.6;
      font-size: 12px;
      line-height: 64px;

      &:hover {
        opacity: 1;
        cursor: pointer;
      }
    }
  }
`;

const Menu = ({ titles }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={isOpen ? 'open' : null} role="navigation">
      <HamburgerButton onClick={() => setIsOpen(!isOpen)} />
      <List onClick={() => setIsOpen(false)}>
        {titles.map(({ value }) => (
          <li>
            <a href={`#${value.replace(/\s+/g, '-').toLowerCase()}`}>{value}</a>
          </li>
        ))}
      </List>
    </nav>
  );
};

export default Menu;
