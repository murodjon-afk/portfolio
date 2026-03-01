"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaTelegram, FaInstagram, FaCode, FaUserAstronaut, FaTerminal, FaGraduationCap } from 'react-icons/fa';
import { SiNextdotjs, SiReact, SiTailwindcss, SiTypescript, SiPostgresql, SiVercel } from 'react-icons/si';

export default function UltimateMurodPortfolio() {
  const [is3DLoaded, setIs3DLoaded] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#000] text-white font-sans overflow-x-hidden selection:bg-cyan-500/30">
      
      {/* 1. РОБОТ-ФОН (Интерактивный слой) */}
      <div className="fixed inset-0 z-0">
        <iframe 
          src="https://my.spline.design/nexbotbyaximoriscopycopy-HnBDu16Tp5vIgr9lxxZtsjPF/" 
          frameBorder="0" 
          width="100%" 
          height="100%"
          onLoad={() => setIs3DLoaded(true)}
          className={`w-full h-full transition-opacity duration-1000 ${is3DLoaded ? 'opacity-50' : 'opacity-0'}`}
          style={{ pointerEvents: 'auto' }}
        />
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />
      </div>

      {/* 2. ИНТЕРФЕЙС (Контентный слой) */}
      <main className="relative z-10 w-full pointer-events-none">
        
        {/* HEADER */}
        <nav className="flex justify-between items-center p-8 max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 border border-white/20 flex items-center justify-center font-black text-xl bg-black/40 backdrop-blur-xl">M</div>
            <div className="text-[10px] font-mono tracking-[0.4em] opacity-40 uppercase">Murod_Engineer_Core_v2</div>
          </div>
          <div className="pointer-events-auto hidden md:block">
            <div className="px-6 py-2 border border-white/10 bg-white/5 backdrop-blur-xl rounded-full text-[9px] font-mono uppercase tracking-[0.2em]">
               System_Status: <span className="text-cyan-400">Optimal</span>
            </div>
          </div>
        </nav>

        {/* HERO SECTION */}
        <section className="min-h-screen flex flex-col items-center justify-center px-6">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-7xl md:text-[13rem] font-black leading-none tracking-tighter uppercase italic">
              SUGDDEV<br />
              <span className="text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.2)]">STUDIO</span>
            </h1>
            <p className="mt-8 text-xs md:text-sm font-mono tracking-[0.5em] uppercase opacity-40">Frontend / Backend</p>
          </motion.div>
        </section>

        {/* КАРТОЧКИ С ИНФОРМАЦИЕЙ (Bento Grid) */}
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-6 pb-24">
          
          {/* ОБ ОБО МНЕ (System Core) */}
          <motion.div 
            whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }}
            className="md:col-span-8 p-10 bg-black/40 border border-white/10 backdrop-blur-2xl rounded-[3rem] pointer-events-auto"
          >
            <div className="flex items-center gap-3 mb-8 text-cyan-500">
              <FaUserAstronaut />
              <h3 className="text-xs font-mono uppercase tracking-[0.3em]">System_Core / About_Me</h3>
            </div>
            <h2 className="text-4xl font-black italic uppercase mb-6">Создаю цифровую реальность</h2>
            <p className="text-lg text-slate-400 leading-relaxed max-w-2xl font-light">
              Меня зовут Мурод, я Frontend-инженер из Узбекистана. Моя страсть — объединять <span className="text-white italic">чистый код</span> и <span className="text-white italic">современный дизайн</span>. Я не просто строю сайты, я проектирую интерактивные системы, которые запоминаются пользователю навсегда.
            </p>
          </motion.div>

          {/* НАВЫКИ (Hardware) */}
          <motion.div 
            whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }}
            className="md:col-span-4 p-10 bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[3rem] pointer-events-auto"
          >
            <h3 className="text-[10px] font-mono uppercase tracking-[0.3em] opacity-40 mb-10 text-center">Hardware_Stack</h3>
            <div className="grid grid-cols-3 gap-y-10">
               <SkillItem icon={<SiNextdotjs />} name="Next.js" />
               <SkillItem icon={<SiReact />} name="React" />
               <SkillItem icon={<SiTypescript />} name="TS" />
               <SkillItem icon={<SiTailwindcss />} name="Tailwind" />
               <SkillItem icon={<SiPostgresql />} name="SQL" />
               <SkillItem icon={<SiVercel />} name="Vercel" />
            </div>
          </motion.div>

          {/* ОПЫТ И ОБУЧЕНИЕ (Archive) */}
          <motion.div 
            whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }}
            className="md:col-span-12 p-10 bg-black/40 border border-white/10 backdrop-blur-2xl rounded-[3rem] pointer-events-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               <div>
                  <h3 className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-cyan-500 mb-8">
                    <FaTerminal /> Experience_History
                  </h3>
                  <div className="space-y-6">
                    <ExperienceItem year="2024 - Now" title="Middle Frontend Developer" company="Global Tech Solutions" />
                    <ExperienceItem year="2023" title="Junior Frontend" company="Web Studio Pulse" />
                  </div>
               </div>
               <div>
                  <h3 className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-cyan-500 mb-8">
                    <FaGraduationCap /> Education_Archive
                  </h3>
                  <div className="space-y-6">
                    <ExperienceItem year="2026" title="CS Degree" company="Technical University" />
                    <ExperienceItem year="2022" title="Frontend Intensive" company="Coding Academy" />
                  </div>
               </div>
            </div>
          </motion.div>

          {/* СОЦСЕТИ */}
          <div className="md:col-span-12 flex flex-wrap justify-center gap-6 pointer-events-auto">
             <SocialIcon icon={<FaGithub />} label="Github" href="https://github.com/murodjon-afk" />
             <SocialIcon icon={<FaTelegram />} label="Telegram" href="https://t.me/muro_tojik" />
             <SocialIcon icon={<FaInstagram />} label="Instagram" href="https://www.instagram.com/murod_coder007/" />
          </div>

        </div>
      </main>


      {/* ШУМОВОЙ ЭФФЕКТ */}
      <div className="pointer-events-none fixed inset-0 z-[100] opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
}

// Мини-компоненты для чистоты кода
function SkillItem({ icon, name }: { icon: any, name: string }) {
  return (
    <div className="flex flex-col items-center gap-2 group transition-all">
      <div className="text-3xl text-white/40 group-hover:text-cyan-400 group-hover:scale-110 transition-all">{icon}</div>
      <span className="text-[8px] font-mono uppercase opacity-30 group-hover:opacity-100">{name}</span>
    </div>
  );
}

function ExperienceItem({ year, title, company }: { year: string, title: string, company: string }) {
  return (
    <div className="border-l border-white/10 pl-6 py-2 hover:border-cyan-500 transition-colors">
      <p className="text-[10px] font-mono text-cyan-500 mb-1">{year}</p>
      <h4 className="text-xl font-bold uppercase italic">{title}</h4>
      <p className="text-sm text-slate-500">{company}</p>
    </div>
  );
}

function SocialIcon({ icon, label, href }: { icon: any, label: string, href: string }) {
  return (
    <a href={href} target="_blank" className="flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white hover:text-black transition-all group">
      <span className="text-xl">{icon}</span>
      <span className="text-xs font-black uppercase tracking-widest">{label}</span>
    </a>
  );
}