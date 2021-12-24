import * as React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/react';

interface Props {
  siteTitle: string;
}
const Header = ({ siteTitle }: Props) => {
  const pathname =
    typeof window !== 'undefined' ? window.location.pathname : '';
  return (
    <header css={headerStyle}>
      <h1>
        <Link to="/" css={linkStyle}>
          {siteTitle.toUpperCase()}
        </Link>
      </h1>
      <div css={menuStyle}>
        <ul>
          <li>
            <Link
              to="/pencil"
              className={pathname.indexOf('/pencil') === 0 ? 'active' : ''}
            >
              PENCIL
            </Link>
          </li>
          <li>
            <Link
              to="/digital-painting"
              className={
                pathname.indexOf('/digital-painting') === 0 ? 'active' : ''
              }
            >
              DIGITAL PAINTING
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={pathname.indexOf('/about') === 0 ? 'active' : ''}
            >
              ABOUT
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

const headerStyle = css`
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  padding: 0 20px;
  height: 60px;
  justify-content: space-between;
  align-items: center;
`;

const linkStyle = css`
  padding: 5px 5px 5px 0;
  font-size: 1.3rem;
  font-weight: bold;
  font-family: Abel, sans-serif;
  color: #fff;
  @media screen and (max-width: 640px) {
    font-size: 1.1rem;
  }
`;
const menuStyle = css`
  & > ul {
    display: flex;
    & > li {
      padding-left: 15px;
      & > a {
        font-size: 1rem;
        font-family: Abel, sans-serif;
        letter-spacing: 0.2px;
        color: rgba(255, 255, 255, 0.4);
        &.active {
          color: rgba(255, 255, 255, 0.9);
        }

        @media screen and (max-width: 640px) {
          font-size: 0.9rem;
        }
      }
    }
  }
`;

export default Header;
