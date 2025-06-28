import React from 'react';
import { Award, Users, Target, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Users, number: '500+', label: 'Happy Clients' },
    { icon: Award, number: '15+', label: 'Years Experience' },
    { icon: Target, number: '1000+', label: 'Projects Completed' },
    { icon: TrendingUp, number: '99.9%', label: 'Success Rate' }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Leading IT Innovation Since 2008
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                TechFlow Solutions has been at the forefront of technological innovation, 
                helping businesses transform their operations through cutting-edge IT solutions. 
                Our team of certified experts brings deep industry knowledge and proven methodologies.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe in building long-term partnerships with our clients, providing not just 
                solutions but strategic guidance that drives sustainable growth and competitive advantage.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg mb-4">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-teal-100 rounded-3xl transform -rotate-6"></div>
            <img 
              src="https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Modern office environment with IT professionals"
              className="relative rounded-3xl shadow-xl w-full h-96 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;