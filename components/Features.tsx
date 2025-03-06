import React from 'react';

interface FeatureProps {
  icon: string;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-purple-500/20 hover:border-purple-500/50 transition duration-300 transform hover:-translate-y-2">
      <div className="text-purple-500 text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: "💻",
      title: "Interactive Coding",
      description: "Learn by doing with our hands-on coding challenges and interactive exercises."
    },
    {
      icon: "🎓",
      title: "Expert Instructors",
      description: "Learn from industry professionals with years of real-world experience."
    },
    {
      icon: "🚀",
      title: "Project-Based Learning",
      description: "Build real projects that you can add to your portfolio and showcase to employers."
    },
    {
      icon: "🔄",
      title: "Continuous Updates",
      description: "Our courses are regularly updated to keep pace with the latest technologies and trends."
    },
    {
      icon: "👥",
      title: "Community Support",
      description: "Join our community of learners and get help whenever you need it."
    },
    {
      icon: "📱",
      title: "Mobile Learning",
      description: "Access our courses from any device, anywhere, anytime."
    }
  ];

  return (
    <section id="features" className="py-20 px-6 md:px-16 bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose CodeMastery?</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Our platform offers everything you need to transform from beginner to professional developer.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
