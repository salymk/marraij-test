import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import SectionLabel from '../SectionLabel';

const FeaturesAlternatingWithList = ({ features }) => (
  <>
    <section className="px-4 pt-10 pb-12 md:pt-12 sm:pb-16 bg-bouquetTints-100 sm:px-6 lg:px-8">
      {/* <!-- Features container --> */}
      <div className="mx-auto max-w-screen-xl">
        {features?.map((feature) => (
          <div
            key={uuidv4()}
            className={`relative ${
              feature.offset ? 'mt-24 lg:mt-32' : ''
            } lg:grid lg:grid-cols-2 lg:auto-rows-max lg:gap-x-12`}
          >
            {/* <!-- Feature text with list --> */}
            <div
              className={`flex flex-col justify-center items-center ${
                feature.offset ? 'lg:order-2' : ''
              } lg:items-start`}
            >
              <div className="w-full text-center lg:text-left">
                <SectionLabel label={feature.sectionLabel} />
              </div>
              <div className="mt-4 w-full max-w-lg text-center lg:mt-6 lg:text-left sm:max-w-2xl">
                <h3 className="text-3xl font-extrabold text-dark-950 sm:text-4xl md:text-5xl">
                  {feature.title}
                </h3>
                <p className="mx-auto mt-4 text-xl lg:mt-6 text-dark-700">
                  {feature.subtitle}
                </p>
              </div>

              <div className="mt-6 space-y-2 lg:mt-8">
                {feature?.featureList?.map((featureItem) => (
                  <div className="flex items-center text-lg text-dark-700">
                    {/* <!-- TablerIcon name: checks --> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2 w-7 h-7"
                      width="44"
                      height="44"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path
                        className="text-bouquetShades-100"
                        stroke="currentColor"
                        d="M7 12l5 5l10 -10"
                      />
                      <path
                        className="text-bouquetShades-700"
                        stroke="currentColor"
                        d="M2 12l5 5m5 -5l5 -5"
                      />
                    </svg>
                    {featureItem.feature}
                  </div>
                ))}
              </div>
            </div>
            {/* <!-- Feature image --> */}
            <div
              className={`flex relative justify-center items-center mx-auto mt-10 max-w-lg ${
                feature.offset ? ' lg:order-1' : ''
              } lg:mt-0 lg:max-w-none`}
            >
              <div
                className={`absolute w-full h-full rounded bg-bouquetShades-100 ${
                  feature.offset
                    ? '2xl:right-10 2xl:top-10 lg:top-4 lg:right-4 sm:top-8 sm:right-8'
                    : '2xl:left-10 2xl:top-10 lg:top-4 lg:left-4 sm:top-8 sm:left-8'
                } `}
              >
                <svg
                  className="absolute top-0 right-1/4 inset-y-0 h-full text-bouquetShades-100 w-1/4 z-20"
                  preserveAspectRatio="none"
                  viewBox="0 0 100 100"
                  fill="currentcolor"
                >
                  <polygon points="0,0 100,0 0,100" />
                </svg>
                <div className="absolute w-1/2 inset-y-0 h-full left-1/2 bg-bouquetShades-400 z-10 rounded-r" />
              </div>
              <GatsbyImage
                image={getImage(feature.image.localFile.childImageSharp)}
                alt={feature.image.altText}
                className="object-cover z-30 w-auto h-full rounded shadow-xl"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  </>
);

export default FeaturesAlternatingWithList;

FeaturesAlternatingWithList.propTypes = {
  features: PropTypes.array,
};
