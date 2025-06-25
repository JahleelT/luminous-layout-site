
import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:jtownwar1@gmail.com',
      handle: 'jtownwar1@gmail.com'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/JahleelT',
      handle: 'github.com/JahleelT'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/jahleel-t-443278215/',
      handle: 'linkedin.com/in/jahleel-t-443278215/'
    }
  ];

  return (
    <section id="contact" className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-platinum mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-silver_lake_blue-300 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting projects
          </p>
        </div>

        {/* Contact Form */}
        <div className="neumorphic p-8 mb-12 max-w-2xl mx-auto">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-silver_lake_blue text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full neumorphic-inset p-3 rounded-xl bg-oxford_blue text-platinum placeholder-yinmn_blue-700 focus:outline-none focus:ring-2 focus:ring-silver_lake_blue"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-silver_lake_blue text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full neumorphic-inset p-3 rounded-xl bg-oxford_blue text-platinum placeholder-yinmn_blue-700 focus:outline-none focus:ring-2 focus:ring-silver_lake_blue"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-silver_lake_blue text-sm font-medium mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full neumorphic-inset p-3 rounded-xl bg-oxford_blue text-platinum placeholder-yinmn_blue-700 focus:outline-none focus:ring-2 focus:ring-silver_lake_blue"
                placeholder="Project collaboration"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-silver_lake_blue text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full neumorphic-inset p-3 rounded-xl bg-oxford_blue text-platinum placeholder-yinmn_blue-700 focus:outline-none focus:ring-2 focus:ring-silver_lake_blue resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            
            <button
              type="submit"
              className="neumorphic-button bg-gradient-to-r from-yinmn_blue to-silver_lake_blue w-full md:w-auto px-8 py-3"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Social Links */}
        <div className="grid md:grid-cols-3 gap-6">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="neumorphic p-6 group neumorphic-hover"
              >
                <div className="flex flex-col items-center space-y-3">
                  <div className="neumorphic-inset p-4 rounded-xl group-hover:shadow-neumorphism-hover transition-all duration-300">
                    <Icon className="w-8 h-8 text-silver_lake_blue" />
                  </div>
                  <h3 className="text-lg font-semibold text-platinum">{link.name}</h3>
                  <p className="text-yinmn_blue-800 text-sm">{link.handle}</p>
                </div>
              </a>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-yinmn_blue">
          <p className="text-yinmn_blue-800">
            © 2025 Jahleel Townsend. Built with React and Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
