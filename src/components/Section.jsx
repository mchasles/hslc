import styled from 'styled-components';
import { device } from '../utils/media';

const Section = styled.div`
  position: relative;
  width: 100%;
  max-width: 86%;
  margin: 0 auto;
  font-size: 14px;
  padding-top: 64px;

  @media ${device.tablet} {
    max-width: 60%;
  }

  table {
    width: 100%;
  }

  thead {
    color: white;
    text-align: left;
    background-color: rgba(165, 188, 84, 0.8);
  }

  th,
  td {
    padding: 8px;
  }

  td {
    color: rgb(117, 117, 117);
    background-color: rgba(255, 255, 255, 0.4);
  }

  ul {
    margin: 16px 0;
    li {
      margin-bottom: 8px;
      color: rgb(97, 97, 97);
    }
  }

  h1 {
    color: rgb(100, 90, 80);
    font-family: 'Pintgram Regular';
    font-size: 48px;
    font-weight: 100;
    margin: 0 8px 32px 8px;
    text-align: center;

    @media ${device.tablet} {
      margin-top: 32px;
    }
  }

  h2 {
    color: rgb(100, 90, 80);
    font-family: 'Pintgram Regular';
    font-size: 28px;
    font-weight: 100;
    margin-bottom: 0;
  }

  a {
    color: rgb(165, 188, 84);
    text-decoration: none;
  }

  p {
    margin: 16px 0;
    color: rgb(97, 97, 97);
  }
`;

export default Section;
