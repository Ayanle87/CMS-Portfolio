import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Navbar from "./navbar";
import Footer from "./footer";

function Layout({ pageTitle, children }) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  console.log("Layout component data:", data);

  return (
    <div className="layout">
      {/* <header>{data.site.siteMetadata.title}</header> */}
      <Navbar />
      <div className="content">
        <h1>{pageTitle}</h1>
        {children}
      </div>
      <Footer />
    </div>
  );
}
export default Layout;
