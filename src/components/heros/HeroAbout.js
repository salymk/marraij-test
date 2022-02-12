import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import SectionLabel from '../SectionLabel';
import TeamImg from '../../images/team.jpg';

const HeroAbout = () => {
  const data = useStaticQuery(graphql`
    {
      wpPage(title: { eq: "About Us" }) {
        aboutUs {
          hero {
            title
            subtitle
            sectionLabel
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
      }
    }
  `);

  const { title, subtitle, sectionLabel, image } = data.wpPage.aboutUs.hero;

  const heroImg = getImage(image.localFile);

  return (
    <>
      <section className="px-4 pt-12 pb-10 md:pb-12 md:pt-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-screen-xl">
          {/* <!-- Hero text --> */}
          <div className="mx-auto w-full text-center max-w-screen-4xl xl:max-w-5xl">
            <SectionLabel label={sectionLabel} />
            <h1 className="mt-4 text-4xl font-extrabold text-dark-950 md:mt-5 sm:text-5xl md:text-6xl">
              {title}
            </h1>
            <p className="mx-auto mt-4 max-w-lg text-xl md:mt-5 text-dark-500 md:max-w-3xl">
              {subtitle}
            </p>
          </div>

          {/* <!-- Hero image --> */}
          <div className="mx-auto mt-12 max-w-screen-lg rounded shadow-xl">
            <GatsbyImage
              className="max-w-full h-auto align-middle rounded"
              image={heroImg}
              alt={image.altText}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroAbout;
