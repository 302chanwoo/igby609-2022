import React from 'react';
import { css } from '@emotion/react';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/common/Layout';
import Seo from '../components/common/Seo';

const About = () => {
  return (
    <Layout>
      <Seo title="About" />
      <div css={wrapStyle}>
        <div css={profileStyle}>
          <StaticImage
            src="../images/about.jpg"
            width={150}
            quality={95}
            formats={['jpg']}
            alt="Igby609"
          />
        </div>
        <h2 css={nameStyle}>Igby609</h2>
        <div css={infoStyle}>
          <p>South Korea</p>
          <p>igby609@gmail.com</p>
        </div>
        <div css={socialStyle}>
          <ul>
            <li>
              <a
                href="https://instagram.com/igby609"
                target="_blank"
                title="새창열림"
              >
                <i className="ico">
                  <StaticImage
                    src="../images/ico_instagram.png"
                    width={26}
                    formats={['png']}
                    alt="instagram"
                  />
                </i>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/igby609"
                target="_blank"
                title="새창열림"
              >
                <i className="ico">
                  <StaticImage
                    src="../images/ico_twitter.png"
                    width={26}
                    formats={['png']}
                    alt="twitter"
                  />
                </i>
              </a>
            </li>
            <li>
              <a
                href="https://soundcloud.com/igby609"
                target="_blank"
                title="새창열림"
              >
                <i className="ico">
                  <StaticImage
                    src="../images/ico_soundcloud.png"
                    width={26}
                    formats={['png']}
                    alt="soundcloud"
                  />
                </i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};
const wrapStyle = css`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 100px);
  padding: 30px 0;
`;
const profileStyle = css`
  overflow: hidden;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  opacity: 0.9;
`;
const nameStyle = css`
  padding: 40px 0 40px;
  font-family: Abel;
  font-size: 1.6rem;
  color: rgba(255, 255, 255, 0.9);
`;
const infoStyle = css`
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
`;
const socialStyle = css`
  padding-top: 20px;
  & > ul {
    display: flex;
    & > li {
      padding-left: 5px;
      & > a {
        display: block;
        width: 42px;
        height: 42px;
        padding: 6px;
        border: 2px solid rgba(255, 255, 255, 0.6);
        border-radius: 30px;
      }
    }
  }
  .ico {
    display: block;
    overflow: hidden;
    position: relative;
    width: 26px;
    height: 26px;
  }
`;

export default About;
