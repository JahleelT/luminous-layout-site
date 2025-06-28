import React from 'react';
import { Github, ArrowRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'Recursive display of my portfolio website (this website). Used to showcase my other projects. This is a simple single-page application used as a landing page.',
      image: 'portfolio-screenshot.png',
      technologies: ['React', 'TypeScript', 'Tailwind'],
      githubUrl: 'https://github.com/JahleelT/luminous-layout-site',
      liveUrl: '',
      featured: false
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'tasking-site.png',
      technologies: ['React', 'TypeScript', 'Tailwind'],
      githubUrl: 'https://github.com/JahleelT/task-travailing-tasker',
      liveUrl: 'https://task-travailing-tasker.vercel.app/',
      featured: false
    },
    {
      title: 'Resume Screener',
      description: 'This is a Flask app that helps users better cater their resumes to an individual job posting by submitting a URL of the job posting along with the PDF of their resume.',
      image: 'screener.png',
      technologies: ['Flask', 'HTML/CSS/JS', 'BeautifulSoup', 'PyMuPDF', 'OpenAI API', "Playwright", 'MongoDB', 'Docker', 'Render'],
      githubUrl: 'https://github.com/JahleelT/jahleelt-resume-screener',
      liveUrl: 'https://jahleelt-resume-screener.onrender.com/',
      featured: true
    },
    {
      title: 'Photographical Display',
      description: 'This is an application that documents pictures I have taken throughout my life starting in ~2021 from various cities and countries. Inspiration for the project was taken from the "Award Winning Animation With Only 20 Lines Of CSS?" video on YouTube from the channel @Hyperplexed.',
      image: 'display-site.png',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      githubUrl: 'https://github.com/JahleelT/photographical-display',
      liveUrl: 'https://photographical-display.vercel.app/',
      featured: true
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
                  src={`/thumbnails/${project.image}`}
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
                    src={`/thumbnails/${project.image}`}
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
