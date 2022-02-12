import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import emailjs from 'emailjs-com';

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.number().positive().integer(),
  message: yup.string().required(),
});

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const sendEmail = (formData) => {
    emailjs
      .send(
        `${process.env.GATSBY_SERVICE_ID}`,
        `${process.env.GATSBY_TEMPLATE_ID}`,
        formData,
        `${process.env.GATSBY_USER_ID}`
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    document.getElementById('contact-form').reset();
  };
  console.log(errors);

  return (
    <>
      <div className="flex-1 order-1 lg:order-2 lg:ml-4 xl:ml-6 relative z-20 mt-12 w-full lg:mt-0">
        <div className="py-12 px-4 mx-auto w-full rounded shadow-xl lg:mr-0 lg:ml-auto bg-bouquetShades-300 sm:p-16 lg:p-14 xl:p-16">
          {/* <!-- Contact form --> */}
          <form id="contact-form" onSubmit={handleSubmit(sendEmail)}>
            <div>
              <label
                htmlFor="name"
                className="ml-0.5 text-white font-medium text-sm"
              >
                Name *
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="John Doe"
                className="p-4 mt-2 w-full h-14 text-sm font-medium text-white rounded border-2 border-solid transition duration-200 ease-in-out outline-none bg-bouquetShades-600 border-bouquetShades-600 focus:border-bouquetShades-100 focus:outline-none"
                {...register('name')}
              />
              {errors.name?.message && (
                <p className="text-white mt-2">{errors.name?.message}</p>
              )}
            </div>

            <div className="mt-6">
              <label
                htmlFor="email"
                className="ml-0.5 text-white font-medium text-sm"
              >
                Email *
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="john@email.com"
                className="p-4 mt-2 w-full h-14 text-sm font-medium text-white rounded border-2 border-solid transition duration-200 ease-in-out outline-none bg-bouquetShades-600 border-bouquetShades-600 focus:border-bouquetShades-100 focus:outline-none"
                {...register('email')}
              />
              {errors.email?.message && (
                <p className="text-white mt-2">{errors.email?.message}</p>
              )}
            </div>

            <div className="mt-6">
              <label
                htmlFor="phone"
                className="ml-0.5 text-white font-medium text-sm"
              >
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                placeholder="(123) 456-789"
                className="p-4 mt-2 w-full h-14 text-sm font-medium text-white rounded border-2 border-solid transition duration-200 ease-in-out outline-none bg-bouquetShades-600 border-bouquetShades-600 focus:border-bouquetShades-100 focus:outline-none"
                {...register('phone')}
              />
              {errors.phone?.message && (
                <p className="text-white mt-2">{errors.phone?.message}</p>
              )}
            </div>

            <div className="mt-6">
              <label
                htmlFor="message"
                className="ml-0.5 text-white font-medium text-sm"
              >
                Message *
              </label>
              <textarea
                id="message"
                type="text"
                name="message"
                placeholder="Message"
                rows="5"
                className="p-4 mt-2 w-full text-sm font-medium text-white rounded border-2 border-solid transition duration-200 ease-in-out outline-none bg-bouquetShades-600 border-bouquetShades-600 focus:border-bouquetShades-100 focus:outline-none"
                {...register('message')}
              />
              {errors.message?.message && (
                <p className="text-white mt-2">{errors.message?.message}</p>
              )}
            </div>

            <div className="flex justify-start mt-6">
              <button
                type="submit"
                className="inline-flex relative justify-center items-center px-8 w-auto h-12 text-base font-medium leading-snug text-white md:h-14 group"
              >
                <span className="block absolute top-0 left-0 z-10 w-full h-full rounded transition-all ease-in-out duration-250 bg-bouquetShades-600 group-hover:text-bouquetShades-700 group-hover:bg-bouquetShades-100" />
                <span className="relative z-20">Send message</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
