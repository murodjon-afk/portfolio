"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Code2, 
  Smartphone, 
  Figma, 
  Share2, 
  Search, 
  Settings, 
  ArrowRight,
  ShieldCheck
} from "lucide-react";

const services = [
  {
    title: "Разработка сайта",
    desc: "Создание высокопроизводительных SPA и SSR приложений на Next.js 15. Фокус на скорость и SEO.",
    icon: <Code2 className="text-cyan-400" />,
    status: "Production Ready",
  },
  {
    title: "Адаптивная верстка",
    desc: "Интерфейсы, которые идеально выглядят на iPhone, Android и 4K мониторах. Mobile-first подход.",
    icon: <Smartphone className="text-blue-500" />,
    status: "High Priority",
  },
  {
    title: "Верстка по макетам",
    desc: "Идеальный перенос дизайна из Figma в код. Соблюдение всех отступов, шрифтов и анимаций.",
    icon: <Figma className="text-purple-500" />,
    status: "Pixel Perfect",
  },
  {
    title: "Интеграция API",
    desc: "Связка фронтенда с любым бэкендом. Работа с REST, GraphQL и real-time данными через WebSockets.",
    icon: <Share2 className="text-green-400" />,
    status: "Full Sync",
  },
  {
    title: "SEO-оптимизация",
    desc: "Техническая подготовка сайта к индексации. Настройка мета-тегов, SSR и семантической верстки.",
    icon: <Search className="text-yellow-400" />,
    status: "Indexed",
  },
  {
    title: "Поддержка",
    desc: "Масштабирование проектов, рефакторинг старого кода и оперативное исправление ошибок.",
    icon: <Settings className="text-slate-400" />,
    status: "Active Support",
  },
];

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen bg-[#000] text-white overflow-x-hidden selection:bg-cyan-500 selection:text-black">
      
      {/* РОБОТ НА ФОНЕ (Интерактивный) */}
      <div className="fixed inset-0 z-0">
        <iframe 
          src="https://my.spline.design/nexbotbyaximoriscopycopy-HnBDu16Tp5vIgr9lxxZtsjPF/" 
          frameBorder="0" width="100%" height="100%"
          className="w-full h-full opacity-30 sm:opacity-50 grayscale hover:grayscale-0 transition-all duration-1000 pointer-events-auto"
          style={{ background: 'transparent' }}
        />
        {/* Виньетка, которая не мешает мышке */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_90%)] pointer-events-none opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black pointer-events-none" />
      </div>

      {/* Секция контента с pointer-events-none для того, чтобы робот видел мышь в пустотах */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20 sm:py-32 pointer-events-none">
        
        {/* ЗАГОЛОВОК (возвращаем кликабельность через pointer-events-auto) */}
        <div className="text-center mb-16 sm:mb-24 space-y-4 pointer-events-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.3em] mb-4"
          >
            <ShieldCheck size={12} className="animate-pulse" /> Service_Protocols_Active
          </motion.div>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black italic uppercase tracking-tighter leading-none">
            Мои <span className="text-transparent [-webkit-text-stroke:1px_white] opacity-50">Услуги</span>
          </h1>
          <p className="text-slate-500 max-w-xl mx-auto font-light uppercase text-[9px] sm:text-xs tracking-[0.2em] leading-relaxed">
            Реализация сложных технических решений с упором на современную архитектуру и производительность
          </p>
        </div>

        {/* СЕТКА УСЛУГ (pointer-events-auto для взаимодействия с карточками) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 pointer-events-auto">
          {services.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-6 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] bg-black/40 border border-white/10 backdrop-blur-md hover:bg-black/60 hover:border-cyan-500/40 transition-all duration-500"
            >
              <div className="flex justify-between items-start mb-8 sm:mb-12">
                <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/5 text-2xl group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all duration-500">
                  {item.icon}
                </div>
                <span className="text-[7px] sm:text-[8px] font-mono uppercase tracking-widest opacity-30 group-hover:opacity-100 transition-opacity">
                  {item.status}
                </span>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <h2 className="text-xl sm:text-2xl font-black uppercase italic tracking-tight group-hover:text-cyan-400 transition-colors leading-none">
                  {item.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>

              <div className="mt-8 sm:mt-10 pt-6 border-t border-white/5">
                <Link
                  href="https://t.me/muro_tojik"
                  target="_blank"
                  className="inline-flex items-center gap-2 text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.2em] text-white/50 hover:text-cyan-400 transition-colors"
                >
                  Обсудить проект <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Свечение при наведении */}
              <div className="absolute -z-10 inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 blur-3xl transition-opacity rounded-[2.5rem]" />
            </motion.div>
          ))}
        </div>

        {/* НИЖНЯЯ КНОПКА (pointer-events-auto) */}
        <div className="text-center pt-20 sm:pt-24 pointer-events-auto">
          <Link href="/education" className="group relative inline-flex items-center gap-4 px-8 sm:px-12 py-4 sm:py-5 bg-white text-black font-black uppercase text-[10px] sm:text-xs tracking-[0.3em] overflow-hidden transition-all active:scale-95">
              <div className="absolute inset-0 bg-cyan-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative z-10 italic">Перейти к образованию</span>
              <ArrowRight size={16} className="relative z-10 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

      </section>

    

    </main>
  );
}