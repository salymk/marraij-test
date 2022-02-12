import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Seo from 'gatsby-plugin-wpgraphql-seo';
import LiveChat from 'react-livechat';
import Layout from '../components/Layout';
import HeroContact from '../components/heros/HeroContact';
import ContactPopUpModal from '../components/ContactPopUpModal';

const Contact = () => {
  const data = useStaticQuery(graphql`
    {
      wpPage(title: { eq: "Contact" }) {
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
      <LiveChat license={parseInt(process.env.GATSBY_JS_LIVECHAT_ID, 10)} />
      <ContactPopUpModal />
      <HeroContact />
    </Layout>
  );
};

export default Contact;
