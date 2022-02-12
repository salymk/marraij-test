import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

const CTA = () => {
  const data = useStaticQuery(graphql`
    {
      wpPage(title: { eq: "Call To Action" }) {
        callToAction {
          title
          button {
            text
            link
          }
        }
      }
    }
  `);

  const { title, button } = data.wpPage.callToAction;
  return (
    <>
      <section className="py-12 px-4 mx-auto max-w-screen-xl md:py-16 sm:px-6 lg:px-8">
        {/* CTA card */}
        <div className="relative py-16 rounded bg-white lg:py-20">
          {/* Right background diagonal */}
          <svg
            className="absolute top-0 right-1/4 inset-y-0 h-full text-white w-1/4 z-20"
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
            fill="currentcolor"
          >
            <polygon points="0,0 100,0 0,100" />
          </svg>
          <div className="absolute w-1/2 inset-y-0 h-full left-1/2 bg-bouquetShades-300 z-10 rounded-r" />
          {/* CTA content  */}
          <div className="flex relative z-10 z-30 flex-col justify-center items-center px-4 mx-auto text-center sm:px-16 lg:flex-row lg:text-left">
            <div className="max-w-lg font-bold text-2xl sm:text-4xl lg:w-1/2">
              <h5 className="text-4xl font-extrabold tracking-tight text-dark-950 sm:text-5xl">
                {title}
              </h5>
            </div>
            <div className="max-w-lg flex justify-center mt-10 lg:w-1/2 lg:mt-0 lg:justify-end">
              <Link
                className="inline-flex relative justify-center items-center px-8 w-auto h-12 text-base font-medium leading-snug text-white md:h-14 group"
                to={`/${button.link}`}
              >
                <span className="block absolute top-0 left-0 z-10 w-full h-full rounded transition-all ease-in-out duration-250  bg-bouquetShades-600 group-hover:text-bouquetShades-700 group-hover:bg-bouquetShades-100" />
                <span className="relative z-20">{button.text}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTA;
