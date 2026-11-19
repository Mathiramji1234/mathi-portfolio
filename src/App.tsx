
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowUpRight,
  Mail,
  Download,
  Code2,
  Sparkles,
} from "lucide-react";

import { SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";

function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#09090b] text-white">

      {/* Background Glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple-600/10 blur-[140px]" />

      {/* Navbar */}
      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-12">

        <a href="#" className="text-xl font-bold tracking-tight">
          MRK<span className="text-purple-500">.</span>
        </a>

        <div className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
          <a href="#home" className="transition hover:text-white">Home</a>
          <a href="#about" className="transition hover:text-white">About</a>
          <a href="#projects" className="transition hover:text-white">Projects</a>
          <a href="#contact" className="transition hover:text-white">Contact</a>
          <a href="#experience" className="transition hover:text-white">Experience</a>
        </div>

        <a
          href="#contact"
          className="flex items-center gap-2 rounded-full border border-zinc-700 px-5 py-2.5 text-sm transition hover:border-purple-500 hover:bg-purple-500/10"
        >
          Let's Talk
          <ArrowUpRight size={16} />
        </a>
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="relative z-10 mx-auto grid min-h-[85vh] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:px-12"
      >

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >

          {/* Availability */}
          <div className="inline-flex items-center gap-3 rounded-full border border-zinc-800 bg-zinc-900/70 px-4 py-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>

            <span className="text-sm text-zinc-300">
              EEE Student · Full Stack Developer
            </span>
          </div>

          {/* Heading */}
          <div className="space-y-4">

            <p className="text-sm font-medium uppercase tracking-[0.25em] text-purple-400">
              Hello, I'm Mathi Ramji K
            </p>

            <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Building
              <br />

              <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                Digital
              </span>

              <br />

              Experiences.
            </h1>

          </div>

          {/* Description */}
          <p className="max-w-xl text-base leading-8 text-zinc-400 sm:text-lg">
            Full Stack Developer passionate about building scalable web
            applications and intelligent solutions. I transform ideas
            into impactful digital experiences using modern technologies.
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-3">
            {["React", "TypeScript", "Node.js", "MongoDB"].map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-zinc-800 bg-zinc-900/80 px-3 py-2 text-sm text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">

            <a
              href="#projects"
              className="group flex items-center gap-3 rounded-full bg-purple-600 px-6 py-3.5 font-medium transition hover:bg-purple-500"
            >
              Explore Projects

              <ArrowDownRight
                size={18}
                className="transition group-hover:translate-y-1"
              />
            </a>

            <a
              href="/Resume.pdf"
              download
              className="flex items-center gap-3 rounded-full border border-zinc-700 px-6 py-3.5 font-medium transition hover:border-white hover:bg-white/5"
            >
              Download Resume
              <Download size={18} />
            </a>

          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5 pt-4">

            <span className="text-sm text-zinc-500">
              Connect with me
            </span>

            <a
              href="https://github.com/Mathiramji1234"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-zinc-400 transition hover:text-white"
            >
              <SiGithub size={22} />
            </a>

            <a
              href="https://linkedin.com/in/mathi-ramji-k-86713531b"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-zinc-400 transition hover:text-white"
            >
              <FaLinkedinIn size={22} />
            </a>

            <a
              href="mailto:mathiramji6002@gmail.com"
              aria-label="Email"
              className="text-zinc-400 transition hover:text-white"
            >
              <Mail size={22} />
            </a>

          </div>

        </motion.div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative flex items-center justify-center"
        >

          {/* Glow */}
          <div className="absolute h-80 w-80 rounded-full bg-purple-600/20 blur-[100px]" />

          {/* Profile Card */}
          <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-zinc-900/60 p-6 shadow-2xl backdrop-blur-xl sm:p-8">

            {/* Card Header */}
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>

              <span className="text-xs text-zinc-500">
                developer.tsx
              </span>
            </div>

            {/* Developer Identity */}
            <div className="py-12 text-center">

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="mx-auto mb-6 flex h-32 w-32 items-center justify-center rounded-full border border-purple-400/30 bg-gradient-to-br from-purple-600/30 via-fuchsia-500/20 to-cyan-500/20 shadow-[0_0_60px_rgba(168,85,247,0.15)]"
              >
                <Code2 size={64} className="text-purple-300" />
              </motion.div>

              <h2 className="text-2xl font-bold">
                Mathi Ramji K
              </h2>

              <p className="mt-2 text-purple-400">
                Full Stack Developer
              </p>

              <p className="mt-4 text-sm leading-7 text-zinc-400">
                Turning complex problems into elegant solutions
                through code and creativity.
              </p>

            </div>

            {/* Bottom Stats */}
            <div className="grid grid-cols-3 gap-3 border-t border-zinc-800 pt-6">

              <div className="text-center">
                <p className="text-xl font-bold text-white">430+</p>
                <p className="mt-1 text-xs text-zinc-500">LeetCode</p>
              </div>

              <div className="text-center">
                <p className="text-xl font-bold text-white">3+</p>
                <p className="mt-1 text-xs text-zinc-500">Projects</p>
              </div>

              <div className="text-center">
                <p className="text-xl font-bold text-white">N5</p>
                <p className="mt-1 text-xs text-zinc-500">Japanese</p>
              </div>

            </div>

          </div>

          {/* Floating Badge */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -right-2 top-10 hidden rounded-2xl border border-zinc-800 bg-zinc-900 p-4 shadow-xl sm:block"
          >
            <Sparkles className="text-purple-400" size={24} />
          </motion.div>

        </motion.div>

      </section>

      {/* Scroll Indicator */}
      <div className="relative z-10 flex justify-center pb-8">
        <a
          href="#about"
          className="flex items-center gap-2 text-sm text-zinc-500 transition hover:text-purple-400"
        >
          Scroll to explore
          <ArrowDown size={16} className="animate-bounce" />
        </a>
      </div>

      
      {/* ABOUT SECTION */}
      <section
        id="about"
        className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-12"
      >
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-purple-400">
            Get to know me
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            About <span className="text-purple-400">Me.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
            A curious mind, an engineering background, and a passion
            for building technology that makes a difference.
          </p>
        </motion.div>

        {/* About Content */}
        <div className="grid gap-8 lg:grid-cols-5">

          {/* Introduction Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-white/10 bg-zinc-900/50 p-8 backdrop-blur-xl lg:col-span-3"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                <Code2 size={25} />
              </div>

              <h3 className="text-2xl font-semibold">
                Who I Am
              </h3>
            </div>

            <div className="space-y-5 text-base leading-8 text-zinc-400">
              <p>
                I'm Mathi Ramji K, a third-year Electrical and
                Electronics Engineering student with a strong
                passion for software development and emerging
                technologies.
              </p>

              <p>
                My journey into software development has led me
                to explore full-stack web development, data
                structures and algorithms, and AI-powered
                applications. I enjoy turning complex problems
                into practical, user-friendly solutions.
              </p>

              <p>
                Beyond coding, I'm learning Japanese and
                continuously improving my technical and
                communication skills. I'm passionate about
                combining engineering knowledge with software
                innovation to create meaningful solutions.
              </p>
            </div>

            {/* Interests */}
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Full Stack Development",
                "AI Applications",
                "Problem Solving",
                "Japanese Language",
              ].map((interest) => (
                <span
                  key={interest}
                  className="rounded-full border border-purple-500/20 bg-purple-500/5 px-4 py-2 text-sm text-purple-300"
                >
                  {interest}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Highlights */}
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-1">

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl border border-white/10 bg-zinc-900/50 p-6"
            >
              <p className="mb-3 text-sm text-zinc-500">
                Education
              </p>

              <h3 className="text-xl font-semibold text-white">
                B.E. Electrical & Electronics Engineering
              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-400">
                Sri Eshwar College of Engineering
              </p>

              <p className="mt-4 text-sm text-purple-400">
                Third Year Undergraduate
              </p>
            </motion.div>

            {/* Coding */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="rounded-3xl border border-white/10 bg-zinc-900/50 p-6"
            >
              <p className="mb-3 text-sm text-zinc-500">
                Problem Solving
              </p>

              <h3 className="text-3xl font-bold text-white">
                430+
              </h3>

              <p className="mt-2 text-sm text-zinc-400">
                LeetCode Problems Solved
              </p>

              <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-zinc-800">
                <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400" />
              </div>
            </motion.div>

            {/* Japanese */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="rounded-3xl border border-white/10 bg-zinc-900/50 p-6"
            >
              <p className="mb-3 text-sm text-zinc-500">
                Language
              </p>

              <h3 className="text-2xl font-bold text-white">
                JLPT N5
              </h3>

              <p className="mt-2 text-sm text-zinc-400">
                Japanese Language Proficiency
              </p>

              <p className="mt-4 text-sm text-purple-400">
                Currently learning N4
              </p>
            </motion.div>

          </div>
        </div>
      </section>      
            
      
      {/* Skills Section */}
      <section
        id="skills"
        className="relative mx-auto max-w-7xl px-6 py-24 lg:px-12"
      >
        {/* Section Heading */}
        <div className="mb-12">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
            My Technical Arsenal
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Skills & <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Technologies.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-400">
            A collection of technologies I use to develop scalable
            applications, solve problems, and explore intelligent systems.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-5 md:grid-cols-2">

          {/* Frontend */}
          <div className="group rounded-2xl border border-white/10 bg-gradient-to-br from-purple-500/[0.07] to-zinc-900/60 p-7 transition duration-300 hover:border-purple-500/40">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/15 text-purple-400">
                <Code2 size={25} />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white">
                  Frontend Development
                </h3>
                <p className="mt-1 text-xs text-zinc-500">
                  Interface & Experience
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {["HTML", "CSS", "JavaScript", "TypeScript", "React.js", "Next.js", "Tailwind CSS"].map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-purple-500/15 bg-purple-500/[0.06] px-3 py-2 text-sm text-zinc-300 transition hover:border-purple-400/50 hover:text-purple-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="group rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-500/[0.07] to-zinc-900/60 p-7 transition duration-300 hover:border-cyan-500/40">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-400">
                <ArrowDownRight size={25} />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white">
                  Backend Development
                </h3>
                <p className="mt-1 text-xs text-zinc-500">
                  APIs & Server Logic
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {["Node.js", "Express.js", "REST APIs", "GraphQL", "JWT"].map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-cyan-500/15 bg-cyan-500/[0.06] px-3 py-2 text-sm text-zinc-300 transition hover:border-cyan-400/50 hover:text-cyan-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Database & Cloud */}
          <div className="group rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-500/[0.07] to-zinc-900/60 p-7 transition duration-300 hover:border-emerald-500/40">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400">
                <Sparkles size={25} />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white">
                  Database & Deployment
                </h3>
                <p className="mt-1 text-xs text-zinc-500">
                  Data & Infrastructure
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {["MongoDB", "PostgreSQL","SQLite", "AWS EC2", "Vercel", "Git", "GitHub"].map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-emerald-500/15 bg-emerald-500/[0.06] px-3 py-2 text-sm text-zinc-300 transition hover:border-emerald-400/50 hover:text-emerald-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* AI & Programming */}
          <div className="group rounded-2xl border border-white/10 bg-gradient-to-br from-orange-500/[0.07] to-zinc-900/60 p-7 transition duration-300 hover:border-orange-500/40">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/15 text-orange-400">
                <Code2 size={25} />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white">
                  AI & Programming
                </h3>
                <p className="mt-1 text-xs text-zinc-500">
                  Algorithms & Intelligent Systems
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {["Java", "Python", "YOLO", "OpenCV", "AI Agents", "Prompt Engineering"].map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-orange-500/15 bg-orange-500/[0.06] px-3 py-2 text-sm text-zinc-300 transition hover:border-orange-400/50 hover:text-orange-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Highlight */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-5 rounded-2xl border border-white/10 bg-zinc-900/40 px-7 py-5">
          <div>
            <p className="text-sm font-medium text-white">
              Problem Solving
            </p>
            <p className="mt-1 text-sm text-zinc-500">
              Consistent DSA practice using Java
            </p>
          </div>

          <div className="text-right">
            <p className="text-3xl font-bold text-purple-400">
              430+
            </p>
            <p className="text-xs text-zinc-500">
              LeetCode Problems Solved
            </p>
          </div>
        </div>
      </section>

      
      {/* Experience Section */}
      <section
        id="experience"
        className="relative mx-auto max-w-7xl px-6 py-24 lg:px-12"
      >
        {/* Heading */}
        <div className="mb-16">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
            My Professional Journey
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Work <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Experience.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-400">
            Building real-world applications, gaining practical
            development experience, and continuously growing
            as a software developer.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative ml-3 space-y-10 border-l border-purple-500/30 pl-8 sm:ml-5 sm:pl-12">

          {/* Better Tomorrow */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[41px] top-8 h-4 w-4 rounded-full border-4 border-[#09090b] bg-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.6)] sm:-left-[57px]" />

            <div className="group rounded-3xl border border-white/10 bg-zinc-900/50 p-7 transition duration-300 hover:border-purple-500/40 sm:p-9">

              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-5">
                <div>
                  <p className="text-sm font-medium text-purple-400">
                    Internship
                  </p>

                  <h3 className="mt-2 text-2xl font-bold text-white">
                    MERN Stack Intern
                  </h3>

                  <p className="mt-2 text-lg font-medium text-zinc-300">
                    Better Tomorrow
                  </p>
                </div>

                <span className="rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-xs font-medium text-purple-300">
                  MERN Stack
                </span>
              </div>

              {/* Description */}
              <p className="mt-6 text-sm leading-8 text-zinc-400 sm:text-base">
                Developed a full-stack e-commerce website using
                the MERN stack, implementing product management
                and shopping functionalities while gaining hands-on
                experience in full-stack web development.
              </p>

              {/* Responsibilities */}
              <div className="mt-6 space-y-3">
                {[
                  "Developed frontend interfaces using React.js.",
                  "Implemented backend functionality using Node.js and Express.js.",
                  "Worked with MongoDB for application data management.",
                  "Integrated product management and shopping features.",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <ArrowUpRight
                      size={16}
                      className="mt-1 shrink-0 text-purple-400"
                    />

                    <p className="text-sm leading-7 text-zinc-400">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="mt-7 flex flex-wrap gap-2">
                {["React.js", "Node.js", "Express.js", "MongoDB"].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2 text-xs text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Digri.ai */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[41px] top-8 h-4 w-4 rounded-full border-4 border-[#09090b] bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.5)] sm:-left-[57px]" />

            <div className="group rounded-3xl border border-white/10 bg-zinc-900/50 p-7 transition duration-300 hover:border-cyan-500/40 sm:p-9">

              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-5">
                <div>
                  <p className="text-sm font-medium text-cyan-400">
                    Internship
                  </p>

                  <h3 className="mt-2 text-2xl font-bold text-white">
                    Modern Stack Intern
                  </h3>

                  <p className="mt-2 text-lg font-medium text-zinc-300">
                    Digri.ai
                  </p>
                </div>

                <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs font-medium text-cyan-300">
                  Next.js & TypeScript
                </span>
              </div>

              {/* Description */}
              <p className="mt-6 text-sm leading-8 text-zinc-400 sm:text-base">
                Developed a full-stack Interview Preparation Platform
                using Next.js, TypeScript, GraphQL, and MongoDB.
                The platform enables users to explore role-based
                interview questions, track preparation progress,
                and access structured learning resources.
              </p>

              {/* Responsibilities */}
              <div className="mt-6 space-y-3">
                {[
                  "Developed modern frontend interfaces using Next.js and TypeScript.",
                  "Worked with GraphQL for application data operations.",
                  "Integrated MongoDB for data storage.",
                  "Implemented interview preparation and progress tracking features.",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <ArrowUpRight
                      size={16}
                      className="mt-1 shrink-0 text-cyan-400"
                    />

                    <p className="text-sm leading-7 text-zinc-400">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="mt-7 flex flex-wrap gap-2">
                {["Next.js", "TypeScript", "GraphQL", "MongoDB"].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2 text-xs text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      
      {/* PROJECTS SECTION */}
      <section
        id="projects"
        className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-12"
      >
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-purple-400">
            My Work
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Featured <span className="text-purple-400">Projects.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
            A collection of applications and intelligent systems
            I've developed to solve real-world problems.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {/* KaizenTrack */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/50 transition duration-300 hover:-translate-y-2 hover:border-purple-500/40"
          >
            <div className="relative flex h-52 items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900/40 via-zinc-900 to-cyan-900/30">
              <div className="absolute h-40 w-40 rounded-full bg-purple-600/20 blur-3xl" />

              <Code2
                size={75}
                className="relative text-purple-300 transition duration-500 group-hover:scale-110"
              />

              <span className="absolute right-5 top-5 rounded-full border border-purple-400/20 bg-purple-500/10 px-3 py-1 text-xs text-purple-300">
                	Productivity & Task Management
              </span>
            </div>

            <div className="p-7">
              <h3 className="text-2xl font-bold text-white">
                KaizenTrack
              </h3>

              <p className="mt-3 text-sm leading-7 text-zinc-400">
                A smart productivity and task management system
                featuring recurring tasks, productivity analytics,
                streak tracking, task filtering, and customizable themes.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {["React", "TypeScript", "Tailwind CSS", "Vite"].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-1.5 text-xs text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-7 border-t border-zinc-800 pt-5">
                <a
                  href="https://github.com/YOUR_USERNAME/KaizenTrack"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-purple-400 transition hover:text-white"
                >
                  Source Code
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* SpendWise AI */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/50 transition duration-300 hover:-translate-y-2 hover:border-purple-500/40"
          >
            <div className="relative flex h-52 items-center justify-center overflow-hidden bg-gradient-to-br from-cyan-900/40 via-zinc-900 to-purple-900/30">
              <div className="absolute h-40 w-40 rounded-full bg-cyan-500/20 blur-3xl" />

              <Sparkles
                size={75}
                className="relative text-cyan-300 transition duration-500 group-hover:scale-110"
              />

              <span className="absolute right-5 top-5 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300">
                	AI-Powered FinTech
              </span>
            </div>

            <div className="p-7">
              <h3 className="text-2xl font-bold text-white">
                SpendWise AI
              </h3>

              <p className="mt-3 text-sm leading-7 text-zinc-400">
                An AI-powered expense management application
                designed to help users manage personal finances
                through intelligent expense analysis and an AI agent.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {["Python", "FastAPI", "SQLAlchemy", "SQLite", "Groq AI"].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-1.5 text-xs text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-7 border-t border-zinc-800 pt-5">
                <a
                  href="https://github.com/YOUR_USERNAME/SpendWise-AI"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400 transition hover:text-white"
                >
                  Source Code
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* InfraGuard AI */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/50 transition duration-300 hover:-translate-y-2 hover:border-purple-500/40"
          >
            <div className="relative flex h-52 items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-900/40 via-zinc-900 to-purple-900/30">
              <div className="absolute h-40 w-40 rounded-full bg-emerald-500/20 blur-3xl" />

              <Code2
                size={75}
                className="relative text-emerald-300 transition duration-500 group-hover:scale-110"
              />

              <span className="absolute right-5 top-5 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">
                	AI Predictive Maintenance
              </span>
            </div>

            <div className="p-7">
              <h3 className="text-2xl font-bold text-white">
                InfraGuard AI
              </h3>

              <p className="mt-3 text-sm leading-7 text-zinc-400">
                An infrastructure predictive maintenance system
                for water pumps, pipelines, solar arrays, and
                transformers using simulated sensor degradation
                and AI-driven monitoring.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {["Python", "AI Agents", "Sensor Simulation", "Testing"].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-1.5 text-xs text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-7 border-t border-zinc-800 pt-5">
                <a
                  href="https://github.com/YOUR_USERNAME/InfraGuard-AI"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-emerald-400 transition hover:text-white"
                >
                  Source Code
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </motion.div>
          
          
          {/* AI Navigation Assistant */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/50 transition duration-300 hover:-translate-y-2 hover:border-purple-500/40"
          >
            <div className="relative flex h-52 items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900/40 via-zinc-900 to-purple-900/30">
              <div className="absolute h-40 w-40 rounded-full bg-blue-500/20 blur-3xl" />

              <Sparkles
                size={75}
                className="relative text-blue-300 transition duration-500 group-hover:scale-110"
              />

              <span className="absolute right-5 top-5 rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs text-blue-300">
                Assistive Technology
              </span>
            </div>

            <div className="p-7">
              <h3 className="text-2xl font-bold text-white">
                AI Navigation Assistant
              </h3>

              <p className="mt-3 text-sm leading-7 text-zinc-400">
                An AI-powered navigation assistant for visually
                impaired individuals. Uses real-time object detection
                to identify obstacles and provides voice-based alerts
                to support safer navigation.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {["Python", "YOLO", "OpenCV", "Computer Vision"].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-1.5 text-xs text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-7 border-t border-zinc-800 pt-5">
                <a
                  href="https://github.com/YOUR_USERNAME/AI-Navigation-Assistant"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 transition hover:text-white"
                >
                  Source Code
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </motion.div>


          {/* Complaint & Issue Tracking System */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/50 transition duration-300 hover:-translate-y-2 hover:border-purple-500/40"
          >
            <div className="relative flex h-52 items-center justify-center overflow-hidden bg-gradient-to-br from-orange-900/40 via-zinc-900 to-purple-900/30">
              <div className="absolute h-40 w-40 rounded-full bg-orange-500/20 blur-3xl" />

              <Code2
                size={75}
                className="relative text-orange-300 transition duration-500 group-hover:scale-110"
              />

              <span className="absolute right-5 top-5 rounded-full border border-orange-400/20 bg-orange-500/10 px-3 py-1 text-xs text-orange-300">
                Complaint Management
              </span>
            </div>

            <div className="p-7">
              <h3 className="text-2xl font-bold text-white">
                Complaint & Issue Tracking System
              </h3>

              <p className="mt-3 text-sm leading-7 text-zinc-400">
                A MERN-based role-oriented complaint management
                application featuring JWT authentication, REST APIs,
                priority-based issue handling, and separate
                User and Admin access.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {["React.js", "Node.js", "Express.js", "MongoDB", "JWT"].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-1.5 text-xs text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-7 border-t border-zinc-800 pt-5">
                <a
                  href="https://github.com/YOUR_USERNAME/Complaint-Tracking-System"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-orange-400 transition hover:text-white"
                >
                  Source Code
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </motion.div>


          {/* E-Commerce Website */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/50 transition duration-300 hover:-translate-y-2 hover:border-purple-500/40"
          >
            {/* Project Visual */}
            <div className="relative flex h-52 items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-900/40 via-zinc-900 to-purple-900/30">
              <div className="absolute h-40 w-40 rounded-full bg-emerald-500/20 blur-3xl" />

              <Code2
                size={75}
                className="relative text-emerald-300 transition duration-500 group-hover:scale-110"
              />

              <span className="absolute right-5 top-5 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">
                	E-Commerce
              </span>
            </div>

            {/* Project Details */}
            <div className="p-7">
              <h3 className="text-2xl font-bold text-white">
                E-Commerce Website
              </h3>

              <p className="mt-3 text-sm leading-7 text-zinc-400">
                Developed a full-stack e-commerce web application using
                the MERN stack, featuring product management and shopping
                functionalities. Implemented a responsive frontend and
                backend APIs while gaining hands-on experience in
                full-stack web development.
              </p>

              {/* Technologies */}
              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  "React.js",
                  "Node.js",
                  "Express.js",
                  "MongoDB",
                  "REST APIs",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-1.5 text-xs text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="mt-7 border-t border-zinc-800 pt-5">
                <a
                  href="https://github.com/YOUR_USERNAME/YOUR_ECOMMERCE_REPO"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-emerald-400 transition hover:text-white"
                >
                  Source Code
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </section>


      {/* Contact Section */}
      <section
        id="contact"
        className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-12"
      >
        {/* Section Heading */}
        <div className="mb-16">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-purple-400">
            Get In Touch
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Let's Connect<span className="text-purple-500">.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
            I'm always open to discussing new opportunities, exciting projects,
            and collaborations. Feel free to reach out!
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid gap-8 lg:grid-cols-2">

          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-8">

            <div>
              <h3 className="text-2xl font-semibold">
                Have a project in mind?
              </h3>

              <p className="mt-4 max-w-lg leading-8 text-zinc-400">
                Whether you're a recruiter looking for a developer,
                or someone with an exciting idea, I'd love to hear from you.
                Let's build something meaningful together.
              </p>
            </div>

            {/* Email */}
            <a
              href="mailto:mathiramji6002@gmail.com"
              className="group flex w-fit items-center gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 transition hover:border-purple-500/50"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                <Mail size={24} />
              </div>

              <div>
                <p className="text-sm text-zinc-500">
                  Email Me
                </p>

                <p className="mt-1 font-medium text-white">
                  mathiramji6002@gmail.com
                </p>
              </div>

              <ArrowUpRight
                size={20}
                className="ml-4 text-zinc-500 transition group-hover:text-purple-400"
              />
            </a>

            {/* Social Links */}
            <div>
              <p className="mb-4 text-sm text-zinc-500">
                Find me on
              </p>

              <div className="flex gap-4">

                <a
                  href="https://github.com/Mathiramji1234"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-zinc-800 px-5 py-3 text-sm text-zinc-300 transition hover:border-purple-500 hover:text-white"
                >
                  GitHub ↗
                </a>

                <a
                  href="https://linkedin.com/in/mathi-ramji-k-86713531b"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-zinc-800 px-5 py-3 text-sm text-zinc-300 transition hover:border-purple-500 hover:text-white"
                >
                  LinkedIn ↗
                </a>

              </div>
            </div>

          </div>

          {/* Right Contact Card */}
          <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8 sm:p-12">

            {/* Background Glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-purple-600/20 blur-[100px]" />

            <div className="relative">

              {/* Availability */}
              <div className="mb-10 inline-flex items-center gap-3 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-2">

                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />

                <span className="text-sm text-emerald-400">
                  Open to Opportunities
                </span>

              </div>

              <h3 className="text-3xl font-bold leading-tight sm:text-4xl">
                Let's turn your
                <br />

                <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                  ideas into reality.
                </span>
              </h3>

              <p className="mt-6 leading-8 text-zinc-400">
                I'm interested in software development opportunities,
                full-stack projects, and innovative AI applications.
              </p>

              {/* CTA */}
              <a
                href="mailto:mathiramji6002@gmail.com?subject=Portfolio%20Contact"
                className="mt-10 flex w-fit items-center gap-3 rounded-full bg-purple-600 px-7 py-4 font-medium text-white transition hover:bg-purple-500"
              >
                Send Me an Email

                <ArrowUpRight size={20} />
              </a>

            </div>

          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-zinc-800 px-6 py-8 lg:px-12">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">

          <a href="#home" className="text-lg font-bold tracking-tight">
            MRK<span className="text-purple-500">.</span>
          </a>

          <p className="text-center text-sm text-zinc-500">
            © {new Date().getFullYear()} Mathi Ramji K. All rights reserved.
          </p>

          <a
            href="#home"
            className="text-sm text-zinc-400 transition hover:text-purple-400"
          >
            Back to Top ↑
          </a>

        </div>

      </footer>

    </main>
  );
}

export default App;
