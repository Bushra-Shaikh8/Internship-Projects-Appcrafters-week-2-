import React from 'react';
import { Cloud, Shield, Code, Database, Smartphone, Settings } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services to optimize your business operations and reduce costs.',
      features: ['AWS & Azure Expertise', 'Cloud Migration', '24/7 Monitoring', 'Cost Optimization']
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your business from evolving threats and ensure compliance.',
      features: ['Threat Detection', 'Security Audits', 'Compliance Management', 'Incident Response']
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored software solutions built with cutting-edge technologies to meet your unique business needs.',
      features: ['Web Applications', 'Mobile Apps', 'API Development', 'System Integration']
    },
    {
      icon: Database,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics and business intelligence solutions.',
      features: ['Data Visualization', 'Predictive Analytics', 'Business Intelligence', 'Real-time Reporting']
    },
    {
      icon: Smartphone,
      title: 'IT Consulting',
      description: 'Strategic IT guidance to align technology with your business goals and drive digital transformation.',
      features: ['Digital Strategy', 'Technology Roadmap', 'Process Optimization', 'Change Management']
    },
    {
      icon: Settings,
      title: 'Managed Services',
      description: 'Complete IT infrastructure management and support to keep your systems running smoothly 24/7.',
      features: ['Network Management', 'System Maintenance', 'Help Desk Support', 'Backup Solutions']
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive IT Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From cloud solutions to cybersecurity, we provide end-to-end IT services 
            that empower your business to thrive in the digital age.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 ml-4">{service.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="mt-6 text-blue-600 font-medium hover:text-blue-800 transition-colors duration-200 group-hover:translate-x-2 transform inline-flex items-center">
                Learn More
                <span className="ml-2">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;