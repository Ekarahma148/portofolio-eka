import { useEffect, useState, useMemo, useRef } from "react";
import {
  profile,
  statistics,
  skills,
  trainings,
  instructor,
  projects,
  certificates,
  socials,
  typingTexts,
} from "./portofolio";
import {
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
  ExternalLink,
  Download,
  ChevronDown,
  GraduationCap,
  Rocket,
 Code2, Server, Database, Wrench,
  Heart,
  ArrowUp,
  Check,
} from "lucide-react";
import { motion } from "framer-motion";

const navItems = [
  "About",
  "Skills",
  "Training",
  "Instructor",
  "Projects",
  "Certificates",
  "Contact",
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-slate-950/90 backdrop-blur-xl shadow-xl" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <a href="#" className="text-2xl font-black tracking-wide">
          <span className="text-blue-500">&lt;</span>
          {profile.nickname}
          <span className="text-cyan-400"> /&gt;</span>
        </a>

        <nav className="hidden lg:flex gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-slate-300 hover:text-white transition duration-300"
            >
              {item}
            </a>
          ))}
        </nav>

        <button
          className="lg:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-slate-900 border-t border-slate-800">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="block px-6 py-4 border-b border-slate-800 hover:bg-slate-800"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

function BackgroundGlow() {
  return (
    <>
      <div className="fixed -top-44 -left-44 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] -z-10" />
      <div className="fixed top-80 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] -z-10" />
      <div className="fixed bottom-0 left-1/3 w-[450px] h-[450px] bg-indigo-500/10 rounded-full blur-[120px] -z-10" />
    </>
  );
}

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const total =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const current = (window.scrollY / total) * 100;
      setProgress(current);
    };

    window.addEventListener("scroll", update);
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 z-[999]"
      style={{ width: `${progress}%` }}
    />
  );
}

function Hero() {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const currentText = useMemo(() => typingTexts[textIndex], [textIndex]);

useEffect(() => {
  if (!isDeleting && displayText === currentText) {
    const pauseTimer = setTimeout(() => {
      setIsDeleting(true);
    }, 1500); // Durasi jeda sebelum teks mulai dihapus
    return () => clearTimeout(pauseTimer);
  }

  if (isDeleting && displayText === "") {
    setIsDeleting(false);
    setTextIndex((prev) => (prev + 1) % typingTexts.length);
    return;
  }

  const speed = isDeleting ? 45 : 90;

  const timer = setTimeout(() => {
    const nextText = isDeleting
      ? currentText.slice(0, displayText.length - 1)
      : currentText.slice(0, displayText.length + 1);

    setDisplayText(nextText);
  }, speed);

  return () => clearTimeout(timer);
}, [displayText, currentText, isDeleting, typingTexts.length]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <HeroContent displayText={displayText} />
        <HeroImage />
      </div>
    </section>
  );
}

function HeroContent({ displayText }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <p className="text-cyan-400 font-semibold tracking-widest uppercase mb-4">
        Hello World
      </p>
      <h1 className="text-5xl md:text-7xl font-black leading-tight">
        {profile.name}
      </h1>
      <h2 className="text-3xl md:text-4xl font-bold mt-4 text-blue-400 h-12">
        {displayText}
        <span className="animate-pulse">|</span>
      </h2>
      <p className="mt-8 text-slate-400 leading-8 max-w-xl">
        {profile.description}
      </p>
      <HeroButtons />
      <HeroSocial />
    </motion.div>
  );
}

function HeroButtons() {
  return (
    <div className="flex flex-wrap gap-4 mt-10">
      <a
        href={profile.cv}
        className="px-7 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 duration-300 flex items-center gap-2"
      >
        <Download size={18} />
        Download CV
      </a>
      <a
        href="#contact"
        className="px-7 py-4 rounded-xl border border-slate-700 hover:border-blue-500 duration-300"
      >
        Contact Me
      </a>
    </div>
  );
}

function HeroSocial() {
  return (
    <div className="flex gap-5 mt-10">
      <a href={`mailto:${profile.email}`} aria-label="Email">
        <Mail className="hover:text-blue-400 duration-300" />
      </a>
    </div>
  );
}

function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="flex justify-center"
    >
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-blue-600 blur-3xl opacity-30 animate-pulse" />
        <img
          src={profile.avatar}
          alt={profile.name}
          className="relative w-80 h-80 lg:w-[420px] lg:h-[420px] rounded-full border-4 border-slate-800 object-cover shadow-2xl"
        />
      </div>
    </motion.div>
  );
}

function Counter({ end, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;

    let start = 0;
    const duration = 1500;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(timer);
  }, [visible, end]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

function Statistics() {
  return (
    <section className="max-w-7xl mx-auto px-6 -mt-10 pb-24">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {statistics.map((item) => (
          <motion.div
            key={item.title}
            whileHover={{ y: -8 }}
            className="rounded-3xl bg-slate-900/70 backdrop-blur-xl border border-slate-800 p-8"
          >
            <h2 className="text-4xl font-black text-blue-400">
              <Counter end={item.number} suffix={item.suffix} />
            </h2>
            <p className="mt-3 text-slate-400">{item.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function TerminalCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-xl mx-auto lg:mx-0 rounded-3xl overflow-hidden border border-slate-800 bg-[#0d1117] shadow-2xl"
    >
      <div className="flex items-center gap-2 px-5 py-3 bg-slate-900">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
        <span className="ml-4 text-sm text-slate-500">terminal</span>
      </div>

      <div className="p-6 font-mono text-sm leading-8">
        <p className="text-green-400">$ npm run portfolio</p>
        <br />
        <p>
          <span className="text-green-400">✔</span> Name :{" "}
          <span className="text-cyan-400">{profile.name}</span>
        </p>
        <p>
          <span className="text-green-400">✔</span> Role :{" "}
          <span className="text-cyan-400">React Instructor</span>
        </p>
        <p>
          <span className="text-green-400">✔</span> Frontend :{" "}
          <span className="text-cyan-400">React + Tailwind</span>
        </p>
        <p>
          <span className="text-green-400">✔</span> Backend :{" "}
          <span className="text-cyan-400">Spring Boot</span>
        </p>
        <p>
          <span className="text-green-400">✔</span> Database :{" "}
          <span className="text-cyan-400">PostgreSQL</span>
        </p>
        <p>
          <span className="text-green-400">✔</span> Status :{" "}
          <span className="text-green-400">Available for Work</span>
        </p>
        <br />
        <p className="text-green-400">Build Successfully ✔</p>
      </div>
    </motion.div>
  );
}

function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-[6px] text-cyan-400 font-semibold">
            About Me
          </p>
          <h2 className="text-5xl font-black mt-4">
            Membangun <span className="text-blue-400">Solusi Digital</span>
            <br />
            Dengan React.
          </h2>
          <p className="mt-8 leading-8 text-slate-400">{profile.about}</p>
        </motion.div>

        <TerminalCard />
      </div>
    </section>
  );
}


// Pemetaan ikon Lucide berdasarkan nama kategori
const categoryIcons = {
  Frontend: <Code2 className="w-7 h-7 text-blue-400" />,
  Backend: <Server className="w-7 h-7 text-cyan-400" />,
  Database: <Database className="w-7 h-7 text-indigo-400" />,
  "Tools & Workflow": <Wrench className="w-7 h-7 text-sky-400" />,
};

export function Skills() {
  return (
    <section id="skills" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[6px] text-cyan-400 font-semibold">
            My Skills
          </p>
          <h2 className="text-5xl font-black mt-4">
            Tech Stack & <span className="text-blue-400">Technologies</span>
          </h2>
          <p className="text-slate-400 mt-6 max-w-3xl mx-auto leading-8">
            Teknologi dan tools yang biasa saya gunakan dalam merancang,
            membangun, dan mengelola aplikasi web secara end-to-end.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skills.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl p-8 transition duration-300 hover:border-slate-700"
            >
              {/* Card Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-slate-800/80 border border-slate-700/50 flex items-center justify-center">
                  {categoryIcons[group.category] || categoryIcons["Frontend"]}
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{group.category}</h3>
                  <p className="text-sm text-slate-400">
                    {group.items.length} Techs
                  </p>
                </div>
              </div>

              {/* Tag Grid (Tanpa Level / Indicator) */}
              <div className="flex flex-wrap gap-2.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2.5 rounded-xl bg-slate-800/50 border border-slate-700/40 text-slate-200 text-sm font-medium hover:bg-blue-600/20 hover:border-blue-500/50 hover:text-blue-300 transition duration-300 cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
function Training() {
  return (
    <section id="training" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[6px] text-cyan-400 font-semibold">
            Learning Journey
          </p>
          <h2 className="text-5xl font-black mt-4">
            Programming <span className="text-blue-400">Training</span>
          </h2>
          <p className="mt-6 text-slate-400 leading-8 max-w-3xl mx-auto">
            Perjalanan saya mempelajari dunia software development dimulai dari
            dasar pemrograman hingga membangun aplikasi modern menggunakan
            React, Spring Boot, dan PostgreSQL.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Vertical Line */}
          <div className="absolute left-4 top-0 bottom-0 w-1 bg-slate-700 lg:left-1/2 lg:-translate-x-1/2" />

          <div className="space-y-14">
            {trainings.map((item, index) => {
              const left = index % 2 === 0;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: left ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className={`relative flex ${
                    left ? "lg:justify-start" : "lg:justify-end"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 lg:left-1/2 lg:-translate-x-1/2 w-6 h-6 rounded-full bg-blue-500 border-4 border-slate-950 shadow-lg" />

                  {/* Content Card */}
                  <div className="ml-12 lg:ml-0 w-full lg:w-[44%] rounded-3xl bg-slate-900/70 border border-slate-800 backdrop-blur-xl p-8 hover:border-blue-500 transition">
                    <span className="text-xs uppercase tracking-widest text-cyan-400">
                      Training
                    </span>
                    <h3 className="text-2xl font-bold mt-3">{item.title}</h3>
                    <p className="mt-4 text-slate-400 leading-7">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Instructor() {
  return (
    <section id="instructor" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[6px] text-cyan-400 font-semibold">
            Teaching Experience
          </p>
          <h2 className="text-5xl font-black mt-4">
            React <span className="text-blue-400">Instructor</span>
          </h2>
          <p className="mt-6 text-slate-400 leading-8 max-w-3xl mx-auto">
            Selain membangun aplikasi menggunakan React, saya juga dipercaya
            menjadi instruktur React Fundamental dan React Lanjutan untuk
            membimbing peserta memahami konsep React melalui pembelajaran teori
            dan praktik.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {instructor.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="rounded-3xl bg-slate-900/70 border border-slate-800 backdrop-blur-xl p-8 transition duration-300 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-600/20 flex items-center justify-center text-blue-400">
                <GraduationCap size={32} />
              </div>

              <h3 className="text-3xl font-bold mt-6">{item.title}</h3>
              <p className="mt-4 text-slate-400 leading-8">
                {item.description}
              </p>

              <div className="mt-8 inline-flex rounded-full bg-blue-500/20 text-blue-300 px-4 py-2 text-sm">
                {item.materials.length} Materi
              </div>

              <div className="flex flex-wrap gap-3 mt-8">
                {item.materials.map((material) => (
                  <span
                    key={material}
                    className="px-4 py-2 rounded-full bg-slate-800 text-slate-300 hover:bg-blue-600 hover:text-white transition cursor-default"
                  >
                    {material}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[6px] text-cyan-400 font-semibold">
            Portfolio
          </p>
          <h2 className="text-5xl font-black mt-4">
            Featured <span className="text-blue-400">Projects</span>
          </h2>
          <p className="mt-6 text-slate-400 leading-8 max-w-3xl mx-auto">
            Beberapa project yang saya bangun menggunakan React, Tailwind CSS,
            Spring Boot, dan PostgreSQL.
          </p>
        </motion.div>

        <div className="space-y-14">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-10 items-center rounded-3xl border border-slate-800 bg-slate-900/70 backdrop-blur-xl overflow-hidden p-8"
            >
              {/* Image */}
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-2xl hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
              <div>
                <p className="text-cyan-400 uppercase tracking-widest text-sm">
                  {project.subtitle}
                </p>
                <h3 className="text-4xl font-black mt-2">{project.title}</h3>
                <p className="mt-6 text-slate-400 leading-8">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 mt-8">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <div className="grid grid-cols-2 gap-3 mt-10">
                  {project.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <Check className="text-green-400" size={18} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-10">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl border border-slate-700 hover:border-blue-500 transition"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 transition"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Certificates() {
  return (
    <section id="certificates" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[6px] text-cyan-400 font-semibold">
            Achievement
          </p>
          <h2 className="text-5xl font-black mt-4">
            Training <span className="text-blue-400">Certificates</span>
          </h2>
          <p className="mt-6 text-slate-400 leading-8 max-w-3xl mx-auto">
            Sertifikat yang saya peroleh selama mengikuti pelatihan
            pemrograman.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certificates.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="rounded-3xl overflow-hidden border border-slate-800 bg-slate-900"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 object-cover hover:scale-105 transition duration-500"
              />
              <div className="p-6">
                <h3 className="font-bold">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 p-12 text-center"
        >
          <div className="flex items-center justify-center gap-3 text-5xl font-black">
            <span>Let's Build Something Together</span>
            <Rocket className="inline-block" size={44} />
          </div>
          <p className="mt-6 text-blue-100 leading-8">
            Saya terbuka untuk peluang sebagai Frontend Developer, React
            Developer, maupun kolaborasi project.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-14">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-2xl bg-white/10 backdrop-blur-xl p-6 hover:bg-white/20 transition"
            >
              <Mail className="mx-auto mb-4" />
              <p>Email</p>
              <strong>{profile.email}</strong>
            </a>

            <a
              href={`tel:${profile.phone}`}
              className="rounded-2xl bg-white/10 p-6 hover:bg-white/20 transition"
            >
              <Phone className="mx-auto mb-4" />
              <p>Phone</p>
              <strong>{profile.phone}</strong>
            </a>

            <div className="rounded-2xl bg-white/10 p-6">
              <MapPin className="mx-auto mb-4" />
              <p>Location</p>
              <strong>{profile.location}</strong>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-800 py-10 text-center">
      <p className="text-slate-500">
        © {new Date().getFullYear()} {profile.name}
      </p>
      <p className="mt-2 text-slate-600 flex items-center justify-center gap-1">
        Built with React + Tailwind CSS
        <Heart className="inline text-red-500 fill-red-500" size={16} />
      </p>
    </footer>
  );
}

function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-500 shadow-xl z-50 transition flex items-center justify-center"
      aria-label="Back to Top"
    >
      <ArrowUp size={24} />
    </button>
  );
}

export default function App() {
  return (
    <main className="bg-slate-950 text-white overflow-hidden">
      <BackgroundGlow />
      <ScrollProgress />
      <Navbar />

      <Hero />
      <Statistics />
      <About />
      <Skills />
      <Training />
      <Instructor />
      <Projects />
      <Certificates />
      <Contact />

      <Footer />
      <BackToTop />
    </main>
  );
}