import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { v4 as uuidv4 } from 'uuid';

const TestimonialCard = () => {
  const data = useStaticQuery(graphql`
    {
      wpTestimonial {
        testimonialsList {
          testimonial {
            show
            name
            title
            quote
            optionalImage {
              show
              image {
                altText
                sourceUrl
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
  `);
  const { testimonial } = data.wpTestimonial.testimonialsList;
  return (
    <>
      {testimonial.map((t) => (
        <>
          {t.show && (
            <div
              key={uuidv4()}
              className="flex overflow-hidden relative py-12 px-4 w-full rounded shadow-xl bg-bouquetShades-300 sm:px-6 lg:px-8"
            >
              {/* <!-- Quotation mark --> */}
              <svg
                viewBox="0 0 24 24"
                className="absolute inset-0 w-32 h-32 text-bouquetShades-600 lg:w-40 lg:h-40"
              >
                <path
                  fill="currentColor"
                  d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"
                />
              </svg>
              <blockquote className="z-10 mx-auto">
                <p className="mx-auto max-w-md text-lg font-medium leading-9 text-center text-dark-300">
                  {t.quote}
                </p>
                <footer className="mt-8 testimonial-footer">
                  {t.optionalImage.show && (
                    <GatsbyImage
                      className="object-cover object-center mx-auto w-12 h-12 rounded-full border-2 border-opacity-75 border-solid border-bouquetShades-800"
                      image={
                        t.optionalImage.image.localFile.childImageSharp
                          .gatsbyImageData
                      }
                      alt={t.optionalImage.image.altText}
                    />
                  )}

                  <div className="mt-3 text-center">
                    <div className="text-base font-medium leading-6 text-white">
                      {t.name}
                    </div>
                    <div className="text-base font-medium leading-6 text-dark-300">
                      {t.title}
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          )}
        </>
      ))}
    </>
  );
};

export default TestimonialCard;
