import { graphql } from "gatsby";
import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import "bootstrap/dist/css/bootstrap.min.css";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import "../components/index.css";

const IndexPage = ({ data }) => {
  const portfolios = data.allContentfulPortfolio.nodes;
  console.log("data", data);

  return (
    <Layout>
      <main className="index-main">
        {portfolios.map((portfolio) => (
          <div key={portfolio.id} className="index-container">
            <h1 className="h1-index">{portfolio.title}</h1>
            <h3>{portfolio.subtitle}</h3>
            {portfolio.image && (
              <img
                src={portfolio.image.file.url}
                alt="profil"
                className="profil-img"
              />
            )}
            {portfolio.description && (
              <p className="description">
                {documentToReactComponents(
                  JSON.parse(portfolio.description.raw)
                )}
              </p>
            )}
          </div>
        ))}
      </main>
    </Layout>
  );
};
export const query = graphql`
  query IndexPageQuery {
    allContentfulPortfolio(filter: { node_locale: { eq: "en-US" } }) {
      nodes {
        id
        title
        slug
        subtitle
        description {
          raw
        }
        image {
          file {
            url
          }
        }
      }
    }
  }
`;
export const Head = () => <title>Home Page</title>;
export default IndexPage;
