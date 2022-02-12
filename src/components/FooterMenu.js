import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { v4 as uuidv4 } from 'uuid';

const FooterMenu = () => {
  const data = useStaticQuery(graphql`
    {
      wpPage(title: { eq: "Navigation" }) {
        navigation {
          menuItems {
            item
            link
          }
        }
      }
    }
  `);

  const { menuItems } = data.wpPage.navigation;
  return (
    <ul className="mt-2 space-y-1 text-lg">
      {menuItems.map((item) => (
        <li
          key={uuidv4()}
          className="font-medium text-dark-700 hover:text-bouquetShades-500"
        >
          <Link to={item.link === '/' ? '/' : `/${item.link}`}>
            {item.item}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default FooterMenu;
