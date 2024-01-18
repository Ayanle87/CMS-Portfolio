const path = require("path");
console.log("hej");
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // Define a template for blog post
  const blogPost = path.resolve("./src/templates/blog-post.js");

  const result = await graphql(
    `
      {
        allContentfulBlog {
          nodes {
            slug
            title
            subtitle
            description {
              raw
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Contentful posts`,
      result.errors
    );
    return;
  }

  const posts = result.data.allContentfulBlog.nodes;
  console.log("hej");
  if (posts.length > 0) {
    posts.forEach((post) => {
      console.log("Post Slug:", post.slug);
      createPage({
        path: `/projects/${post.slug}/`,
        component: blogPost,
        context: {
          slug: post.slug,
        },
      });
    });
  }
};
