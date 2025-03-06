import React from 'react';

interface CourseProps {
  title: string;
  level: string;
  duration: string;
  description: string;
  image: string;
  price: string;
}

const Course: React.FC<CourseProps> = ({ title, level, duration, description, image, price }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-purple-500/20 hover:border-purple-500/50 transition duration-300 transform hover:-translate-y-2">
      <div className="h-48 bg-gray-700 relative">
        <div className="absolute inset-0 flex items-center justify-center text-4xl">{image}</div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
          <span className="bg-purple-600 text-xs text-white px-2 py-1 rounded">{level}</span>
          <span className="text-gray-400 text-sm">{duration}</span>
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-purple-500">{price}</span>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition duration-300">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

const Courses: React.FC = () => {
  const courses = [
    {
      title: "JavaScript Fundamentals",
      level: "Beginner",
      duration: "8 weeks",
      description: "Master the basics of JavaScript and build a solid foundation for web development.",
      image: "🌟",
      price: "$49"
    },
    {
      title: "React JS Masterclass",
      level: "Intermediate",
      duration: "10 weeks",
      description: "Learn to build modern, reactive user interfaces with the popular React library.",
      image: "⚛️",
      price: "$79"
    },
    {
      title: "Full-Stack Development",
      level: "Advanced",
      duration: "12 weeks",
      description: "Become a full-stack developer with Node.js, Express, and MongoDB.",
      image: "🔥",
      price: "$99"
    },
    {
      title: "Python for Data Science",
      level: "Intermediate",
      duration: "10 weeks",
      description: "Harness the power of Python for data analysis, visualization, and machine learning.",
      image: "🐍",
      price: "$89"
    },
    {
      title: "Mobile App Development",
      level: "Intermediate",
      duration: "12 weeks",
      description: "Build cross-platform mobile apps with React Native for iOS and Android.",
      image: "📱",
      price: "$89"
    },
    {
      title: "DevOps & Cloud Engineering",
      level: "Advanced",
      duration: "14 weeks",
      description: "Master CI/CD, Docker, Kubernetes, and cloud services like AWS or Azure.",
      image: "☁️",
      price: "$129"
    }
  ];

  return (
    <section id="courses" className="py-20 px-6 md:px-16 bg-black">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Popular Courses</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore our most popular courses and start your journey to becoming a professional developer.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Course
              key={index}
              title={course.title}
              level={course.level}
              duration={course.duration}
              description={course.description}
              image={course.image}
              price={course.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
