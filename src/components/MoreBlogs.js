import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import parse from 'html-react-parser';

const MoreBlogs = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPost(sort: { fields: [date], order: DESC }, limit: 3) {
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
      <section className="py-12 px-4 mx-auto max-w-screen-xl md:py-16 sm:px-6 lg:px-8 -mb-28">
        <div className="container mx-auto max-w-screen-xl">
          <h3 className="mb-6 text-2xl font-semibold">
            You might also like...
          </h3>
          <div className="flex flex-wrap -m-3 mb-16">
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
        </div>
      </section>
    </>
  );
};

export default MoreBlogs;
