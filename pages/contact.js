import React, { useState, useRef } from "react";
import Link from "next/link";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [pending, setPending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setPending(true);

    emailjs
      .sendForm(
        "service_zrmpkqh",
        "template_nbhz31t",
        form.current,
        "c75ZBQ9n5rJWjcHkA"
      )
      .then(
        (result) => {
          setPending(false);
          console.log(result.text);
          alert(
            "I 've received your message. I'll get back to you as soon as possible."
          );
          form.current.reset();
        },
        (error) => {
          setPending(false);
          console.log(error.text);
          alert("Something went wrong. Please try again later.");
        }
      );
  };
  return (
    <div>
      <div className="container py-16 md:py-20" id="contact">
        <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
          Here's a contact form
        </h2>
        <h4 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
          Let's build something amazing together!!
        </h4>
        <div className="mx-auto w-full pt-5 text-center sm:w-2/3 lg:pt-6">
          <p className="font-body text-grey-10">
            I specialize in creating custom solutions for businesses of all
            sizes. Whether you need a new website, mobile app, or software
            development, I have the skills and knowledge to deliver outstanding
            results. Contact me now to schedule a consultation and let's discuss
            how I can help you achieve your goals.
          </p>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="mx-auto w-full pt-10 sm:w-3/4"
        >
          <div className="flex flex-col md:flex-row">
            <input
              className="shadow border mr-3 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:w-1/2 lg:mr-5 ring-primary outline-none focus:ring-primary"
              placeholder="Name"
              type="text"
              name="name"
              required
            />
            <input
              className="shadow border mt-6 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:mt-0 md:ml-3 md:w-1/2 lg:ml-5 ring-primary outline-none focus:ring-primary"
              type="email"
              placeholder="Email"
              name="email"
              required
            />
          </div>
          <textarea
            className="shadow border mt-6 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:mt-8 ring-primary outline-none focus:ring-primary"
            rows="10"
            placeholder="Message"
            name="message"
            required
            data-ms-editor
          ></textarea>
          <button
            className="mt-6 flex items-center justify-center rounded bg-primary px-8 py-3 font-header text-lg font-bold uppercase text-white hover:bg-grey-20"
            type="submit"
            disabled={pending ? true : false}
          >
            <span>{pending ? "Sending..." : "Send"}</span>
            <i className="bx bx-chevron-right relative -right-2 text-3xl"></i>
          </button>
        </form>
        <div className="flex flex-col pt-16 lg:flex-row">
          <div className="w-full border-l-2 border-t-2 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3">
            <div className="flex items-center">
              <i className="bx bx-phone text-2xl text-grey-40"></i>
              <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
                My Phone
              </p>
            </div>
            <Link
              href="tel:+919102528650"
              className="pt-2 text-left font-body font-bold text-primary lg:text-lg"
            >
              (+91) 9102528650
            </Link>
          </div>
          <div className="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2">
            <div className="flex items-center">
              <i className="bx bx-envelope text-2xl text-grey-40"></i>
              <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
                My Email
              </p>
            </div>
            <Link
              href="mailto:nrohitsingh77@gmail.com"
              className="pt-2 text-left font-body font-bold text-primary lg:text-lg"
            >
              nrohitsingh77@gmail.com
            </Link>
          </div>
          <div className="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2">
            <div className="flex items-center">
              <i className="bx bx-map text-2xl text-grey-40"></i>
              <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
                My Address
              </p>
            </div>
            <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
              11, Vinayak Residency, Opposite to ONGC Colony, Ankleshwar,
              Bharuch, Gujarat, India, 393002
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
