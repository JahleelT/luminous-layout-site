
import React from 'react';
import { Code, User, Book } from 'lucide-react';

const About = () => {
  const skills = [
    { category: 'Frontend', items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js'] },
    { category: 'Backend', items: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'GraphQL'] },
    { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'Figma', 'Jest'] },
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
                I'm a passionate full-stack developer with over 5 years of experience 
                creating web applications and digital solutions. I love turning complex 
                problems into simple, beautiful designs.
              </p>
              <p className="text-yinmn_blue-800 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open source projects, or sharing my knowledge through 
                blog posts and mentoring.
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
                Computer Science graduate with a focus on web development and user experience. 
                I've worked with startups and established companies, helping them build 
                scalable and user-friendly applications.
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
