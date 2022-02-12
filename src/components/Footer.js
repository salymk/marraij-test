import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import SocialLinks from './SocialLinks';
import FooterMenu from './FooterMenu';
import MarraijLogo from './MarraijLogo';

const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      wpPage(title: { eq: "Footer" }) {
        footer {
          logoAndCopyright {
            copyright {
              year
              rights
            }
          }
          contactInfo {
            title
            location {
              street
              state
            }
            contact {
              phone
              email
            }
          }
          social {
            title
            subtitle
          }
          menuTitle
        }
      }
    }
  `);

  const { logoAndCopyright, contactInfo, social, menuTitle } =
    data.wpPage.footer;

  return (
    <>
      <footer className="py-12 px-4 md:py-16 bg-white sm:px-6 lg:px-8">
        <div className="grid gap-8 mx-auto lg:max-w-screen-xl sm:max-w-3xl md:grid-cols-3 md:gap-y-12 lg:grid-cols-4">
          {/* <!-- Logo and copyright text --> */}
          <div className="flex flex-col lg:mx-auto">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-black lg:block group">
                <MarraijLogo width={120} height={60} />
              </Link>
            </div>
            <div className="mt-6 text-lg md:mt-8 text-dark-700">
              {logoAndCopyright.copyright.year}
              <br /> {logoAndCopyright.copyright.rights}
            </div>
          </div>

          {/* <!-- Contact information --> */}
          <div className="lg:mx-auto">
            <h6 className="text-xl font-semibold text-dark-950">
              {contactInfo.title}
            </h6>
            <p className="mt-2 text-lg text-dark-700">
              {contactInfo.location.street}
              <br />
              {contactInfo.location.state}
            </p>
            <p className="mt-6 text-lg text-dark-700">
              {contactInfo.contact.phone}
            </p>
            <p className="text-lg text-dark-700">{contactInfo.contact.email}</p>
          </div>

          {/* <!-- Site links --> */}
          <div className="lg:mx-auto">
            <h6 className="text-xl font-semibold text-dark-950">{menuTitle}</h6>
            <FooterMenu />
          </div>

          {/* <!-- Social links --> */}
          <div className="sm:col-span-3 lg:col-span-1 lg:mx-auto">
            <h6 className="text-xl font-semibold text-dark-950">
              {social.title}
            </h6>
            <p className="mt-2 text-lg text-dark-700">{social.subtitle}</p>
            <div className="mt-4 w-full lg:mt-6">
              {/* <!-- Social links container --> */}
              <div className="flex justify-start space-x-4">
                <SocialLinks />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
