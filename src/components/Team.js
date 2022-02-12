import React from 'react';
import SectionLabel from './SectionLabel';
import Team1 from '../images/team-01.jpg';
import Team2 from '../images/team-02.jpg';
import Team3 from '../images/team-03.jpg';
import Team4 from '../images/team-04.jpg';
import Team5 from '../images/team-05.jpg';

const Team = () => (
  <>
    <section className="px-4 pt-12 pb-14 md:pt-16 md:pb-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-screen-xl">
        {/* <!-- Section text --> */}
        <div className="mx-auto w-full max-w-xl text-center lg:max-w-3xl md:max-w-2xl">
          <SectionLabel label="The team" />
          <h2 className="mt-6 text-3xl font-extrabold text-dark-950 sm:text-4xl md:text-5xl">
            Decades of experience in design and development
          </h2>
          <p className="mt-6 text-xl text-dark-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eius
            mod tempor incididunt ut labore et
          </p>
        </div>

        {/* <!-- Team section --> */}
        <div className="grid gap-x-6 gap-y-12 mx-auto mt-12 max-w-6xl lg:mt-16 sm:grid-cols-2 md:grid-cols-3 lg:gap-x-12 lg:gap-y-16">
          {/* <!-- Team member --> */}
          <div className="flex flex-col items-center">
            <img
              src={Team1}
              alt=""
              className="object-cover object-center w-64 h-64 rounded shadow-xl"
            />
            <div className="mt-4 text-center">
              <div className="text-xl font-semibold text-dark-950">
                Kaylen Meyer
              </div>
              <div className="text-lg font-medium text-dark-500">CEO</div>

              {/* <!-- Social media links --> */}
              <div className="flex justify-center mt-2 space-x-2">
                <a
                  className="flex justify-center items-center w-10 h-10 rounded transition duration-300 ease-in-out bg-bouquetShades-300 hover:text-bouquetShades-700 hover:bg-bouquetShades-100  text-white"
                  href="/"
                >
                  {/* <!-- TablerIcon name: brand-instagram --> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
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
                    <rect x="4" y="4" width="16" height="16" rx="4" />
                    <circle cx="12" cy="12" r="3" />
                    <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                  </svg>
                </a>
                <a
                  className="flex justify-center items-center w-10 h-10 rounded transition duration-300 ease-in-out bg-bouquetShades-300 hover:text-bouquetShades-700 hover:bg-bouquetShades-100  text-white"
                  href="/"
                >
                  {/* <!-- TablerIcon name: brand-facebook --> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
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
                    <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                  </svg>
                </a>
                <a
                  className="flex justify-center items-center w-10 h-10 rounded transition duration-300 ease-in-out bg-bouquetShades-300 hover:text-bouquetShades-700 hover:bg-bouquetShades-100  text-white"
                  href="/"
                >
                  {/* <!-- TablerIcon name: brand-twitter --> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
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
                    <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* <!-- Team member --> */}
          <div className="flex flex-col items-center">
            <img
              src={Team2}
              alt=""
              className="object-cover object-center w-64 h-64 rounded shadow-xl"
            />
            <div className="mt-4 text-center">
              <div className="text-xl font-semibold text-dark-950">
                Coriss Ambady
              </div>
              <div className="text-lg font-medium text-dark-500">
                Lead Developer
              </div>

              {/* <!-- Social media links --> */}
              <div className="flex justify-center mt-2 space-x-2">
                <a
                  className="flex justify-center items-center w-10 h-10 rounded transition duration-300 ease-in-out bg-bouquetShades-300 hover:text-bouquetShades-700 hover:bg-bouquetShades-100  text-white"
                  href="/"
                >
                  {/* <!-- TablerIcon name: brand-instagram --> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
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
                    <rect x="4" y="4" width="16" height="16" rx="4" />
                    <circle cx="12" cy="12" r="3" />
                    <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                  </svg>
                </a>
                <a
                  className="flex justify-center items-center w-10 h-10 rounded transition duration-300 ease-in-out bg-bouquetShades-300 hover:text-bouquetShades-700 hover:bg-bouquetShades-100  text-white"
                  href="/"
                >
                  {/* <!-- TablerIcon name: brand-facebook --> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
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
                    <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                  </svg>
                </a>
                <a
                  className="flex justify-center items-center w-10 h-10 rounded transition duration-300 ease-in-out bg-bouquetShades-300 hover:text-bouquetShades-700 hover:bg-bouquetShades-100  text-white"
                  href="/"
                >
                  {/* <!-- TablerIcon name: brand-twitter --> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
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
                    <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* <!-- Team member --> */}
          <div className="flex flex-col items-center">
            <img
              src={Team3}
              alt=""
              className="object-cover object-center w-64 h-64 rounded shadow-xl"
            />
            <div className="mt-4 text-center">
              <div className="text-xl font-semibold text-dark-950">
                Lester Mccall
              </div>
              <div className="text-lg font-medium text-dark-500">
                Senior Designer
              </div>

              {/* <!-- Social media links --> */}
              <div className="flex justify-center mt-2 space-x-2">
                <a
                  className="flex justify-center items-center w-10 h-10 rounded transition duration-300 ease-in-out bg-bouquetShades-300 hover:text-bouquetShades-700 hover:bg-bouquetShades-100  text-white"
                  href="/"
                >
                  {/* <!-- TablerIcon name: brand-instagram --> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
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
                    <rect x="4" y="4" width="16" height="16" rx="4" />
                    <circle cx="12" cy="12" r="3" />
                    <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                  </svg>
                </a>
                <a
                  className="flex justify-center items-center w-10 h-10 rounded transition duration-300 ease-in-out bg-bouquetShades-300 hover:text-bouquetShades-700 hover:bg-bouquetShades-100  text-white"
                  href="/"
                >
                  {/* <!-- TablerIcon name: brand-facebook --> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
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
                    <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                  </svg>
                </a>
                <a
                  className="flex justify-center items-center w-10 h-10 rounded transition duration-300 ease-in-out bg-bouquetShades-300 hover:text-bouquetShades-700 hover:bg-bouquetShades-100  text-white"
                  href="/"
                >
                  {/* <!-- TablerIcon name: brand-twitter --> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
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
                    <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* <!-- Team member --> */}
          <div className="flex flex-col items-center">
            <img
              src={Team3}
              alt=""
              className="object-cover object-center w-64 h-64 rounded shadow-xl"
            />
            <div className="mt-4 text-center">
              <div className="text-xl font-semibold text-dark-950">
                Misha Mustafa
              </div>
              <div className="text-lg font-medium text-dark-500">
                Studio Artist
              </div>

              {/* <!-- Social media links --> */}
              <div className="flex justify-center mt-2 space-x-2">
                <a
                  className="flex justify-center items-center w-10 h-10 rounded transition duration-300 ease-in-out bg-bouquetShades-300 hover:text-bouquetShades-700 hover:bg-bouquetShades-100  text-white"
                  href="/"
                >
                  {/* <!-- TablerIcon name: brand-instagram --> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
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
                    <rect x="4" y="4" width="16" height="16" rx="4" />
                    <circle cx="12" cy="12" r="3" />
                    <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                  </svg>
                </a>
                <a
                  className="flex justify-center items-center w-10 h-10 rounded transition duration-300 ease-in-out bg-bouquetShades-300 hover:text-bouquetShades-700 hover:bg-bouquetShades-100  text-white"
                  href="/"
                >
                  {/* <!-- TablerIcon name: brand-facebook --> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
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
                    <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                  </svg>
                </a>
                <a
                  className="flex justify-center items-center w-10 h-10 rounded transition duration-300 ease-in-out bg-bouquetShades-300 hover:text-bouquetShades-700 hover:bg-bouquetShades-100  text-white"
                  href="/"
                >
                  {/* <!-- TablerIcon name: brand-twitter --> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
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
                    <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* <!-- Team member --> */}
          <div className="flex flex-col items-center">
            <img
              src={Team4}
              alt=""
              className="object-cover object-center w-64 h-64 rounded shadow-xl"
            />
            <div className="mt-4 text-center">
              <div className="text-xl font-semibold text-dark-950">
                Stefan Stefancik
              </div>
              <div className="text-lg font-medium text-dark-500">Designer</div>
              {/* <!-- Social media links --> */}
              <div className="flex justify-center mt-2 space-x-2">
                <a
                  className="flex justify-center items-center w-10 h-10 rounded transition duration-300 ease-in-out bg-bouquetShades-300 hover:text-bouquetShades-700 hover:bg-bouquetShades-100  text-white"
                  href="/"
                >
                  {/* <!-- TablerIcon name: brand-instagram --> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
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
                    <rect x="4" y="4" width="16" height="16" rx="4" />
                    <circle cx="12" cy="12" r="3" />
                    <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                  </svg>
                </a>
                <a
                  className="flex justify-center items-center w-10 h-10 rounded transition duration-300 ease-in-out bg-bouquetShades-300 hover:text-bouquetShades-700 hover:bg-bouquetShades-100  text-white"
                  href="/"
                >
                  {/* <!-- TablerIcon name: brand-facebook --> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
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
                    <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                  </svg>
                </a>
                <a
                  className="flex justify-center items-center w-10 h-10 rounded transition duration-300 ease-in-out bg-bouquetShades-300 hover:text-bouquetShades-700 hover:bg-bouquetShades-100  text-white"
                  href="/"
                >
                  {/* <!-- TablerIcon name: brand-twitter --> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
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
                    <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* <!-- Team member --> */}
          <div className="flex flex-col items-center">
            <img
              src={Team5}
              alt=""
              className="object-cover object-center w-64 h-64 rounded shadow-xl"
            />
            <div className="mt-4 text-center">
              <div className="text-xl font-semibold text-dark-950">
                Vivien Smith
              </div>
              <div className="text-lg font-medium text-dark-500">Developer</div>

              {/* <!-- Social media links --> */}
              <div className="flex justify-center mt-2 space-x-2">
                <a
                  className="flex justify-center items-center w-10 h-10 rounded transition duration-300 ease-in-out bg-bouquetShades-300 hover:text-bouquetShades-700 hover:bg-bouquetShades-100  text-white"
                  href="/"
                >
                  {/* <!-- TablerIcon name: brand-instagram --> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
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
                    <rect x="4" y="4" width="16" height="16" rx="4" />
                    <circle cx="12" cy="12" r="3" />
                    <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                  </svg>
                </a>
                <a
                  className="flex justify-center items-center w-10 h-10 rounded transition duration-300 ease-in-out bg-bouquetShades-300 hover:text-bouquetShades-700 hover:bg-bouquetShades-100  text-white"
                  href="/"
                >
                  {/* <!-- TablerIcon name: brand-facebook --> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
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
                    <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                  </svg>
                </a>
                <a
                  className="flex justify-center items-center w-10 h-10 rounded transition duration-300 ease-in-out bg-bouquetShades-300 hover:text-bouquetShades-700 hover:bg-bouquetShades-100  text-white"
                  href="/"
                >
                  {/* <!-- TablerIcon name: brand-twitter --> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
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
                    <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Team;
