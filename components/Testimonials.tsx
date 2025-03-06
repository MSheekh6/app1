import React from 'react';

interface TestimonialProps {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ name, role, content, avatar }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-purple-500/20">
      <div className="flex items-center mb-4">
        <div className="h-12 w-12 rounded-full bg-purple-600 flex items-center justify-center text-xl mr-4">
          {avatar}
        </div>
        <div>
          <h4 className="font-bold">{name}</h4>
          <p className="text-gray-400 text-sm">{role}</p>
        </div>
      </div>
      <p className="text-gray-300">{content}</p>
      <div className="mt-4 text-yellow-500">
        ★★★★★
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Front-end Developer",
      content: "The JavaScript course completely changed my career. I went from knowing nothing about coding to landing a job as a front-end developer in just 6 months!",
      avatar: "👩‍💻"
    },
    {
      name: "Michael Chen",
      role: "Full-stack Engineer",
      content: "The React Masterclass helped me level up my skills and build more complex applications. The project-based approach was exactly what I needed.",
      avatar: "👨‍💻"
    },
    {
      name: "Jessica Williams",
      role: "UI/UX Designer",
      content: "As a designer, I wanted to understand the development process better. These courses were perfect - clear, comprehensive, and practical.",
      avatar: "👩‍🎨"
    },
    {
      name: "David Rodriguez",
      role: "Software Engineer",
      content: "The Full-Stack Development course gave me the confidence to build complete applications from scratch. Best investment in my education!",
      avatar: "👨‍🔧"
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-6 md:px-16 bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Students Say</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our students who have transformed their lives through our courses.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              content={testimonial.content}
              avatar={testimonial.avatar}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
