import React from 'react';

const About = () => {
  const coreCompetencies = [
    'Analytical Method Development & Validation',
    'Assay, Impurity & Chiral Methodology',
    'HPLC, UPLC, GC & Advanced Chromatography',
    'SOP Design & Global Harmonization',
    'Laboratory Information Management Systems (LIMS)',
    'Technology Transfer (R&D → Manufacturing)',
    'Regulatory Submissions (USP, EP, JP, IP)',
    'Data Integrity & Inspection Readiness',
    'Team Leadership & Cross-Functional Collaboration'
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 
            className="text-5xl md:text-6xl font-bold text-accent mb-4"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Professional Summary
          </h2>
          <div 
            className="w-24 h-1 bg-primary mx-auto"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
          ></div>
          <p 
            className="text-xl text-secondary mt-4 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            A distinguished leader in pharmaceutical analytical sciences with global impact
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div 
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <div className="space-y-6">
              <p className="text-xl text-secondary leading-relaxed">
                Senior pharmaceutical analytical leader with <span className="font-semibold text-primary">15+ years of progressive experience</span> in analytical services, method development, and regulatory compliance within regulated global markets. Currently serving as Vice President – Analytical Services, providing strategic and technical leadership to support product development, technology transfer, and regulatory submissions.
              </p>
              
              <p className="text-xl text-secondary leading-relaxed">
                Proven expertise in method validation, impurity profiling, SOP harmonization, and LIMS implementation, ensuring inspection readiness and data integrity across laboratories. Actively contributes to compendial science and national regulatory frameworks, with strong engagement in the Indian Pharmacopoeia Expert Working Groups and global pharmacopeial initiatives.
              </p>
              
              <p className="text-xl text-secondary leading-relaxed">
                Recognized thought leader with <span className="font-semibold text-primary">35+ peer-reviewed journal publications, international patents</span>, and reviewer roles for reputed scientific journals.
              </p>
            </div>
          </div>

          <div 
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <div className="bg-gradient-to-br from-light to-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-3xl font-bold text-accent mb-6">Core Competencies</h3>
              <div className="space-y-3">
                {coreCompetencies.map((competency, index) => (
                  <div 
                    key={index}
                    className="flex items-start"
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay={500 + index * 100}
                  >
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-xl text-secondary">{competency}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div 
          className="mt-16 text-center"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="800"
        >
          <div className="bg-gradient-to-r from-primary to-blue-600 text-white p-8 rounded-xl max-w-4xl mx-auto shadow-xl">
            <h3 className="text-3xl font-bold mb-4">Leadership Philosophy</h3>
            <p className="text-2xl italic">
              "Analytical science is not just about compliance—it is about building trust through data integrity, scientific rigor, and continuous improvement."
            </p>
            <div className="mt-6 flex justify-center space-x-8">
              <div className="text-center">
                <div className="text-4xl font-bold">15+</div>
                <div className="text-base opacity-90">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold">35+</div>
                <div className="text-base opacity-90">Publications</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold">10+</div>
                <div className="text-base opacity-90">Patents Filed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
