"use client";
import { motion } from 'framer-motion';
import { useState } from "react";
import { useEffect, useRef } from 'react'
import Image from "next/image";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGithub,
  FaReact,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiPostgresql,
  SiVercel,
  SiVite,
} from "react-icons/si";


const skills = [
  {
    name: "HTML",
    icon: <FaHtml5 size={28} className="text-orange-500" />,
    url: "https://developer.mozilla.org/docs/Web/HTML",
  },
  {
    name: "CSS",
    icon: <FaCss3Alt size={28} className="text-blue-500" />,
    url: "https://developer.mozilla.org/docs/Web/CSS",
  },
  {
    name: "JavaScript",
    icon: <FaJs size={28} className="text-yellow-300" />,
    url: "https://developer.mozilla.org/docs/Web/JavaScript",
  },
  {
    name: "Git",
    icon: <FaGitAlt size={28} className="text-red-500" />,
    url: "https://git-scm.com/doc",
  },
  {
    name: "GitHub",
    icon: <FaGithub size={28} className="text-white" />,
    url: "https://docs.github.com/",
  },
  {
    name: "React",
    icon: <FaReact size={28} className="text-cyan-400" />,
    url: "https://react.dev/learn",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs size={28} className="text-white" />,
    url: "https://nextjs.org/docs",
  },
  {
    name: "Vite",
    icon: <SiVite size={28} className="text-purple-400" />,
    url: "https://vitejs.dev/guide/",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs size={28} className="text-green-500" />,
    url: "https://nodejs.org/en/docs",
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql size={28} className="text-blue-400" />,
    url: "https://www.postgresql.org/docs/",
  },
  {
    name: "Neon DB",
    icon: <FaDatabase size={28} className="text-fuchsia-400" />,
    url: "https://neon.tech/docs/introduction",
  },
  {
    name: "Vercel",
    icon: <SiVercel size={28} className="text-white" />,
    url: "https://vercel.com/docs",
  },
];

export default function Home() {
    const [flipped, setFlipped] = useState(false);
  const handleClick = () => {
    setFlipped((prev) => !prev);
  };

 const containerRef = useRef<HTMLDivElement>(null);
useEffect(() => {
  const container = containerRef.current;
  if (!container) return;

  let rafId: number;

  const scrollStep = () => {
    if (!container) return;

    container.scrollLeft += 0.5; 

    if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
      container.scrollLeft = 0;
    }

    rafId = requestAnimationFrame(scrollStep);
  };

  rafId = requestAnimationFrame(scrollStep);

  return () => cancelAnimationFrame(rafId);
}, []);


 

  return (
    <main className="relative overflow-hidden min-h-screen bg-gradient-to-b from-gray-900 to-black text-white px-3 ">

      <motion.section
        className="max-w-5xl mx-auto space-y-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >

      {/* React Background Watermark */}
      <div className="absolute inset-0 z-30 blur-sm flex items-center justify-center opacity-10 pointer-events-none ">
        <FaReact className="text-cyan-300 w-[500px] h-[500px] sm:w-[600px] sm:h-[600px]" />
      </div>
    
<section className="max-w-5xl mx-auto text-center mt-30 px-4 ">
     <motion.div
          className="bg-gray-900 p-6 rounded-xl shadow-md border border-gray-800"
          whileHover={{ scale: 1.02 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.3 }}
        >
  <div className="relative bg-gray-900/80 hover:bg-gray-800/90 transition-all duration-300 ease-in-out rounded-2xl p-6 sm:p-8 shadow-lg transform hover:-rotate-x-1 hover:rotate-y-1 hover:scale-[1.02] perspective-1000">
    <Image
      src="/frontend.jpg"
      alt="Developer Avatar"
      width={150}
      height={150}
      className="rounded-full mx-auto mb-4 border-4 border-white object-cover w-[150px] h-[150px] shadow-md"
    />
    <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-white">
      Привет, я Мурод Frontend Developer 👋
    </h1>
    <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
      Увлекаюсь созданием современных, адаптивных и быстрых интерфейсов с использованием React, Next.js, Tailwind, TypeScript и других актуальных технологий.
    </p>
    <p className="text-sm sm:text-base text-gray-400 mt-4 max-w-xl mx-auto">
      Прошел обучение в IT-школе <a href="https://www.instagram.com/wepro.uz/" className="text-blue-400 font-semibold">WePro</a>. Умею работать с REST API, базами данных, делать SSR и развёртывать проекты на Vercel.
      Ищу команду разработчиков, чтобы вместе строить полезные продукты, обмениваться опытом и расти в профессии.
    </p>
  </div>
  </motion.div>

</section>

      {/* Skills */}
         <motion.div
          className="bg-gray-900 p-6 rounded-xl shadow-md border border-gray-800"
          whileHover={{ scale: 1.02 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.3 }}
        >
      <section className="max-w-5xl mx-auto ">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-center">Навыки</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
          {skills.map((skill) => (
            <a
              key={skill.name}
              href={skill.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-700 transition p-4 rounded-xl shadow-lg flex flex-col items-center justify-center space-y-2"
              title={`Открыть документацию ${skill.name}`}
            >
              {skill.icon}
              <span className="text-sm font-medium">{skill.name}</span>
            </a>
          ))}
        </div>
      </section>
   </motion.div>

     <motion.div
          className="bg-gray-900 p-6 rounded-xl shadow-md border border-gray-800"
          whileHover={{ scale: 1.02 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.3 }}
        >
    <section className="max-w-5xl mx-auto  px-4 space-y-4">

              <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-center">Средняя зарплата фронтенд разработчика</h2>

  {/* Junior */}
  <div className="relative h-20 rounded-2xl overflow-hidden bg-black">
    <div className="absolute top-0 left-0 h-full w-[60%]">
      <div className="h-full w-full bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400 relative">
        <svg
          className="absolute right-0 top-0 h-full w-[40px]"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path d="M0,100 Q50,0 100,100 Z" fill="#60a5fa" /> {/* blue-400 */}
        </svg>
      </div>
    </div>
    <div className="relative z-10 h-full flex flex-col justify-center px-6 text-white font-bold">
      <p className="text-lg">Заработок от 10,750,000 сум</p>
      <span className="text-sm text-gray-300 font-normal">Junior</span>
    </div>
  </div>

  {/* Middle */}
  <div className="relative h-20 rounded-2xl overflow-hidden bg-black">
    <div className="absolute top-0 left-0 h-full w-[70%]">
      <div className="h-full w-full bg-gradient-to-r from-purple-600 via-pink-500 to-pink-400 relative">
        <svg
          className="absolute right-0 top-0 h-full w-[40px]"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path d="M0,100 Q50,0 100,100 Z" fill="#f9a8d4" /> {/* pink-400 */}
        </svg>
      </div>
    </div>
    <div className="relative z-10 h-full flex flex-col justify-center px-6 text-white font-bold">
      <p className="text-lg">Заработок от 18,950,000 сум</p>
      <span className="text-sm text-gray-300 font-normal">Middle</span>
    </div>
  </div>

  {/* Senior */}
  <div className="relative h-20 rounded-2xl overflow-hidden bg-black">
    <div className="absolute top-0 left-0 h-full w-[85%]">
      <div className="h-full w-full bg-gradient-to-r from-orange-800 via-orange-500 to-yellow-400 relative">
        <svg
          className="absolute right-0 top-0 h-full w-[40px]"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path d="M0,100 Q50,0 100,100 Z" fill="#facc15" /> {/* yellow-400 */}
        </svg>
      </div>
    </div>
    <div className="relative z-10 h-full flex flex-col justify-center px-6 text-white font-bold">
      <p className="text-lg">Заработок от 35,500,000 сум</p>
      <span className="text-sm text-gray-300 font-normal">Senior</span>
    </div>
  </div>
</section>
</motion.div>

  

 <section className="max-w-5xl mx-auto mt-16 px-4 mb-20">
      <div
        className="group relative w-full h-60 sm:h-64 perspective-1000 cursor-pointer"
        onClick={handleClick}
      >
        <div
          className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d rounded-2xl shadow-xl ${
            flipped ? "rotate-y-180" : ""
          } group-hover:rotate-y-180`}
        >

          
          {/* Front side */}
          <div className="absolute inset-0 bg-gray-800/90 rounded-2xl flex flex-col items-center justify-center text-white backface-hidden">
            <div className="text-4xl mb-2">📞</div>
                        <p className="text-lg sm:text-xl text-gray-300">Контакты</p>
                        <p className="text-lg sm:text-xl text-gray-300">Ищу команду для совместной работы</p>

            <p className="text-lg sm:text-xl text-gray-300">Наведи или нажми на меня</p>

          </div>

          {/* Back side */}
          <div className="absolute inset-0 bg-gray-900/90 rounded-2xl text-white px-6 py-4 transform rotate-y-180 backface-hidden flex flex-col justify-center items-center space-y-2">
            <h3 className="text-xl font-semibold">Связаться со мной</h3>
            <p className="text-gray-300">📧 muro21601@gmail.com</p>
            <div className="flex gap-4 mt-2">
              <a
                href="https://github.com/murodjon-afk"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition"
              >
                GitHub
              </a>
              <a
                href="https://t.me/muro_tojik"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
              >
                Telegram
              </a>
            </div>

            <a href="https://www.instagram.com/murod_coder007/">Instagramm</a>
          </div>
        </div>
      </div>
    </section>


</motion.section>
     
    </main>
  );
}


