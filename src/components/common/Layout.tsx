/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import GlobalStyle from './GlobalStyle';
import { css } from '@emotion/react';
import Header from './Header';

interface Props {
  children: React.ReactNode;
}

type Data = {
  site: {
    siteMetadata: {
      title: string;
    };
  };
};

const Layout = ({ children }: Props) => {
  const data: Data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div css={layoutStyle}>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div css={wrapStyle}>
        <main css={mainStyle}>{children}</main>
        <footer css={footerStyle}>© {new Date().getFullYear()}, Igby609</footer>
      </div>
    </div>
  );
};

const layoutStyle = css`
  padding-top: 60px;
`;
const wrapStyle = css`
  position: relative;
  display: flex;
  flex-direction: column;
  /* min-height: calc(100vh - 60px); */
  height: calc(100vh - 60px);
`;
const mainStyle = css`
  flex-grow: 1;
  flex-shrink: 0;
`;
const footerStyle = css`
  margin-top: auto;
  height: 40px;
  flex-basis: 40px;
  flex-shrink: 0;
  display: flex;
  padding: 0 20px;
  justify-content: flex-end;
  align-items: center;
  color: rgba(255, 255, 255, 0.6);
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  font-size: 0.8rem;
`;

export default Layout;
