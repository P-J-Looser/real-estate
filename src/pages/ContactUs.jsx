import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const ContactUs = () => {
  return (
    <section className="py-28 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>

        {/* Contact Form & Info Section */}
        <div className="flex flex-col md:flex-row gap-10">
          {/* Left - Contact Form */}
          <form className="w-full md:w-1/2 bg-white shadow-md p-6 rounded-lg">
            <div className="mb-4">
              <label className="block mb-2 font-semibold">Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-semibold">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-semibold">Message</label>
              <textarea
                className="w-full border border-gray-300 p-2 rounded"
                rows="5"
                placeholder="Write your message"
              ></textarea>
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
              Send Message
            </button>
          </form>

          {/* Right - Info + Socials */}
          <div className="w-full md:w-1/2 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold mb-4">We’re here 24/7</h3>
              <p className="text-gray-600 mb-6">
                Reach out to us anytime. We provide the fastest and most reliable
                service to help you with all your real estate needs. Customer
                satisfaction is our top priority!
              </p>
              <div className="flex gap-4 text-blue-600 text-xl">
                <a href="#" aria-label="Facebook"><FaFacebook /></a>
                <a href="#" aria-label="Instagram"><FaInstagram /></a>
                <a href="#" aria-label="Twitter"><FaTwitter /></a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Details */}
        <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white shadow-md p-6 rounded-lg">
            <FaEnvelope className="text-3xl mx-auto text-blue-600 mb-2" />
            <p className="font-semibold">Email</p>
            <p className="text-gray-600">contact@rrproperties.com</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg">
            <FaMapMarkerAlt className="text-3xl mx-auto text-blue-600 mb-2" />
            <p className="font-semibold">Address</p>
            <p className="text-gray-600">123 Main Street, Hyderabad, India</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg">
            <FaPhone className="text-3xl mx-auto text-blue-600 mb-2" />
            <p className="font-semibold">Phone</p>
            <p className="text-gray-600">+91 98765 43210</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
