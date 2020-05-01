import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled, { keyframes } from 'styled-components';
import classNames from 'classnames';

import { mobileBreakpoint } from '../utils/media';

import homeLogo from '../images/menu/home.png';
import fbLogo from '../images/menu/facebook.png';
import instaLogo from '../images/menu/instagram.png';
import { device } from '../utils/media';
import dataMenu from '../data/menu.yaml';
import BookButton from './BookButton';

export const getLink = str => /^(.*)\((.*)\)$/.exec(str)[2];
export const getLabel = str => /^(.*)\((.*)\)$/.exec(str)[1];

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
    height: 0;
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
    transform: scale(0.02) translateY(0);
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
    border-radius: 0;
  }
`;

const List = styled.ul`
  position: fixed;
  z-index: 20;
  top: -200%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  height: 100%;
  padding: 4% 0;

  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  box-sizing: border-box;

  @media ${device.tablet} {
    background-color: rgba(0, 0, 0, 0.8);
  }

  &:before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    overflow: hidden;
    margin: auto;
    width: 100%;
    padding-bottom: 100%;
    border-radius: 100%;

    background-color: rgba(0, 0, 0, 0.9);

    content: ' ';
    transform: scale(0.04), translateY(9999px);

    @media ${device.tablet} {
      display: none;
    }
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
`;

const ListItem = styled.li`
  position: relative;
  opacity: 0;
  margin: 0 auto;

  .open & {
    opacity: 1;
    transition: opacity 0.2s 0.6s ease-out;
  }

  ul {
    display: none;
  }

  &.expanded ul {
    display: block;
  }

  @media ${device.tablet} {
    opacity: 0.8;
    margin: 0 26px 0 0;

    &:hover {
      opacity: 1;
      cursor: pointer;
    }

    ul,
    &.expanded ul {
      display: none;
    }

    &:hover ul {
      display: block;
    }
  }
`;

const ListHomeLink = styled(Link)`
  display: block;
  height: 64px;
  padding: 12px 0;
  box-sizing: border-box;

  img {
    height: 100%;
  }
`;

const ListSocial = styled.ul`
  display: flex;
  margin: 0 auto;
  @media ${device.tablet} {
    margin: 0;
  }
`;

const ListItemBookButton = styled(ListItem)`
  margin: 0 auto;
  @media ${device.tablet} {
    margin: 0 32px 0 auto;
  }
`;

const ListItemSocial = styled(ListItem)`
  margin: 0;
  &:first-child {
    margin-right: 16px;
  }
`;

const ListSocialLink = styled.a`
  display: block;
  height: 56px;
  padding: 12px 0;
  box-sizing: border-box;

  img {
    height: 100%;
  }
`;

const ListLink = styled(Link)`
  display: block;
  width: 100%;

  line-height: 42px;

  color: white;
  text-align: center;
  text-transform: uppercase;
  font-size: 16px;
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }

  @media ${device.tablet} {
    display: flex;
    align-items: center;
    height: 64px;
    line-height: initial;
    font-size: 12px;
  }
`;

const SubList = styled.ul`
  margin-bottom: 18px;

  @media ${device.tablet} {
    position: absolute;
    top: 52px;
    left: 50%;

    padding: 8px 0;
    border-radius: 4px;

    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.08) 2px 4px 10px 0px;

    transform: translateX(-50%);
  }
`;

const SubListLink = styled(Link)`
  display: block;
  width: 100%;

  line-height: 38px;

  color: rgba(255, 255, 255, 0.8);
  text-align: center;
  font-size: 14px;
  text-decoration: none;

  @media ${device.tablet} {
    width: auto;
    padding: 0 22px;
    line-height: 36px;
    text-align: left;
    white-space: nowrap;

    color: rgb(140, 140, 140);
    &:hover {
      color: rgb(40, 40, 40);
    }
  }
`;

const scrollTop = () => {
  document.getElementById('main').scrollTo({ top: 0, behavior: 'smooth' });
};

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedId, setExpandedId] = useState();

  return (
    <nav className={isOpen ? 'open' : null} role="navigation">
      <HamburgerButton onClick={() => setIsOpen(!isOpen)} />
      <List onClick={() => setIsOpen(false)}>
        <ListItem>
          <ListHomeLink to="/" onClick={scrollTop}>
            <img src={homeLogo} alt="Logo" />
          </ListHomeLink>
        </ListItem>
        {dataMenu.map((value, key) => {
          const hasSubMenu = typeof value === 'object';
          const label = hasSubMenu ? Object.keys(value)[0] : value;
          const link = getLink(label);

          const subMenu = hasSubMenu ? (
            <SubList>
              {value[label].map((subLabel, index) => (
                <li key={getLink(subLabel)}>
                  <SubListLink
                    to={getLink(subLabel)}
                    onClick={() => {
                      setIsOpen(false);
                      if (index === 0) {
                        scrollTop();
                      }
                    }}
                  >
                    {getLabel(subLabel)}
                  </SubListLink>
                </li>
              ))}
            </SubList>
          ) : null;
          return (
            <ListItem
              key={link}
              id={link}
              onClick={event => {
                if (window.innerWidth < mobileBreakpoint && hasSubMenu) {
                  event.stopPropagation();
                  setExpandedId(expandedId === link ? null : link);
                } else {
                  scrollTop();
                }
              }}
              className={classNames({ expanded: expandedId === link })}
            >
              <ListLink
                onClick={event => {
                  if (window.innerWidth < mobileBreakpoint && hasSubMenu) {
                    event.preventDefault();
                  }
                }}
                to={link}
              >
                {getLabel(label)}
              </ListLink>
              {subMenu}
            </ListItem>
          );
        })}
        <ListItemBookButton>
          <BookButton />
        </ListItemBookButton>
        <ListSocial>
          <ListItemSocial>
            <ListSocialLink
              href="https://www.facebook.com/HetresousleCharme/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={fbLogo} alt="Facebook" />
            </ListSocialLink>
          </ListItemSocial>
          <ListItemSocial>
            <ListSocialLink
              href="https://www.instagram.com/hetre.sous.le.charme/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instaLogo} alt="Instagram" />
            </ListSocialLink>
          </ListItemSocial>
        </ListSocial>
      </List>
    </nav>
  );
};

export default Menu;
