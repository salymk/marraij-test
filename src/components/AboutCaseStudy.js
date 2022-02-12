import React from 'react';

const AboutCaseStudy = () => (
  <>
    <section className="py-12 px-4 md:py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-screen-md text-center lg:max-w-screen-xl">
        <p className="inline-flex justify-center items-center py-2 px-6 text-sm font-medium tracking-wide text-white bg-gradient-to-r rounded-r-full rounded-tl-full from-dark-600 to-dark-700">
          About the project
        </p>

        {/* <!-- Project description --> */}
        <div className="flex flex-wrap mx-auto mt-6 w-full text-center">
          <div className="w-full lg:w-4/5 mx-auto">
            <p className="text-2xl font-medium tracking-tight text-white sm:text-3xl lg:text-4xl lg:leading-tight">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eius
              mod tempor incididunt ut labore et. Ad cum decore expetenda
              dissentiet, civibus patrioque referrentur id nec, ei eam simul
              diceret.
            </p>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default AboutCaseStudy;
