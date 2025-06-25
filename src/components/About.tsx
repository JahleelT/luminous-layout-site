
import React from 'react';
import { Code, User, Book } from 'lucide-react';

const About = () => {
  const skills = [
    { category: 'Programming Languages', items: ['React', 'TypeScript', 'JavaScript', 'CSS', 'HTML', 'Python', 'Java', 'C', 'Golang'] },
    { category: 'Tools & Technologies', items: ['Node.js', 'Flask', 'PostgreSQL', 'MongoDB', 'Git', 'Docker', 'Figma', 'Vue.js', 'Next.js', 'React', 'Axios', 'Mocha', 'Axios', 'p5', 'JSON Web Token', 'Handlebars.js', 'Socket.io', 'Agile Methodologies', 'Scrum', 'DevOps Fundamentals', 'NPM', 'GitHub', 'Pandas', 'NumPy'] },
    { category: 'Databases', items: ['PostgreSQL', 'SQLite', 'MongoDB']},
    { category: 'AI/ML Technologies', items: ['OpenAI API', 'Playwright', 'Beautiful Soup', 'PyMuPDF', 'Web Scraping', 'PDF Parsing', 'Natural Language Processing', 'Prompt Engineering', 'AI Integration']}
  ];



  return (
    <section id="about" className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-platinum mb-4">
            About Me
          </h2>
          <p className="text-xl text-silver_lake_blue-300 max-w-2xl mx-auto">
            Passionate developer with a love for creating exceptional digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div className="space-y-6">
            <div className="neumorphic p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="neumorphic-inset p-3 rounded-xl">
                  <User className="w-6 h-6 text-silver_lake_blue" />
                </div>
                <h3 className="text-2xl font-semibold text-platinum">My Story</h3>
              </div>
              <p className="text-yinmn_blue-800 leading-relaxed mb-4">
                I grew up in Seattle before moving to New York to pursue a degree in Computer Science at NYU. While I've always had a curiosity for technology, I’ve found just as much joy in creative expression—whether through music, cooking, or thoughtful design. That blend of logic and creativity naturally drew me toward frontend development, where I can build tools that are not just functional, but feel good to use.
              </p>
              <p className="text-yinmn_blue-800 leading-relaxed">
                Outside of tech, I’m usually birdwatching in a park, playing piano or guitar, or challenging friends to a game of ping pong. I love walking through the city and discovering new cuisines, dishes, and hidden food spots. At home, you’ll often find me cooking or baking something new, curled up with a manhwa, or listening to music that helps me recharge and re-focus.
              </p>
            </div>

            <div className="neumorphic p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="neumorphic-inset p-3 rounded-xl">
                  <Book className="w-6 h-6 text-silver_lake_blue" />
                </div>
                <h3 className="text-2xl font-semibold text-platinum">Background</h3>
              </div>
              <p className="text-yinmn_blue-800 leading-relaxed">
                I'm a Computer Science graduate from New York University with a focus on web development, user experience, and building responsive, accessible applications. My work combines a detail-oriented approach to design with a practical understanding of frontend frameworks and modern development workflows.
              </p>
              <br></br>
              <p className="text-yinmn_blue-800 leading-relaxed">
                Currently, I’m contracting with Scale AI as a Software Engineer, contributing to AI data training pipelines, and have recently started working with Datable Services on client-facing development projects. My past experience includes freelance work and startup collaborations, where I’ve helped bring early product ideas to life through thoughtful, performant frontend engineering.
              </p>

            </div>
          </div>

          {/* Skills */}
          <div className="space-y-6">
            <div className="neumorphic p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="neumorphic-inset p-3 rounded-xl">
                  <Code className="w-6 h-6 text-silver_lake_blue" />
                </div>
                <h3 className="text-2xl font-semibold text-platinum">Skills & Technologies</h3>
              </div>
              
              <div className="space-y-6">
                {skills.map((skillGroup) => (
                  <div key={skillGroup.category}>
                    <h4 className="text-lg font-semibold text-silver_lake_blue mb-3">
                      {skillGroup.category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill) => (
                        <span
                          key={skill}
                          className="neumorphic-inset px-3 py-1 text-sm text-yinmn_blue-700 rounded-lg"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
