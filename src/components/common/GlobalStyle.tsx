import React from 'react';
import { Global, css } from '@emotion/react';

const defaultStyle = css`
  @import url('https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@400;700;800&display=swap');

  * {
    margin: 0;
    padding: 0;
    -webkit-text-size-adjust: none;
    box-sizing: border-box;
  }
  html {
    overflow-y: scroll;
  }
  html,
  body {
    height: 100%;
    min-height: 100%;
  }
  body,
  select,
  textarea,
  input {
    font: 14px/160% Apple SD Gothic Neo, 'Apple SD 산돌고딕 Neo', 'Roboto',
      '맑은 고딕', 'Malgun Gothic', 'Apple Gothic', NanumGothic, '나눔고딕',
      Dotum, '돋움', gulim, '굴림', verdana, sans-serif;
    color: #fff;
    border: 0;
  }
  body,
  div,
  dl,
  dt,
  dd,
  ul,
  ol,
  li,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  pre,
  form,
  fieldset,
  input,
  p,
  blockquote,
  table,
  th,
  td,
  embed,
  object,
  textarea,
  a,
  img {
    padding: 0;
    margin: 0;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  table img {
    vertical-align: middle;
  }
  select,
  input,
  table tr td,
  table tr th {
    vertical-align: middle;
  }
  form,
  fieldset,
  abbr,
  acronym {
    border: 0;
  }
  img {
    border: 0;
    vertical-align: top;
  } /* 이미지에 공간을 없애기 위해 vertical-align:top 사용 */
  address,
  caption,
  cite,
  code,
  dfn,
  em,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  th,
  var {
    font-weight: normal;
    font-style: normal;
  }
  ol,
  ul,
  li {
    list-style: none;
  }
  table td a {
    display: inline-block;
  }
  table caption {
    display: none;
  }
  strong,
  .bold {
  }
  a {
    text-decoration: none;
  }
  input[type='image'] {
    vertical-align: top;
  }
  button {
    cursor: pointer;
    border: none;
    background: transparent;
  }

  .clearfix {
    zoom: 1;
  }
  .clearfix:after {
    content: '';
    display: block;
    clear: both;
  }
  /* 화면숨김 */
  .ir-pm {
    position: absolute;
    width: 0;
    height: 0;
    font-size: 0;
    line-height: 0;
    overflow: hidden;
    visibility: hidden;
    text-indent: -5000px;
  }
  #accessibility,
  hr,
  caption,
  legend {
    position: absolute;
    width: 0;
    height: 0;
    font-size: 0;
    line-height: 0;
    overflow: hidden;
    visibility: hidden;
    text-indent: -5000px;
  }
  .skip {
    position: absolute;
    width: 0;
    height: 0;
    font-size: 0;
    line-height: 0;
    overflow: hidden;
    visibility: hidden;
    text-indent: -5000px;
  } /* 이미지, 플래시 속 내용 */

  body {
    background: #222;
  }

  a {
    color: #fff;
  }
  html,
  body,
  #___gatsby {
    height: 100%;
  }

  #gatsby-focus-wrapper {
    height: 100%;
  }
`;
const GlobalStyle = () => {
  return <Global styles={defaultStyle} />;
};

export default GlobalStyle;
