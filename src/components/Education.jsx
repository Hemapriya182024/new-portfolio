import React from 'react';

const Education = () => {
  const education = [
    {
      degree: "PhD – Analytical Chemistry",
      institution: "PRIST University",
      period: "2007 – 2010",
      description: "Advanced research in analytical chemistry with focus on pharmaceutical analysis"
    },
    {
      degree: "MBA – Operations Research",
      institution: "Indira Gandhi National Open University",
      period: "",
      description: "Business management with specialization in operations research"
    },
    {
      degree: "MSc – Chemistry",
      institution: "University of Madras",
      period: "",
      description: "Postgraduate studies in chemistry"
    },
    {
      degree: "MPhil – Chemistry",
      institution: "Bharathidasan University",
      period: "",
      description: "Research-focused postgraduate degree in chemistry"
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 
            className="text-5xl md:text-6xl font-bold text-accent mb-4"
            data-aos="fade-up"
          >
            Education
          </h2>
          <div 
            className="w-24 h-1 bg-primary mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          ></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <div 
              key={index}
              className="bg-light p-8 rounded-lg hover:shadow-md transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={index * 100}
            >
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-accent mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-xl text-primary font-medium mb-1">
                    {edu.institution}
                  </p>
                  {edu.period && (
                    <p className="text-base text-secondary mb-3">
                      {edu.period}
                    </p>
                  )}
                  <p className="text-xl text-secondary">
                    {edu.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
