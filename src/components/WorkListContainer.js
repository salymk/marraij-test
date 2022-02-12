import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import SectionLabel from './SectionLabel';

const WorkListContainer = ({ children, sectionLabel, title, subtitle }) => (
  <>
    <section className="px-4 pt-12 pb-10 md:pb-12 md:pt-16 bg-white sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-screen-xl">
        {/* <!-- Featured work section header --> */}
        <div className="mx-auto w-full max-w-xl text-center lg:max-w-3xl md:max-w-2xl">
          <SectionLabel label={sectionLabel} />

          <h2 className="mt-6 text-3xl font-extrabold text-dark-950 sm:text-4xl md:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-xl md:mt-5 text-dark-500 md:max-w-3xl">
            {subtitle}
          </p>
        </div>
        {/* <!-- Featured work --> */}
        {children}
      </div>
    </section>
  </>
);

export default WorkListContainer;

WorkListContainer.propTypes = {
  children: PropTypes.any,
  sectionLabel: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};
