import React from 'react';
import { FaEnvelope, FaLinkedin, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 
            className="text-5xl md:text-6xl font-bold text-accent mb-4"
            data-aos="fade-up"
          >
            Get In Touch
          </h2>
          <div 
            className="w-24 h-1 bg-primary mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          ></div>
          <p 
            className="text-xl text-secondary mt-6 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Feel free to reach out for professional collaborations, consulting opportunities, 
            or to discuss analytical chemistry and regulatory compliance topics.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div 
            className="space-y-6"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <div className="bg-light p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <FaEnvelope className="text-primary text-2xl mr-4" />
                <h3 className="text-2xl font-semibold text-accent">Email</h3>
              </div>
              <a 
                href="mailto:drbalamurugank@gmail.com" 
                className="text-xl text-secondary hover:text-primary transition-colors"
              >
                drbalamurugank@gmail.com
              </a>
            </div>

            <div className="bg-light p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <FaLinkedin className="text-primary text-2xl mr-4" />
                <h3 className="text-2xl font-semibold text-accent">LinkedIn</h3>
              </div>
              <a 
                href="https://www.linkedin.com/in/dr-balamurugan-k-420a3a28" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xl text-secondary hover:text-primary transition-colors"
              >
                linkedin.com/in/dr-balamurugan-k-420a3a28
              </a>
            </div>

            <div className="bg-light p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <FaMapMarkerAlt className="text-primary text-2xl mr-4" />
                <h3 className="text-2xl font-semibold text-accent">Location</h3>
              </div>
              <p className="text-xl text-secondary">
                Chennai, India
              </p>
            </div>
          </div>

          <div 
            data-aos="fade-left"
            data-aos-duration="800"
          >
            <div className="bg-gradient-to-br from-primary to-blue-600 text-white p-8 rounded-lg h-full">
              <h3 className="text-3xl font-bold mb-6">Professional Collaboration</h3>
              <p className="text-xl mb-6">
                Open to discussing opportunities in:
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-xl">Analytical method development and validation</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-xl">Regulatory compliance and compendial science</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-xl">LIMS implementation and data integrity</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-xl">Technology transfer and scale-up</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-xl">Guest lectures and training programs</span>
                </li>
              </ul>
              <div className="text-center">
                <a 
                  href="mailto:drbalamurugank@gmail.com"
                  className="inline-block px-8 py-3 bg-white text-primary rounded-lg hover:bg-gray-100 transition-colors duration-200 font-medium"
                >
                  Send Message
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
