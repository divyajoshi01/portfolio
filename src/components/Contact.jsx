import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5'

const Contact = () => {
  return (
    <div  id='contact' className="bg-[#0f172a] text-white min-h-screen flex items-center justify-center p-6">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

        {/* Left Side: Contact Info */}
        <div className="space-y-8">
          <h1 className="text-5xl font-bold tracking-tight">Let's Connect</h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-md">
            I am currently looking for new opportunities. Whether you have a
            project in mind or just want to say hi, my inbox is always open!
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              {/* FaMapMarkerAlt icon for address */}
              <FaMapMarkerAlt className="text-gray-400 mt-1" size={20} />
              <p className="text-gray-300">
                Bhilai,<br />
                Chhatisgarh 492001
              </p>
            </div>

            <div className="flex items-center gap-4">
              {/* FaPhoneAlt icon for phone */}
              <FaPhoneAlt className="text-gray-400" size={18} />
              <p className="text-gray-300">+91 9876543210</p>
            </div>

            <div className="flex items-center gap-4">
              {/* IoMail icon for email */}
              <IoMail className="text-gray-400" size={18} />  
              <p className="text-gray-300">wayfordivya@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold">First name</label>
            <input
              type="text"
              placeholder="First name"
              className="bg-white/5 border border-white/10 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition placeholder:text-gray-600"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold">Last name</label>
            <input
              type="text"
              placeholder="Last name"
              className="bg-white/5 border border-white/10 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition placeholder:text-gray-600"
            />
          </div>

          <div className="flex flex-col gap-2 sm:col-span-2">
            <label className="text-sm font-semibold">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="bg-white/5 border border-white/10 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition placeholder:text-gray-600"
            />
          </div>

          <div className="flex flex-col gap-2 sm:col-span-2">
            <label className="text-sm font-semibold">Phone number</label>
            <input
              type="tel"
              placeholder="Phone number"
              className="bg-white/5 border border-white/10 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition placeholder:text-gray-600"
            />
          </div>

          <div className="flex flex-col gap-2 sm:col-span-2">
            <label className="text-sm font-semibold">Message</label>
            <textarea
              rows="4"
              placeholder="Your message..."
              className="bg-white/5 border border-white/10 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition resize-none placeholder:text-gray-600"
            ></textarea>
          </div>

          <div className="sm:col-span-2 flex justify-end">
            <button
              type="submit"
              className="bg-[#6366f1] hover:bg-[#4f46e5] text-white font-bold py-3 px-8 rounded-lg transition duration-300 shadow-lg"
            >
              Send message
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};

export default Contact;