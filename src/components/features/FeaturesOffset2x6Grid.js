import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import SectionLabel from '../SectionLabel';

const FeaturesOffset2x6Grid = ({
  sectionLabel,
  title,
  ctaLink,
  ctaText,
  features,
}) => (
  <>
    <section className="px-4 pt-10 pb-10 md:pt-12 md:pb-12 bg-white sm:px-6 lg:px-8">
      <div className="flex flex-wrap items-center mx-auto w-full max-w-screen-xl">
        <div className="flex flex-wrap w-full">
          {/* <!-- Section header with button --> */}
          <div className="flex w-full relative w-full lg:w-1/3">
            <div className="flex relative w-full">
              <div className="flex relative flex-wrap w-full flex-start lg:flex-col">
                <div className="relative w-full">
                  <SectionLabel label={sectionLabel} />

                  <h2 className="relative mt-6 w-full text-3xl font-extrabold text-left text-dark-950 sm:text-4xl md:text-5xl">
                    {title}
                  </h2>
                </div>
                <div className="mt-8 text-left lg:mt-10">
                  <Link
                    className="inline-flex relative justify-center items-center px-8 w-auto h-12 text-base font-medium leading-snug transition-all ease-in-out duration-250 text-white hover:text-bouquetShades-700 md:h-14 group"
                    to={`/${ctaLink}`}
                  >
                    <span className="block absolute top-0 left-0 z-10 w-full h-full rounded transition-all ease-in-out duration-250 bg-bouquetShades-300 group-hover:bg-bouquetShades-100" />
                    <span className="relative z-20">{ctaText}</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- 2x6 features grid --> */}
          <div className="lg:w-2/3 relative flex w-full mt-16 lg:pl-8">
            <div className="grid gap-y-10 w-full sm:grid-cols-2 sm:gap-x-8 sm:gap-y-16">
              {/* <!-- Feature --> */}
              {features.map((feature) => (
                <div key={uuidv4()} className="flex relative flex-col w-full">
                  <span className="flex justify-center items-center w-16 h-16 bg-gradient-to-r rounded shadow-xl from-bouquetShades-300 to-bouquetShades-400">
                    {/* <!-- TablerIcon name: box --> */}
                    <img
                      className="w-8 h-8"
                      src={feature.icon.sourceUrl}
                      alt={feature.icon.altText}
                    />
                  </span>
                  <h4 className="mt-4 text-2xl font-semibold text-dark-950">
                    {feature.name}
                  </h4>
                  <p className="mt-1 max-w-md text-lg leading-relaxed text-dark-500">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default FeaturesOffset2x6Grid;

FeaturesOffset2x6Grid.propTypes = {
  sectionLabel: PropTypes.string,
  title: PropTypes.string,
  ctaLink: PropTypes.string,
  ctaText: PropTypes.string,
  features: PropTypes.array,
};
