import React from "react";
import { FaInstagram, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-gray-900 dark:text-gray-100">
      <h1 className="text-4xl font-bold mb-8">Contact Me</h1>
      <div className="flex space-x-6 mb-8">
        <a
          href="https://www.instagram.com/ataullahrifqi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="h-8 w-8 hover:text-pink-500" />
        </a>
        <a
          href="https://github.com/FadilRifqi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="h-8 w-8 hover:text-gray-700" />
        </a>
        <a
          href="https://www.linkedin.com/in/muhammad-fadil-ataullah-rifqi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="h-8 w-8 hover:text-blue-700" />
        </a>
        <a
          href="mailto:fadilataullahrifqi@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope className="h-8 w-8 hover:text-red-500" />
        </a>
      </div>
      <a
        href="https://portfolio-fadil-rifqi.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-lg font-medium text-blue-500 hover:underline"
      >
        Check out my portfolio
      </a>
    </div>
  );
};

export default ContactPage;
