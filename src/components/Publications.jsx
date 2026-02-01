import React from 'react';

const Publications = () => {
  const publications = [
    {
      title: "35+ peer-reviewed journal publications",
      description: "Extensive research contributions to analytical chemistry and pharmaceutical sciences"
    },
    {
      title: "International patents",
      description: "Patents filed under World Intellectual Property Organization (WIPO)"
    },
    {
      title: "Research areas include:",
      items: [
        "Analytical chemistry",
        "Regulatory science",
        "Process Analytical Technology (PAT)",
        "Chemometrics"
      ]
    }
  ];

  const recognition = [
    {
      title: "Guest Lecturer",
      organization: "Pharmaceutical & Analytical Sciences",
      icon: "🎓"
    },
    {
      title: "Journal Reviewer",
      organization: "Elsevier",
      icon: "📝"
    },
    {
      title: "Member, Expert Working Groups (EWGs)",
      organization: "Indian Pharmacopoeia",
      icon: "🏛️"
    },
    {
      title: "Contributor",
      organization: "Nitrosamines Impurity Analytical Hub",
      icon: "🔬"
    },
    {
      title: "Contributor",
      organization: "United States Pharmacopeia (USP) initiatives",
      icon: "⚗️"
    }
  ];

  return (
    <section id="publications" className="py-20 bg-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 
            className="text-5xl md:text-6xl font-bold text-accent mb-4"
            data-aos="fade-up"
          >
            Publications & Intellectual Property
          </h2>
          <div 
            className="w-24 h-1 bg-primary mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          ></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 
              className="text-3xl font-bold text-accent mb-8"
              data-aos="fade-right"
            >
              Research Contributions
            </h3>
            <div className="space-y-6">
              {publications.map((pub, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                  data-aos="fade-right"
                  data-aos-duration="800"
                  data-aos-delay={index * 100}
                >
                  <h4 className="text-2xl font-semibold text-primary mb-3">
                    {pub.title}
                  </h4>
                  <p className="text-xl text-secondary mb-3">
                    {pub.description}
                  </p>
                  {pub.items && (
                    <div className="space-y-2">
                      {pub.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                          <p className="text-xl text-secondary">{item}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 
              className="text-3xl font-bold text-accent mb-8"
              data-aos="fade-left"
            >
              Professional Recognition
            </h3>
            <div className="space-y-4">
              {recognition.map((rec, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center"
                  data-aos="fade-left"
                  data-aos-duration="800"
                  data-aos-delay={index * 100}
                >
                  <div className="text-3xl mr-4">{rec.icon}</div>
                  <div>
                    <h4 className="text-xl font-semibold text-primary mb-1">
                      {rec.title}
                    </h4>
                    <p className="text-xl text-secondary">
                      {rec.organization}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div 
          className="text-center"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <div className="bg-gradient-to-r from-primary to-blue-600 text-white p-8 rounded-lg max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Research Impact</h3>
            <p className="text-xl leading-relaxed">
              Contributing to the advancement of analytical sciences through innovative research, 
      regulatory compliance frameworks, and knowledge sharing with the global scientific community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
