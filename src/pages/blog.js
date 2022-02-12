/* eslint-disable react/prop-types */
import React from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Seo from 'gatsby-plugin-wpgraphql-seo';
import parse from 'html-react-parser';
import CTA from '../components/cta';
import Layout from '../components/Layout';

const Blog = ({ data }) => {
  console.log(data);

  return (
    <Layout>
      <section className="py-20">
        <div className="container px-4 mx-auto max-w-screen-xl">
          <div className="flex flex-wrap -m-3 mb-16">
            {data.allWpPost.nodes.map((node) => {
              const img = getImage(node.featuredImage.node.localFile);
              return (
                <div key={node.id} className="w-full md:w-1/2 lg:w-1/3 p-3">
                  <Link to={node.slug === '/' ? '/' : `/blog/${node.slug}`}>
                    <div className="cursor-pointer p-6 border border-bouquetTints-300 rounded group ease-in-out duration-500 hover:bg-bouquetTints-400 hover:shadow-lg">
                      <div className="relative h-52 mb-6 ease-in-out duration-500 group-hover:shadow-lg">
                        <GatsbyImage
                          className="w-full h-full object-cover rounded"
                          image={img}
                          alt={node.featuredImage.node.altText}
                        />
                      </div>
                      <div className="my-4 flex items-center">
                        <div>
                          <div className="flex space-x-1 text-sm text-gray-500">
                            <time dateTime="2020-03-16">{node.date}</time>
                          </div>
                        </div>
                      </div>
                      <h2 className="mb-4 text-2xl font-semibold font-heading">
                        {node.title}
                      </h2>
                      <p className="mb-4 text-gray-500 leading-relaxed">
                        {parse(node.excerpt)}
                      </p>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <CTA />
    </Layout>
  );
};

export default Blog;

export const pageQuery = graphql`
  query {
    allWpPost(sort: { fields: [date], order: DESC }) {
      nodes {
        id
        title
        excerpt
        slug
        date(formatString: "MMM DD, YYYY")
        tags {
          nodes {
            name
          }
        }
        featuredImage {
          node {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
    }
  }
`;
