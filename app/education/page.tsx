// app/experience/page.tsx
'use client';

import { motion } from 'framer-motion';
import { Terminal, Zap, Satellite, GraduationCap, Code2, Award } from 'lucide-react';

// ... (оставляем массив experiences без изменений)
const experiences = [
  {
    period: "2024 — Настоящее время",
    role: "Middle Frontend Engineer",
    company: "Freelance / Global Projects",
    desc: "Проектирование и разработка масштабируемых веб-приложений. Внедрение 3D-графики и сложных анимаций для зарубежных стартапов.",
    stack: ["Next.js 15", "TypeScript", "Three.js", "Tailwind"],
  },
  {
    period: "2023 — 2024",
    role: "Frontend Developer",
    company: "Local Web Agency",
    desc: "Создание адаптивных интерфейсов и интеграция с государственными и частными API. Оптимизация производительности сайтов на 40%.",
    stack: ["React", "Redux Toolkit", "REST API", "Framer Motion"],
  }
];

export default function ExperiencePage() {
  return (
    <main className="relative min-h-screen bg-[#000] text-white overflow-x-hidden pb-10 selection:bg-cyan-500 selection:text-black">
      
      {/* ИНТЕРАКТИВНЫЙ ФОН С РОБОТОМ */}
      <div className="fixed inset-0 z-0">
        {/* Робот теперь принимает события мыши */}
        <iframe 
          src="https://my.spline.design/nexbotbyaximoriscopycopy-HnBDu16Tp5vIgr9lxxZtsjPF/" 
          frameBorder="0" 
          width="100%" 
          height="100%"
          className="w-full h-full opacity-40 sm:opacity-60 grayscale hover:grayscale-0 transition-all duration-1000 pointer-events-auto"
          style={{ background: 'transparent' }}
        />
        
        {/* Виньетка (затемнение по краям), которая НЕ блокирует мышь (pointer-events-none) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_90%)] pointer-events-none opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black pointer-events-none" />
      </div>

      <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-32 pointer-events-none">
        {/* ВАЖНО: Добавляем pointer-events-auto только контенту, чтобы сквозь пустые места работала мышь для робота */}
        
        <div className="pointer-events-auto">
            {/* HEADER */}
            <div className="mb-16 sm:mb-24">
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-lg border border-cyan-500/20 bg-cyan-500/5 text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.4em] mb-6 text-cyan-400"
              >
                <Satellite size={12} className="animate-pulse" /> Системный_Лог_v2.6
              </motion.div>
              <h1 className="text-5xl sm:text-7xl md:text-9xl font-black italic uppercase tracking-tighter leading-[0.85]">
                Путь <br /> <span className="text-transparent [-webkit-text-stroke:1px_white] opacity-40">Инженера</span>
              </h1>
            </div>

            {/* БЛОК ОБРАЗОВАНИЯ (WEPRO) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative mb-12 p-6 sm:p-10 rounded-[2rem] border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-md overflow-hidden group shadow-[0_0_50px_-15px_rgba(6,182,212,0.3)] hover:border-cyan-500 transition-colors"
            >
              <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center">
                <div className="p-4 bg-cyan-500 rounded-2xl text-black shadow-[0_0_20px_cyan]">
                  <GraduationCap size={32} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-cyan-400 font-mono text-[10px] uppercase tracking-widest">Образовательный Протокол</span>
                    <div className="h-[1px] flex-1 bg-cyan-500/20" />
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-black uppercase italic text-white mb-2">Wepro IT-School</h2>
                  <p className="text-slate-300 text-sm sm:text-base max-w-2xl font-light leading-relaxed">
                    Интенсивное погружение в Full-stack разработку. Сертифицированный специалист по направлению <span className="text-cyan-400 font-bold">Frontend Engineering</span>.
                  </p>
                </div>
              </div>
              <Award size={150} className="absolute -right-10 -bottom-10 text-white/[0.03] group-hover:text-cyan-500/[0.08] transition-all duration-700" />
            </motion.div>

            {/* EXPERIENCE LIST */}
            <div className="space-y-4 sm:space-y-6">
              {experiences.map((exp, i) => (
                <motion.div
                  key={i}
                  className="group relative p-6 sm:p-12 rounded-[2rem] bg-black/40 border border-white/5 backdrop-blur-sm hover:bg-black/60 hover:border-white/20 transition-all duration-500"
                >
                  <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 text-left">
                    <div className="lg:col-span-4 text-left">
                      <span className="text-cyan-500 font-mono text-[10px] tracking-widest block mb-2">{exp.period}</span>
                      <h2 className="text-2xl sm:text-3xl font-black uppercase italic leading-none group-hover:text-cyan-400 transition-colors">
                        {exp.role}
                      </h2>
                    </div>
                    <div className="lg:col-span-5">
                      <p className="text-slate-400 font-light text-sm sm:text-base leading-relaxed italic">
                        {exp.desc}
                      </p>
                    </div>
                    <div className="lg:col-span-3 flex flex-wrap gap-1.5 content-start">
                      {exp.stack.map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[8px] sm:text-[9px] font-mono text-white/60">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA SECTION */}
            <div className="mt-20 sm:mt-32 pb-10">
              <motion.div className="p-8 sm:p-16 rounded-[2.5rem] bg-white/5 border border-cyan-500/20 backdrop-blur-xl text-center">
                <Code2 size={40} className="mx-auto mb-6 text-cyan-500" />
                <h3 className="text-3xl sm:text-5xl font-black uppercase italic mb-6">Готов к Синхронизации</h3>
                <a 
                  href="https://t.me/muro_tojik" 
                  className="inline-flex items-center gap-4 px-10 py-5 bg-white text-black font-black uppercase text-[10px] tracking-[0.4em] hover:bg-cyan-500 transition-all active:scale-95"
                >
                  СВЯЗАТЬСЯ <Zap size={14} fill="black" />
                </a>
              </motion.div>
            </div>
        </div>
      </section>

   
    </main>
  );
}

