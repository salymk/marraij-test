import React from 'react';
import FeaturedWorkImg from '../../images/featured-work-image-01.jpg';

const HeroCaseStudy = () => (
  <>
    <section className="py-12 px-4 md:py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-screen-xl">
        {/* <!-- Hero text --> */}
        <div className="mx-auto w-full text-center max-w-screen-4xl xl:max-w-5xl">
          <p className="inline-flex justify-center items-center py-2 px-6 text-sm font-medium tracking-wide text-white bg-gradient-to-r rounded-r-full rounded-tl-full from-dark-600 to-dark-700">
            Case study
          </p>
          <h1 className="mt-4 text-4xl font-extrabold text-white md:mt-5 sm:text-5xl md:text-6xl">
            From idea to a thriving social platform
          </h1>
        </div>

        {/* <!-- Features container --> */}
        <div className="grid gap-10 mx-auto mt-12 w-full max-w-lg lg:grid-cols-3 lg:grid-x-16 lg:mt-16 lg:max-w-none">
          {/* <!-- Feature --> */}
          <div className="w-full">
            <span className="flex justify-center items-center mx-auto w-16 h-16 bg-gradient-to-r rounded-full shadow-xl from-dark-600 to-dark-700">
              {/* <!-- TablerIcon name: puzzle --> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-9 h-9 text-dark-300"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
              </svg>
            </span>

            <h3 className="mt-5 text-2xl font-semibold text-center text-white">
              Challenge
            </h3>
            <p className="mt-2 text-lg leading-relaxed text-center text-dark-300">
              Lorem ipsum dolor sit amet, consectetur adipisicing elitdo eius
              mod tempor.
            </p>
          </div>

          {/* <!-- Feature --> */}
          <div className="w-full">
            <span className="flex justify-center items-center mx-auto w-16 h-16 bg-gradient-to-r rounded-full shadow-xl from-dark-600 to-dark-700">
              {/* <!-- TablerIcon name: stack --> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-9 h-9 text-dark-300"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <polyline points="12 4 4 8 12 12 20 8 12 4" />
                <polyline points="4 12 12 16 20 12" />
                <polyline points="4 16 12 20 20 16" />
              </svg>
            </span>

            <h3 className="mt-5 text-2xl font-semibold text-center text-white">
              Services
            </h3>
            <p className="mt-2 text-lg leading-relaxed text-center text-dark-300">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eius
              mod tempor.
            </p>
          </div>

          {/* <!-- Feature --> */}
          <div className="w-full">
            <span className="flex justify-center items-center mx-auto w-16 h-16 bg-gradient-to-r rounded-full shadow-xl from-dark-600 to-dark-700">
              {/* <!-- TablerIcon name: bulb --> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-9 h-9 text-dark-300"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" />
                <path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" />
                <line x1="9.7" y1="17" x2="14.3" y2="17" />
              </svg>
            </span>

            <h3 className="mt-5 text-2xl font-semibold text-center text-white">
              Results
            </h3>
            <p className="mt-2 text-lg leading-relaxed text-center text-dark-300">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eius
              mod tempor.
            </p>
          </div>
        </div>

        {/* <!-- Hero image -->  */}
        <div className="mx-auto mt-12 rounded-3xl shadow-xl lg:mt-16">
          <img
            className="max-w-full h-auto align-middle rounded-3xl"
            src={FeaturedWorkImg}
            alt=""
          />
        </div>
      </div>
    </section>
  </>
);

export default HeroCaseStudy;
