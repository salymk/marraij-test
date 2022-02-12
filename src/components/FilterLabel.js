import React from 'react';
import PropTypes from 'prop-types';

const FilterLabel = ({ label, isActive }) => (
  <>
    {/* <!-- Filter --> */}
    <div className="mt-3 ml-3 md:m-0">
      <a
        href="#"
        className={`inline-flex justify-center items-center py-2 px-6 text-sm font-medium tracking-wide text-white rounded-r-full rounded-tl-full md:text-base ${
          isActive
            ? 'bg-bouquetShades-600'
            : 'bg-bouquetShades-300 hover:bg-bouquetShades-500'
        }  `}
      >
        {label}
      </a>
    </div>
  </>
);

export default FilterLabel;

FilterLabel.propTypes = {
  label: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
};
