import { motion } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  Code2,
  Globe2,
  Sparkles,
  WifiOff,
} from "lucide-react";

export default function DemoUnavailable({ project, onBack }) {
  return (
    <main className="min-h-screen bg-slate-950 text-white relative overflow-hidden flex items-center justify-center px-5 py-12 sm:px-8">
      {/* Background glow */}
      <div className="absolute -top-40 -left-40 w-80 h-80 sm:w-[28rem] sm:h-[28rem] rounded-full bg-blue-600/20 blur-[110px]" />

      <div className="absolute -bottom-40 -right-40 w-80 h-80 sm:w-[30rem] sm:h-[30rem] rounded-full bg-cyan-500/15 blur-[120px]" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <motion.section
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.55 }}
        className="relative w-full max-w-3xl"
      >
        <div className="rounded-[2rem] border border-slate-800 bg-slate-900/75 backdrop-blur-2xl shadow-2xl overflow-hidden">
          {/* Top line */}
          <div className="h-1.5 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500" />

          <div className="p-7 sm:p-10 md:p-14 text-center">
            {/* Status */}
            <div className="flex items-center justify-between text-xs sm:text-sm text-slate-500 mb-10">
              <span className="font-mono tracking-wider">LIVE_DEMO</span>

              <span className="font-mono">STATUS / UNAVAILABLE</span>
            </div>

            {/* Icon */}
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                delay: 0.15,
                duration: 0.45,
              }}
              className="mx-auto w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-blue-500/10 border border-blue-400/20 flex items-center justify-center relative"
            >
              <div className="absolute inset-0 rounded-3xl bg-blue-500/10 blur-xl" />

              <WifiOff
                className="relative text-cyan-400"
                size={42}
                strokeWidth={1.7}
              />
            </motion.div>

            {/* Label */}
            <p className="mt-8 text-cyan-400 font-semibold uppercase tracking-[0.28em] text-xs sm:text-sm">
              Demo Belum Tersedia
            </p>

            {/* Heading */}
            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
              Live demo sedang <span className="text-blue-400">offline</span>
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-2xl mx-auto text-slate-400 leading-7 sm:leading-8 text-sm sm:text-base">
              Tautan demo untuk project ini belum tersedia. Project tetap dapat
              dipelajari melalui repository dan dokumentasi yang tersedia.
            </p>

            {/* Project information */}
            <div className="mt-8 mx-auto max-w-xl rounded-2xl border border-slate-800 bg-slate-950/70 p-5 text-left">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-11 h-11 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
                  <Globe2 size={21} />
                </div>

                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-widest text-slate-500">
                    Project
                  </p>

                  <h2 className="mt-1 font-bold text-lg truncate">
                    {project.title}
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    {project.subtitle}
                  </p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
              {/* Back */}
              <button
                type="button"
                onClick={onBack}
                className="px-6 py-3.5 rounded-xl border border-slate-700 hover:border-blue-500 hover:bg-slate-800 transition flex items-center justify-center gap-2 font-semibold"
              >
                <ArrowLeft size={18} />
                Kembali ke Portfolio
              </button>

              {/* Repository */}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 transition flex items-center justify-center gap-2 font-semibold shadow-lg shadow-blue-600/20"
                >
                  <Code2 size={18} />
                  Lihat Repository
                  <ExternalLink size={16} />
                </a>
              )}
            </div>

            {/* Footer note */}
            <div className="mt-10 pt-6 border-t border-slate-800 flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-600">
              <Sparkles size={15} />

              <span>Deployment link akan tersedia setelah project online.</span>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
