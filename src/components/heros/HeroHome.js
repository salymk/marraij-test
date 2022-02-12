/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link as LinkScroll } from 'react-scroll';
import SectionLabel from '../SectionLabel';

const HeroHome = () => {
  const data = useStaticQuery(graphql`
    {
      wpPage(title: { eq: "Home" }) {
        home {
          heroHome {
            sectionLabel
            title
            subtitle
            ctaButton {
              text
              link
            }
            image {
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
  const {
    sectionLabel,
    title,
    subtitle,
    ctaButton: { link, text },
  } = data.wpPage.home.heroHome;

  const heroImage = getImage(data.wpPage.home.heroHome.image.localFile);

  return (
    <>
      <section className="px-4 pt-6 pb-12 mx-auto max-w-screen-2xl md:pb-16 sm:px-6 lg:px-8">
        {/* <!-- Hero card --> */}
        <div className="relative rounded shadow-xl sm:overflow-hidden bg-white">
          {/* <!-- Right background diagonal --> */}
          <svg
            className="absolute right-1/4 inset-y-0 h-full text-white w-1/4 z-20"
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
            fill="currentcolor"
          >
            <polygon points="0,0 100,0 0,100" />
          </svg>
          <div className="absolute w-1/2 inset-y-0 h-full left-1/2 bg-gradient-to-r from-bouquetShades-50 to-bouquetShades-400  z-10 rounded" />

          {/* <!-- Hero card content --> */}
          <div className="relative py-16 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:auto-rows-max lg:gap-x-8 xl:gap-x-12 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
            {/* <!-- Card content text--> */}
            <div className="flex flex-col justify-center items-center lg:items-start">
              <SectionLabel label={sectionLabel} />
              <div className="z-30 mx-auto mt-6 w-full max-w-lg text-center lg:text-left lg:max-w-none md:max-w-2xl">
                <h1 className="text-4xl font-extrabold text-dark-950 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                  {title}
                </h1>
                <p className="mt-6 text-xl text-dark-700 lg:text-dark-500">
                  {subtitle}
                </p>
              </div>
              {/* <!-- Hero buttons --> */}
              <div className="z-30 mt-10 sm:flex sm:justify-center lg:justify-start">
                <Link
                  className="flex justify-center items-center py-4 px-8 w-auto h-14 text-base font-semibold leading-snug rounded transition ease-in-out duration-250  focus:outline-none bg-bouquetShades-300 hover:text-bouquetShades-700 hover:bg-bouquetShades-100  text-white"
                  to={`/${link}`}
                >
                  {text}
                </Link>
                <LinkScroll
                  to="what-we-do"
                  spy
                  smooth
                  offset={-100}
                  duration={1000}
                  className="cursor-pointer flex relative justify-center items-center px-8 mt-5 ml-0 w-auto h-14 text-base font-medium leading-snug sm:ml-4 sm:mt-0 bg-bouquetTints-300 rounded transition ease-in-out duration-250 text-dark-950 focus:outline-none hover:bg-bouquetTints-500"
                >
                  Learn more
                </LinkScroll>
              </div>
            </div>

            {/* <!-- Hero image --> */}
            <div className="flex justify-center items-center mx-auto mt-12 max-w-xl sm:mt-16 lg:mt-0 lg:max-w-none">
              <GatsbyImage
                className="object-cover z-30 w-auto h-full rounded shadow-md"
                image={heroImage}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroHome;
