import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import SectionLabel from './SectionLabel';

const Partners = () => {
  const data = useStaticQuery(graphql`
    {
      wpPage(title: { eq: "Home" }) {
        home {
          partners {
            sectionLabel
            title
            subtitle
            logos {
              logo {
                localFile {
                  id
                  publicURL
                  childImageSharp {
                    gatsbyImageData(
                      placeholder: BLURRED
                      formats: [AUTO, WEBP, AVIF]
                    )
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const { sectionLabel, title, subtitle } = data.wpPage.home.partners;

  return (
    <>
      <section className="px-4 pt-12 pb-10 mx-auto max-w-screen-xl md:pb-12 md:pt-16 sm:px-6 lg:px-8">
        {/* <!-- Section text --> */}
        <div className="mx-auto w-full max-w-xl text-center lg:max-w-3xl md:max-w-2xl">
          <SectionLabel label={sectionLabel} />
          <h2 className="mt-6 text-3xl font-extrabold text-dark-950 sm:text-4xl md:text-5xl">
            {title}
          </h2>
          <p className="mt-6 text-xl text-dark-500">{subtitle}</p>
        </div>

        {/* <!-- Logos --> */}
        <div className="mx-auto mt-12 max-w-screen-lg lg:mt-14">
          <div className="grid grid-cols-2 gap-4 md:gap-6 sm:grid-cols-3">
            {data.wpPage.home.partners.logos.map((logo) => {
              const partnerLogo = getImage(logo.logo.localFile);

              return (
                <div
                  key={logo.logo.localFile.id}
                  className="flex justify-center items-center w-full h-auto overflow-hidden"
                >
                  <GatsbyImage className="w-40" image={partnerLogo} alt="" />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Partners;
