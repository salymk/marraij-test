import React from 'react';
import SectionLabel from '../SectionLabel';
import FeaturesImg1 from '../../images/features-alternating-simple-01.jpg';
import FeaturesImg2 from '../../images/features-alternating-simple-02.jpg';
import FeaturesImg3 from '../../images/features-alternating-simple-03.jpg';

const FeaturesAlternatingSimple = () => (
  <>
    <section className="pt-10 pb-10 md:pb-12 md:pt-20 lg:pt-36 bg-bouquetTints-100">
      {/* <!-- Features container --> */}
      <div className="mx-auto w-full max-w-screen-xl">
        {/* <!-- Feature --> */}
        <div className="px-0 w-full md:grid md:grid-cols-2 lg:gap-x-12 xl:gap-x-36 md:gap-8 lg:px-6">
          {/* <!-- Feature text --> */}
          <div className="flex flex-col justify-center px-4 sm:px-6 md:pl-0 md:order-2 lg:px-0">
            <div>
              <SectionLabel label="Product development" />
            </div>
            <h3 className="mt-4 text-3xl font-extrabold text-dark-950 md:mt-6 sm:text-4xl lg:text-5xl">
              Innovative digital solutions
            </h3>
            <p className="mt-4 text-xl md:mt-6 text-dark-700">
              Lorem ipsum dolor, sit amet consectetur elit do eius mod tempor
              labore sit amet. Praesent sapien massa, convallis a pellentesque
              et.
            </p>
          </div>

          {/* <!-- Feature image --> */}
          <div className="mt-10 md:mt-0 relative w-full md:rounded-r lg:rounded-l pt-11/12 md:order-1">
            <img
              src={FeaturesImg1}
              alt=""
              className="object-cover object-center absolute inset-y-0 w-full h-full shadow-xl md:rounded-r lg:rounded-l"
            />
          </div>
        </div>

        {/* <!-- Feature --> */}
        <div className="px-0 mt-20 w-full md:mt-24 md:grid md:grid-cols-2 lg:gap-x-12 xl:gap-x-36 md:gap-8 lg:mt-32 lg:px-6">
          {/* <!-- Feature text --> */}
          <div className="flex flex-col justify-center px-4 sm:px-6 md:pr-0 lg:px-0">
            <div>
              <SectionLabel label="Design" />
            </div>
            <h3 className="mt-4 text-3xl font-extrabold text-dark-950 md:mt-6 sm:text-4xl lg:text-5xl">
              Designing for better user experiences
            </h3>
            <p className="mt-4 text-xl md:mt-6 text-dark-700">
              Lorem ipsum dolor, sit amet consectetur elit do eius mod tempor
              labore sit amet. Praesent sapien massa, convallis a pellentesque
              et.
            </p>
          </div>

          {/* <!-- Feature image --> */}
          <div className="mt-10 md:mt-0 relative w-full md:rounded-l lg:rounded-r pt-11/12">
            <img
              src={FeaturesImg2}
              alt=""
              className="object-cover object-center absolute inset-y-0 w-full h-full shadow-xl md:rounded-l lg:rounded-r"
            />
          </div>
        </div>

        {/* <!-- Feature --> */}
        <div className="px-0 mt-20 w-full md:mt-24 lg:mt-32 md:grid md:grid-cols-2 lg:gap-x-12 xl:gap-x-36 md:gap-8 lg:px-6">
          {/* <!-- Feature text --> */}
          <div className="flex flex-col justify-center px-4 sm:px-6 md:pl-0 md:order-2 lg:px-0">
            <div>
              <SectionLabel label="Optimization" />
            </div>
            <h3 className="mt-4 text-3xl font-extrabold text-dark-950 md:mt-6 sm:text-4xl lg:text-5xl">
              State of the art performance
            </h3>
            <p className="mt-4 text-xl md:mt-6 text-dark-700">
              Lorem ipsum dolor, sit amet consectetur elit do eius mod tempor
              labore sit amet. Praesent sapien massa, convallis a pellentesque
              et.
            </p>
          </div>

          {/* <!-- Feature image --> */}
          <div className="mt-10 md:mt-0 relative w-full md:rounded-r lg:rounded-l pt-11/12 md:order-1">
            <img
              src={FeaturesImg3}
              alt=""
              className="object-cover object-center absolute inset-y-0 w-full h-full shadow-xl md:rounded-r lg:rounded-l"
            />
          </div>
        </div>
      </div>
    </section>
  </>
);

export default FeaturesAlternatingSimple;
