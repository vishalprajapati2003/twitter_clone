import React, { useState } from "react";
import { FaArrowLeft, FaFacebook, FaTwitter, FaEnvelope } from "react-icons/fa"; // Importing icons

const PrivacyPolicy = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  // Toggle accordion section
  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  // Go back to the previous page
  const goBack = () => {
    window.history.back(); // Native back functionality
  };

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      {/* Back Arrow Button */}
      <button
        onClick={goBack}
        className="text-blue-500 hover:text-blue-600 transition duration-300 ease-in-out mb-4 flex items-center"
      >
        <FaArrowLeft className="h-6 w-6 mr-2" />
        <span className="font-semibold text-xl ">Back</span>
      </button>

      <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-4">
        Welcome to Twitter. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you use our website.
      </p>

      {/* Accordion Section */}
      <div id="introduction">
        <button
          className="w-full text-left text-lg font-semibold mb-2 p-2 border border-gray-300 rounded hover:bg-gray-100 transition duration-300 ease-in-out"
          onClick={() => toggleSection(1)}
        >
          1. Introduction
        </button>
        {expandedSection === 1 && (
          <p className="mb-4 transition-opacity duration-300 opacity-100">
            This Privacy Policy explains how we collect, use, and protect your information when you visit our website.
          </p>
        )}
      </div>

      <div id="information-collection">
        <button
          className="w-full text-left text-lg font-semibold mb-2 p-2 border border-gray-300 rounded hover:bg-gray-100 transition duration-300 ease-in-out"
          onClick={() => toggleSection(2)}
        >
          2. Information Collection
        </button>
        {expandedSection === 2 && (
          <p className="mb-4 transition-opacity duration-300 opacity-100">
            We collect information from you when you visit our website, register, or fill out a form.
          </p>
        )}
      </div>

      <div id="information-use">
        <button
          className="w-full text-left text-lg font-semibold mb-2 p-2 border border-gray-300 rounded hover:bg-gray-100 transition duration-300 ease-in-out"
          onClick={() => toggleSection(3)}
        >
          3. Information Use
        </button>
        {expandedSection === 3 && (
          <p className="mb-4 transition-opacity duration-300 opacity-100">
            The information we collect is used to improve our website and provide better services to our users.
          </p>
        )}
      </div>

      <div id="data-protection">
        <button
          className="w-full text-left text-lg font-semibold mb-2 p-2 border border-gray-300 rounded hover:bg-gray-100 transition duration-300 ease-in-out"
          onClick={() => toggleSection(4)}
        >
          4. Data Protection
        </button>
        {expandedSection === 4 && (
          <p className="mb-4 transition-opacity duration-300 opacity-100">
            We take reasonable measures to protect your personal information from unauthorized access, alteration, or disclosure.
          </p>
        )}
      </div>

      <div id="cookies">
        <button
          className="w-full text-left text-lg font-semibold mb-2 p-2 border border-gray-300 rounded hover:bg-gray-100 transition duration-300 ease-in-out"
          onClick={() => toggleSection(5)}
        >
          5. Cookies
        </button>
        {expandedSection === 5 && (
          <p className="mb-4 transition-opacity duration-300 opacity-100">
            We use cookies to enhance your experience on our website. You can disable cookies in your browser settings.
          </p>
        )}
      </div>

      <div id="third-party-links">
        <button
          className="w-full text-left text-lg font-semibold mb-2 p-2 border border-gray-300 rounded hover:bg-gray-100 transition duration-300 ease-in-out"
          onClick={() => toggleSection(6)}
        >
          6. Third-Party Links
        </button>
        {expandedSection === 6 && (
          <p className="mb-4 transition-opacity duration-300 opacity-100">
            Our website may contain links to third-party websites. We are not responsible for their privacy practices.
          </p>
        )}
      </div>

      <div id="changes-to-policy">
        <button
          className="w-full text-left text-lg font-semibold mb-2 p-2 border border-gray-300 rounded hover:bg-gray-100 transition duration-300 ease-in-out"
          onClick={() => toggleSection(7)}
        >
          7. Changes to the Privacy Policy
        </button>
        {expandedSection === 7 && (
          <p className="mb-4 transition-opacity duration-300 opacity-100">
            We may update this Privacy Policy from time to time. Please review it periodically for any changes.
          </p>
        )}
      </div>

      {/* Share Section */}
      <div className="mt-8">
        <p className="text-sm mb-4 text-gray-700">Share our Privacy Policy:</p>
        <div className="flex space-x-4">
          {/* Facebook Share Button */}
          <button
            className="flex items-center text-blue-600 hover:text-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
            onClick={() => alert("Share on Facebook")}
          >
            <FaFacebook className="h-5 w-5 mr-2" />
            Facebook
          </button>

          {/* Twitter Share Button */}
          <button
            className="flex items-center text-blue-400 hover:text-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
            onClick={() => alert("Share on Twitter")}
          >
            <FaTwitter className="h-5 w-5 mr-2" />
            Twitter
          </button>

          {/* Email Share Button */}
          <button
            className="flex items-center text-red-500 hover:text-red-600 transition duration-300 ease-in-out transform hover:scale-105"
            onClick={() => alert("Share via Email")}
          >
            <FaEnvelope className="h-5 w-5 mr-2" />
            Email
          </button>
        </div>
      </div>

      {/* Accept Privacy Policy Checkbox */}
      <div className="mt-8">
        <label className="inline-flex items-center mb-4">
          <input type="checkbox" className="form-checkbox text-blue-500 cursor-pointer " />
          <span className="ml-2">I agree to the Privacy Policy</span>
        </label>
      </div>

       {/* Download PDF Button */}
       <div className="mt-8">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105">
          Download Terms as PDF
        </button>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
