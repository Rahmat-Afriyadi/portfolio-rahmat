import ContactItem from "./ContactItem";
import SectionParagraph from "./SectionParagraph";
import SectionTitle from "./SectionTitle";
import { useState } from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import React from "react";

export default function ContactSection() {
    const [email ,setEmail] = useState('');
    const [name ,setName] = useState('');
    const [subject ,setSubject] = useState('');
    const [message ,setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = React.useState(false);

    const modal_animate = {
      hidden: { opacity: 0, scale: 0 },
      show: {
        opacity: 100,
        scale: 1,
      },
      transition: {
        duration: 1,
        type: "tween",
        ease: "anticipate",
      },
    };

    const contactMe = async (e) => {
      e.preventDefault();
      setLoading(true)
      const rawResponse = await fetch(
        "https://contact-rahmat.devryank.dev/public/api/create/contact",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            email: email,
            subject: subject,
            message: message,
          }),
        }
      );
      const content = await rawResponse.json();

      if (content != null) {
        setLoading(false);
        setShowModal(true);
      }

    }
  

    return (
      <>
        <motion.div
          variants={modal_animate}
          initial="hidden"
          animate={showModal ? "show" : "hidden"}
          className="justify-center items-center flex overflow-x-hidden fixed inset-0 z-50 outline-none focus:outline-none"
        >
          <div className="relative w-auto my-6 mx-auto max-w-3xl z-20 ">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-[#2d253a] outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-center p-5 border-b border-solid border-slate-200 rounded-t justify-center">
                <h3 className="text-3xl font-semibold">Thanks for submit</h3>
              </div>
              {/*body*/}
              {/*footer*/}
              <div className="flex items-center justify-center px-6 py-2 border-t border-solid border-slate-200 rounded-b">
                <button
                  className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  Oke...
                </button>
              </div>
            </div>
          </div>
        </motion.div>
        {showModal && (
          <div className="opacity-25 fixed inset-0 z-10 bg-black"></div>
        )}
        {loading && (
          <div
            className="mx-auto sm:w-3/4 md:w-2/4 fixed inset-x-0 top-[45%]"
            id="signin-success-message"
          >
            <div className="bg-green-300 opacity-90 px-6 py-1 my-2 rounded-md text-lg flex items-center w-full content-center justify-center">
              <Typewriter
                options={{
                  strings: ["wait a second...", "wink your eyes..."],
                  autoStart: true,
                  loop: true,
                  delay: 85,
                  deleteSpeed: 50,
                  pauseFor: 1500,
                  wrapperClassName: "text-green-700",
                }}
              />
              {/* wait a second... */}
            </div>
          </div>
        )}
        <section
          className="container mx-auto px-10 2xl:px-0 sm:pt-10"
          id="contact"
        >
          <div className="bg-white flex rounded-lg flex-wrap">
            <div className="md:w-6/12 w-full md:border-r border-b border-primarygray-200">
              <div className="lg:py-16 lg:px-20 md:p-14 p-10">
                <SectionTitle left black={true}>
                  Contact
                </SectionTitle>
                <SectionParagraph left>
                  Several ways to contact me.
                </SectionParagraph>

                <ContactItem
                  label="Mail"
                  value="rahmatcv725@gmail.com"
                  icon="/images/stack/mail.svg"
                  className="mt-10"
                />
                <ContactItem
                  label="Phone"
                  value="082124744961"
                  icon="/images/stack/phone.svg"
                  className="mt-6"
                />
                <ContactItem
                  label="Twitter"
                  value="@DrGreen725"
                  icon="/images/stack/twitter.svg"
                  className="mt-6"
                />
              </div>
            </div>
            <div className="md:w-6/12 w-full">
              <form className="lg:py-16 lg:px-20 md:p-14 p-10">
                <div className="flex flex-wrap -mx-4">
                  <div className="lg:w-6/12 w-full px-4">
                    <label
                      htmlFor="name"
                      className="block mb-1 text-sm font-semibold"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="bg-transparent border border-primarygray-300 py-3 px-3 w-full"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="lg:w-6/12 w-full px-4">
                    <label
                      htmlFor="email"
                      className="block mb-1 text-sm font-semibold"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-transparent border border-primarygray-300 py-3 px-3 w-full"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <label
                  htmlFor="subject"
                  className="block mb-1 text-sm font-semibold"
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  className="bg-transparent border border-primarygray-300 py-3 px-3 w-full"
                  onChange={(e) => setSubject(e.target.value)}
                />
                <label
                  htmlFor="message"
                  className="block mb-1 text-sm font-semibold"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  className="h-40 bg-transparent border border-primarygray-300 py-3 px-3 w-full"
                  onChange={(e) => setMessage(e.target.value)}
                />
                <div className="text-right">
                  {/* <Button variant="black">Send</Button> */}
                  <button
                    className="transition py-3 px-10 cursor-pointer font-semibold text-sm inline-block bg-green-400 hover:bg-opacity-90 text-white"
                    onClick={contactMe}
                  >
                    Send
                  </button>
                  {/* <button
                    className="transition py-3 px-10 cursor-pointer font-semibold text-sm inline-block bg-green-400 hover:bg-opacity-90 text-white"
                    onClick={tutup}
                  >
                    tutup
                  </button> */}
                </div>
              </form>
            </div>
          </div>
        </section>
      </>
    );
}
