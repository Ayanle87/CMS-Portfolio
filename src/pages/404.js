import React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

function NotFound() {
  return (
    <Layout>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "40px",
        }}
      >
        <h2>404</h2>
        <h3> Sorry, that page doesn't exist</h3>
        <div>
          <StaticImage
            src="../images/404.jpg"
            alt="404 img"
            style={{ width: "400px", height: "400px", marginTop: "30px" }}
          />
        </div>
      </div>
    </Layout>
  );
}

export default NotFound;
