import React from 'react';
import PropTypes from 'prop-types';

const SectionLabel = ({ label }) => (
  <>
    <p className="inline-flex z-30 justify-center items-center py-2 px-6 text-sm font-medium tracking-wide text-white bg-gradient-to-r rounded-r-full rounded-tl-full from-bouquetShades-300 to-bouquetShades-500">
      {label}
    </p>
  </>
);

export default SectionLabel;

SectionLabel.propTypes = {
  label: PropTypes.string.isRequired,
};
