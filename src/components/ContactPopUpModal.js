/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment, useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import { LiveChatWidget } from '@livechat/widget-react';

export default function ContactPopUpModal() {
  const [open, setOpen] = useState(false);
  const [chat, setChat] = React.useState(false);

  const close = () => setOpen(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (sessionStorage.getItem("hasVisited")) {
        // Do nothing
      } else {
        setOpen(true);
        sessionStorage.setItem("hasVisited", true);
      }
    }, 20000);
    return () => clearTimeout(timeout);
  }, []);

  const data = useStaticQuery(graphql`
    {
      wpPage(title: { eq: "Contact" }) {
        contact {
          popupModal {
            title
            subtitle
            ctaButton
          }
        }
      }
    }
  `);

  const { title, subtitle, ctaButton } = data.wpPage.contact.popupModal;

  return (
    <>
      <LiveChatWidget
        license={process.env.GATSBY_JS_LIVECHAT_ID}
        visibility={chat ? "maximized" : "minimized"}
      />
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-50 inset-0 overflow-y-auto"
          onClose={setOpen}
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
                  <button
                    type="button"
                    className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-bouquetShades-300"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <Dialog.Title
                      as="h1"
                      className="text-3xl leading-6 font-medium text-gray-900"
                    >
                      {title}
                    </Dialog.Title>
                    <div className="mt-4">
                      <p className="text-md text-gray-500">{subtitle}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 sm:mt-4 sm:ml-4">
                  <button
                    type="button"
                    className="w-full rounded border border-transparent shadow-sm px-4 py-2 text-lg font-medium transition ease-in-out duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-bouquetShades-300 bg-bouquetShades-300 hover:text-bouquetShades-700 hover:bg-bouquetShades-100  text-white sm:w-auto"
                    onClick={() => {
                      close();
                      setChat(true);
                    }}
                  >
                    {ctaButton}
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
