import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 dark:bg-gray-800 text-center py-4 mt-8">
      <p className="text-gray-700 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Currency Converter. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
