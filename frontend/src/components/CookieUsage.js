import React, { useState } from "react";
import { FaArrowLeft, FaFacebook, FaTwitter, FaEnvelope } from "react-icons/fa"; // Importing icons

const CookieUsage = () => {
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
        <span className="font-semibold text-xl">Back</span>
      </button>

      <h1 className="text-3xl font-bold text-center mb-8">Cookie Usage</h1>

      {/* Accordion Sections */}
      <div className="mb-6">
        <button
          className="w-full text-left text-lg font-semibold mb-2 p-2 border border-gray-300 rounded hover:bg-gray-100 transition duration-300 ease-in-out"
          onClick={() => toggleSection(1)}
        >
          1. Introduction
        </button>
        {expandedSection === 1 && (
          <p className="mb-4 transition-opacity duration-300 opacity-100">
            This Cookie Policy explains how we use cookies on our website and how you
            can manage your cookie preferences. By using this website, you agree to
            the use of cookies as described in this policy.
          </p>
        )}
      </div>

      <div className="mb-6">
        <button
          className="w-full text-left text-lg font-semibold mb-2 p-2 border border-gray-300 rounded hover:bg-gray-100 transition duration-300 ease-in-out"
          onClick={() => toggleSection(2)}
        >
          2. What Are Cookies?
        </button>
        {expandedSection === 2 && (
          <p className="mb-4 transition-opacity duration-300 opacity-100">
            Cookies are small pieces of data stored on your device when you visit
            websites. They help us enhance your experience by remembering your
            preferences, login details, and usage patterns.
          </p>
        )}
      </div>

      <div className="mb-6">
        <button
          className="w-full text-left text-lg font-semibold mb-2 p-2 border border-gray-300 rounded hover:bg-gray-100 transition duration-300 ease-in-out"
          onClick={() => toggleSection(3)}
        >
          3. Types of Cookies We Use
        </button>
        {expandedSection === 3 && (
          <p className="mb-4 transition-opacity duration-300 opacity-100">
            We use the following types of cookies:
            <ul className="list-disc pl-6">
              <li>Essential Cookies: Required for basic website functionality.</li>
              <li>Performance Cookies: Help us analyze website usage and improve user experience.</li>
              <li>Functional Cookies: Remember user preferences and settings.</li>
              <li>Targeting Cookies: Used to serve personalized advertisements and content.</li>
            </ul>
          </p>
        )}
      </div>

      <div className="mb-6">
        <button
          className="w-full text-left text-lg font-semibold mb-2 p-2 border border-gray-300 rounded hover:bg-gray-100 transition duration-300 ease-in-out"
          onClick={() => toggleSection(4)}
        >
          4. How to Manage Cookies
        </button>
        {expandedSection === 4 && (
          <p className="mb-4 transition-opacity duration-300 opacity-100">
            You can control and manage cookies through your browser settings.
            You can choose to block or delete cookies, but this may affect the
            functionality of the website. Below are links to cookie management
            resources for major browsers:
            <ul className="list-disc pl-6">
              <li>
                <a
                  href="https://www.whatismybrowser.com/guides/how-to-enable-cookies"
                  className="text-blue-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Chrome
                </a>
              </li>
              <li>
                <a
                  href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences"
                  className="text-blue-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mozilla Firefox
                </a>
              </li>
              <li>
                <a
                  href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
                  className="text-blue-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apple Safari
                </a>
              </li>
            </ul>
          </p>
        )}
      </div>

      <div className="mb-6">
        <button
          className="w-full text-left text-lg font-semibold mb-2 p-2 border border-gray-300 rounded hover:bg-gray-100 transition duration-300 ease-in-out"
          onClick={() => toggleSection(5)}
        >
          5. Consent to Cookies
        </button>
        {expandedSection === 5 && (
          <p className="mb-4 transition-opacity duration-300 opacity-100">
            By continuing to use this website, you consent to our use of cookies.
            If you wish to withdraw your consent, you can do so by adjusting your
            cookie preferences through your browser settings or by contacting us.
          </p>
        )}
      </div>

      {/* Accept Cookie Usage Checkbox */}
      <div className="mb-6">
        <label className="inline-flex items-center">
          <input type="checkbox" className="form-checkbox text-blue-500 cursor-pointer" />
          <span className="ml-2">I accept the use of cookies</span>
        </label>
      </div>

      {/* Social Media Sharing Section */}
      <div className="mb-6">
        <p className="text-sm mb-4 text-gray-700">Share our Cookie Usage Policy:</p>
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

      {/* Scroll to Top Button */}
      <div className="fixed bottom-4 right-4">
        <button
          onClick={() => window.scrollTo(0, 0)}
          className="bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-600 transition duration-300 transform hover:scale-110"
        >
          ↑
        </button>
      </div>
    </div>
  );
};

export default CookieUsage;
