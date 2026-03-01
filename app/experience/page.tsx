'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { useEffect, useState } from 'react';
import { Github, Cpu, Zap, Box, Globe, MousePointer2, Layout, ExternalLink } from 'lucide-react';

const vercelProjects = [
  {
    title: "Coke Concept",
    url: "https://coke-mu.vercel.app/",
    image: "/coke.jpg",
    glow: "shadow-[0_0_40px_-10px_rgba(239,68,68,0.3)]",
    color: "text-red-500",
    tech: "React / 3D / GSAP"
  },
  {
    title: "Lotus Boutique",
    url: "https://lotus-botique.vercel.app/",
    image: "/lotus.jpg",
    glow: "shadow-[0_0_40px_-10px_rgba(16,185,129,0.3)]",
    color: "text-emerald-400",
    tech: "Next.js / E-com / TW"
  },
  {
    title: "Demo Games",
    url: "https://demogames-seven.vercel.app/",
    image: "/games.jpg",
    glow: "shadow-[0_0_40px_-10px_rgba(168,85,247,0.3)]",
    color: "text-purple-400",
    tech: "Game UI / Интерфейсы"
  },
  {
    title: "Demo SQQ",
    url: "https://demo-sqq.vercel.app/",
    image: "/sqq.jpg",
    glow: "shadow-[0_0_40px_-10px_rgba(249,115,22,0.3)]",
    color: "text-orange-400",
    tech: "Панель / API"
  }
];

interface Repo {
  id: number;
  name: string;
  html_url: string;
}

export default function ExperiencePage() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.github.com/users/murodjon-afk/repos?sort=updated')
      .then((res) => res.json())
      .then((data: Repo[]) => {
        setRepos(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <main className="relative min-h-screen bg-[#000] text-white overflow-hidden pb-10 selection:bg-cyan-500 selection:text-black font-sans">
      
      {/* ФОН С РОБОТОМ (адаптивная прозрачность) */}
      <div className="fixed inset-0 z-0 opacity-20 sm:opacity-40 blur-[1px]">
        <iframe 
          src="https://my.spline.design/nexbotbyaximoriscopycopy-HnBDu16Tp5vIgr9lxxZtsjPF/" 
          frameBorder="0" width="100%" height="100%"
          className="w-full h-full pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-24">
        
        {/* ЗАГОЛОВОК (адаптация под 375px) */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 sm:mb-24 gap-6">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <div className="flex items-center gap-2 mb-3 text-cyan-500 font-mono text-[9px] sm:text-[10px] tracking-[0.3em] uppercase mt-5">
              <Cpu size={12} className="animate-pulse" /> СТАТУС: АКТИВЕН
            </div>
            <h1 className="text-4xl sm:text-7xl md:text-9xl font-black italic uppercase tracking-tighter leading-[0.9]">
              ЦЕХ <br /> <span className="text-transparent [-webkit-text-stroke:1px_white] opacity-30">ПРОЕКТОВ</span>
            </h1>
          </motion.div>
          
          <div className="mt-8 md:mt-0 w-full md:w-auto relative z-50"> 
  {/* Добавил z-50 родителю, чтобы кнопка не проваливалась */}
  <Sheet>
    <SheetTrigger asChild>
      <button className="w-full md:w-auto flex items-center justify-center gap-3 px-6 py-4 bg-white/5 border border-white/10 backdrop-blur-xl rounded-xl hover:bg-cyan-500 hover:text-black transition-all group font-black uppercase italic text-[10px] tracking-widest active:scale-95">
        <Github size={18} /> КОДОВАЯ БАЗА
      </button>
    </SheetTrigger>
    
    {/* Добавил z-[100], чтобы панель была ПОВЕРХ хеадера */}
    <SheetContent 
      side="right" 
      className="bg-black/95 border-l border-white/10 text-white w-[85vw] sm:w-[450px] backdrop-blur-2xl p-0 z-[100]"
    >
      <SheetHeader className="p-6 border-b border-white/10">
        <SheetTitle className="text-white text-xl font-black italic uppercase tracking-tight text-left">
          АРХИВ REPOS
        </SheetTitle>
      </SheetHeader>
      
      <div className="p-4 overflow-y-auto h-[75vh] space-y-3 custom-scroll">
        {loading ? (
          <div className="text-cyan-500 animate-pulse p-4 font-mono text-[10px]">
            ЗАГРУЗКА ПРОТОКОЛОВ...
          </div>
        ) : (
          repos.map(repo => (
            <Link 
              key={repo.id} 
              href={repo.html_url} 
              target="_blank" 
              className="block p-4 bg-white/5 rounded-lg border border-white/5 hover:border-cyan-500/50 transition-all group"
            >
              <h4 className="font-bold italic uppercase text-xs group-hover:text-cyan-400">
                {repo.name}
              </h4>
              <div className="text-[8px] opacity-20 mt-1 font-mono uppercase">
                GitHub Repository
              </div>
            </Link>
          ))
        )}
      </div>
      
      {/* Кнопка закрытия для удобства на мобилках */}
      <SheetClose asChild>
        <button className="absolute bottom-6 left-4 right-4 py-4 border border-white/10 bg-white/5 rounded-xl font-mono text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-all">
          Закрыть Терминал
        </button>
      </SheetClose>
    </SheetContent>
  </Sheet>
</div>
        </div>

        {/* СЕТКА ПРОЕКТОВ (оптимизирована под Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mb-20 relative">
          {vercelProjects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`group relative rounded-[1.5rem] sm:rounded-[2rem] ${project.glow} transition-all duration-500`}
            >
              <Link href={project.url} target="_blank">
                <div className="relative overflow-hidden bg-white/5 border border-white/10 backdrop-blur-2xl p-1.5 rounded-[1.5rem] sm:rounded-[2rem] shadow-2xl transition-all duration-500">
                  
                  {/* ПРЕВЬЮ (уменьшенная высота для мобилок) */}
                  <div className="h-48 sm:h-80 w-full overflow-hidden relative rounded-[1.2rem] sm:rounded-[1.5rem] bg-black">
                  <div className="h-48 sm:h-80 w-full overflow-hidden relative rounded-[1.2rem] sm:rounded-[1.5rem] bg-black">
  <Image 
    src={project.image} 
    alt={project.title}
    fill // Чтобы изображение заполнило родительский контейнер
    sizes="(max-width: 375px) 100vw, (max-width: 1200px) 50vw, 33vw" // Оптимизация под разные экраны
    className="object-cover opacity-80 group-hover:scale-105 transition-all duration-700"
    priority={i < 2} // Загружаем первые два проекта быстрее (LCP)
  />
  
  {/* Градиент поверх для глубины */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 pointer-events-none" />
  
  <div className={`absolute bottom-4 left-4 flex items-center gap-1.5 font-mono text-[8px] uppercase tracking-widest ${project.color} bg-black/60 px-2 py-1 rounded-md border border-white/5`}>
    <Globe size={10} /> LIVE
  </div>
</div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                    
                    <div className={`absolute bottom-4 left-4 flex items-center gap-1.5 font-mono text-[8px] uppercase tracking-widest ${project.color} bg-black/60 px-2 py-1 rounded-md border border-white/5`}>
                        <Globe size={10} /> LIVE
                    </div>
                  </div>

                  {/* ИНФО (уменьшенные шрифты) */}
                  <div className="p-5 sm:p-8">
                    <h3 className="text-2xl sm:text-5xl font-black italic uppercase tracking-tighter text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-[9px] sm:text-xs font-mono text-white/40 uppercase tracking-[0.2em] flex items-center gap-2">
                       <Layout size={10} /> {project.tech}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* НИЖНИЙ БЛОК (Bento-адаптация) */}
        <div className="flex flex-col gap-4 font-mono uppercase">
           <div className="p-6 rounded-[1.5rem] bg-cyan-500 text-black flex flex-row items-center justify-between group overflow-hidden relative">
              <div className="relative z-10 font-black italic uppercase leading-none text-xl">
                СТАТУС:<br />ГОТОВ К РАБОТЕ
              </div>
              <Zap fill="black" size={24} className="relative z-10" />
           </div>
           
           <div className="p-6 rounded-[1.5rem] bg-white/[0.03] border border-white/10 backdrop-blur-2xl flex flex-col gap-4">
              <div>
                <h4 className="text-[8px] text-cyan-500 tracking-[0.3em] mb-2 uppercase">АРХИВ_ОБУЧЕНИЯ</h4>
                <p className="text-lg font-black uppercase italic leading-tight text-white/90">Выпускник <br /> Wepro IT-School</p>
              </div>
              <div className="flex items-center justify-between border-t border-white/5 pt-4">
                 <span className="text-[9px] opacity-40">ГОД: 2025</span>
                 <span className="text-[9px] text-cyan-500 font-bold border border-cyan-500/30 px-2 py-0.5 rounded">СЕРТИФИЦИРОВАН</span>
              </div>
           </div>
        </div>

      </section>

  

      <style jsx global>{`
        .custom-scroll::-webkit-scrollbar { width: 2px; }
        .custom-scroll::-webkit-scrollbar-thumb { background: #06b6d4; }
        @media (max-width: 375px) {
          h1 { font-size: 2.25rem !important; }
        }
      `}</style>
    </main>
  );
}