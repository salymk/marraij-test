import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Seo from 'gatsby-plugin-wpgraphql-seo';
import Layout from '../components/Layout';
import HeroAbout from '../components/heros/HeroAbout';
import DiagonalDownRightDarkLight from '../components/diagonals/DiagonalDownRightDarkLight';
import FeaturesAlternatingWithIcons from '../components/features/FeaturesAlternatingWithIcons';
import DiagonalUpRightLightDark from '../components/diagonals/DiagonalUpRightLightDark';
import Values from '../components/Values';
import Testimonials from '../components/Testimonials';
import CTA from '../components/cta';
import DiagonalUpRightDarkLight from '../components/diagonals/DiagonalUpRightDarkLight';

const About = () => {
  const data = useStaticQuery(graphql`
    {
      wpPage(title: { eq: "About Us" }) {
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
      }
    }
  `);

  return (
    <Layout>
      <Seo post={data.wpPage} />
      {/* <!-- Hero section --> */}
      <HeroAbout />

      {/* <!-- Diagonal section separator --> */}
      <DiagonalDownRightDarkLight />

      {/* <!-- Alternating features with icons --> */}
      <FeaturesAlternatingWithIcons />

      {/* <!-- Diagonal section separator --> */}
      <DiagonalUpRightLightDark />

      {/* <!-- Values section --> */}
      <Values />

      {/* <!-- Diagonal section separator --> */}
      <DiagonalUpRightDarkLight />
      <section className="px-4 pt-12 pb-10 md:pb-12 md:pt-16 bg-bouquetTints-100 sm:px-6 lg:px-8">
        {/* <!-- Testimonals section --> */}
        <Testimonials />

        {/* <!-- CTA --> */}
        <CTA />
      </section>
      {/* Diagonal section separator - Custom DiagonalDownRightDarkLight */}
      <div className="relative w-full bg-bouquetTints-100 h-16 md:h-32 lg:h-48">
        <svg
          className="absolute w-full h-full text-white"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
          fill="currentcolor"
        >
          <polygon points="0,0 0,100 100,100" />
        </svg>
      </div>
    </Layout>
  );
};

export default About;
