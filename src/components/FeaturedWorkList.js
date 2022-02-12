import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { convertToBgImage } from 'gbimage-bridge';
import BackgroundImage from 'gatsby-background-image';
import { v4 as uuidv4 } from 'uuid';
import SectionLabel from './SectionLabel';

const FeaturedWorkList = () => {
  const data = useStaticQuery(graphql`
    {
      wpPage(title: { eq: "Work Projects" }) {
        workProjects {
          project {
            featured
            show
            offset
            categoryLabel
            name
            description
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
          }
        }
      }
    }
  `);

  const { project } = data.wpPage.workProjects;

  return (
    <>
      {/* <!-- Featured work --> */}
      <div className="mt-12 lg:mt-16">
        {project.map(
          ({ featured, offset, categoryLabel, name, description, image }) => {
            const img = getImage(image.localFile);
            const bgImage = convertToBgImage(img);

            return (
              <>
                {featured && (
                  <React.Fragment key={uuidv4()}>
                    <div className="relative mx-auto max-w-lg lg:max-w-none lg:mx-none">
                      <BackgroundImage
                        Tag="section"
                        className={`overflow-hidden lg:rounded rounded-t shadow-xl relative w-full lg:pt-23/50 lg:w-9/10 lg:${
                          offset ? 'ml-auto' : 'mr-auto'
                        } bg-cover bg-center h-64 lg:h-full`}
                        {...bgImage}
                      >
                        <p className="inline-flex justify-center items-center py-2 px-6 mt-4 ml-6 text-xs font-medium tracking-wide text-white bg-gradient-to-r rounded-r-full rounded-tl-full sm:ml-8 lg:hidden from-bouquetShades-600 to-bouquetShades-700">
                          {categoryLabel}
                        </p>
                      </BackgroundImage>

                      <div
                        className={`lg:rounded rounded-b shadow-xl h-auto relative w-full bottom-0 ${
                          offset ? 'left-0' : 'right-0'
                        } z-20 block p-6 sm:p-8 lg:p-12 bg-bouquetShades-300 lg:absolute lg:-bottom-25 lg:w-1/3 lg:h-full`}
                      >
                        <div className="h-full lg:flex lg:flex-col lg:justify-between">
                          <div className="hidden lg:block">
                            <p className="inline-flex justify-center items-center py-2 px-6 text-xs font-medium tracking-wide text-white bg-gradient-to-r rounded-r-full rounded-tl-full from-bouquetShades-600 to-bouquetShades-700">
                              {categoryLabel}
                            </p>
                          </div>
                          <div className="flex flex-wrap w-full">
                            <h3 className="text-3xl font-bold text-white lg:text-4xl">
                              {name}
                            </h3>
                            <p className="mt-2 text-base lg:mt-4 text-dark-300 md:text-lg">
                              {description}
                            </p>
                          </div>
                          <div className="mt-8 xl:mt-4" />
                        </div>
                      </div>
                    </div>
                    <div className="py-6 lg:py-28" />
                  </React.Fragment>
                )}
              </>
            );
          }
        )}
      </div>
    </>
  );
};
export default FeaturedWorkList;
