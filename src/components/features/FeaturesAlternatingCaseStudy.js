import React from 'react';
import WorkImage01 from '../../images/work-image-01.jpg';
import WorkImage02 from '../../images/work-image-02.jpg';
import WorkImage03 from '../../images/work-image-03.jpg';

const FeaturesAlternatingCaseStudy = () => (
  <>
    <section className="py-12 px-4 md:pt-16 sm:pb-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-screen-xl">
        {/* <!-- Section text --> */}
        <div className="mx-auto w-full max-w-xl text-center lg:max-w-3xl md:max-w-2xl">
          <p className="inline-flex justify-center items-center py-2 px-6 text-sm font-medium tracking-wide text-white bg-gradient-to-r rounded-r-full rounded-tl-full from-dark-600 to-dark-700">
            The details
          </p>
          <h2 className="mt-6 text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
            Taking a closer look
          </h2>
          <p className="mt-6 text-xl text-dark-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            sapien massa, convallis a pellentesque nec, egestas non nisi.
          </p>
        </div>

        {/* <!-- Feature --> */}
        <div className="relative mt-12 lg:mt-20 lg:grid lg:grid-cols-2 lg:auto-rows-max lg:gap-x-12">
          {/* <!-- Feature text --> */}
          <div className="flex flex-col justify-center items-center lg:items-start">
            <div className="w-full max-w-lg text-left md:text-center lg:text-left md:max-w-2xl">
              <p className="inline-flex justify-center items-center py-2 px-6 text-xs font-medium tracking-wide text-white bg-gradient-to-r rounded-r-full rounded-tl-full from-dark-600 to-dark-700">
                User focused
              </p>
              <h2 className="mt-4 text-2xl font-extrabold text-white lg:mt-6 sm:text-3xl md:text-4xl">
                How we increased user engagement
              </h2>
              <p className="mt-4 text-lg lg:mt-6 text-dark-300">
                Anim aute id magna aliqua ad ad non deserunt sunt. qui irure qui
                lorem cupidatat commodo. elit sunt amet fugiat veniam occaecat
                fugiat aliqua. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </p>
            </div>
          </div>
          <div className="flex relative justify-center items-center mx-auto mt-10 max-w-lg lg:mt-0 lg:max-w-none">
            <div className="absolute w-full h-full rounded-3xl bg-dark-700 2xl:left-10 2xl:top-10 lg:top-4 lg:left-4 sm:top-8 sm:left-8 ">
              <svg
                className="absolute top-0 right-1/4 inset-y-0 h-full text-dark-700 w-1/4 z-20"
                preserveAspectRatio="none"
                viewBox="0 0 100 100"
                fill="currentcolor"
              >
                <polygon points="0,0 100,0 0,100" />
              </svg>
              <div className="absolute w-1/2 inset-y-0 h-full left-1/2 bg-dark-800 z-10 rounded-r-3xl" />
            </div>

            {/* <!-- Feature image --> */}
            <img
              src={WorkImage01}
              alt=""
              className="object-cover z-30 w-auto h-full rounded-3xl shadow-xl"
            />
          </div>
        </div>

        {/* <!-- Feature --> */}
        <div className="relative mt-16 sm:mt-24 lg:mt-32 lg:grid lg:grid-cols-2 lg:auto-rows-max lg:gap-x-12">
          {/* <!-- Feature text --> */}
          <div className="flex flex-col justify-center items-center lg:order-2 lg:items-start">
            <div className="w-full max-w-lg text-left md:text-center lg:text-left md:max-w-2xl">
              <p className="inline-flex justify-center items-center py-2 px-6 text-xs font-medium tracking-wide text-white bg-gradient-to-r rounded-r-full rounded-tl-full from-dark-600 to-dark-700">
                Performance
              </p>
              <h2 className="mt-4 text-2xl font-extrabold text-white lg:mt-6 sm:text-3xl md:text-4xl">
                How we improved website speed by 70%
              </h2>
              <p className="mt-4 text-lg lg:mt-6 text-dark-300">
                Anim aute id magna aliqua ad ad non deserunt sunt. qui irure qui
                lorem cupidatat commodo. elit sunt amet fugiat veniam occaecat
                fugiat aliqua. Proin in libero a nisi consectetur varius.
              </p>
            </div>
          </div>
          <div className="flex relative justify-center items-center mx-auto mt-10 max-w-lg lg:order-1 lg:mt-0 lg:max-w-none">
            <div className="absolute w-full h-full rounded-3xl bg-dark-700 2xl:right-10 2xl:top-10 lg:top-4 lg:right-4 sm:top-8 sm:right-8 ">
              <svg
                className="absolute top-0 right-1/4 inset-y-0 h-full text-dark-700 w-1/4 z-20"
                preserveAspectRatio="none"
                viewBox="0 0 100 100"
                fill="currentcolor"
              >
                <polygon points="0,0 100,0 0,100" />
              </svg>
              <div className="absolute w-1/2 inset-y-0 h-full left-1/2 bg-dark-800 z-10 rounded-r-3xl" />
            </div>

            {/* <!-- Feature image --> */}
            <img
              src={WorkImage02}
              alt=""
              className="object-cover z-30 w-auto h-full rounded-3xl shadow-xl"
            />
          </div>
        </div>

        {/* <!-- Feature --> */}
        <div className="relative mt-16 sm:mt-24 lg:mt-32 lg:grid lg:grid-cols-2 lg:auto-rows-max lg:gap-x-12">
          {/* <!-- Feature text --> */}
          <div className="flex flex-col justify-center items-center lg:items-start">
            <div className="w-full max-w-lg text-left md:text-center lg:text-left md:max-w-2xl">
              <p className="inline-flex justify-center items-center py-2 px-6 text-xs font-medium tracking-wide text-white bg-gradient-to-r rounded-r-full rounded-tl-full from-dark-600 to-dark-700">
                Product growth
              </p>
              <h2 className="mt-4 text-2xl font-extrabold text-white lg:mt-6 sm:text-3xl md:text-4xl">
                How we achieved 10 growth in revenue
              </h2>
              <p className="mt-4 text-lg lg:mt-6 text-dark-300">
                Anim aute id magna aliqua ad ad non deserunt sunt. qui irure qui
                lorem cupidatat commodo. elit sunt amet fugiat veniam occaecat
                fugiat aliqua. Vestibulum vitae fermentum enim, quis commodo
                odio.
              </p>
            </div>
          </div>
          <div className="flex relative justify-center items-center mx-auto mt-10 max-w-lg lg:mt-0 lg:max-w-none">
            <div className="absolute w-full h-full rounded-3xl bg-dark-700 2xl:left-10 2xl:top-10 lg:top-4 lg:left-4 sm:top-8 sm:left-8 ">
              <svg
                className="absolute top-0 right-1/4 inset-y-0 h-full text-dark-700 w-1/4 z-20"
                preserveAspectRatio="none"
                viewBox="0 0 100 100"
                fill="currentcolor"
              >
                <polygon points="0,0 100,0 0,100" />
              </svg>
              <div className="absolute w-1/2 inset-y-0 h-full left-1/2 bg-dark-800 z-10 rounded-r-3xl" />
            </div>

            {/* <!-- Feature image --> */}
            <img
              src={WorkImage03}
              alt=""
              className="object-cover z-30 w-auto h-full rounded-3xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  </>
);

export default FeaturesAlternatingCaseStudy;
