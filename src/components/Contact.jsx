import React, { useRef, useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setMessage("Message Sent Successfully!");
      form.current.reset();

      setTimeout(() => {
        setMessage("");
      }, 3000);
    })
  .catch((error) => {
    console.log(error);
    setMessage("Message Failed!");

    setTimeout(() => {
      setMessage("");
    }, 3000);
  });
  };

return (
  <div id="contact" className="bg-[#0f172a] text-white min-h-screen flex items-center justify-center p-6">
    <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

      <div className="space-y-8">
        <h1 className="text-5xl font-bold tracking-tight">Let's Connect</h1>

        <p className="text-gray-400 text-lg leading-relaxed max-w-md">
          I am currently looking for new opportunities. Whether you have a project in mind or just want to say hi, my inbox is always open!
        </p>

        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <FaMapMarkerAlt className="text-gray-400 mt-1" size={20} />
            <p className="text-gray-300">
              Bhilai,<br />
              Chhattisgarh 492001
            </p>
          </div>

          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-gray-400" size={18} />
            <p className="text-gray-300">+91 9876543210</p>
          </div>

          <div className="flex items-center gap-4">
            <IoMail className="text-gray-400" size={18} />
            <p className="text-gray-300">divyajoshi.dev@gmail.com</p>
          </div>
        </div>
      </div>

      <div>
        {message && (
          <div className="bg-green-500 text-white px-4 py-3 rounded-md mb-5">
            {message}
          </div>
        )}

        <form ref={form} onSubmit={sendEmail} className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold">First name <span className="text-red-500">*</span></label>
            <input
              type="text"
              name="first_name"
              placeholder="First name"
              required
              className="bg-white/5 border border-white/10 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition placeholder:text-gray-600"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold">Last name <span className="text-red-500">*</span></label>
            <input
              type="text"
              name="last_name"
              placeholder="Last name"
              required
              className="bg-white/5 border border-white/10 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition placeholder:text-gray-600"
            />
          </div>

          <div className="flex flex-col gap-2 sm:col-span-2">
            <label className="text-sm font-semibold">Email <span className="text-red-500">*</span></label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="bg-white/5 border border-white/10 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition placeholder:text-gray-600"
            />
          </div>

          <div className="flex flex-col gap-2 sm:col-span-2">
            <label className="text-sm font-semibold">Message <span className="text-red-500">*</span></label>
            <textarea
              name="message"
              rows="4"
              placeholder="Your message..."
              required
              className="bg-white/5 border border-white/10 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition resize-none placeholder:text-gray-600"
            ></textarea>
          </div>

          <div className="sm:col-span-2 flex justify-end">
            <button
              type="submit"
              className="bg-[#6366f1] hover:bg-[#4f46e5] text-white font-bold py-3 px-8 rounded-lg transition duration-300 shadow-lg cursor-pointer disabled:cursor-not-allowed"
            >
              Send message
            </button>
          </div>

        </form>
      </div>

    </div>
  </div>
);
};

export default Contact;