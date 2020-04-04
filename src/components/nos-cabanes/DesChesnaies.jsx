import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

import { getCabinData } from '../../utils/cabin';

import {
  Section,
  BgImg,
  LogoImg,
  Content,
  Description,
  BookCabinButton,
} from './layout';
import DesChesnaiesPhotos from './DesChesnaiesPhotos';

import pinEnvert from '../../images/nos-cabanes/logo-des_chesnaies.jpg';

const DesChesnaies = () => {
  const data = useStaticQuery(query);
  const { html, img } = getCabinData(data);

  return (
    <Section id="des-chesnaies">
      <Content>
        <Description dangerouslySetInnerHTML={{ __html: html }} />
        <BookCabinButton />
        <DesChesnaiesPhotos />
        <LogoImg src={pinEnvert} alt="Des Chesnaies" />
      </Content>
      <BgImg fluid={img} objectFit="contain" />
    </Section>
  );
};

export default DesChesnaies;

const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fields: { slug: { eq: "/data/nos-cabanes/des-chesnaies/" } } }
    ) {
      ...CabinContent
    }
    bgImg: file(relativePath: { eq: "images/nos-cabanes/des_chesnaies.jpg" }) {
      ...CabinImage
    }
  }
`;
