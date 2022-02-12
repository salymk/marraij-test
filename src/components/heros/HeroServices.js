import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import SectionLabel from '../SectionLabel';

const HeroServices = ({
  sectionLabel,
  title,
  subtitle,
  ctaLink,
  ctaText,
  images,
}) => (
  <>
    <section className="px-4 pt-12 pb-10 md:pt-16 md:pb-20 sm:px-6 lg:px-8 bg-white lg:pb-64">
      <div className="mx-auto max-w-screen-xl">
        {/* <!-- Hero header --> */}
        <div>
          <SectionLabel label={sectionLabel} />
          <h1 className="mt-6 text-4xl font-extrabold text-left text-dark-950 sm:text-5xl md:text-6xl">
            {title}
          </h1>
        </div>

        {/* <!-- Hero content --> */}
        <div className="relative mt-6 md:mt-8 lg:mt-12 xl:mt-16">
          <div className="grid z-10 gap-x-8 lg:grid-cols-2 lg:absolute">
            <div>
              <p className="max-w-lg text-xl lg:mx-auto text-dark-500 sm:max-w-3xl">
                {subtitle}
              </p>
              <div className="mt-8 sm:flex sm:justify-start">
                <Link
                  className="flex justify-center items-center py-4 px-8 w-auto h-14 text-base font-semibold leading-snug rounded transition ease-in-out duration-250  focus:outline-none bg-bouquetShades-300 hover:text-bouquetShades-700 hover:bg-bouquetShades-100  text-white"
                  to={`/${ctaLink}`}
                >
                  {ctaText}
                </Link>
              </div>
            </div>

            {/* <!-- Hero images --> */}
            <div className="grid mx-auto mt-10 md:mt-12 sm:grid-cols-2 sm:gap-x-4 lg:mt-0 sm:mx-0">
              {images.map((image) => {
                const img = getImage(image.image.localFile.childImageSharp);
                return (
                  <GatsbyImage
                    key={uuidv4()}
                    image={img}
                    alt={image.image.altText}
                    className="hero-service-img object-cover object-center w-full rounded shadow-xl lg:h-96"
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default HeroServices;

HeroServices.propTypes = {
  sectionLabel: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  ctaLink: PropTypes.string,
  ctaText: PropTypes.string,
  images: PropTypes.array,
};
