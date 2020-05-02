import styled from 'styled-components';
import { device } from '../utils/media';

const Section = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 86%;
  margin: 0 auto;
  font-size: 14px;

  @media ${device.laptop} {
    max-width: 50%;
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
    color: rgb(60, 50, 40);
    background-color: rgba(255, 255, 255, 0.4);
  }

  ul {
    margin: 16px 0;
    li {
      margin-bottom: 8px;
      color: rgb(60, 50, 40);
    }
  }

  h1 {
    margin: 0 8px 16px 8px;
    padding-top: 64px;

    text-align: center;
    color: rgb(60, 50, 40);
    font-family: 'Shopie';
    font-size: 10vw;
    font-weight: 100;

    @media ${device.mobileL} {
      font-size: 3.8vw;
      padding-top: 80px;
    }
  }

  h2 {
    color: rgb(60, 50, 40);
    font-family: 'Shopie';
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
    color: rgb(60, 50, 40);
  }
`;

export default Section;
