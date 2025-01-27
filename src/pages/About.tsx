import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const teamMembers = [
  {
    name: 'Macario Vinoth Fernandez',
    role: 'Project Lead',
    contribution: 'System Architecture & Team Management',
    image: 'macario.jpg',
    social: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'macariovinothfernandez@gmail.com'
    }
  },
  {
    name: 'Akshitha Poovezhil R',
    role: 'Hardware Engineer',
    contribution: 'Charging System Design',
    image: 'akshitha.jpg',
    social: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'akshitha22rajasekaran@gmail.com'
    }
  },
  {
    name: 'Sri Sundhar K',
    role: 'Software Engineer',
    contribution: 'Control Systems & UI',
    image: 'srisunthar.jpeg',
    social: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'srisundar5824@gmail.com'
    }
  },
  {
    name: 'Diviyashree P',
    role: 'Power Systems Engineer',
    contribution: 'Grid Integration & Power Management',
    image: 'diviyashree.jpg',
    social: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'diviyashreeperiyampillai@gmail.com'
    }
  },
  {
    name: 'Madhumita T S',
    role: 'Testing Engineer',
    contribution: 'Quality Assurance & Safety Compliance',
    image: 'madhumitha.jpg',
    social: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'mswt901@gmail.com'
    }
  }
];

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Team Header */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-6">Meet Our Team</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We're a dedicated team of engineers and innovators working to revolutionize
            electric vehicle charging technology.
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-green-600 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600 mb-4">{member.contribution}</p>
                  
                  <div className="flex space-x-4">
                    <a
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href={`mailto:${member.social.email}`}
                      className="text-gray-600 hover:text-gray-900"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're committed to accelerating the world's transition to sustainable energy
            through innovative charging solutions that make electric vehicles more
            accessible and convenient for everyone.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;