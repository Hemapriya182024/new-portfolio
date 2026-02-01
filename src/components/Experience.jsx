import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "Vice President – Analytical Services",
      company: "Malladi Drugs & Pharmaceuticals Ltd.",
      period: "April 2016 – Present",
      responsibilities: [
        "Lead analytical strategy for API development, validation, and lifecycle management",
        "Standardized laboratory SOPs and workflows, significantly improving compliance, efficiency, and audit readiness",
        "Implemented and strengthened LIMS infrastructure, enhancing traceability and data integrity",
        "Oversaw analytical support for regulatory filings and responses across multiple global markets",
        "Guided teams in impurity profiling, dissolution, residual solvents, and chiral analysis",
        "Actively contributed to compendial method development and harmonization efforts"
      ]
    },
    {
      title: "General Manager – Analytical Services",
      company: "Malladi Drugs & Pharmaceuticals Ltd.",
      period: "April 2013 – March 2016",
      responsibilities: [
        "Managed analytical operations supporting R&D, QA, and manufacturing",
        "Strengthened method transfer processes from laboratory to plant scale",
        "Improved turnaround times and reproducibility through workflow optimization"
      ]
    },
    {
      title: "Group Leader – Analytical R&D",
      company: "Malladi Drugs & Pharmaceuticals Ltd.",
      period: "July 2010 – March 2013",
      responsibilities: [
        "Led analytical development teams for new APIs",
        "Designed and validated chromatographic methods aligned with pharmacopoeial standards",
        "Mentored scientists and built technical capability within the division"
      ]
    },
    {
      title: "Senior Scientist – ARD AMV",
      company: "Malladi Drugs & Pharmaceuticals Ltd.",
      period: "March 2008 – June 2010",
      responsibilities: [
        "Conducted advanced analytical research supporting API development",
        "Specialized in assay development and impurity characterization"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 
            className="text-5xl md:text-6xl font-bold text-accent mb-4"
            data-aos="fade-up"
          >
            Professional Experience
          </h2>
          <div 
            className="w-24 h-1 bg-primary mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          ></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="mb-12"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={index * 100}
            >
              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-3xl font-bold text-accent mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-xl text-primary font-medium">
                      {exp.company}
                    </p>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span className="px-4 py-2 bg-primary text-white rounded-full text-base font-medium">
                      {exp.period}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {exp.responsibilities.map((resp, respIndex) => (
                    <div key={respIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-xl text-secondary">{resp}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
