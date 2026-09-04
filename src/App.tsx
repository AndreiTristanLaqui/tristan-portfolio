import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowDownRight,
  ArrowUpRight,
  CircleHalfTilt,
  GithubLogo,
  LinkedinLogo,
  PaperPlaneTilt,
} from "@phosphor-icons/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const projects = [
  {
    name: "UWatchPH",
    focus: "Reliable information systems",
    statement: "A resilient monitoring pipeline for university admissions and scholarship announcements across the Philippines.",
    challenge: "Designed stable JSON contracts, student-relevant change detection, source health reporting, and last-known-good fallbacks for failed runs.",
    stack: ["Python", "FastAPI", "Data pipelines", "JSON"],
    image: "https://picsum.photos/seed/philippines-campus-architecture/1800/1200",
  },
  {
    name: "ScamPurr",
    focus: "Trust made approachable",
    statement: "A cybersecurity-themed cat adoption experience built for a distinctly Philippine audience.",
    challenge: "Balanced an expressive pixel-art identity with a modern typed frontend and a lightweight API-backed adoption flow.",
    stack: ["React 19", "TypeScript", "Tailwind CSS", "FastAPI", "SQLite"],
    image: "https://picsum.photos/seed/neon-cat-pixel-cyber/1800/1200",
  },
];

const skillGroups = [
  {
    title: "Languages & frameworks",
    detail: "TypeScript, React, Python, FastAPI",
  },
  {
    title: "Systems & data",
    detail: "SQLite, API design, change detection, resilient pipelines",
  },
  {
    title: "Frontend craft",
    detail: "Responsive UI, motion systems, accessibility, visual direction",
  },
  {
    title: "Tools & delivery",
    detail: "Git, Vite, testing strategy, production-minded deployment",
  },
];

const marqueeTerms = [
  "Accessible Experiences",
  "Clear Systems",
  "Type-Safe Interfaces",
  "Resilient APIs",
  "Scalable Architecture",
  "Clean Code",
  "Performance-Focused",
  "User-Centered Design",
  "Maintainable Systems",
  "Thoughtful UX",
];

function App() {
  const root = useRef<HTMLElement>(null);
  const [openSkill, setOpenSkill] = useState(0);
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    if (savedTheme === "light" || savedTheme === "dark") return savedTheme;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme === "dark" ? "#202722" : "#F5F1E8");
  }, [theme]);

  useGSAP(
    () => {
      gsap.from(".nav-shell", { y: -28, opacity: 0, duration: 0.9, ease: "power3.out" });
      gsap.from(".hero-reveal", {
        yPercent: 110,
        duration: 1.25,
        stagger: 0.08,
        ease: "power4.out",
        delay: 0.15,
      });
      gsap.from(".hero-visual", {
        scale: 0.86,
        opacity: 0,
        duration: 1.35,
        ease: "power3.out",
        delay: 0.45,
      });

      gsap.utils.toArray<HTMLElement>(".scrub-word").forEach((word, index, words) => {
        gsap.fromTo(
          word,
          { opacity: 0.1 },
          {
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: ".manifesto",
              start: `${24 + (index / words.length) * 42}% 78%`,
              end: `${44 + (index / words.length) * 42}% 48%`,
              scrub: true,
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>(".project-panel").forEach((panel, index) => {
        gsap.fromTo(
          panel,
          { scale: 0.92, opacity: 0.45, y: 90 },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            ease: "none",
            scrollTrigger: {
              trigger: panel,
              start: "top 88%",
              end: "top 38%",
              scrub: true,
            },
          },
        );
        if (index < projects.length - 1) {
          gsap.to(panel, {
            scale: 0.94,
            opacity: 0.35,
            ease: "none",
            scrollTrigger: {
              trigger: panel,
              start: "bottom 70%",
              end: "bottom 18%",
              scrub: true,
            },
          });
        }
      });

      const media = gsap.matchMedia();
      media.add("(min-width: 901px)", () => {
        ScrollTrigger.create({
          trigger: ".project-story",
          start: "top 96px",
          end: "bottom bottom",
          pin: ".project-intro",
          pinSpacing: false,
        });
      });
    },
    { scope: root },
  );

  const manifesto = "I care about the invisible decisions that make software dependable, and the visible details that make it feel inevitable.";

  return (
    <main ref={root} id="top" className="site-shell">
      <nav className="nav-shell" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="Tristan, home">
          TR<span>/</span>STAN
        </a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="nav-controls">
          <button
            className="theme-toggle"
            type="button"
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            aria-pressed={theme === "dark"}
            onClick={() => setTheme((current) => current === "light" ? "dark" : "light")}
          >
            <CircleHalfTilt weight="fill" aria-hidden="true" />
            <span>{theme === "light" ? "Dark" : "Light"} mode</span>
          </button>
          <a className="nav-action" href="#work">
            View selected work <ArrowDownRight weight="bold" />
          </a>
        </div>
      </nav>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-status">
          <span className="availability-dot" aria-hidden="true" />
          Open to software engineering opportunities
        </div>
        <h1 id="hero-title">
          <span className="clip-line"><span className="hero-reveal">Reliable systems.</span></span>
          <span className="clip-line accent-line"><span className="hero-reveal">Distinct interfaces.</span></span>
        </h1>
        <div className="hero-lower">
          <div className="hero-copy">
            <p className="hero-reveal">I’m Tristan, a software engineer turning complex requirements into resilient products that people understand on the first try.</p>
            <div className="hero-actions hero-reveal">
              <a className="button button-light" href="#work">Explore my work <ArrowDownRight /></a>
              <a className="text-link" href="mailto:andreitristanlaqui@gmail.com?subject=Portfolio%20inquiry">Start a conversation <ArrowUpRight /></a>
            </div>
          </div>
          <div className="hero-visual" aria-label="Abstract architectural composition representing systems thinking">
            <img src="https://picsum.photos/seed/manila-modern-architecture/1400/1100" alt="Angular modern architecture in dramatic light" />
            <div className="visual-overlay" />
            <p>Engineering rigor<br />with visual intent.</p>
          </div>
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[0, 1].map((group) => (
            <div className="marquee-group" key={group}>
              {marqueeTerms.map((item) => (
                <span key={`${group}-${item}`}>{item}<i /></span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <section className="manifesto" aria-label="Engineering philosophy">
        <p>
          {manifesto.split(" ").map((word, index) => (
            <span className="scrub-word" key={`${word}-${index}`}>{word}{" "}</span>
          ))}
        </p>
      </section>

      <section className="bento-section" id="capabilities" aria-labelledby="bento-title">
        <header className="section-heading">
          <p>From first constraint to final interaction</p>
          <h2 id="bento-title">Software with <span className="inline-image" aria-hidden="true" /> a pulse.</h2>
        </header>
        <div className="bento-grid">
          <article className="bento-card bento-wide dark-card">
            <span>Engineering approach</span>
            <h3>Reliability is a product feature.</h3>
            <p>I design for bad inputs, interrupted runs, shifting sources, and the humans who need a clear next step when systems fail.</p>
            <div className="signal-lines" aria-hidden="true"><i /><i /><i /><i /><i /></div>
          </article>
          <article className="bento-card bento-project image-card">
            <img src="https://picsum.photos/seed/code-terminal-glass/1200/900" alt="Abstract reflections across a dark technical workspace" />
            <div className="image-card-copy">
              <span>Product thinking</span>
              <h3>Every interface explains the system beneath it.</h3>
            </div>
          </article>
          <article className="bento-card bento-small warm-card">
            <span>Current focus</span>
            <h3>Frontend systems that feel fast before the metrics arrive.</h3>
          </article>
          <article className="bento-card bento-medium metric-card">
            <span>Working principle</span>
            <strong>Clarity over cleverness.</strong>
            <p>Complexity belongs in the implementation, not in the user’s path.</p>
          </article>
          <article className="bento-card bento-narrow line-card">
            <span>Based in</span>
            <h3>Philippines</h3>
            <p>Building for local context and global standards.</p>
          </article>
        </div>
      </section>

      <section className="project-story" id="work" aria-labelledby="work-title">
        <div className="project-intro">
          <p>Selected systems</p>
          <h2 id="work-title">Proof, not promises.</h2>
          <span>Two projects. Each unpacked through the decisions that made it work.</span>
        </div>
        <div className="project-stack">
          {projects.map((project, index) => (
            <article className={`project-panel panel-${index + 1}`} key={project.name}>
              <div className="project-image">
                <img src={project.image} alt={`Atmospheric visual for the ${project.name} project`} />
                <span>{project.focus}</span>
              </div>
              <div className="project-content">
                <div className="project-number">0{index + 1}</div>
                <h3>{project.name}</h3>
                <p className="project-statement">{project.statement}</p>
                <div className="project-decision">
                  <span>The engineering decision</span>
                  <p>{project.challenge}</p>
                </div>
                <ul aria-label={`${project.name} technology stack`}>
                  {project.stack.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <a href="#contact">Discuss this project <ArrowUpRight weight="bold" /></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="skills-section" aria-labelledby="skills-title">
        <div className="skills-heading">
          <p>Capabilities</p>
          <h2 id="skills-title">The range to carry an idea from architecture to interface.</h2>
        </div>
        <div className="accordion">
          {skillGroups.map((group, index) => (
            <button
              className={openSkill === index ? "skill-slice active" : "skill-slice"}
              key={group.title}
              onMouseEnter={() => setOpenSkill(index)}
              onFocus={() => setOpenSkill(index)}
              onClick={() => setOpenSkill(index)}
              type="button"
              aria-expanded={openSkill === index}
            >
              <span className="slice-index">0{index + 1}</span>
              <strong>{group.title}</strong>
              <p>{group.detail}</p>
              <ArrowUpRight />
            </button>
          ))}
        </div>
      </section>

      <footer id="contact" className="footer">
        <div className="footer-lead">
          <p>Have a system worth making better?</p>
          <h2>Let’s build something<br /><em>that lasts.</em></h2>
          <a className="button button-dark" href="mailto:andreitristanlaqui@gmail.com?subject=Portfolio%20inquiry">Start a conversation <PaperPlaneTilt weight="fill" /></a>
        </div>
        <div className="footer-bottom">
          <a className="wordmark footer-mark" href="#top">TR<span>/</span>STAN</a>
          <p>Software engineering with consequence and character.</p>
          <div className="social-links">
            <a href="https://github.com/AndreiTristanLaqui" target="_blank" rel="noreferrer" aria-label="GitHub"><GithubLogo /></a>
            <a href="https://www.linkedin.com/in/andrei-tristan-laqui-06510a38b/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedinLogo /></a>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
