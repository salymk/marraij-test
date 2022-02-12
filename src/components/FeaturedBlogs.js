/* eslint-disable react/prop-types */
import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import parse from 'html-react-parser';
import SectionLabel from './SectionLabel';

const FeaturedBlogs = ({ featuredBlogs }) => {
  console.log(featuredBlogs);
  const data = useStaticQuery(graphql`
    {
      allWpPost(
        sort: { fields: [date], order: DESC }
        filter: {
          categories: { nodes: { elemMatch: { name: { eq: "Featured" } } } }
        }
      ) {
        nodes {
          id
          title
          excerpt
          slug
          date(formatString: "MMM DD, YYYY")
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
  `);
  return (
    <>
      {featuredBlogs.show && (
        <section className="pt-10 pb-12 mx-auto max-w-screen-xl md:pb-16 md:pt-12 sm:px-6 lg:px-8">
          {/* <!-- Section text --> */}
          <div className="mx-auto w-full max-w-xl text-center lg:max-w-3xl md:max-w-2xl">
            <SectionLabel label={featuredBlogs.sectionLabel} />
            <h2 className="mt-6 text-3xl font-extrabold text-dark-950 sm:text-4xl md:text-5xl">
              {featuredBlogs.title}
            </h2>
            <p className="mt-6 text-xl text-dark-700">
              {featuredBlogs.subtitle}
            </p>
          </div>
          <div className="flex flex-wrap mt-10 mb-16">
            {data.allWpPost.nodes.map((node) => {
              const img = getImage(node.featuredImage.node.localFile);
              return (
                <div key={node.id} className="w-full md:w-1/2 lg:w-1/3 p-3">
                  <Link to={node.slug === '/' ? '/' : `/blog/${node.slug}`}>
                    <div className="cursor-pointer p-4 border border-bouquetTints-300 rounded group ease-in-out duration-500 hover:bg-bouquetTints-400 hover:shadow-lg">
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
        </section>
      )}
    </>
  );
};

export default FeaturedBlogs;
