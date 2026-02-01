import React from 'react';
import { FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import profileImage from '../assets/Balamurugan.png';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-light to-white">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-8 items-center">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="flex justify-center lg:justify-center items-center"
          >
            <img
              src={profileImage}
              alt="Dr. Balamurugan K"
              className="
      w-64 h-64
      md:w-80 md:h-80
      lg:w-[420px] lg:h-[420px]
      rounded-full
      object-cover
      shadow-2xl
      border-4 border-white
    "
            />
          </div>



          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="space-y-6"
          >
            <div>
              <h1 className="text-5xl md:text-7xl font-bold text-accent mb-3">
                Dr. Balamurugan K
              </h1>
              <h2 className="text-2xl md:text-3xl text-primary font-semibold mb-2">
                Vice President – Analytical Services
              </h2>
              <p className="text-xl text-secondary">
                Malladi Drugs & Pharmaceuticals Ltd.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-primary text-white rounded-full text-base">
                PhD (Analytical Chemistry)
              </span>
              <span className="px-3 py-1 bg-primary text-white rounded-full text-base">
                Regulatory Expert
              </span>
              <span className="px-3 py-1 bg-primary text-white rounded-full text-base">
                15+ Years Experience (2026)
              </span>
            </div>

            <div className="max-w-lg">
              <p className="text-xl text-secondary leading-relaxed">
                Senior pharmaceutical analytical leader providing strategic and technical leadership
                in analytical services, method development, and regulatory compliance across global markets.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-secondary">
                <FaPhone className="text-primary flex-shrink-0" />
                <span className="text-xl text-secondary">📍 Chennai, India</span>
              </div>
              <div className="flex items-center gap-3 text-secondary">
                <FaEnvelope className="text-primary flex-shrink-0" />
                <a href="mailto:drbalamurugank@gmail.com" className="text-xl text-secondary hover:text-primary transition-colors">
                  drbalamurugank@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-secondary">
                <FaLinkedin className="text-primary flex-shrink-0" />
                <a
                  href="https://www.linkedin.com/in/dr-balamurugan-k-420a3a28"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl text-secondary hover:text-primary transition-colors"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="#contact"
                className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium text-center"
              >
                Get In Touch
              </a>
              <a
                href="#about"
                className="px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors duration-200 font-medium text-center"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
