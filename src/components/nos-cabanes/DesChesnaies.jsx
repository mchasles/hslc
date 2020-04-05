import React from 'react';
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

const DesChesnaies = () => {
  const data = useStaticQuery(query);
  const { html, img, logo } = getCabinData(data);

  return (
    <Section id="des-chesnaies">
      <Content>
        <Description dangerouslySetInnerHTML={{ __html: html }} />
        <BookCabinButton />
        <DesChesnaiesPhotos />
        <LogoImg fluid={logo} alt="Des Chesnaies" />
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
    img: file(relativePath: { eq: "images/nos-cabanes/des_chesnaies.jpg" }) {
      ...CabinImage
    }
    logo: file(
      relativePath: { eq: "images/nos-cabanes/logo-des_chesnaies.jpg" }
    ) {
      ...CabinLogo
    }
  }
`;
