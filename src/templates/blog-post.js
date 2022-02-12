/* eslint-disable react/prop-types */
import React from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Seo from 'gatsby-plugin-wpgraphql-seo';
import parse from 'html-react-parser';
import Layout from '../components/Layout';
import CTA from '../components/cta';
// import MoreBlogs from '../components/MoreBlogs';
import SocialShareButtons from '../components/SocialShareButtons';

const BlogPost = ({ data }) => {
  const { title, content, date, author, featuredImage } = data.wpPost;
  const img = getImage(featuredImage.node.localFile);
  return (
    <Layout>
      <Seo post={data.wpPost} />
      <div className="py-20">
        <article className="px-4 max-w-5xl mx-auto">
          <header className="">
            <Link
              as="span"
              className="w-full	lg:ml-14 flex items-center ease-in-out duration-300 text-dark-900 hover:text-bouquetShades-400"
              to="/blog"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-md font-semibold">Back to all blogs</span>
            </Link>
            <div className="mb-10 lg:ml-14 max-w-3xl mt-14">
              <h1 className="mb-2 leading-tight font-bold text-3xl md:text-4xl text-dark-900">
                {title}
              </h1>
              <div className="flex space-x-1 text-lg font-medium text-dark-900">
                <time dateTime="2020-03-16">{date}</time>
                <span aria-hidden="true"> &middot; </span>
                <p>{author.node.name}</p>
              </div>
            </div>

            <div className="h-112 mb-6">
              <GatsbyImage
                className="w-full h-full object-cover rounded shadow-lg"
                image={img}
                alt={featuredImage.node.altText}
              />
            </div>
          </header>
          <div className="mt-12 prose prose-slate mx-auto md:prose-lg">
            {parse(content)}
          </div>
        </article>

        <div className="px-4 max-w-3xl mx-auto mt-14">
          <h3 className="text-xl font-semibold mb-4">Share on social media</h3>
          <div className="flex justify-start space-x-4">
            <SocialShareButtons url="https://neilpatel.com/blog/googles-product-review-update/" />
          </div>
          <div className="mt-12 border-2 border-bouquetTints-300" />
        </div>
        {/* <div className="mt-8">
          <MoreBlogs />
        </div> */}
      </div>
      <CTA />
    </Layout>
  );
};

export default BlogPost;

export const query = graphql`
  query ($slug: String) {
    wpPost(slug: { eq: $slug }) {
      title
      content
      date(formatString: "MMMM DD, YYYY")
      author {
        node {
          name
        }
      }
      seo {
        title
        metaDesc
        focuskw
        metaKeywords
        metaRobotsNoindex
        metaRobotsNofollow
        opengraphTitle
        opengraphDescription
        opengraphImage {
          altText
          sourceUrl
          srcSet
        }
        twitterTitle
        twitterDescription
        twitterImage {
          altText
          sourceUrl
          srcSet
        }
        canonical
        cornerstone
        schema {
          articleType
          pageType
          raw
        }
      }
      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
          }
        }
      }
    }
  }
`;
