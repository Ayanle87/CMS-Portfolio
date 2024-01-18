import React, { useState } from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import Layout from "../components/layout";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import "../components/projects.css";

const PortfolioPage = ({ data }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const allProjects = data.allContentfulBlog.nodes;
  const categories = [
    "All",
    ...new Set(allProjects.map((project) => project.category)),
  ];
  const filteredProjects =
    selectedCategory === "All"
      ? allProjects
      : allProjects.filter((project) => project.category === selectedCategory);

  return (
    <div className="project-container">
      <Layout>
        <Container
          fluid="md"
          style={{
            padding: "14px ",
            backgroundColor: "#f5f5f5",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            borderRadius: " 12px",
            overflow: "scroll",
          }}
        >
          <Row>
            <Col>
              <h1
                style={{
                  textAlign: "center",
                  margin: "10px 0",
                  fontFamily: "monospace",
                  fontWeight: "600",
                  paddingBottom: "10px",
                }}
              >
                My projects
              </h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <select onChange={(e) => setSelectedCategory(e.target.value)}>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </Col>
          </Row>
          <Row>
            {filteredProjects.map((project) => (
              <Col
                className="col"
                key={project.id}
                md={4}
                style={{
                  padding: "14px",
                }}
              >
                <Card
                  className="custom-card"
                  style={{ width: "300px", margin: "0 auto" }}
                >
                  {project.image &&
                  project.image.file &&
                  project.image.file.url ? (
                    <Card.Img
                      variant="top"
                      src={project.image.file.url}
                      alt={project.title}
                      style={{
                        height: "300px",
                        objectFit: "cover",
                        borderBottom: "solid 2px grey",
                      }}
                    />
                  ) : null}
                  <Card.Body
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Card.Title>
                      <h1 style={{ fontSize: "1.6rem" }}>
                        <Link
                          to={project.slug}
                          style={{
                            color: "black",
                            textDecoration: "none",
                          }}
                        >
                          {project.title}
                        </Link>
                      </h1>
                    </Card.Title>

                    <Card.Text
                      style={{
                        overflow: "auto",
                        textOverflow: "ellipsis",
                        height: "100px",
                      }}
                    >
                      {documentToReactComponents(
                        JSON.parse(project.description.raw)
                      )}
                    </Card.Text>
                    <Card.Text>
                      <button
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          background: "#F3E9DD",
                          padding: "4px",
                          fontFamily: "monospace",
                          fontWeight: "700",
                          boxShadow: "5px 4px 5px #888888",
                          borderRadius: "4px",
                          transition:
                            "background-color 0.3s ease, box-shadow 0.3s ease",
                        }}
                      >
                        <Link
                          to={project.subtitle}
                          style={{ textDecoration: "none", color: "inherit" }}
                        >
                          See project
                        </Link>
                      </button>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </Layout>
    </div>
  );
};

export const query = graphql`
  query IndexPageQuery {
    allContentfulBlog(filter: { node_locale: { eq: "en-US" } }) {
      nodes {
        id
        title
        slug
        subtitle
        category
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

export default PortfolioPage;

export const Head = () => <title>PortfolioPage</title>;
