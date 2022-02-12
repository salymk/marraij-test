import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { v4 as uuidv4 } from 'uuid';
import SectionLabel from './SectionLabel';
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
  const data = useStaticQuery(graphql`
    {
      wpPage(title: { eq: "Home" }) {
        home {
          testimonials {
            sectionLabel
            title
            subtitle
            stats {
              title
              subtitle
              stat {
                title
                subtitle
              }
            }
          }
        }
      }
    }
  `);

  const { sectionLabel, title, subtitle, stats } =
    data.wpPage.home.testimonials;
  return (
    <>
      <section className="px-4 pt-10 pb-12 mx-auto max-w-screen-xl md:pb-16 md:pt-12 sm:px-6 lg:px-8">
        {/* <!-- Section text --> */}
        <div className="mx-auto w-full max-w-xl text-center lg:max-w-3xl md:max-w-2xl">
          <SectionLabel label={sectionLabel} />
          <h2 className="mt-6 text-3xl font-extrabold text-dark-950 sm:text-4xl md:text-5xl">
            {title}
          </h2>
          <p className="mt-6 text-xl text-dark-700">{subtitle}</p>
        </div>

        {/* <!-- Testimonials grid --> */}
        <div className="grid gap-4 mt-12 lg:mt-14 xl:grid-cols-3 xl:grid-rows-2 sm:gap-6 lg:gap-8 md:grid-cols-2 md:grid-rows-3">
          {/* <!-- Stats --> */}
          <div className="md:row-span-2">
            <div className="py-12 px-4 w-full h-full rounded shadow-xl bg-bouquetShades-300 lg:py-16 lg:px-6">
              <div className="mx-auto max-w-md text-center lg:max-w-full">
                <h3 className="text-2xl font-bold text-white lg:text-4xl sm:text-3xl">
                  {stats.title}
                </h3>
                <p className="mt-3 text-lg text-dark-300 lg:mt-4">
                  {stats.subtitle}
                </p>
              </div>
              <div className="mt-8 text-center sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8 md:block">
                {stats.stat.map((s) => (
                  <div
                    key={uuidv4()}
                    className="flex flex-col mt-10 sm:mt-0 md:mt-10"
                  >
                    <p className="order-2 mt-2 text-lg font-medium leading-6 text-dark-300">
                      {s.subtitle}
                    </p>
                    <p className="order-1 text-5xl font-bold leading-none text-white">
                      {s.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <TestimonialCard />
        </div>
      </section>
    </>
  );
};

export default Testimonials;
