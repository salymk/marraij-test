/* eslint-disable react/prop-types */
import { graphql } from 'gatsby';
import React from 'react';
import Seo from 'gatsby-plugin-wpgraphql-seo';
import CTA from '../components/cta';
import DiagonalUpRightDarkLight from '../components/diagonals/DiagonalUpRightDarkLight';
import FeaturesAlternatingWithList from '../components/features/FeaturesAlternatingWithList';
import FeaturesOffset2x6Grid from '../components/features/FeaturesOffset2x6Grid';
import HeroServices from '../components/heros/HeroServices';
import Layout from '../components/Layout';
import ServiceProcess from '../components/ServiceProcess';

const Service = ({ data }) => {
  const { hero, featuresAndBenefits, featuresAlternatingWithList, process } =
    data?.wpService?.service;

  return (
    <Layout>
      <Seo post={data.wpService} />

      <HeroServices
        sectionLabel={hero.sectionLabel}
        title={hero.title}
        subtitle={hero.subtitle}
        ctaLink={hero.ctaButton.link}
        ctaText={hero.ctaButton.text}
        images={hero.images}
      />

      <div className="relative w-full h-16 md:h-32 lg:h-48" />

      <FeaturesOffset2x6Grid
        sectionLabel={featuresAndBenefits.sectionLabel}
        title={featuresAndBenefits.title}
        ctaLink={featuresAndBenefits.ctaButton.link}
        ctaText={featuresAndBenefits.ctaButton.text}
        features={featuresAndBenefits.feature}
      />

      {/* <!-- Diagonal section separator --> */}
      <DiagonalUpRightDarkLight />

      {/* <!-- Alternating features with list --> */}
      <FeaturesAlternatingWithList features={featuresAlternatingWithList} />

      {/* <!-- Process section wrapper --> */}
      <div className="pt-12 pb-12 md:pt-16 md:pb-16 lg:pt-28 bg-bouquetTints-100">
        {/* <!-- Process section --> */}
        <ServiceProcess
          sectionLabel={process.sectionLabel}
          title={process.title}
          subtitle={process.subtitle}
          stepList={process.stepList}
        />
      </div>

      <section className="px-4 pt-12 pb-10 md:pb-12 md:pt-16 bg-bouquetTints-100 sm:px-6 lg:px-8">
        {/* <!-- CTA --> */}
        <CTA />
      </section>
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

export default Service;

export const query = graphql`
  query ($slug: String) {
    wpService(slug: { eq: $slug }) {
      title
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
      service {
        hero {
          sectionLabel
          title
          subtitle
          ctaButton {
            text
            link
          }
          images {
            image {
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
        featuresAndBenefits {
          sectionLabel
          title
          ctaButton {
            text
            link
          }
          feature {
            name
            description
            icon {
              altText
              sourceUrl
            }
          }
        }
        featuresAlternatingWithList {
          offset
          sectionLabel
          title
          subtitle
          featureList {
            feature
          }
          image {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
        process {
          sectionLabel
          title
          subtitle
          stepList {
            step
            description
            icon {
              altText
              sourceUrl
            }
          }
        }
      }
    }
  }
`;
