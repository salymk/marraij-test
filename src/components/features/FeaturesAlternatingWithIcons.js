import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { v4 as uuidv4 } from 'uuid';
import { features } from 'process';
import SectionLabel from '../SectionLabel';
import ValuesImg from '../../images/values.jpg';
import HandbookImg from '../../images/handbook.jpg';

const FeaturesAlternatingWithIcons = () => {
  const data = useStaticQuery(graphql`
    {
      wpPage(title: { eq: "About Us" }) {
        aboutUs {
          featuresAlternatingWithIcons {
            offset
            sectionLabel
            title
            subtitle
            image {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
            }
            feature {
              title
              description
              icon {
                altText
                sourceUrl
              }
            }
          }
        }
      }
    }
  `);

  const { featuresAlternatingWithIcons } = data.wpPage.aboutUs;

  return (
    <>
      <section className="px-4 pb-10 pb-12 md:pt-12 md:pb-16 sm:px-6 lg:px-8 bg-bouquetTints-100">
        {/* <!-- Features container --> */}
        <div className="mx-auto w-full max-w-screen-xl">
          {/* <!-- Feature --> */}
          {featuresAlternatingWithIcons.map((feature) => {
            const image = getImage(feature.image.localFile);

            return (
              <div
                key={uuidv4()}
                className="feature-alternating mx-auto max-w-xl md:max-w-2xl lg:max-w-none lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-x-16 xl:gap-x-20 2xl:gap-x-24"
              >
                {/* <!-- Feature text with icons --> */}
                <div
                  className={`col-span-2 ${
                    feature.offset ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="text-center lg:text-left">
                    <SectionLabel label={feature.sectionLabel} />
                    <h2 className="mt-4 text-3xl font-extrabold text-dark-950 lg:mt-6 sm:text-4xl md:text-5xl">
                      {feature.title}
                    </h2>
                    <p className="mt-4 text-xl lg:mt-6 text-dark-700">
                      {feature.subtitle}
                    </p>
                    <div className="flex flex-col mx-auto mt-8 max-w-xs sm:mt-10 sm:mx-0 sm:flex-row sm:max-w-none">
                      {feature.feature.map((f) => (
                        <div className="flex flex-col items-center lg:flex-start lg:items-start">
                          <div className="flex flex-col items-center sm:flex-row">
                            <div className="flex justify-center items-center w-12 h-12 bg-gradient-to-r rounded from-bouquetShades-300 to-bouquetShades-400">
                              <img
                                className="w-8"
                                src={f.icon.sourceUrl}
                                alt={f.icon.altText}
                              />
                            </div>
                            <div className="mt-3 text-xl font-semibold text-dark-950 sm:mt-0 sm:ml-3">
                              {f.title}
                            </div>
                          </div>
                          <p className="mt-1 text-lg leading-relaxed sm:mt-3 text-dark-700">
                            {f.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* <!-- Feature image --> */}
                <div
                  className={`flex col-span-1 items-center mt-10 lg:mt-0 ${
                    feature.offset ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="relative text-center rounded shadow-xl w-full pt-3/2">
                    <GatsbyImage
                      className="object-cover object-center absolute top-0 left-0 w-full h-full align-middle rounded"
                      image={image}
                      alt={feature.image.altText}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default FeaturesAlternatingWithIcons;
