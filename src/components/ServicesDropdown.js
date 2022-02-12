/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, useStaticQuery } from 'gatsby';
import {
  Menu,
  MenuList,
  MenuButton,
  MenuItem,
  MenuLink,
} from '@reach/menu-button';
import { v4 as uuidv4 } from 'uuid';

import { ChevronDownIcon } from '@heroicons/react/solid';

const ServicesDropdown = ({ color, position }) => {
  const data = useStaticQuery(graphql`
    {
      allWpService {
        edges {
          node {
            slug
            title
          }
        }
      }
    }
  `);

  return (
    <Menu>
      <MenuButton
        className={`flex items-center md:text-md lg:text-xl font-semibold mt-6 py-1 md:px-2 lg:px-4 rounded transition duration-200 ease-in-out ${color} `}
      >
        Services
        <ChevronDownIcon
          className="ml-2 h-5 w-5 group-hover:text-gray-500"
          aria-hidden="true"
        />
      </MenuButton>
      <MenuList
        className={`absolute z-50 ${position} w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
      >
        {data.allWpService.edges.map((node) => (
          <MenuLink
            key={uuidv4()}
            className="menu-link w-full block cursor-pointer p-2 font-semibold"
            as={Link}
            to={node.node.slug === '/' ? '/' : `/services/${node.node.slug}`}
          >
            {node.node.title}
          </MenuLink>
        ))}
      </MenuList>
    </Menu>
  );
};
export default ServicesDropdown;

ServicesDropdown.propTypes = {
  color: PropTypes.string,
  position: PropTypes.string,
};
