import React, { useEffect } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Page from '../components/Page';
import Section from '../components/Section';
import { getHtmlData } from '../utils/data';

const BuyButton = styled.div`
  margin: 0 auto 24px auto;
`;

export default ({ data }) => {
  const html = getHtmlData(data);

  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://widgets.ke-booking.com/fr/owner/site/widget/but/js/Pbb531d60f3d422680253fea8/971/GC/ke-booking.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <Page>
      <Section id="contact" dangerouslySetInnerHTML={{ __html: html }} />

      <BuyButton id="keb-but-frame971" />
    </Page>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fields: { slug: { eq: "/data/cheques-cadeaux/" } } }
    ) {
      ...HtmlContent
    }
  }
`;
