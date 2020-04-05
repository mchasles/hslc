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
import HouxBlondPhotos from './HouxBlondPhotos';
const HouxBlond = () => {
  const data = useStaticQuery(query);
  const { html, img, logo } = getCabinData(data);

  return (
    <Section id="houx-blond" reverse>
      <Content>
        <Description dangerouslySetInnerHTML={{ __html: html }} />
        <BookCabinButton />
        <HouxBlondPhotos />
        <LogoImg fluid={logo} alt="Houx Blond" />
      </Content>
      <BgImg fluid={img} objectFit="contain" />
    </Section>
  );
};

export default HouxBlond;

const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fields: { slug: { eq: "/data/nos-cabanes/houx-blond/" } } }
    ) {
      ...CabinContent
    }
    img: file(relativePath: { eq: "images/nos-cabanes/houx_blond.jpg" }) {
      ...CabinImage
    }
    logo: file(relativePath: { eq: "images/nos-cabanes/logo-houx_blond.jpg" }) {
      ...CabinLogo
    }
  }
`;
