import React from 'react';

const StatsCaseStudy = () => (
  <>
    <section className="py-12 px-4 md:py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-screen-xl">
        {/* <!-- Key stats card --> */}
        <div className="relative py-16 rounded-3xl shadow-xl bg-dark-700 lg:py-20">
          {/* <!-- Right background diagonal --> */}
          <svg
            className="absolute top-0 right-1/4 inset-y-0 h-full text-dark-700 w-1/4 z-20"
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
            fill="currentcolor"
          >
            <polygon points="0,0 100,0 0,100" />
          </svg>
          <div className="absolute w-1/2 inset-y-0 h-full left-1/2 bg-dark-800 z-10 rounded-r-3xl" />

          {/* <!-- Card content --> */}
          <div className="flex relative z-10 z-30 flex-col justify-center items-center px-4 mx-auto text-center lg:px-16 lg:text-left">
            {/* <!-- Card header text --> */}
            <div className="relative mx-auto max-w-screen-md text-center">
              <p className="inline-flex z-30 justify-center items-center py-2 px-6 text-sm font-medium tracking-wide text-white bg-gradient-to-r rounded-r-full rounded-tl-full from-dark-800 to-dark-900">
                Key stats
              </p>

              <h3 className="mt-6 text-3xl font-extrabold text-white sm:text-4xl">
                Going above and beyond our client's expectations.
              </h3>
              <p className="mt-6 text-xl text-dark-300">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Repellendus repellat laudantium.
              </p>
            </div>

            {/* <!-- Stats --> */}
            <div className="flex flex-wrap justify-center mt-10 w-full text-center md:mt-12 lg:-mx-4">
              {/* <!-- Stat 1 --> */}
              <div className="w-full relative px-4 md:w-1/3 lg:px-8">
                <p className="text-5xl font-extrabold text-center text-white">
                  $2.1m
                </p>
                <p className="mt-2 text-lg font-medium text-dark-300">
                  Additional revenue (2018)
                </p>
              </div>

              {/* <!-- Stat 2 --> */}
              <div className="mt-8 md:mt-0 w-full relative px-4 md:w-1/3 lg:px-8">
                <p className="text-5xl font-extrabold text-center text-white">
                  12m
                </p>
                <p className="mt-2 text-lg font-medium leading-relaxed text-dark-300">
                  Social interactions a month
                </p>
              </div>

              {/* <!-- Stat 3 --> */}
              <div className="mt-8 md:mt-0 w-full relative px-4 md:w-1/3 lg:px-8">
                <p className="text-5xl font-extrabold text-center text-white">
                  300k
                </p>
                <p className="mt-2 text-lg font-medium leading-relaxed text-dark-300">
                  Unique monthly visitors
                </p>
              </div>
            </div>

            {/* <!-- Link to site --> */}
            <div className="flex justify-center mt-12 w-full lg:mt-16">
              <a
                className="flex relative justify-center items-center px-8 w-auto h-14 text-base font-medium leading-snug text-white group"
                href="/"
              >
                <span className="block absolute top-0 left-0 z-10 w-full h-full bg-gradient-to-r rounded-full transition-all ease-in-out duration-250 from-dark-800 to-dark-900 md:w-14 md:group-hover:w-full" />
                <span className="relative z-20">Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default StatsCaseStudy;
