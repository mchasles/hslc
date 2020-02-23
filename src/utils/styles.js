import { css } from 'styled-components';
import { device } from './media';

export const pageWrapper = css`
  margin: auto;

  @media ${device.tablet} {
    max-width: 60%;
  }
`;

export const tableStyles = css`
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
`;

export const listStyles = css`
  ul {
    margin: 16px 8px;
    li {
      margin-bottom: 8px;
      color: rgb(97, 97, 97);
    }
  }
`;

export const headingsStyles = css`
  h2 {
    color: rgb(100, 90, 80);
    font-family: 'Pintgram Regular';
    font-size: 28px;
    font-weight: 100;
    margin-bottom: 0;
    text-indent: 8px;
  }
`;

export const linkStyles = css`
  a {
    color: rgb(165, 188, 84);
    text-decoration: none;
  }
`;

export const paragraphStyles = css`
  p {
    margin: 16px 8px;
    color: rgb(97, 97, 97);
  }
`;
