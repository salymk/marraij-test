import React from 'react';
import { Link } from 'gatsby';
import SectionLabel from './SectionLabel';
import FilterLabel from './FilterLabel';
import WorkImg1 from '../images/work-image-01.jpg';
import WorkImg2 from '../images/work-image-02.jpg';
import WorkImg3 from '../images/work-image-03.jpg';
import WorkImg4 from '../images/work-image-04.jpg';
import WorkImg5 from '../images/work-image-05.jpg';
import WorkImg6 from '../images/work-image-06.jpg';
import WorkImg7 from '../images/work-image-07.jpg';
import WorkImg8 from '../images/work-image-08.jpg';

const WorkListWithFilters = () => (
  <>
    <section className="py-12 px-4 md:py-16 sm:px-6 lg:px-8">
      {/* <!-- Section text --> */}
      <div className="mx-auto max-w-xl text-center md:max-w-2xl lg:text-left lg:max-w-screen-xl">
        <SectionLabel label="Explore" />
        <div className="grid gap-6 mt-6 w-full lg:grid-cols-5">
          <div className="lg:col-span-3">
            <h2 className="text-3xl font-extrabold text-dark-950 sm:text-4xl md:text-5xl">
              Filter through hundreds of our projects by industry
            </h2>
          </div>

          <div className="lg:col-span-2">
            <p className="text-xl text-dark-700">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eius
              mod tempor incididunt ut labore et.
            </p>
          </div>
        </div>
      </div>

      {/* <!-- Projects section --> */}
      <div className="mx-auto mt-10 max-w-screen-xl md:mt-12 lg:mt-16">
        <div className="grid md:grid-cols-12 md:gap-8 lg:gap-12 xl:gap-16">
          {/* <!-- Projects container --> */}
          <div className="overflow-hidden order-2 mt-12 md:mt-0 md:order-1 md:col-span-9">
            {/* <!-- Projects container --> */}
            <div className="grid gap-6 lg:grid-cols-2 md:gap-8">
              {/* <!-- Project 1 --> */}
              <div className="mx-auto max-w-lg rounded shadow-xl bg-bouquetShades-300">
                <a href="case-study.html">
                  <div
                    className="w-full h-64 bg-center bg-cover rounded-t"
                    style={{ backgroundImage: `url(${WorkImg1})` }}
                  >
                    <p className="inline-flex justify-center items-center py-2 px-6 mt-4 ml-6 text-xs font-medium tracking-wide text-white bg-gradient-to-r rounded-r-full rounded-tl-full lg:ml-4 xl:ml-6 from-bouquetShades-300 to-bouquetShades-500">
                      Ecommerce
                    </p>
                  </div>
                </a>
                <div className="p-6 w-full lg:p-4 xl:p-6">
                  <div className="flex flex-wrap w-full">
                    <div className="w-1/2 flex items-center justify-start">
                      {/* <!-- TablerIcon name: calendar --> */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-white"
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
                        <rect x="4" y="5" width="16" height="16" rx="2" />
                        <line x1="16" y1="3" x2="16" y2="7" />
                        <line x1="8" y1="3" x2="8" y2="7" />
                        <line x1="4" y1="11" x2="20" y2="11" />
                        <line x1="11" y1="15" x2="12" y2="15" />
                        <line x1="12" y1="15" x2="12" y2="18" />
                      </svg>
                      <div className="ml-2 text-base font-medium leading-6 text-white">
                        Jan. 2019
                      </div>
                    </div>
                    <div className="flex w-1/2 justify-end space-x-1">
                      {/* <!-- TablerIcon name: brand-html5 --> */}
                      <svg
                        className="w-6 h-6 text-white"
                        xmlns="http://www.w3.org/2000/svg"
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
                        <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
                        <path d="M15.5 8h-7l.5 4h6l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" />
                      </svg>

                      {/* <!-- TablerIcon name: brand-tailwind --> */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-white"
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
                        <path d="M11.667 6c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 2 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968zm-4 6.5c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 1.975 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968z" />
                      </svg>
                    </div>
                  </div>
                  <a href="case-study.html">
                    <h3 className="mt-6 text-xl font-semibold leading-6 text-white md:text-2xl">
                      The Source
                    </h3>
                  </a>
                  <p className="mt-1 text-base leading-relaxed text-dark-300">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, do
                    eius mod tempor.
                  </p>
                  <div className="mt-8">
                    <Link
                      className="inline-flex relative justify-center items-center px-8 w-auto h-12 text-base font-medium leading-snug text-white md:h-14 group"
                      to="/case-study"
                    >
                      <span className="block absolute top-0 left-0 z-10 w-full h-full rounded transition-all ease-in-out duration-250 bg-bouquetShades-600 group-hover:bg-bouquetShades-700" />
                      <span className="relative z-20">Case study</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* <!-- Project 2 --> */}
              <div className="mx-auto max-w-lg rounded shadow-xl bg-bouquetShades-300">
                <a href="case-study.html">
                  <div
                    className="w-full h-64 bg-center bg-cover rounded-t"
                    style={{ backgroundImage: `url(${WorkImg1})` }}
                  >
                    <p className="inline-flex justify-center items-center py-2 px-6 mt-4 ml-6 text-xs font-medium tracking-wide text-white bg-gradient-to-r rounded-r-full rounded-tl-full lg:ml-4 xl:ml-6 from-bouquetShades-300 to-bouquetShades-500">
                      Ecommerce
                    </p>
                  </div>
                </a>
                <div className="p-6 w-full lg:p-4 xl:p-6">
                  <div className="flex flex-wrap w-full">
                    <div className="w-1/2 flex items-center justify-start">
                      {/* <!-- TablerIcon name: calendar --> */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-white"
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
                        <rect x="4" y="5" width="16" height="16" rx="2" />
                        <line x1="16" y1="3" x2="16" y2="7" />
                        <line x1="8" y1="3" x2="8" y2="7" />
                        <line x1="4" y1="11" x2="20" y2="11" />
                        <line x1="11" y1="15" x2="12" y2="15" />
                        <line x1="12" y1="15" x2="12" y2="18" />
                      </svg>
                      <div className="ml-2 text-base font-medium leading-6 text-white">
                        Jan. 2019
                      </div>
                    </div>
                    <div className="flex w-1/2 justify-end space-x-1">
                      {/* <!-- TablerIcon name: brand-html5 --> */}
                      <svg
                        className="w-6 h-6 text-white"
                        xmlns="http://www.w3.org/2000/svg"
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
                        <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
                        <path d="M15.5 8h-7l.5 4h6l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" />
                      </svg>

                      {/* <!-- TablerIcon name: brand-tailwind --> */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-white"
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
                        <path d="M11.667 6c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 2 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968zm-4 6.5c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 1.975 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968z" />
                      </svg>
                    </div>
                  </div>
                  <a href="case-study.html">
                    <h3 className="mt-6 text-xl font-semibold leading-6 text-white md:text-2xl">
                      The Source
                    </h3>
                  </a>
                  <p className="mt-1 text-base leading-relaxed text-dark-300">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, do
                    eius mod tempor.
                  </p>
                  <div className="mt-8">
                    <Link
                      className="inline-flex relative justify-center items-center px-8 w-auto h-12 text-base font-medium leading-snug text-white md:h-14 group"
                      to="/case-study"
                    >
                      <span className="block absolute top-0 left-0 z-10 w-full h-full rounded transition-all ease-in-out duration-250 bg-bouquetShades-600 group-hover:bg-bouquetShades-700" />
                      <span className="relative z-20">Case study</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* <!-- Project 3 --> */}
              <div className="mx-auto max-w-lg rounded shadow-xl bg-bouquetShades-300">
                <a href="case-study.html">
                  <div
                    className="w-full h-64 bg-center bg-cover rounded-t"
                    style={{ backgroundImage: `url(${WorkImg1})` }}
                  >
                    <p className="inline-flex justify-center items-center py-2 px-6 mt-4 ml-6 text-xs font-medium tracking-wide text-white bg-gradient-to-r rounded-r-full rounded-tl-full lg:ml-4 xl:ml-6 from-bouquetShades-300 to-bouquetShades-500">
                      Ecommerce
                    </p>
                  </div>
                </a>
                <div className="p-6 w-full lg:p-4 xl:p-6">
                  <div className="flex flex-wrap w-full">
                    <div className="w-1/2 flex items-center justify-start">
                      {/* <!-- TablerIcon name: calendar --> */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-white"
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
                        <rect x="4" y="5" width="16" height="16" rx="2" />
                        <line x1="16" y1="3" x2="16" y2="7" />
                        <line x1="8" y1="3" x2="8" y2="7" />
                        <line x1="4" y1="11" x2="20" y2="11" />
                        <line x1="11" y1="15" x2="12" y2="15" />
                        <line x1="12" y1="15" x2="12" y2="18" />
                      </svg>
                      <div className="ml-2 text-base font-medium leading-6 text-white">
                        Jan. 2019
                      </div>
                    </div>
                    <div className="flex w-1/2 justify-end space-x-1">
                      {/* <!-- TablerIcon name: brand-html5 --> */}
                      <svg
                        className="w-6 h-6 text-white"
                        xmlns="http://www.w3.org/2000/svg"
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
                        <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
                        <path d="M15.5 8h-7l.5 4h6l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" />
                      </svg>

                      {/* <!-- TablerIcon name: brand-tailwind --> */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-white"
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
                        <path d="M11.667 6c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 2 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968zm-4 6.5c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 1.975 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968z" />
                      </svg>
                    </div>
                  </div>
                  <a href="case-study.html">
                    <h3 className="mt-6 text-xl font-semibold leading-6 text-white md:text-2xl">
                      The Source
                    </h3>
                  </a>
                  <p className="mt-1 text-base leading-relaxed text-dark-300">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, do
                    eius mod tempor.
                  </p>
                  <div className="mt-8">
                    <Link
                      className="inline-flex relative justify-center items-center px-8 w-auto h-12 text-base font-medium leading-snug text-white md:h-14 group"
                      to="/case-study"
                    >
                      <span className="block absolute top-0 left-0 z-10 w-full h-full rounded transition-all ease-in-out duration-250 bg-bouquetShades-600 group-hover:bg-bouquetShades-700" />
                      <span className="relative z-20">Case study</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* <!-- Project 4 --> */}
              <div className="mx-auto max-w-lg rounded shadow-xl bg-bouquetShades-300">
                <a href="case-study.html">
                  <div
                    className="w-full h-64 bg-center bg-cover rounded-t"
                    style={{ backgroundImage: `url(${WorkImg1})` }}
                  >
                    <p className="inline-flex justify-center items-center py-2 px-6 mt-4 ml-6 text-xs font-medium tracking-wide text-white bg-gradient-to-r rounded-r-full rounded-tl-full lg:ml-4 xl:ml-6 from-bouquetShades-300 to-bouquetShades-500">
                      Ecommerce
                    </p>
                  </div>
                </a>
                <div className="p-6 w-full lg:p-4 xl:p-6">
                  <div className="flex flex-wrap w-full">
                    <div className="w-1/2 flex items-center justify-start">
                      {/* <!-- TablerIcon name: calendar --> */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-white"
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
                        <rect x="4" y="5" width="16" height="16" rx="2" />
                        <line x1="16" y1="3" x2="16" y2="7" />
                        <line x1="8" y1="3" x2="8" y2="7" />
                        <line x1="4" y1="11" x2="20" y2="11" />
                        <line x1="11" y1="15" x2="12" y2="15" />
                        <line x1="12" y1="15" x2="12" y2="18" />
                      </svg>
                      <div className="ml-2 text-base font-medium leading-6 text-white">
                        Jan. 2019
                      </div>
                    </div>
                    <div className="flex w-1/2 justify-end space-x-1">
                      {/* <!-- TablerIcon name: brand-html5 --> */}
                      <svg
                        className="w-6 h-6 text-white"
                        xmlns="http://www.w3.org/2000/svg"
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
                        <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
                        <path d="M15.5 8h-7l.5 4h6l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" />
                      </svg>

                      {/* <!-- TablerIcon name: brand-tailwind --> */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-white"
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
                        <path d="M11.667 6c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 2 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968zm-4 6.5c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 1.975 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968z" />
                      </svg>
                    </div>
                  </div>
                  <a href="case-study.html">
                    <h3 className="mt-6 text-xl font-semibold leading-6 text-white md:text-2xl">
                      The Source
                    </h3>
                  </a>
                  <p className="mt-1 text-base leading-relaxed text-dark-300">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, do
                    eius mod tempor.
                  </p>
                  <div className="mt-8">
                    <Link
                      className="inline-flex relative justify-center items-center px-8 w-auto h-12 text-base font-medium leading-snug text-white md:h-14 group"
                      to="/case-study"
                    >
                      <span className="block absolute top-0 left-0 z-10 w-full h-full rounded transition-all ease-in-out duration-250 bg-bouquetShades-600 group-hover:bg-bouquetShades-700" />
                      <span className="relative z-20">Case study</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* <!-- Project 5 --> */}
              <div className="mx-auto max-w-lg rounded shadow-xl bg-bouquetShades-300">
                <a href="case-study.html">
                  <div
                    className="w-full h-64 bg-center bg-cover rounded-t"
                    style={{ backgroundImage: `url(${WorkImg1})` }}
                  >
                    <p className="inline-flex justify-center items-center py-2 px-6 mt-4 ml-6 text-xs font-medium tracking-wide text-white bg-gradient-to-r rounded-r-full rounded-tl-full lg:ml-4 xl:ml-6 from-bouquetShades-300 to-bouquetShades-500">
                      Ecommerce
                    </p>
                  </div>
                </a>
                <div className="p-6 w-full lg:p-4 xl:p-6">
                  <div className="flex flex-wrap w-full">
                    <div className="w-1/2 flex items-center justify-start">
                      {/* <!-- TablerIcon name: calendar --> */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-white"
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
                        <rect x="4" y="5" width="16" height="16" rx="2" />
                        <line x1="16" y1="3" x2="16" y2="7" />
                        <line x1="8" y1="3" x2="8" y2="7" />
                        <line x1="4" y1="11" x2="20" y2="11" />
                        <line x1="11" y1="15" x2="12" y2="15" />
                        <line x1="12" y1="15" x2="12" y2="18" />
                      </svg>
                      <div className="ml-2 text-base font-medium leading-6 text-white">
                        Jan. 2019
                      </div>
                    </div>
                    <div className="flex w-1/2 justify-end space-x-1">
                      {/* <!-- TablerIcon name: brand-html5 --> */}
                      <svg
                        className="w-6 h-6 text-white"
                        xmlns="http://www.w3.org/2000/svg"
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
                        <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
                        <path d="M15.5 8h-7l.5 4h6l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" />
                      </svg>

                      {/* <!-- TablerIcon name: brand-tailwind --> */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-white"
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
                        <path d="M11.667 6c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 2 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968zm-4 6.5c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 1.975 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968z" />
                      </svg>
                    </div>
                  </div>
                  <a href="case-study.html">
                    <h3 className="mt-6 text-xl font-semibold leading-6 text-white md:text-2xl">
                      The Source
                    </h3>
                  </a>
                  <p className="mt-1 text-base leading-relaxed text-dark-300">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, do
                    eius mod tempor.
                  </p>
                  <div className="mt-8">
                    <Link
                      className="inline-flex relative justify-center items-center px-8 w-auto h-12 text-base font-medium leading-snug text-white md:h-14 group"
                      to="/case-study"
                    >
                      <span className="block absolute top-0 left-0 z-10 w-full h-full rounded transition-all ease-in-out duration-250 bg-bouquetShades-600 group-hover:bg-bouquetShades-700" />
                      <span className="relative z-20">Case study</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* <!-- Project 6 --> */}
              <div className="mx-auto max-w-lg rounded shadow-xl bg-bouquetShades-300">
                <a href="case-study.html">
                  <div
                    className="w-full h-64 bg-center bg-cover rounded-t"
                    style={{ backgroundImage: `url(${WorkImg1})` }}
                  >
                    <p className="inline-flex justify-center items-center py-2 px-6 mt-4 ml-6 text-xs font-medium tracking-wide text-white bg-gradient-to-r rounded-r-full rounded-tl-full lg:ml-4 xl:ml-6 from-bouquetShades-300 to-bouquetShades-500">
                      Ecommerce
                    </p>
                  </div>
                </a>
                <div className="p-6 w-full lg:p-4 xl:p-6">
                  <div className="flex flex-wrap w-full">
                    <div className="w-1/2 flex items-center justify-start">
                      {/* <!-- TablerIcon name: calendar --> */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-white"
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
                        <rect x="4" y="5" width="16" height="16" rx="2" />
                        <line x1="16" y1="3" x2="16" y2="7" />
                        <line x1="8" y1="3" x2="8" y2="7" />
                        <line x1="4" y1="11" x2="20" y2="11" />
                        <line x1="11" y1="15" x2="12" y2="15" />
                        <line x1="12" y1="15" x2="12" y2="18" />
                      </svg>
                      <div className="ml-2 text-base font-medium leading-6 text-white">
                        Jan. 2019
                      </div>
                    </div>
                    <div className="flex w-1/2 justify-end space-x-1">
                      {/* <!-- TablerIcon name: brand-html5 --> */}
                      <svg
                        className="w-6 h-6 text-white"
                        xmlns="http://www.w3.org/2000/svg"
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
                        <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
                        <path d="M15.5 8h-7l.5 4h6l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" />
                      </svg>

                      {/* <!-- TablerIcon name: brand-tailwind --> */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-white"
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
                        <path d="M11.667 6c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 2 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968zm-4 6.5c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 1.975 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968z" />
                      </svg>
                    </div>
                  </div>
                  <a href="case-study.html">
                    <h3 className="mt-6 text-xl font-semibold leading-6 text-white md:text-2xl">
                      The Source
                    </h3>
                  </a>
                  <p className="mt-1 text-base leading-relaxed text-dark-300">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, do
                    eius mod tempor.
                  </p>
                  <div className="mt-8">
                    <Link
                      className="inline-flex relative justify-center items-center px-8 w-auto h-12 text-base font-medium leading-snug text-white md:h-14 group"
                      to="/case-study"
                    >
                      <span className="block absolute top-0 left-0 z-10 w-full h-full rounded transition-all ease-in-out duration-250 bg-bouquetShades-600 group-hover:bg-bouquetShades-700" />
                      <span className="relative z-20">Case study</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Filters --> */}
          <div className="order-1 md:order-2 md:col-span-3">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-dark-950">
                Filter Projects
              </h3>

              {/* <!-- Filters container --> */}
              <div className="flex flex-wrap justify-center mt-3 space-y-3 space-x-3 md:mt-6 md:justify-start md:flex-col md:space-x-0">
                <FilterLabel label="All" isActive={false} />
                <FilterLabel label="Ecommerce" isActive />
                <FilterLabel label="Book" isActive={false} />
                <FilterLabel label="Real Estate" isActive={false} />
                <FilterLabel label="Startup" isActive={false} />
                <FilterLabel label="Food" isActive={false} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default WorkListWithFilters;
