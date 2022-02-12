import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { v4 as uuidv4 } from 'uuid';
import SectionLabel from './SectionLabel';

const Process = () => {
  const data = useStaticQuery(graphql`
    {
      wpPage(title: { eq: "Home" }) {
        home {
          process {
            sectionLabel
            title
            subtitle
            steps {
              step
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

  const { sectionLabel, title, subtitle, steps } = data.wpPage.home.process;

  return (
    <>
      <section className="px-4 mx-auto w-full max-w-screen-xl sm:px-6 lg:px-8">
        {/* <!-- Section text --> */}
        <div className="mx-auto w-full max-w-xl text-center lg:max-w-3xl md:max-w-2xl">
          <SectionLabel label={sectionLabel} />
          <h2 className="mt-6 text-3xl font-extrabold text-dark-950 sm:text-4xl md:text-5xl">
            {title}
          </h2>
          <p className="mt-6 text-xl text-dark-500">{subtitle}</p>
        </div>

        {/* <!-- Process steps --> */}
        <div className="grid gap-10 mx-auto mt-12 max-w-xl lg:mt-16 lg:grid-cols-3 lg:grid-x-16 lg:max-w-none">
          {steps.map((step) => (
            <div key={uuidv4()} className="w-full">
              <span className="flex justify-center items-center mx-auto bg-gradient-to-r rounded shadow-xl w-18 h-18 from-bouquetShades-300 to-bouquetShades-500">
                <img src={step.icon.sourceUrl} alt={step.icon.altText} />
              </span>
              <h3 className="mt-5 text-2xl font-semibold text-center text-dark-950">
                {step.step}
              </h3>
              <p className="mt-2 text-lg leading-relaxed text-center text-dark-500">
                {step.description}.
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Process;
