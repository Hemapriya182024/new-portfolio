import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-accent text-white py-8">
      <div className="container mx-auto px-6">
        <div 
          className="text-center"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <p className="text-lg mb-2">
            © 2026 Dr. Balamurugan K. All rights reserved.
          </p>
          <p className="text-base opacity-75">
            Vice President – Analytical Services | Malladi Drugs & Pharmaceuticals Ltd.
          </p>
          <div className="mt-4 flex justify-center space-x-6">
            <a 
              href="https://www.linkedin.com/in/dr-balamurugan-k-420a3a28" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-lg hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="mailto:drbalamurugank@gmail.com"
              className="text-lg hover:text-primary transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
