import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import barberBookImage from './assets/barber.png'; 
import LinkFree from './assets/linkfree.png'; 
import Shopping from './assets/shopping.png';
import Jobs from './assets/jobs.png';
import Travel from './assets/travel.png';

// --- SVG Icons (to remove dependency) ---
const FiGithub = () => <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>;
const FiLinkedin = () => <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;
const FiExternalLink = () => <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>;
const FiMenu = () => <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>;
const FiX = () => <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>;
const FiBriefcase = () => <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>;
const FiMail = () => <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>;
const CodolioIcon = () => <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12.012,2.25C6.486,2.25,2.02,6.716,2.02,12.242s4.467,9.992,9.992,9.992s9.992-4.467,9.992-9.992S17.538,2.25,12.012,2.25z M12.012,20.417c-4.505,0-8.159-3.654-8.159-8.159c0-4.505,3.654-8.159,8.159-8.159c4.505,0,8.159,3.654,8.159,8.159C20.171,16.763,16.517,20.417,12.012,20.417z M11.22,8.235l-3.963,3.963l3.963,3.963l1.585-1.585l-2.378-2.378l2.378-2.378L11.22,8.235z M15.182,12.198l-1.585,1.585l2.378,2.378l-1.585,1.585l3.963-3.963L15.182,12.198z"></path></svg>;
const FiAward = () => <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 17 17 23 15.79 13.88"></polyline></svg>;
const FiUsers = () => <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>;


// --- Reusable Components ---
const Section = ({ id, children }) => (
  <motion.section
    id={id}
    className="min-h-screen flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8 relative z-10"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.8 }}
  >
    <div className="container mx-auto max-w-6xl">
      {children}
    </div>
  </motion.section>
);

const SectionTitle = ({ children }) => (
  <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 text-slate-100">
    {children}
  </h2>
);

// --- Main App Component ---
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- Data from Resume ---
  const skills = [
    { name: 'Core & Advanced Java', level: '95%' },
    { name: 'Spring Boot, MVC & JPA', level: '90%' },
    { name: 'React.js', level: '85%' },
    { name: 'JavaScript, HTML, CSS', level: '90%' },
    { name: 'MySQL & MongoDB (Basic)', level: '80%' },
    { name: 'RESTful APIs & TailwindCSS', level: '85%' },
  ];

  const projects = [
    {
      title: 'BarberBook',
      description: 'A full-stack barber shop management system with JWT authentication and separate dashboards for barbers and customers.',
      tech: ['React', 'Spring Boot', 'JWT', 'PostgreSQL' , 'Tailwind CSS' , 'Spring Security' , 'Axios' , 'React Router' , 'Spring Data JPA' , 'React Toastify'],
      github: 'https://github.com/Sumitvi/BarberBook',
      live: 'https://barber-book-one.vercel.app',
      image: barberBookImage,
    },
    {
      title: 'LinkFree',
      description: 'A full-stack Link-in-bio platform like Linktree, featuring link management, analytics, and theme customization.',
      tech: ['React.js', 'Spring Boot', 'JWT', 'Tailwind CSS' , 'PostgreSQL', 'Axios', 'React Router' , 'Spring Data JPA', 'React Toastify' , 'BCrypt'],
      github: 'https://github.com/Sumitvi/LinkFree',
      live: 'https://link-free-nu.vercel.app',
      image: LinkFree,
    },
    {
      title: 'HireJobs',
      description: 'A modern job portal built with React.js and Firebase, helping job seekers explore and apply for opportunities seamlessly.',
      tech: ['React.js', 'Tailwind CSS', 'Firebase' , 'React Router', 'Axios' , 'Firebase Authentication' , 'Firebase hosting'],
      github: 'https://github.com/Sumitvi/hirejobs',
      live: 'https://hirejobs-two.vercel.app/',
      image: Jobs,
    },
    {
      title: 'ChatApp - Group Chat',
      description: 'A real-time group chat application using Spring Boot for the backend, React for the frontend, and WebSockets for messaging.',
      tech: ['Spring Boot', 'React.js', 'WebSocket', 'MongoDB' , 'Tailwind CSS', 'Axios', 'React Router', 'Spring Data JPA'],
      github: 'https://github.com/Sumitvi/NewChatApp',
      live: '#',
      image: 'https://placehold.co/600x400/1e293b/94a3b8?text=ChatApp',
    },
    {
      title: 'ExploreX Travel Companion',
      description: 'A dynamic and user-friendly travel platform for connecting with travelers and discovering new adventures.',
      tech: ['React.js', 'Bootstrap', 'JavaScript'],
      github: 'https://github.com/Sumitvi/explorexwebsite',
      live: 'https://explorexwebsite-pnad.vercel.app/',
      image: Travel,
    },
    {
      title: 'Orebishopping App',
      description: 'A modern e-commerce shopping application created with React.js and Tailwind CSS for a seamless user experience.',
      tech: ['React.js', 'TailwindCss', 'React Router'],
      github: 'https://github.com/Sumitvi/orebishoppingapp',
      live: 'https://orebishoppingapp.vercel.app',
      image: Shopping,
    },
  ];

  const experiences = [
    {
      role: 'Open Source Contributor',
      company: 'Girlscript Summer of Code',
      duration: 'Dec 2024 - Jan 2025',
      description: 'Contributed to multiple projects by improving features, resolving issues, and optimizing code. Collaborated with maintainers to develop scalable solutions.',
    },
   
    {
      role: 'Research Intern',
      company: 'Maulana Azad National Institute of Technology (MANIT)',
      duration: 'Jun 2024 - Jul 2024',
      description: 'Gained valuable knowledge of Industrial Research and Computerized Maintenance Management Systems (CMMS).',
    },

     {
      role: 'Frontend Developer',
      company: 'Cipherbyte Technology Pvt. Ltd.',
      duration: 'Jan 2023 - Mar 2023',
      description: 'Utilized HTML, CSS, JavaScript, and React.js to create dynamic and user-friendly interfaces. Optimized website performance and ensured cross-browser compatibility.',
    },
  ];

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="bg-slate-900 text-slate-300 font-poppins antialiased relative">
      {/* --- Animated Gradient Background --- */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="gradient-bg">
          <svg xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="goo">
                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
                <feBlend in="SourceGraphic" in2="goo" />
              </filter>
            </defs>
          </svg>
          <div className="gradients-container">
            <div className="g1"></div>
            <div className="g2"></div>
            <div className="g3"></div>
            <div className="g4"></div>
            <div className="g5"></div>
          </div>
        </div>
      </div>
      <style>{`
        .gradient-bg {
          width: 100vw;
          height: 100vh;
          position: fixed;
          overflow: hidden;
          background: #0d1117;
          filter: url(#goo);
        }
        .gradients-container {
          width: 100%;
          height: 100%;
        }
        .g1, .g2, .g3, .g4, .g5 {
          width: 100%;
          height: 100%;
          position: absolute;
          mix-blend-mode: screen;
        }
        .g1 { background: radial-gradient(circle at center, rgba(168, 85, 247, 0.8) 0, rgba(168, 85, 247, 0) 50%) no-repeat; animation: move-g1 18s infinite; }
        .g2 { background: radial-gradient(circle at center, rgba(34, 211, 238, 0.8) 0, rgba(34, 211, 238, 0) 50%) no-repeat; animation: move-g2 20s infinite; }
        .g3 { background: radial-gradient(circle at center, rgba(139, 92, 246, 0.8) 0, rgba(139, 92, 246, 0) 50%) no-repeat; animation: move-g3 22s infinite; }
        .g4 { background: radial-gradient(circle at center, rgba(236, 72, 153, 0.8) 0, rgba(236, 72, 153, 0) 50%) no-repeat; animation: move-g4 24s infinite; }
        .g5 { background: radial-gradient(circle at center, rgba(59, 130, 246, 0.8) 0, rgba(59, 130, 246, 0) 50%) no-repeat; animation: move-g5 26s infinite; }
        
        @keyframes move-g1 { 0%, 100% { transform: translate(10%, -10%) scale(1); } 50% { transform: translate(90%, 80%) scale(1.5); } }
        @keyframes move-g2 { 0%, 100% { transform: translate(90%, 10%) scale(1.2); } 50% { transform: translate(10%, 90%) scale(0.8); } }
        @keyframes move-g3 { 0%, 100% { transform: translate(50%, 90%) scale(0.9); } 50% { transform: translate(20%, 20%) scale(1.3); } }
        @keyframes move-g4 { 0%, 100% { transform: translate(20%, 80%) scale(1.1); } 50% { transform: translate(80%, 10%) scale(0.9); } }
        @keyframes move-g5 { 0%, 100% { transform: translate(80%, 50%) scale(1); } 50% { transform: translate(10%, 10%) scale(1.4); } }
      `}</style>
      
      {/* --- Header & Navigation --- */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/80 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto flex justify-between items-center p-4">
          <motion.a href="#home" className="text-2xl font-bold text-white" whileHover={{ scale: 1.05 }}>
            Sumit<span className="text-cyan-400">.</span>
          </motion.a>
          
          <nav className="hidden md:flex space-x-6">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} className="text-slate-300 hover:text-cyan-400 transition-colors duration-300">{link.name}</a>
            ))}
          </nav>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-2xl z-50 text-white">
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </header>
      
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            className="fixed inset-0 bg-slate-900/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center md:hidden"
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <ul className="text-center">
              {navLinks.map(link => (
                <li key={link.name} className="my-6">
                  <a href={link.href} onClick={() => setIsMenuOpen(false)} className="text-3xl font-semibold text-slate-200 hover:text-cyan-400 transition-colors duration-300">{link.name}</a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>

      <main>
        {/* --- Hero Section --- */}
        <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4">
              I'm Sumit Vishwakarma
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold text-slate-300 mb-6">
              A <span className="text-cyan-400">Java Full Stack Developer</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Crafting robust, scalable, and beautiful web applications from concept to deployment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#contact"
                className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-bold py-3 px-8 rounded-full inline-block shadow-lg shadow-cyan-500/20"
                whileHover={{ scale: 1.05, y: -5, boxShadow: '0 10px 20px rgba(0, 255, 255, 0.25)' }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
              <motion.a
                href="/sumitfullstack.pdf"
                download
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 text-white font-bold py-3 px-8 rounded-full inline-block"
                whileHover={{ scale: 1.05, y: -5, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                whileTap={{ scale: 0.95 }}
              >
                Download Resume
              </motion.a>
            </div>
          </motion.div>
        </section>

        {/* --- About Section --- */}
        <Section id="about">
          <div>
            <SectionTitle>About <span className="text-cyan-400">Me</span></SectionTitle>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-lg border border-slate-700"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-2xl font-bold text-white mb-4">A Passionate Developer from Jabalpur</h3>
                <p className="text-slate-400 leading-relaxed text-lg">
                  Hello! I'm Sumit, a passionate Computer Science student with a strong foundation in Java, Spring Boot, and React. I thrive on building scalable, real-world solutions and enjoy every aspect of the development process, from concept to deployment.
                </p>
              </motion.div>
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="flex items-start gap-4 p-4 bg-slate-800/30 rounded-lg">
                  <FiUsers className="text-cyan-400 text-3xl mt-1"/>
                  <div>
                    <h4 className="font-bold text-white text-lg">Community Leader</h4>
                    <p className="text-slate-400">As a Google Developer Student Club Lead, I love collaborating, mentoring, and fostering a passion for technology in others.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-slate-800/30 rounded-lg">
                  <FiAward className="text-cyan-400 text-3xl mt-1"/>
                  <div>
                    <h4 className="font-bold text-white text-lg">Hackathon Winner</h4>
                    <p className="text-slate-400">Active participant and winner in multiple hackathons, always eager to solve challenging problems under pressure.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </Section>

        {/* --- Skills Section --- */}
        <Section id="skills">
          <div>
            <SectionTitle>My <span className="text-cyan-400">Skills</span></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-lg font-medium text-slate-200">{skill.name}</span>
                    <span className="text-base font-medium text-slate-400">{skill.level}</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-3">
                    <motion.div
                      className="bg-gradient-to-r from-purple-500 to-cyan-500 h-3 rounded-full"
                      style={{ width: '0%' }}
                      whileInView={{ width: skill.level }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut', delay: index * 0.1 + 0.3 }}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* --- Projects Section --- */}
        <Section id="projects">
          <div>
            <SectionTitle>My <span className="text-cyan-400">Projects</span></SectionTitle>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg overflow-hidden flex flex-col group"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{ y: -5, transition: { duration: 0.3 } }}
                >
                  <div className="overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-slate-100 mb-3 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                    <p className="text-slate-400 text-base mb-4 leading-relaxed flex-grow">{project.description}</p>
                    <div className="flex flex-wrap gap-2 my-4">
                      {project.tech.map(t => <span key={t} className="text-sm bg-cyan-900/50 text-cyan-300 px-3 py-1 rounded-full">{t}</span>)}
                    </div>
                    <div className="mt-auto pt-4 flex justify-end space-x-4">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors"><FiGithub /></a>
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors"><FiExternalLink /></a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* --- Experience Section --- */}
        <Section id="experience">
          <div>
            <SectionTitle>Work <span className="text-cyan-400">Experience</span></SectionTitle>
            <div className="relative max-w-3xl mx-auto">
              <div className="absolute left-4 md:left-1/2 w-0.5 h-full bg-slate-700 -translate-x-1/2" />
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className={`mb-12 flex w-full items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <div className="w-full md:w-1/2 md:px-4">
                    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-6 rounded-lg">
                      <p className="text-cyan-400 font-semibold text-sm mb-1">{exp.duration}</p>
                      <h3 className="text-xl font-bold text-slate-100">{exp.role}</h3>
                      <h4 className="text-md font-medium text-slate-300 mb-2">{exp.company}</h4>
                      <p className="text-slate-400 text-sm">{exp.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-800 border-2 border-cyan-400 flex items-center justify-center">
                    <FiBriefcase />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* --- Contact Section --- */}
        <Section id="contact">
          <div className="text-center">
            <SectionTitle>Get In <span className="text-cyan-400">Touch</span></SectionTitle>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12">
              I'm currently looking for new opportunities. Whether you have a project in mind or just want to connect, feel free to reach out! My inbox is always open.
            </p>
            <div className="flex justify-center flex-wrap gap-6">
              <motion.a href="https://github.com/Sumitvi" target="_blank" rel="noopener noreferrer" whileHover={{ y: -3 }} className="text-slate-400 hover:text-cyan-400 transition-colors flex flex-col items-center gap-2">
                <FiGithub size={32} />
                <span className="text-sm">GitHub</span>
              </motion.a>
              <motion.a href="https://www.linkedin.com/in/sumit-vishwakarma-9b0a7b271/" target="_blank" rel="noopener noreferrer" whileHover={{ y: -3 }} className="text-slate-400 hover:text-cyan-400 transition-colors flex flex-col items-center gap-2">
                <FiLinkedin size={32} />
                <span className="text-sm">LinkedIn</span>
              </motion.a>
              <motion.a href="mailto:sumitvish196@gmail.com" whileHover={{ y: -3 }} className="text-slate-400 hover:text-cyan-400 transition-colors flex flex-col items-center gap-2">
                <FiMail size={32} />
                <span className="text-sm">Email</span>
              </motion.a>
              <motion.a href="https://codolio.com/profile/SumitVishwakarma" target="_blank" rel="noopener noreferrer" whileHover={{ y: -3 }} className="text-slate-400 hover:text-cyan-400 transition-colors flex flex-col items-center gap-2">
                <CodolioIcon size={32} />
                <span className="text-sm">Codolio</span>
              </motion.a>
            </div>
          </div>
        </Section>
      </main>

      {/* --- Footer --- */}
      <footer className="py-6 text-center text-slate-500 border-t border-slate-800 relative z-10 bg-slate-900">
        <p>&copy; {new Date().getFullYear()} Sumit Vishwakarma. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;
