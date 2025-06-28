import React from 'react';
import { Clock, ThumbsUp, Zap, HeadphonesIcon } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock technical support to ensure your systems run smoothly without interruption.'
    },
    {
      icon: Zap,
      title: 'Rapid Deployment',
      description: 'Quick implementation and deployment of solutions to get you up and running fast.'
    },
    {
      icon: ThumbsUp,
      title: 'Proven Results',
      description: 'Track record of successful implementations with measurable business outcomes.'
    },
    {
      icon: HeadphonesIcon,
      title: 'Expert Team',
      description: 'Certified professionals with deep expertise across all major technology platforms.'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-r from-blue-600 to-teal-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Why Choose TechFlow Solutions?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            We combine technical excellence with business understanding to deliver 
            solutions that drive real results for your organization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
              <p className="text-blue-100 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;