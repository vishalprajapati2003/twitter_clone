// import React, { useState } from "react";
// import { FaArrowLeft } from "react-icons/fa"; // Import the back arrow icon from react-icons
// import { FaFacebook, FaTwitter, FaEnvelope } from "react-icons/fa"; // Import social media icons

// const TermsOfService = () => {
//   const [expandedSection, setExpandedSection] = useState(null);

//   // Toggle accordion section
//   const toggleSection = (section) => {
//     setExpandedSection(expandedSection === section ? null : section);
//   };

//   // Go back to the previous page
//   const goBack = () => {
//     window.history.back(); // Native back functionality
//   };

//   return (
//     <div className="container mx-auto p-4 max-w-4xl">
//       {/* Back Arrow Button */}
//       <button  onClick={goBack}
//         className="text-blue-500 hover:text-blue-600 transition duration-300 ease-in-out mb-4 flex items-center ">
//         <FaArrowLeft className="h-6 w-6 mr-2" /> {/* Using React Icons */}
//         <span className="font-semibold text-xl ">Back</span>
//       </button>

//       <h1 className="text-2xl font-bold mb-4">Terms of Service</h1>
//       <p className="mb-4">
//         Welcome to Twitter! These terms and conditions outline the
//         rules and regulations for the use of our website.
//       </p>

//       <h2 className="text-xl font-semibold mb-2">Last Updated: December 19, 2024</h2>

//       {/* Accordion Section */}
//       <div id="introduction">
//         <button
//           className="w-full text-left text-lg font-semibold mb-2 p-2 border border-gray-300 rounded hover:bg-gray-100 transition duration-300 ease-in-out"
//           onClick={() => toggleSection(1)}
//         >
//           1. Introduction
//         </button>
//         {expandedSection === 1 && (
//           <p className="mb-4 transition-opacity duration-300 opacity-100">
//             By accessing this website, you agree to comply with these terms of
//             service. If you disagree with any part of the terms, you must not use
//             this website.
//           </p>
//         )}
//       </div>

//       <div id="intellectual-property">
//         <button
//           className="w-full text-left text-lg font-semibold mb-2 p-2 border border-gray-300 rounded hover:bg-gray-100 transition duration-300 ease-in-out"
//           onClick={() => toggleSection(2)}
//         >
//           2. Intellectual Property
//         </button>
//         {expandedSection === 2 && (
//           <p className="mb-4 transition-opacity duration-300 opacity-100">
//             The content on this website, including text, graphics, logos, and
//             images, is the property of Twitter and protected by
//             copyright laws.
//           </p>
//         )}
//       </div>

//       <div id="user-obligations">
//         <button
//           className="w-full text-left text-lg font-semibold mb-2 p-2 border border-gray-300 rounded hover:bg-gray-100 transition duration-300 ease-in-out"
//           onClick={() => toggleSection(3)}
//         >
//           3. User Obligations
//         </button>
//         {expandedSection === 3 && (
//           <p className="mb-4 transition-opacity duration-300 opacity-100">
//             Users must not misuse the website by introducing harmful content,
//             attempting to gain unauthorized access, or engaging in unlawful
//             activities.
//           </p>
//         )}
//       </div>

//       <div id="limitation-of-liability">
//         <button
//           className="w-full text-left text-lg font-semibold mb-2 p-2 border border-gray-300 rounded hover:bg-gray-100 transition duration-300 ease-in-out"
//           onClick={() => toggleSection(4)}
//         >
//           4. Limitation of Liability
//         </button>
//         {expandedSection === 4 && (
//           <p className="mb-4 transition-opacity duration-300 opacity-100">
//             Twitter will not be liable for any damages arising from
//             the use of this website.
//           </p>
//         )}
//       </div>

//       <div id="changes-to-terms">
//         <button
//           className="w-full text-left text-lg font-semibold mb-2 p-2 border border-gray-300 rounded hover:bg-gray-100 transition duration-300 ease-in-out"
//           onClick={() => toggleSection(5)}
//         >
//           5. Changes to Terms
//         </button>
//         {expandedSection === 5 && (
//           <p className="mb-4 transition-opacity duration-300 opacity-100">
//             We may update these terms from time to time. Your continued use of the
//             website constitutes your acceptance of any changes.
//           </p>
//         )}
//       </div>

//         {/* Share Section */}
//         <div className="mt-8">
//         <p className="text-lg mb-4 text-gray-700">
//           Share our Terms of Service:
//         </p>
//         <div className="flex space-x-4">
//           {/* Facebook Share Button */}
//           <button
//             className="flex items-center text-blue-600 hover:text-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
//             onClick={() => alert("Share on Facebook")}
//           >
//             <FaFacebook className="h-5 w-5 mr-2" />
//             Facebook
//           </button>

//           {/* Twitter Share Button */}
//           <button
//             className="flex items-center text-blue-400 hover:text-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
//             onClick={() => alert("Share on Twitter")}
//           >
//             <FaTwitter className="h-5 w-5 mr-2" />
//             Twitter
//           </button>

//           {/* Email Share Button */}
//           <button
//             className="flex items-center text-red-500 hover:text-red-600 transition duration-300 ease-in-out transform hover:scale-105"
//             onClick={() => alert("Share via Email")}
//           >
//             <FaEnvelope className="h-5 w-5 mr-2" />
//             Email
//           </button>
//         </div>
//       </div>

//       {/* Accept Terms Checkbox */}
//       <div className="mt-8">
//         <label className="inline-flex items-center mb-4">
//           <input type="checkbox" className="form-checkbox text-blue-500 cursor-pointer" />
//           <span className="ml-2">I agree to the Terms of Service</span>
//         </label>
//       </div>

//       {/* Download PDF Button */}
//       <div className="mt-8">
//         <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105">
//           Download Terms as PDF
//         </button>
//       </div>

//       {/* Scroll to Top Button */}
//       <div className="fixed bottom-4 right-4">
//         <button
//           onClick={() => window.scrollTo(0, 0)}
//           className="bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-600 transition duration-300 transform hover:scale-110"
//         >
//           ↑
//         </button>
//       </div>
//     </div>
//   );
// };

// export default TermsOfService;


