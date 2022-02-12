import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import SectionLabel from './SectionLabel';

const Values = () => {
  const data = useStaticQuery(graphql`
    {
      wpPage(title: { eq: "About Us" }) {
        aboutUs {
          values {
            sectionLabel
            title
            subtitle
            value {
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

  const { sectionLabel, title, subtitle, value } = data.wpPage.aboutUs.values;

  return (
    <>
      <section className="px-4 pt-10 pb-12 md:pt-12 md:pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-screen-xl">
          {/* <!-- Section text --> */}
          <div className="mx-auto w-full max-w-xl text-center lg:max-w-3xl md:max-w-2xl">
            <SectionLabel label={sectionLabel} />
            <h2 className="mt-6 text-3xl font-extrabold text-dark-950 sm:text-4xl md:text-5xl">
              {title}
            </h2>
            <p className="mt-6 text-xl text-dark-500">{subtitle}</p>
          </div>

          {/* <!-- Value cards --> */}
          <div className="grid gap-y-8 mt-12 lg:mt-16 lg:grid-cols-3 lg:gap-x-6 2xl:gap-x-12">
            {/* <!-- Value card --> */}
            {value.map((v) => (
              <div className="py-14 px-4 mx-auto w-full max-w-lg rounded shadow-xl lg:py-16 lg:py-20 bg-bouquetShades-300 lg:px-6 xl:px-12">
                <div className="mx-auto max-w-sm text-center">
                  <span className="flex justify-center items-center mx-auto bg-gradient-to-r rounded shadow-inner w-18 h-18 from-bouquetShades-600 to-bouquetShades-700">
                    <img src={v.icon.sourceUrl} alt={v.icon.altText} />
                  </span>
                  <div className="mt-8 text-2xl font-bold text-white ">
                    {v.title}
                  </div>
                  <p className="mt-3 text-lg leading-relaxed text-dark-300">
                    {v.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Values;
