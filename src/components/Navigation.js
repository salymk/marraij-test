import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { v4 as uuidv4 } from 'uuid';
import MarraijLogo from './MarraijLogo';
import ServicesDropdown from './ServicesDropdown';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const data = useStaticQuery(graphql`
    {
      wpPage(title: { eq: "Navigation" }) {
        navigation {
          menuItems {
            item
            link
          }
          ctaButton {
            text
            link
          }
        }
      }
    }
  `);

  const { menuItems, ctaButton } = data.wpPage.navigation;

  return (
    <>
      <div
        className="hidden md:block sticky top-0 h-10 w-full transition duration-500 ease-in-out 
      bg-gradient-to-r from-bouquetShades-50 to-bouquetShades-400"
      />
      <header
        className={`sticky top-0 z-50 w-full bg-white transition duration-500 ease-in-out ${
          scrolled ? 'shadow-md' : ''
        }`}
      >
        <nav className="flex items-center px-4 py-2 mx-auto max-w-7xl sm:px-6 lg:px-8 bg-white">
          <div className="md:mb-6 flex justify-between items-center w-full">
            {/* <!-- Logo --> */}
            <div className="flex items-center">
              {/* <!-- Large logo --> */}
              <Link to="/" className="hidden h-18 w-40 lg:block">
                <MarraijLogo
                  width={scrolled ? '150px' : '160px'}
                  height="80px"
                />
              </Link>

              {/* <!-- Small logo for mobile screens --> */}
              <Link to="/" className="block lg:hidden">
                <MarraijLogo width="140px" height="70px" />
              </Link>
            </div>
            {/* bg-bouquetShades-300 hover:text-bouquetShades-700 hover:bg-bouquetShades-100  text-white */}

            {/* <!-- Main menu for large screens --> */}
            <div className="hidden md:flex justify-between items-center md:space-x-0.5 lg:space-x-2 text-xl md:text-md font-semibold text-dark-950">
              {menuItems.map((item) => (
                <Link
                  key={uuidv4()}
                  to={item.link === '/' ? '/' : `/${item.link}`}
                  className="block mt-6 py-1 md:px-2 lg:px-4 rounded md:text-md lg:text-xl transition duration-200 ease-in-out sm:inline-block hover:text-bouquetShades-400 "
                  activeClassName="active"
                >
                  {item.item}
                </Link>
              ))}
              <ServicesDropdown
                position="left-2"
                color="text-dark-950 md:text-md lg:text-xl hover:text-bouquetShades-400"
              />
            </div>

            <div className="hidden md:block">
              <Link
                className="flex justify-center items-center mt-6 py-3 md:px-4 lg:px-8 w-auto md:text-md lg:text-xl font-semibold leading-snug bg-customblue-50 rounded transition ease-in-out duration-250 text-white focus:outline-none hover:bg-pictonblueShades-100"
                to={`/${ctaButton.link}`}
              >
                {ctaButton.text}
              </Link>
            </div>

            {/* <!-- Mobile menu container --> */}
            <div className="block md:hidden">
              {/* <!-- Hamburger menu button -->
      <!--
        Toggle "hamburger-open" class based on menu state
      --> */}
              <button
                onClick={toggle}
                type="button"
                className={`relative z-50 w-6 h-5 transition duration-500 ease-in-out transform rotate-0 cursor-pointer group focus:outline-none ${
                  isOpen ? 'hamburger-open' : ''
                }`}
              >
                <span className="block absolute top-0 left-0 w-full h-1 rounded-full opacity-100 transition duration-200 ease-in-out transform rotate-0 bg-bouquetShades-300 group-hover:bg-bouquetShades-500" />
                <span className="block absolute left-0 top-2 w-full h-1 rounded-full opacity-100 transition duration-200 ease-in-out transform rotate-0 bg-bouquetShades-300 group-hover:bg-bouquetShades-500" />
                <span className="block absolute left-0 top-2 w-full h-1 rounded-full opacity-100 transition duration-200 ease-in-out transform rotate-0 bg-bouquetShades-300 group-hover:bg-bouquetShades-500" />
                <span className="block absolute left-0 top-4 w-full h-1 rounded-full opacity-100 transition duration-200 ease-in-out transform rotate-0 bg-bouquetShades-300 group-hover:bg-bouquetShades-500" />
              </button>

              {/* <!-- Mobile menu -->
      <!--
        Toggle "mobileNav-open" class based on menu state
      --> */}
              <div
                className={`hidden absolute top-0 left-0 z-40 justify-center items-center w-screen h-screen bg-gradient-to-tr from-bouquetShades-500 to-bouquetShades-700 ${
                  isOpen ? 'mobileNav-open' : ''
                }`}
              >
                <div className="flex flex-col justify-evenly items-center p-4 mx-auto space-y-8 w-full text-xl">
                  {menuItems.map((item) => (
                    <Link
                      key={uuidv4()}
                      to={item.link === '/' ? '/' : `/${item.link}`}
                      onClick={toggle}
                      className="block py-2 px-6 font-medium rounded transition duration-200 ease-in-out text-dark-300 hover:text-white hover:bg-bouquetShades-700 sm:inline-block"
                      activeClassName="mobile-active"
                    >
                      {item.item}
                    </Link>
                  ))}
                  <ServicesDropdown
                    position="left"
                    color="text-dark-300 hover:text-white hover:bg-bouquetShades-700"
                  />

                  <Link
                    to={`/${ctaButton.link}`}
                    onClick={toggle}
                    className="flex justify-center items-center py-4 px-8 w-auto text-lg font-semibold leading-snug bg-white rounded transition ease-in-out duration-250 text-dark-900 hover:text-white focus:outline-none hover:bg-bouquetShades-700"
                  >
                    {ctaButton.text}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navigation;
