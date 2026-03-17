import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const metricCards = [
  {
    title: "Paid Media",
    value: "+148%",
    detail: "ROAS growth",
    className: "top-8 -left-4 md:left-0",
  },
  {
    title: "SEO",
    value: "42",
    detail: "top 3 keywords",
    className: "top-1/2 -right-3 -translate-y-1/2 md:right-2",
  },
  {
    title: "Launch Time",
    value: "7 days",
    detail: "brief to live",
    className: "bottom-8 left-8 md:left-14",
  },
];

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-black pt-32 pb-20 lg:pt-40 lg:pb-28"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-15" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(228,167,46,0.12),transparent_32%),radial-gradient(circle_at_80%_30%,rgba(167,34,65,0.22),transparent_28%),linear-gradient(180deg,rgba(0,0,0,0.05),rgba(0,0,0,0.72))]" />

      <motion.div
        className="absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-500/15 blur-3xl"
        animate={{
          x: mousePosition.x * 8,
          y: mousePosition.y * 7,
          scale: [1, 1.08, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[8%] top-1/3 h-80 w-80 rounded-full bg-red-700/15 blur-3xl"
        animate={{
          x: mousePosition.x * -9,
          y: mousePosition.y * -8,
          scale: [1.05, 0.95, 1.05],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div className="relative z-10 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.45 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-500/20 bg-white/5 px-4 py-2 text-sm font-medium text-brand-300 backdrop-blur-md"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="h-4 w-4" />
            </motion.div>
            <span>Growth for modern brands</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl font-bold leading-[0.96] tracking-tight text-white md:text-7xl lg:text-[5.5rem]"
          >
            We build
            <span className="block text-gradient text-gradient-animated">brands that grow</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-7 max-w-2xl text-lg leading-8 text-gray-300 md:text-xl"
          >
            Performance marketing, SEO, websites, and creative systems designed to help businesses in Roorkee, Uttarakhand and beyond scale faster.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-4 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-brand-200"
          >
            Serving Roorkee, Dehradun & Uttarakhand
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-10 grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-3"
          >
            {[
              ["12+", "active channels"],
              ["4.9/5", "client rating"],
              ["24/7", "live tracking"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-sm">
                <div className="text-2xl font-bold text-white">{value}</div>
                <div className="mt-1 text-sm text-gray-400">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto flex w-full max-w-[560px] items-center justify-center"
          style={{ perspective: 1600 }}
        >
          <motion.div
            className="relative h-[520px] w-full [transform-style:preserve-3d]"
            animate={{
              rotateX: -6 - mousePosition.y * 1.6,
              rotateY: mousePosition.x * 2.5,
            }}
            transition={{ type: "spring", stiffness: 30, damping: 22, mass: 1.2 }}
          >
            <motion.div
              className="absolute inset-x-12 bottom-10 h-16 rounded-full bg-brand-500/20 blur-2xl"
              animate={{ scaleX: [0.95, 1.08, 0.95] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              style={{ transform: "translateZ(-80px)" }}
            />

            <motion.div
              className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
              style={{ transform: "translateZ(-30px)" }}
            />

            <motion.div
              className="absolute left-1/2 top-1/2 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-500/15"
              animate={{ rotate: [360, 0] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              style={{ transform: "translateZ(-40px)" }}
            />

            <div
              className="absolute left-1/2 top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-[3rem] border border-white/8 bg-[linear-gradient(145deg,rgba(255,255,255,0.05),rgba(255,255,255,0.01))] opacity-60 backdrop-blur-sm"
              style={{ transform: "translateZ(-20px)" }}
            />

            <div
              className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-[2.5rem] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),rgba(255,255,255,0.01)_45%,transparent_70%)]"
              style={{ transform: "translateZ(-10px)" }}
            />

            <div
              className="absolute left-1/2 top-1/2 h-[470px] w-[470px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[conic-gradient(from_180deg,rgba(228,167,46,0.12),rgba(167,34,65,0.18),rgba(255,255,255,0.04),rgba(228,167,46,0.12))] blur-3xl opacity-70"
              style={{ transform: "translateZ(-90px)" }}
            />

            <div
              className="absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-[2.75rem] border border-white/6 bg-[linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:28px_28px] opacity-40"
              style={{ transform: "translateZ(-15px)" }}
            />

            <motion.div
              className="absolute left-1/2 top-8 h-[430px] w-[430px] -translate-x-1/2"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              style={{ transform: "translateZ(10px)" }}
            >
              <div className="absolute left-1/2 top-1/2 flex h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 items-center justify-center">
                <motion.img
                  src="/logo.svg"
                  alt="Alphabera Global"
                  className="h-[228px] w-[228px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.45)]"
                  animate={{ rotate: [0, 1.5, 0, -1.5, 0] }}
                  transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </motion.div>

            {metricCards.map((card, index) => (
              <motion.div
                key={card.title}
                className={`absolute z-20 w-48 rounded-3xl border border-white/10 bg-black/55 p-4 shadow-[0_20px_45px_rgba(0,0,0,0.32)] backdrop-blur-xl ${card.className}`}
                animate={{
                  y: [0, index % 2 === 0 ? -12 : 10, 0],
                  rotateZ: [0, index % 2 === 0 ? -2 : 2, 0],
                }}
                transition={{
                  duration: 8 + index * 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  transform: `translateZ(${90 + index * 25}px)`,
                }}
              >
                <div className="text-[11px] uppercase tracking-[0.28em] text-gray-400">{card.title}</div>
                <div className="mt-3 text-3xl font-bold text-white">{card.value}</div>
                <div className="mt-1 text-sm text-brand-300">{card.detail}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <p className="text-sm text-gray-500">Scroll to explore</p>
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/20 p-2">
          <motion.div
            className="h-2 w-1 rounded-full bg-brand-500"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
