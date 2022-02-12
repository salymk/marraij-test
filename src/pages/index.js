import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Seo from 'gatsby-plugin-wpgraphql-seo';
import CTA from '../components/cta';
import Layout from '../components/Layout';
import HeroHome from '../components/heros/HeroHome';
import Partners from '../components/Partners';
import DiagonalDownRightDarkLight from '../components/diagonals/DiagonalDownRightDarkLight';
import WhatWeDo from '../components/WhatWeDo';
import DiagonalUpRightLightDark from '../components/diagonals/DiagonalUpRightLightDark';
import DiagonalUpRightDarkLight from '../components/diagonals/DiagonalUpRightDarkLight';
import Process from '../components/Process';
import FeaturedWorkList from '../components/FeaturedWorkList';
import Testimonials from '../components/Testimonials';
import SectionLabel from '../components/SectionLabel';
import WorkListContainer from '../components/WorkListContainer';
import FeaturedBlogs from '../components/FeaturedBlogs';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      wpPage(title: { eq: "Home" }) {
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
        home {
          featuredWorkList {
            sectionLabel
            title
            subtitle
          }
          featuredBlogs {
            show
            sectionLabel
            title
            subtitle
          }
        }
      }
    }
  `);
  const {
    featuredWorkList: { sectionLabel, title, subtitle },
    featuredBlogs,
  } = data.wpPage.home;

  console.log(featuredBlogs);

  return (
    <Layout>
      <Seo post={data.wpPage} />
      {/* <!-- Hero section --> */}
      <HeroHome />
      {/* <!-- Partners section --> */}
      <Partners />
      {/* <!-- Diagonal section separator --> */}
      <DiagonalDownRightDarkLight />
      {/* <!-- What we do section --> */}
      <WhatWeDo />
      {/* <!-- Diagonal section separator --> */}
      <DiagonalUpRightLightDark />
      {/* <!-- Process section wrapper --> */}
      <div className="pt-10 pb-12 md:pt-12 md:pb-16 bg-white">
        {/* <!-- Process section --> */}
        <Process />
      </div>
      {/* <!-- Featured work section --> */}
      <WorkListContainer
        sectionLabel={sectionLabel}
        title={title}
        subtitle={subtitle}
      >
        <FeaturedWorkList />
      </WorkListContainer>

      {/* <!-- Diagonal section separator --> */}
      <DiagonalUpRightDarkLight />
      <section className="px-4 pt-12 pb-10 md:pb-12 md:pt-16 bg-bouquetTints-100 sm:px-6 lg:px-8">
        {/* <!-- Testimonals section --> */}
        <Testimonials />
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
      <FeaturedBlogs featuredBlogs={featuredBlogs} />

      {/* <!-- CTA --> */}
      <CTA />
    </Layout>
  );
};

export default IndexPage;
