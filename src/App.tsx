import { useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  Code2,
  Smartphone,
  Sparkles,
  Download,
  GraduationCap,
  Heart,
  Laptop,
  Users,
  Brain,
} from "lucide-react";
import { FiDatabase, FiBarChart2, FiCpu } from "react-icons/fi";

import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiExpo,
  SiPhp,
  SiMysql,
  SiFirebase,
  SiMongodb,
  SiPython,
} from "react-icons/si";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "My journey", href: "#journey" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

function Sidebar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="mobile-header">
        <a href="#home" className="mobile-brand">
          SH<span>.</span>
        </a>
        <button
          className="menu-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>
      <aside className={`sidebar ${open ? "is-open" : ""}`}>
        <a className="brand" href="#home" onClick={() => setOpen(false)}>
          Sara Helal<span>.</span>
          <small>SOFTWARE ENGINEER</small>
        </a>
        <nav aria-label="Main navigation">
          {navigation.map((item, i) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              <span className="nav-index">0{i + 1}</span>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="sidebar-bottom">
          <p>
            Building with curiosity,
            <br />
            care & a little courage.
          </p>
          <div className="socials">
            <a
              aria-label="GitHub"
              href="https://github.com/SaraHelal"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={19} />
            </a>
            <a
              aria-label="LinkedIn"
              href="https://www.linkedin.com/in/sara-helal-68151b89"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={19} />
            </a>
            <a aria-label="Email" href="mailto:s.helal91@gmail.com">
              <Mail size={19} />
            </a>
          </div>
          <small>© {new Date().getFullYear()} Sara Helal</small>
        </div>
      </aside>
    </>
  );
}

function ProjectPreview() {
  return (
    <div className="preview">
      <div className="preview-image-wrapper">
        <img
          src="/projects/quran-mobile.png"
          alt="Screenshot of my Quran Revision mobile application"
          className="preview-app-image"
        />
      </div>

      <div className="project-handnote">
        <p>
          One of my recent
          <br />
          projects — a mobile
          <br />
          app to help Quran
          <br />
          learners stay on track
          <br />
          with their revision.
        </p>

        <svg
          className="handnote-arrow"
          viewBox="0 0 120 100"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M 98 5 C 94 48, 65 70, 15 78"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M 15 78 L 32 61 M 15 78 L 35 88"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="shell">
      <Sidebar />
      <main id="home">
        <section className="hero section">
          <div className="eyebrow">
            <span className="status-dot" /> SOFTWARE ENGINEER · LONDON, UK
          </div>
          <div className="hero-grid">
            <div className="hero-copy">
              <h1 className="hero-name">
                Hi, I'm
                <span>Sara Helal.</span>
              </h1>

              <p className="hero-lede">
                I'm a Software Engineer with a Computer Engineering background.
              </p>

              <p className="hero-detail">
                I build web and mobile applications, explore Artificial
                Intelligence, and enjoy working on projects that solve real
                problems.
              </p>

              <div className="hero-actions">
                <a className="button-primary" href="#projects">
                  View my projects <ArrowUpRight size={18} />
                </a>

                <a className="button-cv" href="/Sara_Helal_CV.pdf" download>
                  Download CV <Download size={18} />
                </a>
              </div>

              <div className="hero-footnote">
                <span>SCROLL TO EXPLORE ↓</span>
              </div>
            </div>
            <ProjectPreview />
          </div>
        </section>

        <section id="journey" className="section inner-section journey-section">
          <div className="journey-layout">
            <div className="journey-intro">
              <span className="section-number">02 / MY JOURNEY</span>

              <h2>
                The journey <em>so far.</em>
              </h2>

              <p>
                A journey of learning, building, and growing — shaped by
                engineering, motherhood, and a curiosity that keeps me moving
                forward.
              </p>
            </div>

            <div className="journey-timeline">
              <article className="journey-item">
                <div className="journey-icon">
                  <GraduationCap size={23} />
                </div>
                <span className="journey-date">2013</span>
                <div className="journey-content">
                  <h3>Engineering foundations</h3>
                  <p>
                    I studied Computer Engineering at Mansoura University,
                    developing a foundation in programming, technology, and
                    problem-solving.
                  </p>
                </div>
              </article>

              <article className="journey-item">
                <div className="journey-icon">
                  <Heart size={23} />
                </div>
                <span className="journey-date">2014 – Present</span>
                <div className="journey-content">
                  <h3>Motherhood & growth</h3>
                  <p>
                    Raising my family has been an important part of my journey.
                    Alongside it, I continued learning and developing my skills.
                  </p>
                </div>
              </article>

              <article className="journey-item">
                <div className="journey-icon">
                  <Laptop size={23} />
                </div>
                <span className="journey-date">2019 – Present</span>
                <div className="journey-content">
                  <h3>Learning by building</h3>
                  <p>
                    From web development to mobile applications, I've continued
                    building projects with React, TypeScript, React Native, and
                    other technologies.
                  </p>
                </div>
              </article>

              <article className="journey-item">
                <div className="journey-icon">
                  <Users size={23} />
                </div>
                <span className="journey-date">2024 – Present</span>
                <div className="journey-content">
                  <h3>Teaching & community</h3>
                  <p>
                    Teaching coding to children has given me another way to
                    share my enthusiasm for technology and help others discover
                    programming.
                  </p>
                </div>
              </article>

              <article className="journey-item">
                <div className="journey-icon">
                  <Brain size={23} />
                </div>
                <span className="journey-date">2026</span>
                <div className="journey-content">
                  <h3>Exploring Artificial Intelligence</h3>
                  <p>
                    I'm deepening my knowledge of Python and Machine Learning,
                    with the goal of pursuing further study in Artificial
                    Intelligence.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="section inner-section projects-section"
        >
          <div className="section-heading">
            <span className="section-number">03 / SELECTED WORK</span>
            <h2>Selected Work</h2>
            <p>
              A selection of projects where I've turned ideas into working
              applications, explored new technologies, and solved practical
              problems.
            </p>
          </div>

          <div className="projects-showcase">
            {/* Featured project */}
            <article className="showcase-project featured-project">
              <div className="showcase-visual quran-visual">
                <img
                  src="/projects/quran-add-surah.png"
                  alt="Add Surah screen showing memorisation date and mastery level"
                  className="showcase-phone"
                />
              </div>

              <div className="showcase-content">
                <span className="showcase-number">01 / MOBILE APPLICATION</span>
                <h3>Quran Revision</h3>
                <p className="showcase-lede">
                  Helping Quran learners stay consistent with their memorisation
                  revision.
                </p>
                <p>
                  A mobile app that helps users manage memorised Surahs,
                  identify reviews that are due, record revision results, and
                  automatically schedule their next review.
                </p>

                <div className="showcase-tags">
                  <span>React Native</span>
                  <span>Expo</span>
                  <span>TypeScript</span>
                </div>

                <a
                  href="https://github.com/SaraHelal/quran-revision-mobile-poc"
                  target="_blank"
                  rel="noreferrer"
                  className="showcase-link"
                >
                  View on GitHub <ArrowUpRight size={18} />
                </a>
              </div>
            </article>

            {/* Second project */}

            <article className="showcase-project">
              <div className="showcase-visual secondary-visual">
                <img
                  src="/projects/kids-store.png"
                  alt="Kids Store e-commerce website homepage"
                  className="showcase-website"
                />
              </div>

              <div className="showcase-content">
                <span className="showcase-number">
                  02 / FULL-STACK WEB APPLICATION
                </span>

                <h3>Kids Store</h3>

                <p className="showcase-lede">
                  A complete e-commerce experience for children's clothing.
                </p>

                <p>
                  Built the frontend, backend, and MySQL database for an online
                  store, including user accounts, product browsing, wishlists,
                  and shopping cart functionality.
                </p>

                <div className="showcase-tags">
                  <span>PHP</span>
                  <span>MySQL</span>
                  <span>Full-Stack</span>
                </div>

                <a
                  href="/videos/kids-store-demo.mp4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="showcase-link"
                >
                  Watch Demo <ArrowUpRight size={18} />
                </a>
              </div>
            </article>

            {/* Third project */}

            <article className="showcase-project">
              <div className="showcase-visual movie-visual">
                <img
                  src="/projects/podcast-search.png"
                  alt="Podcast Search interface showing podcast and episode results"
                  className="showcase-website"
                />
              </div>

              <div className="showcase-content">
                <span className="showcase-number">03 / WEB DEVELOPMENT</span>

                <h3>Podcast Search</h3>

                <p className="showcase-lede">
                  Discovering podcasts through an interactive search interface.
                </p>

                <p>
                  Built a podcast search experience inspired by Thmanyah, using
                  Next.js and integrating the iTunes API to retrieve podcasts
                  and related episodes. Developed the search interface and
                  integrated podcast data through REST APIs, working across
                  frontend and backend functionality.
                </p>

                <div className="showcase-tags">
                  <span>Next.js</span>
                  <span>TypeScript</span>
                  <span>Tailwind CSS</span>
                  <span>REST API</span>
                </div>

                <a
                  href="https://github.com/SaraHelal/podcast-search-page"
                  target="_blank"
                  rel="noreferrer"
                  className="showcase-link"
                >
                  View on GitHub <ArrowUpRight size={18} />
                </a>
              </div>
            </article>
          </div>
        </section>

        <section id="skills" className="section inner-section skills-section">
          <div className="section-heading">
            <span className="section-number">04 / MY TOOLKIT</span>
            <h2>Expertise</h2>
            <p>
              Technologies I've worked with, from building user interfaces to
              developing full-stack applications.
            </p>
          </div>

          <div className="skills-grid">
            <div className="skill-card">
              <span className="skill-card-number">01 /</span>
              <h3>Frontend Development</h3>
              <p>Building responsive and interactive web experiences.</p>
              <div className="skill-tags">
                <span>
                  <SiJavascript /> JavaScript
                </span>
                <span>
                  <SiTypescript /> TypeScript
                </span>
                <span>
                  <SiReact /> React
                </span>
                <span>
                  <SiNextdotjs /> Next.js
                </span>
                <span>
                  <SiHtml5 /> HTML
                </span>
                <span>
                  <SiCss /> CSS
                </span>
                <span>
                  <SiTailwindcss /> Tailwind CSS
                </span>
              </div>
            </div>

            <div className="skill-card">
              <span className="skill-card-number">02 /</span>
              <h3>Mobile Development</h3>
              <p>Creating mobile interfaces and application features.</p>
              <div className="skill-tags">
                <span>
                  <SiReact /> React Native
                </span>
                <span>
                  <SiExpo /> Expo
                </span>
                <span>
                  <SiTypescript /> TypeScript
                </span>
              </div>
            </div>

            <div className="skill-card">
              <span className="skill-card-number">03 /</span>
              <h3>Backend & Databases</h3>
              <p>Working with APIs, data storage, and application logic.</p>
              <div className="skill-tags">
                <span>
                  <SiPhp /> PHP
                </span>
                <span>
                  <SiMysql /> MySQL
                </span>
                <span>
                  <SiFirebase /> Firebase
                </span>
                <span>
                  <SiMongodb /> MongoDB
                </span>
                <span>
                  <FiDatabase /> REST APIs
                </span>
              </div>{" "}
            </div>

            <div className="skill-card learning-card">
              <span className="skill-card-number">04 /</span>
              <h3>Exploring Next</h3>
              <p>
                Expanding my knowledge of Python, data analysis, and the
                foundations of machine learning.
              </p>
              <div className="skill-tags">
                <span>
                  <SiPython /> Python
                </span>
                <span>
                  <FiBarChart2 /> Data Analysis
                </span>
                <span>
                  <FiCpu /> Machine Learning
                </span>
                <span>
                  <FiCpu /> AI Fundamentals
                </span>
              </div>{" "}
            </div>
          </div>
        </section>

        <section
          id="education"
          className="section inner-section education-section"
        >
          <div className="education-layout">
            <div className="education-intro">
              <span className="section-number">05 / EDUCATION & LEARNING</span>

              <h2>
                Always <em>learning.</em>
              </h2>

              <p>
                From computer engineering to modern web development, and now
                exploring the foundations of artificial intelligence.
              </p>
            </div>

            <div className="education-list">
              <article className="education-item">
                <span className="education-type">UNIVERSITY</span>
                <h3>BEng Computer Engineering</h3>
                <p>Mansoura University</p>
                <span className="education-meta">Graduated 2013</span>
              </article>

              <article className="education-item">
                <span className="education-type">PROFESSIONAL LEARNING</span>
                <h3>React Nanodegree</h3>
                <p>Udacity</p>
              </article>

              <article className="education-item">
                <span className="education-type">WEB DEVELOPMENT</span>
                <h3>Web Design & Development</h3>
                <p>ELATT</p>
              </article>

              <article className="education-item">
                <span className="education-type">AI TRAINING</span>
                <h3>AI Starter Programme</h3>
                <p>01Founders</p>
              </article>

              <article className="education-item">
                <span className="education-type">CURRENTLY STUDYING</span>
                <h3>Machine Learning Specialization</h3>
                <p>DeepLearning.AI · Stanford Online</p>
                <span className="education-meta">In progress</span>
                <a
                  href="https://www.deeplearning.ai/specializations/machine-learning"
                  target="_blank"
                  rel="noreferrer"
                  className="education-course-link"
                >
                  View programme <ArrowUpRight size={15} />
                </a>
              </article>

              <article className="education-item">
                <span className="education-type">CURRENTLY STUDYING</span>
                <h3>Data Analyst in Python</h3>
                <p>DataCamp · Career Track</p>
                <span className="education-meta">In progress</span>
              </article>
            </div>

            <div className="education-certificates">
              <span className="education-type">SELECTED CERTIFICATES</span>

              <div className="certificate-links">
                <a
                  href="https://www.udacity.com/certificate/GFQSKKGG"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>
                    <strong>React Development Cross-Skilling</strong>
                    <small>Udacity Nanodegree · 2022</small>
                  </span>
                  <ArrowUpRight size={18} />
                </a>

                <a
                  href="/certificates/ai-starter-piscine.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    <strong>AI.starter Piscine</strong>
                    <small>01Founders · 60 training hours · 2025</small>
                  </span>
                  <ArrowUpRight size={18} />
                </a>

                <a
                  href="https://www.datacamp.com/statement-of-accomplishment/course/e6c00632d7caaf4386a5d4eb55fc68bd5f0af7ef?raw=1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>
                    <strong>Intermediate Python</strong>
                    <small>DataCamp · 2026</small>
                  </span>
                  <ArrowUpRight size={18} />
                </a>
                <a
                  href="https://www.datacamp.com/statement-of-accomplishment/course/fd3e70655ab18b885c6e2397e2ac9a89467de105?raw=1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>
                    <strong>Data Manipulation with pandas</strong>
                    <small>DataCamp · 2026</small>
                  </span>
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section contact-minimal">
          <div className="contact-minimal-main">
            <div>
              <span className="section-number">06 / CONTACT</span>
              <h2>Let's connect.</h2>
              <p>
                Open to software engineering opportunities and collaborations.
              </p>
            </div>

            <a
              href="mailto:s.helal91@gmail.com"
              className="contact-minimal-link"
            >
              Get in touch <ArrowUpRight size={17} />
            </a>
          </div>

          <footer className="contact-minimal-footer">
            <span>© {new Date().getFullYear()} Sara Helal</span>
            <span>Software Engineer · London</span>
          </footer>
        </section>
      </main>
    </div>
  );
}
export default App;
