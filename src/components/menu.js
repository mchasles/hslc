import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.ul`
  width: 100vw;
  height: 60px;
  display: flex;
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  align-items: center;
`;

const Menu = ({ children }) => {
  return (
    <nav role="navigation">
      <Wrapper>{children}</Wrapper>
    </nav>
  );
};

Menu.item = styled.li`
  display: inline-block;
`;

Menu.link = styled.a`
  display: inline-block;
  color: white;
  text-transform: uppercase;
  font-size: 14px;
  text-decoration: none;
  padding: 0 16px;
  height: 60px;
  line-height: 60px;
`;

export default Menu;
