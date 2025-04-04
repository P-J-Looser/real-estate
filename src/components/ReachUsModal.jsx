import React from "react";

const ReachUsModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-[6px] flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl"
        >
          ✕
        </button>
        <h2 className="text-2xl font-semibold mb-4 text-center">Reach Us</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border rounded-md p-2"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border rounded-md p-2"
          />
          <input
            type="tel"
            placeholder="Mobile Number"
            className="w-full border rounded-md p-2"
          />
          <input
            type="text"
            placeholder="Address"
            className="w-full border rounded-md p-2"
          />
          <textarea
            rows="4"
            placeholder="The location of property they are looking..."
            className="w-full border rounded-md p-2"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReachUsModal;
