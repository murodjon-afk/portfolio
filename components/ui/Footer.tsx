'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Github, Instagram, Mail, Send, ArrowUpRight, Globe, Cpu } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-20 bg-black border-t border-white/5 pt-16 pb-8 overflow-hidden">
      {/* ВЕРХНЯЯ НЕОНОВАЯ ЛИНИЯ */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 mb-16">
          
          {/* БЛОК 1: БРЕНДИНГ */}
          <div className="md:col-span-5 space-y-6">
            <Link href="/" className="group flex items-center gap-3">
              <div className="relative w-10 h-10 bg-white rounded-xl overflow-hidden group-hover:bg-cyan-500 transition-all duration-500 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                <Image 
                  src="/logo.png" 
                  alt="SUGDSCRIPT Logo" 
                  fill 
                  sizes="40px"
                  className="object-cover p-1.5 opacity-90 group-hover:scale-110 transition-transform duration-500" 
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-2xl font-black italic uppercase tracking-tighter text-white group-hover:text-cyan-500">
                  SUGD<span className="text-cyan-500 transition-colors group-hover:text-white">DEV</span>
                </span>
                <span className="text-[7px] font-mono uppercase tracking-[0.4em] text-white/20 group-hover:text-cyan-500 transition-colors">
                  Samarkand_Digital_Unit
                </span>
              </div>
            </Link>
            
            <p className="text-slate-500 text-xs sm:text-sm max-w-sm leading-relaxed font-light uppercase tracking-tight">
              Инженерная экосистема из Самарканда. Разработка высокопроизводительных интерфейсов с духом древнего Согда и технологиями будущего.
            </p>

            {/* СОЦИАЛКИ */}
            <div className="flex gap-3">
              {[
                { icon: <Github size={18} />, href: "https://github.com/murodjon-afk", label: "GitHub" },
                { icon: <Send size={18} />, href: "https://t.me/muro_tojik", label: "Telegram" },
                { icon: <Instagram size={18} />, href: "#", label: "Instagram" },
                { icon: <Mail size={18} />, href: "mailto:contact@sugdscript.com", label: "Email" },
              ].map((social, i) => (
                <Link 
                  key={i} 
                  href={social.href} 
                  target="_blank"
                  className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-cyan-500 hover:text-black hover:border-cyan-500 transition-all duration-300 group text-white"
                  aria-label={social.label}
                >
                  <div className="group-hover:scale-110 transition-transform">
                    {social.icon}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* БЛОК 2: НАВИГАЦИЯ (ПРОТОКОЛЫ) */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="text-[10px] font-mono uppercase tracking-[0.4em] text-cyan-500 flex items-center gap-2">
              <Cpu size={12} /> Протоколы
            </h4>
            <ul className="grid grid-cols-2 md:grid-cols-1 gap-4">
              {[
                { name: "Главная", href: "/" },
                { name: "Опыт", href: "/experience" },
                { name: "Услуги", href: "/services" },
                { name: "Обучение", href: "/education" },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-[11px] sm:text-xs uppercase tracking-widest text-slate-400 hover:text-white flex items-center gap-2 group transition-colors"
                  >
                    <div className="w-1.5 h-[1px] bg-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* БЛОК 3: КОНТАКТНАЯ КАРТОЧКА */}
          <div className="md:col-span-4 space-y-4">
            <div className="relative p-6 rounded-[2rem] bg-white/[0.02] border border-white/5 backdrop-blur-2xl overflow-hidden group">
              {/* Декор фона карточки */}
              <div className="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
                <Globe size={120} className="animate-spin-slow" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4 text-cyan-500 font-mono text-[8px] uppercase tracking-widest">
                   <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse" /> Локация: Самарканд
                </div>
                <h5 className="text-lg font-black italic uppercase leading-tight mb-2 text-white">Инициировать <br/> новый проект</h5>
                <p className="text-[9px] text-slate-500 uppercase tracking-widest mb-6">Связь через защищенный канал</p>
                
                <Link 
                  href="https://t.me/muro_tojik" 
                  target="_blank"
                  className="flex items-center justify-between group/btn py-3 border-b border-white/10 text-[10px] font-black uppercase italic tracking-[0.2em] hover:text-cyan-400 transition-all text-white"
                >
                  ОТКРЫТЬ ТЕРМИНАЛ <ArrowUpRight size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* НИЖНЯЯ ТЕХНИЧЕСКАЯ ПАНЕЛЬ */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-[7px] sm:text-[8px] font-mono uppercase tracking-[0.3em] text-white/20">
            <span>© {currentYear} SUGDSCRIPT</span>
            <span className="hidden sm:inline opacity-30">|</span>
            <span className="text-cyan-500/40">Status: Active</span>
            <span className="hidden sm:inline opacity-30">|</span>
            <span>Region: UZ_SAM</span>
          </div>
          
          <div className="text-[7px] font-mono text-white/10 uppercase tracking-widest text-center sm:text-right">
            Encoded by <span className="text-white/40 hover:text-cyan-500 transition-colors cursor-default">Murodjon Afk</span>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
      `}</style>
    </footer>
  );
}