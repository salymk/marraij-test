import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { v4 as uuidv4 } from 'uuid';
import SectionLabel from './SectionLabel';

const WhatWeDo = () => {
  const data = useStaticQuery(graphql`
    {
      wpPage(title: { eq: "Home" }) {
        home {
          whatWeDo {
            title
            subtitle
            sectionLabel
            services {
              show
              link {
                ... on WpService {
                  id
                  slug
                }
              }
              service
              description
              offset
              icon {
                altText
                sourceUrl
              }
            }
            images {
              mainImage {
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
              secondaryImages {
                image {
                  id
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
              }
            }
          }
        }
      }
    }
  `);

  const { sectionLabel, title, subtitle, services, images } =
    data?.wpPage?.home?.whatWeDo;
  const mainImage = getImage(images.mainImage.localFile);
  return (
    <>
      <section
        id="what-we-do"
        className="py-10 px-4 md:py-12 bg-bouquetTints-100 sm:px-6 lg:px-8"
      >
        {/* <!-- Section text --> */}
        <div className="mx-auto max-w-xl text-center md:max-w-2xl lg:text-left lg:max-w-screen-xl">
          <SectionLabel label={sectionLabel} />
          <div className="grid gap-6 mt-6 w-full lg:grid-cols-5">
            <div className="lg:col-span-3">
              <h2 className="text-3xl font-extrabold text-dark-950 sm:text-4xl md:text-5xl">
                {title}
              </h2>
            </div>

            <div className="lg:col-span-2">
              <p className="text-xl text-dark-700">{subtitle}</p>
            </div>
          </div>
        </div>

        {/* <!-- Section content --> */}
        <div className="grid gap-12 justify-center mx-auto mt-12 w-full lg:grid-cols-2 lg:gap-8 lg:mt-16 lg:max-w-screen-xl xl:max-w-screen-xl lg:justify-start">
          {/* <!-- Features list --> */}
          <div>
            {services.map((service) => (
              <React.Fragment key={uuidv4()}>
                {service.show && (
                  <div
                    className={`service ${
                      service.offset ? 'xl:pr-18 2xl:pr-28' : ''
                    }`}
                  >
                    <Link
                      to={
                        service?.link?.slug === '/'
                          ? '/'
                          : `/services/${service?.link?.slug}`
                      }
                    >
                      <div className="mx-auto max-w-lg lg:mr-auto xl:mx-auto">
                        <div className="flex py-6 px-8 w-full rounded shadow-xl bg-bouquetShades-300 ease-in-out duration-300 hover:bg-bouquetShades-100 hover:shadow-2xl sm:px-10">
                          <div className="text-center sm:flex sm:text-left">
                            <div className="w-full sm:w-1/5">
                              <div className="flex justify-center items-center mx-auto w-12 h-12 bg-gradient-to-r rounded text-white sm:mx-0 from-bouquetShades-600 to-bouquetShades-700">
                                <img
                                  src={service.icon.sourceUrl}
                                  alt={service.icon.altText}
                                />
                              </div>
                            </div>
                            <div className="mt-3 w-full sm:mt-0">
                              <h5 className="text-lg font-semibold text-white">
                                {service.service}
                              </h5>
                              <p className="mt-1 text-base text-dark-300">
                                {service.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* <!-- Image collage --> */}
          <div className="flex justify-center items-center max-w-screen-md lg:max-w-full">
            <div className="grid grid-rows-2 grid-flow-col gap-4 h-full">
              <div className="row-span-2 rounded shadow-xl">
                <GatsbyImage
                  className="object-cover w-full h-full rounded position-right"
                  image={mainImage}
                  alt={images.mainImage.altText}
                />
              </div>
              {images.secondaryImages.map((image) => {
                const secondaryImage = getImage(image.image.localFile);
                return (
                  <div key={image.image.id} className="rounded shadow-xl">
                    <GatsbyImage
                      image={secondaryImage}
                      alt={image.image.altText}
                      className="object-cover w-full h-full rounded position-center"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatWeDo;
