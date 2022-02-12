import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Seo from 'gatsby-plugin-wpgraphql-seo';
import Layout from '../components/Layout';
import CTA from '../components/cta';
import WorkListContainer from '../components/WorkListContainer';
import WorkList from '../components/WorkList';

const Work = () => {
  const data = useStaticQuery(graphql`
    {
      wpPage(title: { eq: "Work" }) {
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
        work {
          sectionLabel
          title
          subtitle
        }
      }
    }
  `);

  const { sectionLabel, title, subtitle } = data.wpPage.work;

  return (
    <Layout>
      <Seo post={data.wpPage} />

      <WorkListContainer
        sectionLabel={sectionLabel}
        title={title}
        subtitle={subtitle}
      >
        <WorkList />
      </WorkListContainer>
      {/* <!-- CTA --> */}
      <CTA />
    </Layout>
  );
};

export default Work;
