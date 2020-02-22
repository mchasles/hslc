import React from 'react';
import styled from 'styled-components';

import { device } from '../utils/media';

import desChesnaies from '../images/des_chesnaies.jpg';
import epicea from '../images/epicea.jpg';
import houxBlond from '../images/houx_blond.jpg';
import pinEnvert from '../images/pin_en_vert.jpg';

const BgImg = styled.img`
  position: absolute;
  width: 16%;
  min-width: 100px;
`;

const Epicea = styled(BgImg)`
  right: 6%;
  top: 8%;
`;

const HouxBlond = styled(BgImg)`
  right: 6%;
  top: 56%;
`;

const PinEnvert = styled(BgImg)`
  left: 6%;
  top: 20%;
`;

const DesChesnaies = styled(BgImg)`
  left: 6%;
  top: 76%;
`;

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  max-width: 1550px;

  display: flex;
  flex-direction: column;
  align-items: center;

  box-sizing: border-box;
  padding: 84px 32px;
  margin: 0 auto;

  font-size: 14px;

  @media ${device.tablet} {
    padding-top: 80px;
  }
`;

const Content = styled.div`
  z-index: 1;
  width: 100%;
`;

const SectionBgImages = ({ children }) => {
  return (
    <Wrapper>
      <Content>{children}</Content>
      <DesChesnaies src={desChesnaies} alt="Des Chesnaies" />
      <Epicea src={epicea} alt="Epicea" />
      <HouxBlond src={houxBlond} alt="Houx blond" />
      <PinEnvert src={pinEnvert} alt="Pin en vert" />
    </Wrapper>
  );
};

export default SectionBgImages;
