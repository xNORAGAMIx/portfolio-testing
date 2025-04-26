import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-10">
      <div className="container mx-auto text-center">
        {/* Social Links */}
        <div className="flex justify-center space-x-8 mb-6">
          <a
            href="https://www.linkedin.com/in/your-linkedin/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            GitHub
          </a>
          <a
            href="mailto:your-email@example.com"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            Email
          </a>
        </div>

        {/* Copyright Notice */}
        <div className="text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Manas Das. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
