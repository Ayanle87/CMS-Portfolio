import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import "../components/about.css";

const AboutPage = ({ data }) => {
  const about = data.contentfulAbout;

  return (
    <div>
      <Layout>
        <main className="about-container">
          <h1 className="aboutTitle">{about.title}</h1>
          <div className="about-content">
            <p className="aboutText">{about.aboutText.aboutText}</p>
            {about.aboutImage && (
              <img
                src={about.aboutImage.file.url}
                alt="profil"
                className="randomImg"
              />
            )}
          </div>
        </main>
      </Layout>
    </div>
  );
};

export const query = graphql`
  query AboutPageQuery {
    contentfulAbout {
      title
      aboutText {
        aboutText
      }
      aboutImage {
        file {
          url
        }
      }
    }
  }
`;

export const Head = () => <title>About Me</title>;
export default AboutPage;
