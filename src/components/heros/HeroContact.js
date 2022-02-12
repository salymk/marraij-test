import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import SectionLabel from '../SectionLabel';
import SocialLinks from '../SocialLinks';
import ContactForm from '../ContactForm';
import GoogleMapsContainer from '../GoogleMapsContainer';

const HeroContact = () => {
  const data = useStaticQuery(graphql`
    {
      wpPage(title: { eq: "Contact" }) {
        contact {
          sectionLabel
          title
          subtitle
          address {
            title
            street
            state
          }
        }
      }
    }
  `);

  const { sectionLabel, title, subtitle, address } = data.wpPage.contact;

  return (
    <>
      <section className="contact-bg py-12 px-4 md:py-16 sm:px-6 lg:px-24 shadow-2xl">
        <div className="layer" />
        <div className="mx-auto max-w-screen-xl">
          {/* <!-- Section header --> */}
          <div className="pb-10 mx-auto max-w-screen-xl md:pb-12">
            <div className="w-full text-center sm:text-center lg:text-center">
              <SectionLabel label={sectionLabel} />
            </div>
            <div className="mt-4 w-full text-center md:mt-5 sm:text-center lg:text-center">
              <h1 className="text-4xl font-extrabold text-dark-950 sm:text-5xl md:text-6xl">
                {title}
              </h1>
              <p className="mx-auto mt-3 max-w-lg text-xl md:mt-5 text-dark-800 sm:max-w-2xl">
                {subtitle}
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:gap-x-8 xl:gap-x-16">
            <div className="pt-8 lg:pt-0 flex-1 order-2 lg:order-1 lg:mr-4 xl:mr-6 flex flex-col justify-between items-start sm:items-center lg:items-start">
              <GoogleMapsContainer />

              {/* <!-- Social media links --> */}
              <div className="mt-8 w-full sm:mt-10 lg:mt-0">
                <h6 className="text-sm text-lg font-semibold text-left text-dark-800 sm:text-center lg:text-left">
                  Follow us
                </h6>

                {/* <!-- Links container --> */}
                <div className="flex justify-start mt-3 space-x-4 sm:justify-center lg:justify-start">
                  <SocialLinks />
                </div>
              </div>
            </div>

            {/* <!-- Contact form card --> */}
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroContact;
