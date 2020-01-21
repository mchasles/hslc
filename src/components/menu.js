import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  z-index: 99;
`;

const Wrapper = styled.ul`
  box-sizing: border-box;
  width: 100vw;
  height: 60px;
  padding: 0 32px;
  display: flex;
  background-color: rgba(0, 0, 0, 0.6);
  align-items: center;
  justify-content: flex-end;
`;

const Menu = ({ children }) => {
  return (
    <Nav role="navigation">
      <Wrapper>{children}</Wrapper>
    </Nav>
  );
};

Menu.item = styled.li`
  display: inline-block;
`;

Menu.link = styled.a`
  padding: 4px 8px;
  margin-left: 28px;
  color: white;
  text-transform: uppercase;
  font-size: 12px;
  text-decoration: none;

  &:hover {
    border-bottom: 2px solid rgb(255, 255, 255);
    cursor: pointer;
  }
`;

export default Menu;
