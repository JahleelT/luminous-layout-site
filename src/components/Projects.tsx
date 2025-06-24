import React from 'react';
import { Github, ArrowRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.',
      image: 'photo-1486312338219-ce68d2c6f44d',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      githubUrl: '#',
      liveUrl: '#',
      featured: true
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'photo-1581091226825-a6a2a5aee158',
      technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Socket.io'],
      githubUrl: '#',
      liveUrl: '#',
      featured: true
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics.',
      image: 'photo-1488590528505-98d2b5aba04b',
      technologies: ['Vue.js', 'OpenWeather API', 'Chart.js'],
      githubUrl: '#',
      liveUrl: '#',
      featured: false
    },
    {
      title: 'Portfolio Website',
      description: 'A modern portfolio website showcasing projects and skills with smooth animations and responsive design.',
      image: 'photo-1487058792275-0ad4aaf24ca7',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
      githubUrl: '#',
      liveUrl: '#',
      featured: false
    },
    {
      title: 'Blog Platform',
      description: 'A content management system for bloggers with markdown support, SEO optimization, and social sharing.',
      image: 'photo-1649972904349-6e44c42644a7',
      technologies: ['Gatsby', 'GraphQL', 'Contentful'],
      githubUrl: '#',
      liveUrl: '#',
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-platinum mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-silver_lake_blue-300 max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for development
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div key={project.title} className="neumorphic p-8 group neumorphic-hover">
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img
                  src={`https://images.unsplash.com/${project.image}?auto=format&fit=crop&w=600&h=400`}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-oxford_blue/80 to-transparent" />
              </div>
              
              <h3 className="text-2xl font-bold text-platinum mb-3">{project.title}</h3>
              <p className="text-yinmn_blue-800 mb-4 leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="neumorphic-inset px-3 py-1 text-sm text-silver_lake_blue rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <a
                  href={project.githubUrl}
                  className="neumorphic-button flex items-center gap-2 text-sm"
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
                <a
                  href={project.liveUrl}
                  className="neumorphic-button bg-gradient-to-r from-yinmn_blue to-silver_lake_blue flex items-center gap-2 text-sm"
                >
                  Live Demo
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-3xl font-bold text-platinum mb-8 text-center">Other Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div key={project.title} className="neumorphic p-6 group neumorphic-hover">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={`https://images.unsplash.com/${project.image}?auto=format&fit=crop&w=400&h=200`}
                    alt={project.title}
                    className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                <h4 className="text-xl font-semibold text-platinum mb-2">{project.title}</h4>
                <p className="text-yinmn_blue-800 text-sm mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="neumorphic-inset px-2 py-1 text-xs text-silver_lake_blue rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <a
                    href={project.githubUrl}
                    className="neumorphic px-3 py-1 text-sm rounded-lg hover:shadow-neumorphism-hover transition-all duration-200 flex items-center gap-1"
                  >
                    <Github className="w-3 h-3" />
                    Code
                  </a>
                  <a
                    href={project.liveUrl}
                    className="neumorphic px-3 py-1 text-sm rounded-lg bg-gradient-to-r from-yinmn_blue/20 to-silver_lake_blue/20 hover:shadow-neumorphism-hover transition-all duration-200 flex items-center gap-1"
                  >
                    Demo
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
