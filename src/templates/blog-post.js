import React from "react";
import { graphql, Link } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Layout from "../components/layout";
import Button from "react-bootstrap/Button";
import "../components/blog-post.css";

const Blog = ({ data }) => {
  return (
    <Layout>
      <Button variant="link" size="lg">
        <Link to="/projects">Back to projects</Link>
      </Button>
      <div
        className="blog-parent"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1 className="blog-title">{data.blog.title}</h1>
        <p className="blog-text">
          {documentToReactComponents(JSON.parse(data.blog.description.raw))}
        </p>
        <img
          className="blogpost-img"
          src={data.blog.image.file.url}
          alt="bild"
        />
      </div>
    </Layout>
  );
};

export default Blog;

export const pageQuery = graphql`
  query ($slug: String!) {
    blog: contentfulBlog(slug: { eq: $slug }) {
      slug
      title
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
`;
