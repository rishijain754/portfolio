import React, { useState } from 'react';
import { Mail, Linkedin, Github, Code, Award, Briefcase, GraduationCap, ChevronDown } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');

  const achievements = [
    {
      title: "CineCraft Team Lead",
      organization: "Google Developer Groups On Campus (GDGOC)",
      period: "2024-2025",
      description: "Leading the CineCraft team at IES IPS Academy, Indore"
    },
    {
      title: "Design Team Member",
      organization: "TEDxIPSA Indore",
      period: "2024",
      description: "Marketing/Communications - Design Department"
    },
    {
      title: "RDBMS PostgreSQL Certification",
      organization: "EduPyramids, SINE, IIT Bombay",
      score: "90%",
      period: "December 2025"
    },
    {
      title: "DBMS Course Completion",
      organization: "Scaler Topics",
      details: "74 Video Tutorials, 16 Modules, 16 Challenges",
      period: "October 2025"
    },
    {
      title: "Python Internship",
      organization: "IMPETUS Technologies",
      period: "May - July 2025",
      description: "8-week skill development program with hands-on experience"
    }
  ];

  const skills = [
    { category: "Languages", items: ["Python", "SQL", "JavaScript", "HTML/CSS"] },
    { category: "Databases", items: ["PostgreSQL", "RDBMS"] },
    { category: "Tools", items: ["Git", "VS Code"] },
    { category: "Soft Skills", items: ["Leadership", "Team Management", "Design", "Communication"] }
  ];

  const projects = [
    {
      title: "TrustLend J&K",
      description: "Alternative credit scoring platform for MSMEs in Jammu & Kashmir",
      tech: ["HTML", "CSS", "JavaScript"],
      features: ["6-pillar trust score system", "Collateral-free lending", "Business assessment tools"]
    }
  ];

  const scrollToSection = (section) => {
    setActiveSection(section);
    // In a real implementation, you'd scroll to the section
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-purple-500/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Rachit Jain
            </div>
            <div className="flex gap-6">
              {['Home', 'About', 'Achievements', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`hover:text-purple-400 transition-colors ${
                    activeSection === item.toLowerCase() ? 'text-purple-400' : ''
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-purple-500 shadow-2xl shadow-purple-500/50 bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
              <span className="text-6xl font-bold text-white">RJ</span>
            </div>
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Rachit Jain
            </h1>
            <p className="text-2xl text-purple-300 mb-4">Computer Science Student</p>
            <p className="text-xl text-gray-400 mb-8">Third Year BTech • IES IPS Academy, Indore</p>
            <div className="flex gap-4 justify-center mb-12">
              <button className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105">
                View My Work
              </button>
              <button className="border border-purple-400 hover:bg-purple-400/10 px-8 py-3 rounded-full font-semibold transition-all">
                Download Resume
              </button>
            </div>
            <div className="flex gap-6 justify-center">
              <a href="#" className="hover:text-purple-400 transition-colors">
                <Github size={28} />
              </a>
              <a href="#" className="hover:text-purple-400 transition-colors">
                <Linkedin size={28} />
              </a>
              <a href="#" className="hover:text-purple-400 transition-colors">
                <Mail size={28} />
              </a>
            </div>
            <div className="mt-16 animate-bounce">
              <ChevronDown size={32} className="mx-auto text-purple-400" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 text-center">
            <GraduationCap className="inline mr-3" size={40} />
            About Me
          </h2>
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-purple-500/20">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I'm a passionate third-year Computer Science student at IES IPS Academy, Indore, with a strong foundation in software development and database management. My journey in tech is driven by curiosity and a commitment to creating impactful solutions.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Currently serving as CineCraft Team Lead at Google Developer Groups On Campus and contributing to TEDxIPSA Indore's Design Team, I combine technical expertise with leadership and creative skills to drive innovation and collaboration.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <Code className="inline mr-3" size={40} />
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillSet, idx) => (
              <div key={idx} className="bg-slate-800/50 rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all">
                <h3 className="text-xl font-bold text-purple-400 mb-4">{skillSet.category}</h3>
                <ul className="space-y-2">
                  {skillSet.items.map((skill, i) => (
                    <li key={i} className="text-gray-300 flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <Award className="inline mr-3" size={40} />
            Achievements & Experience
          </h2>
          <div className="space-y-6">
            {achievements.map((achievement, idx) => (
              <div key={idx} className="bg-slate-800/50 rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all hover:transform hover:scale-[1.02]">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-bold text-purple-400">{achievement.title}</h3>
                  <span className="text-gray-400 text-sm">{achievement.period}</span>
                </div>
                <p className="text-gray-300 font-semibold mb-2">{achievement.organization}</p>
                {achievement.description && (
                  <p className="text-gray-400">{achievement.description}</p>
                )}
                {achievement.score && (
                  <p className="text-green-400 font-semibold mt-2">Score: {achievement.score}</p>
                )}
                {achievement.details && (
                  <p className="text-gray-400 mt-2">{achievement.details}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <Briefcase className="inline mr-3" size={40} />
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-slate-800/50 rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all hover:transform hover:scale-[1.02]">
                <h3 className="text-2xl font-bold text-purple-400 mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="mb-4">
                  <p className="text-sm text-gray-400 mb-2">Technologies:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <ul className="space-y-1">
                  {project.features.map((feature, i) => (
                    <li key={i} className="text-gray-400 text-sm flex items-center">
                      <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-8">
            <Mail className="inline mr-3" size={40} />
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            I'm always interested in hearing about new opportunities and collaborations.
          </p>
          <div className="flex gap-6 justify-center mb-8">
            <a href="#" className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105 flex items-center gap-2">
              <Mail size={20} />
              Email Me
            </a>
            <a href="#" className="border border-purple-400 hover:bg-purple-400/10 px-8 py-3 rounded-full font-semibold transition-all flex items-center gap-2">
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-purple-500/20">
        <div className="container mx-auto text-center text-gray-400">
          <p>© 2025 Rachit Jain. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}