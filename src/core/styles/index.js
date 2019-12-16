import { css } from 'styled-components';

export default css`
  * {
    box-sizing: border-box;
  }

  html, body {
    overflow-x: hidden;
  }

  body {
    overflow-x: hidden;
    min-width: 320px;
    width: 100%;
  }

  body,
  ul,
  li,
  div,
  p,
  a,
  h1,
  h2,
  h3,
  button,
  span {
    margin: 0;
    padding: 0;
  }

  .clearfix {
    clear: both;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  .break-word {
    word-break: break-word;
  }

  button {
    border-radius: 0;
    letter-spacing: inherit;
  }

  img {
    max-width: 100%;
  }

  ul,
  li {
    list-style-type: none;
  }
`;
