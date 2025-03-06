import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="py-20 px-6 md:px-16 relative overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0 z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
            Master Coding with Interactive Learning
          </h1>
          <p className="text-xl mb-8 text-gray-300 max-w-lg">
            Join thousands of developers who have accelerated their careers through our proven learning system.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 transform hover:-translate-y-1">
              Start Learning
            </button>
            <button className="bg-transparent border-2 border-purple-500 text-purple-500 font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-purple-500 hover:text-white transition duration-300 transform hover:-translate-y-1">
              View Courses
            </button>
          </div>
        </div>
        <div className="md:w-1/2 z-10">
          <div className="bg-gray-800 p-6 rounded-xl shadow-2xl border border-purple-500/30">
            <pre className="text-sm md:text-base text-green-400 font-mono overflow-x-auto">
              <code>
{`function learnCoding() {
  const skills = ['JavaScript', 'React', 'Node.js'];
  const confidence = 100;
  
  return {
    skills,
    confidence,
    success: true
  };
}

// Your coding journey starts here
const yourFuture = learnCoding();
console.log(yourFuture); // Amazing career ahead!`}
              </code>
            </pre>
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-600/20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-600/20 rounded-full filter blur-3xl"></div>
    </section>
  );
};

export default Hero;
