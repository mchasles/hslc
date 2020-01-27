import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { device } from '../utils/media';

const BUTTON_COLOR = 'rgba(0, 0, 0, 0.9)';
const BG_COLOR = 'rgb(0, 0, 0)';

const Button = styled.button`
  display: flex;
  justify-content: center;
  background: ${BUTTON_COLOR};
  position: fixed;
  z-index: 22;
  top: 12px;
  right: 12px;
  border: none;
  width: 56px;
  height: 56px;
  border-radius: 100%;
  outline: none;
  transition: opacity 0.2s ease-out;

  @media ${device.tablet} {
    display: none;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    height: 30%;
    width: 35%;
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
    transition: opacity 0.2s ease-out, width 0.2s 0.2s ease-out;
  }

  &:after {
    opacity: 0;
    content: '×';
    color: white;
    font-family: Arial, sans-serif;
    font-size: 44px;
    line-height: 0;
    transition: opacity 0.4s ease-out;
  }

  .open & {
    background-color: transparent;
    &:before {
      opacity: 0;
      width: 0;
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
  z-index: 20;
  position: fixed;
  top: -100%;
  width: 100%;
  height: 100%;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  overflow: hidden;
  padding: 108px 64px;
  box-sizing: border-box;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    opacity: 0.9;
    background-color: ${BG_COLOR};
    padding-bottom: 100%;
    border-radius: 100%;
    transform: scale(0.04), translateY(9999px);
    overflow: hidden;
  }

  @media ${device.tablet} {
    display: flex;
    align-items: center;
    top: 0;
    height: 64px;
    padding: 0 32px;

    &:before {
      border-radius: 0;
      opacity: 0.6;
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

    @media ${device.tablet} {
      opacity: 1;
      margin-right: 32px;
    }

    .open & {
      opacity: 1;
      transition: opacity 0.2s 0.6s ease-out;
    }
  }

  a {
    display: block;
    width: 100%;
    text-align: center;
    line-height: 72px;
    color: white;
    text-transform: uppercase;
    font-size: 18px;
    text-decoration: none;

    @media ${device.tablet} {
      font-size: 12px;
      line-height: 64px;
      &:hover {
        opacity: 0.6;
      }
    }

    &:hover {
      cursor: pointer;
    }
  }
`;

const Menu = ({ titles }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={isOpen ? 'open' : null} role="navigation">
      <Button onClick={() => setIsOpen(!isOpen)} />
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
