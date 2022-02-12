const path = require(`path`);
// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`);
};

async function turnServicesIntoPages({ graphql, actions }) {
  const serviceTemplate = path.resolve('./src/templates/service.js');

  const { data } = await graphql(`
    query {
      allWpService {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  data.allWpService.edges.forEach((edge) => {
    actions.createPage({
      path: `/services/${edge.node.slug}`,
      component: serviceTemplate,
      context: {
        slug: edge.node.slug,
      },
    });
  });
}

async function turnBlogsIntoPages({ graphql, actions }) {
  const blogTemplate = path.resolve('./src/templates/blog-post.js');

  const { data } = await graphql(`
    {
      allWpPost {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `);

  data.allWpPost.edges.forEach((edge) => {
    actions.createPage({
      path: `/blog/${edge.node.slug}`,
      component: blogTemplate,
      context: {
        slug: edge.node.slug,
      },
    });
  });
}

exports.createPages = async (params) => {
  // Create pages dynamically
  // Wait for all promises to be resolved before finishing this function
  await Promise.all([
    turnServicesIntoPages(params),
    turnBlogsIntoPages(params),
  ]);
};

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions;
//   const result = await graphql(`
// query {
//   allWpService {
//     edges {
//       node {
//         slug
//       }
//     }
//   }
// }
//   `);
// result.data.allWpService.edges.forEach((edge) => {
//   createPage({
//     path: `/services/${edge.node.slug}`,
//     component: path.resolve('./src/templates/service.js'),
//     context: {
//       slug: edge.node.slug,
//     },
//   });
// });
// };
