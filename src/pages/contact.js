import * as React from "react";
import Layout from "../components/layout";
import { graphql, Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import "../components/contact.css";

const ContactPage = ({ data }) => {
  const contactInfo = data.contentfulContact;

  return (
    <main>
      <Layout>
        <div className="contact-main">
          <h1 className="contact-title">{contactInfo.title}</h1>

          <div className="contact-container">
            <StaticImage
              alt="en bild"
              src="../images/avatar.jpg"
              className="contact-img"
            ></StaticImage>

            <p className="contact-info">
              {documentToReactComponents(JSON.parse(contactInfo.info.raw))}
            </p>
          </div>
        </div>
      </Layout>
    </main>
  );
};

export const query = graphql`
  query {
    contentfulContact {
      title
      subtitle
      slug
      info {
        raw
      }
    }
  }
`;

export const Head = () => <title>Contact</title>;
export default ContactPage;
