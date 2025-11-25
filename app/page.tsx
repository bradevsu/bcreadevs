"use client"
import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Github, Linkedin, Mail, ExternalLink, Play, FileImage, GraduationCap, Code, Palette, Video, TrendingUp, Briefcase, CheckCircle } from 'lucide-react';

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  

  const openModal = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  const projects = [
    {
      title: "Social Media Campaign Graphics",
      description: "A series of visually engaging graphics designed for a month-long social media marketing campaign.",
      type: "Canva Design",
      media: "image",
      tools: ["Canva", "Freepik"],
      image: "https://logokeren.id/wp-content/uploads/2025/04/Screenshot-2025-04-18-232844.png",
      gallery: [
      "/images/img1.jpg",
      "/images/img5.jpg", 
      "/images/img3.png"
],
      link: "#"
    },
    {
      title: "Promotional Video Projects",
      description: "Editing eye-catching promo videos, helpful tips content, and highlight reels that make your brand stand out.",
      type: "Video Editing",
      media: "video",
      tools: ["Canva", "Capcut", "11Labs"],
      image: "https://logos-world.net/wp-content/uploads/2024/01/CapCut-Logo.jpg",
      gallery: [
        "/images/vid1.mp4",
        "/images/vid2.mp4",
        "/images/vid4.mp4",
        "/images/vid3.mp4"
      ],
      link: "#"
    },
    {
      title: "AGRITRACK: GIS-Based Rice Farm Management System and Data Analysis",
      description: "Capstone Project - A web-based system for managing rice farm data using GIS technology.",
      type: "Web System",
      media: "image",
      tools: ["PHP", "Javascript", "MySQL", "Bootstrap", "Leaflet.js", "HTML", "CSS"],
      image: "https://www.devopsschool.com/blog/wp-content/uploads/2022/03/php-programming-language.jpg",
      gallery: [
        "/images/img10.png",
        "/images/img11.png",
        "/images/img12.png"
      ],
      link: "#"
    },

  ];

  const services = [
    {
      icon: <Code className="w-12 h-12" />,
      title: "Web Development",
      description: "Custom websites, landing pages, and simple web systems built with modern technologies.",
      features: ["Responsive Design", "CMS Integration", "E-commerce Solutions", "Web Applications"]
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: "Graphic Design",
      description: "Eye-catching graphics for social media, marketing materials, and brand identity.",
      features: ["Social Media Posts", "Flyers & Brochures", "Logo Design", "Brand Guidelines"]
    },
    {
      icon: <Video className="w-12 h-12" />,
      title: "Video Editing",
      description: "Professional video editing for promotions, events, tutorials, and social media content.",
      features: ["Promotional Videos", "Event Coverage", "Social Media Clips", "Motion Graphics"]
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Social Media Management",
      description: "Complete social media strategy, content creation, and community management.",
      features: ["Content Strategy", "Post Scheduling", "Community Engagement", "Analytics & Reporting"]
    }
  ];

  const workExperience = [
    {
      position: "Media Operation Specialist",
      company: "Ocean Wave Communications Philippine Corp",
      period: "June 01 2025 - Present",
      description: "Responsible for managing page content, creating and editing visual materials for product promotions, and overseeing overall page operations. Ensures consistent branding, engaging posts, and high-quality promotional materials to support the company’s marketing goals.",
      achievements: [
        "Increased page engagement by 200% through strategic content planning",
        "Created 20+ social media graphics and promotional materials",
        "Edited 20+ professional videos for marketing campaigns"
      ]
    },
    {
      position: "Student IT Intern",
      company: "DepEd Leyte Division Office - ICT Unit",
      period: "February 2025 - May 2025",
      description: "Managed administrative tasks, provided technical support, and assisted in web development projects for the ICT unit.",
      achievements: [
        "Developed and maintained internal web pages using HTML, CSS, and JavaScript",
        "Provided technical support to staff and resolved IT-related issues",
        "Assisted in organizing digital files and documentation"
      ]
    },
    {
      position: "SPE Admin Staff",
      company: "DOLE 8",
      period: "2021",
      description: "Handled administrative tasks, data entry, and document management.",
      achievements: [
        "Managed office documentation and filing systems",
        "Created reports and presentations using MS Office",
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Information Technology",
      school: "EASTERN VISAYAS STATE UNIVERSITY - Tacloban City",
      year: "2021 - 2025",
      description: "Focused on web development, database management, and multimedia design"
    },
    {
      degree: "Senior High School - GAS Strand",
      school: "DZR State Comprehensive School of Fisheries",
      year: "2019 - 2021",
      description: "General Academic Strand"
    }
  ];

  const skills = [
    { name: "MS Word", logo: "https://img.icons8.com/color/96/microsoft-word-2019--v2.png" },
    { name: "MS Excel", logo: "https://img.icons8.com/color/96/microsoft-excel-2019--v2.png" },
    { name: "MS PowerPoint", logo: "https://img.icons8.com/color/96/microsoft-powerpoint-2019--v2.png" },
    { name: "CapCut", logo: "https://img.icons8.com/fluency/96/capcut.png" },
    { name: "Canva", logo: "https://img.icons8.com/fluency/96/canva.png" },
    { name: "Google Workspace", logo: "https://img.icons8.com/color/96/google-logo.png" },
    { name: "VS Code", logo: "https://img.icons8.com/color/96/visual-studio-code-2019.png" },
    { name: "HTML", logo: "https://img.icons8.com/color/96/html-5--v1.png" },
    { name: "CSS", logo: "https://img.icons8.com/color/96/css3.png" },
    { name: "PHP", logo: "https://img.icons8.com/officel/96/php-logo.png" },
    { name: "JavaScript", logo: "https://img.icons8.com/color/96/javascript--v1.png" },
    { name: "MySQL", logo: "https://img.icons8.com/color/96/mysql-logo.png" }
  ];

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        {/* Navbar */}
        <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <a href="#" className="text-2xl font-bold text-gray-900 dark:text-white">
                BCreaDev
              </a>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-8">
                <a href="#home" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Home</a>
                <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Portfolio</a>
                <a href="#services" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Services</a>
                <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">About</a>
                <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Contact</a>
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                >
                  {darkMode ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-gray-700" />}
                </button>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center space-x-2">
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
                >
                  {darkMode ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-gray-700" />}
                </button>
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
                >
                  {mobileMenuOpen ? <X className="w-6 h-6 dark:text-white" /> : <Menu className="w-6 h-6 dark:text-white" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
              <div className="px-4 py-4 space-y-3">
                <a href="#home" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Home</a>
                <a href="#projects" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Portfolio</a>
                <a href="#services" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Services</a>
                <a href="#about" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">About</a>
                <a href="#contact" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Contact</a>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
                Hi, I'm <span className="text-blue-600 dark:text-blue-400">Bradley Mark Gerarcas</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-4 max-w-3xl mx-auto">
                Innovative Web Developer | Multimedia & Digital Solutions Specialist
              </p>
              <p className="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
                Creating compelling digital experiences through web development, graphic design, video editing, and social media management
              </p>
              <div className="flex justify-center space-x-4">
                <a href="#contact" className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium">
                  Get In Touch
                </a>
                <a href="#projects" className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition font-medium">
                  View Portfolio
                </a>
              </div>
              <div className="flex justify-center space-x-6 mt-8">
                <a href="https://www.linkedin.com/in/bradley-mark-gerarcas-0b4ab32aa/" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="mailto:malate33333@gmail.com"
                  aria-label="Email Bradley"
                  className="text-gray-600 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </section>

          {/* Projects Section */}
        <section id="projects" className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3 text-center">Portfolio</h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              A showcase of my work in web development, graphic design, video editing, and digital marketing
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition group">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition flex items-center justify-center">
                      {project.media === 'video' ? (
                        <Play className="w-12 h-12 text-white opacity-80 group-hover:opacity-100 transition" />
                      ) : (
                        <FileImage className="w-12 h-12 text-white opacity-80 group-hover:opacity-100 transition" />
                      )}
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                        {project.type}
                      </span>
                    </div>
                  </div>
                  
                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tools.map((tool, i) => (
                        <span key={i} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-xs font-medium">
                          {tool}
                        </span>
                      ))}
                    </div>
                    <a 
                      onClick={() => openModal(project)}
                      className="flex items-center text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium cursor-pointer">
                      <ExternalLink className="w-4 h-4 mr-1" /> View Project
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

                {/* Project Modal */}
        {isModalOpen && selectedProject && (
          <div 
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <div 
              className="bg-white dark:bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 p-6 flex justify-between items-start z-10">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {selectedProject.title}
                  </h3>
                  <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                    {selectedProject.type}
                  </span>
                </div>
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition"
                >
                  <X className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                {/* Project Gallery */}
                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Project Gallery</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedProject.gallery?.map((item: string, index: number) => (
                      <div key={index} className="relative group overflow-hidden rounded-lg bg-black">
                        {item.endsWith('.mp4') || item.endsWith('.webm') || item.endsWith('.mov') ? (
                          <video 
                            controls
                            className="w-full max-h-96 object-contain rounded-lg"
                            src={item}
                            style={{ aspectRatio: 'auto' }}
                          >
                            Your browser does not support the video tag.
                          </video>
                        ) : (
                          <div className="cursor-pointer" onClick={() => setLightboxImage(item)}>
                            <img 
                              src={item} 
                              alt={`${selectedProject.title} - Image ${index + 1}`}
                              className="w-full h-64 object-cover group-hover:scale-110 transition duration-300"
                            />
                            {selectedProject.media === 'video' && index === 0 && (
                              <div className="absolute inset-0 bg-black/40 flex items-center justify-center pointer-events-none">
                                <Play className="w-16 h-16 text-white opacity-80" />
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>



                {/* Project Description */}
                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">About This Project</h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Tools Used */}
                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Tools & Technologies</h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.tools.map((tool: string, i: number) => (
                      <span key={i} className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-lg font-medium">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Details */}
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Project Details</h4>
                  <div className="space-y-3 text-gray-700 dark:text-gray-300">
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span>Professional design and implementation</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span>Responsive and user-friendly interface</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span>Optimized for performance and quality</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span>Client satisfaction guaranteed</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="sticky bottom-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 p-6">
                <button
                  onClick={closeModal}
                  className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Services Section */}
        <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">Services</h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your needs
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition">
                  <div className="text-blue-600 dark:text-blue-400 mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-gray-700 dark:text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">About Me</h2>
            
            {/* Bio */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg mb-12">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Hello! I'm a Creative IT and Multimedia Specialist who blends technology and creativity to design meaningful digital experiences. 
                I develop websites and systems that are both user-friendly and visually appealing, while also producing engaging visuals and video 
                content.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                 With experience in web development, multimedia design, administrative support, and social media management, I’m passionate
                 about creating strategies and trends that help brands grow and connect with their audiences. My goal is to combine innovation and 
                 creativity to deliver impactful results across every project.
              </p>
            </div>

            {/* Work Experience Timeline */}
            <div className="mb-12">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Briefcase className="w-8 h-8 mr-3 text-blue-600" />
                Work Experience
              </h3>
              <div className="space-y-6">
                {workExperience.map((job, index) => (
                  <div key={index} className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg relative pl-8 border-l-4 border-blue-600">
                    <div className="absolute -left-3 top-8 w-6 h-6 bg-blue-600 rounded-full border-4 border-white dark:border-gray-800"></div>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white">{job.position}</h4>
                        <p className="text-blue-600 dark:text-blue-400 font-medium">{job.company}</p>
                      </div>
                      <span className="text-gray-500 dark:text-gray-400 text-sm mt-1 md:mt-0">{job.period}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">{job.description}</p>
                    <ul className="space-y-2">
                      {job.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start text-gray-700 dark:text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="mb-12">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <GraduationCap className="w-8 h-8 mr-3 text-blue-600" />
                Education
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {education.map((edu, index) => (
                  <div key={index} className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{edu.degree}</h4>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">{edu.school}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">{edu.year}</p>
                    <p className="text-gray-600 dark:text-gray-300">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">Skills & Tools</h3>
              
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {skills.map((skill, i) => (
                  <div key={i} className="bg-white dark:bg-gray-900 rounded-lg p-3 shadow hover:shadow-lg transition text-center group">
                    <div className="mb-2 flex justify-center">
                      <img 
                        src={skill.logo} 
                        alt={skill.name}
                        className="w-12 h-12 object-contain group-hover:scale-110 transition"
                      />
                    </div>
                    <p className="text-gray-800 dark:text-gray-200 font-medium text-xs">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center flex items-center justify-center space-x-3">
              <span className="text-3xl">🚧</span>
              <span>Contact — Under Construction</span>
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
              The contact page is currently under construction. We're building something great — check back soon!
            </p>

            <div className="relative bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg overflow-hidden">
              {/* Caution stripes bar */}
              <div
                aria-hidden
                style={{
                  background: 'repeating-linear-gradient(45deg, #f59e0b 0 18px, #111827 18px 36px)',
                }}
                className="absolute left-0 right-0 top-0 h-6 opacity-90"
              />

              {/* Main construction panel */}
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
                {/* Animated gear / icon */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-full bg-yellow-100 dark:bg-yellow-900 flex items-center justify-center shadow-md">
                    <span className="text-4xl inline-block animate-spin">⚙️</span>
                  </div>
                </div>

                <div className="flex-1 text-left">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">We're working on it</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    The contact form and messaging features are being built. Meanwhile you can reach me directly via email or LinkedIn.
                  </p>

                  <div className="flex flex-wrap gap-3 mb-4">
                    <a
                      href="mailto:malate33333@gmail.com"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 rounded-lg shadow hover:translate-y-[-2px] transition-transform"
                    >
                      ✉️ Email
                    </a>
                    <a
                      href="https://www.linkedin.com/in/bradley-mark-gerarcas-0b4ab32aa/"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:translate-y-[-2px] transition-transform"
                    >
                      <Linkedin className="w-4 h-4" /> LinkedIn
                    </a>
                  </div>

                  {/* Fake progress / build animation */}
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                    <div className="h-3 bg-yellow-500 dark:bg-yellow-400 animate-pulse" style={{ width: '45%' }} />
                  </div>
                </div>
              </div>

              {/* Skeleton form placeholder */}
              <div className="mt-8 grid gap-4">
                <div className="h-12 bg-gray-100 dark:bg-gray-900 rounded-md animate-pulse" />
                <div className="h-12 bg-gray-100 dark:bg-gray-900 rounded-md animate-pulse" />
                <div className="h-28 bg-gray-100 dark:bg-gray-900 rounded-md animate-pulse" />
                <div className="h-12 bg-gray-100 dark:bg-gray-900 rounded-md animate-pulse w-40" />
              </div>

              {/* Subtle builder icons along bottom */}
              <div className="absolute -bottom-6 right-6 opacity-60 transform rotate-6 text-6xl select-none pointer-events-none">🏗️</div>
            </div>
          </div>
        </section>
        
                {/* Image Lightbox */}
        {lightboxImage && (
          <div 
            className="fixed inset-0 bg-black/95 z-[60] flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-lg transition z-10"
            >
              <X className="w-8 h-8 text-white" />
            </button>
            <img 
              src={lightboxImage} 
              alt="Full size preview"
              className="max-w-full max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}


        {/* Footer */}
        <footer className="py-8 px-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <div className="max-w-6xl mx-auto text-center text-gray-600 dark:text-gray-400">
            <p>© 2025 Bradley Mark Gerarcas. Innovative Web Developer | Multimedia & Digital Solutions Specialist</p>
          </div>
        </footer>
      </div>
    </div>
  );
}