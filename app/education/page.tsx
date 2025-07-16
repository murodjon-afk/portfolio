// app/education/page.tsx
'use client';

import { motion } from 'framer-motion';

export default function EducationPage() {
  return (
    <main className="relative overflow-hidden min-h-screen bg-gradient-to-b from-gray-900 to-black text-white px-3 py-20">
      <motion.section
        className="max-w-5xl mx-auto space-y-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold text-center mb-12">Образование</h1>

        {/* Wepro IT-school */}
        <motion.div
          className="bg-gray-900 p-6 rounded-xl shadow-md border border-gray-800"
          whileHover={{ scale: 1.02 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold">🎓 Wepro IT-school</h2>
          <p className="text-sm text-gray-400">2024 — 2025 • Курсы в Самарканде</p>
          <p className="mt-4 text-gray-300">
            Практическое обучение современным технологиям веб-разработки. Изучены: HTML, CSS, JavaScript, React, Next.js,
            базы данных (PostgreSQL), Node.js, работа с API и основы Prisma.{' '}
            <a
              href="https://www.instagram.com/wepro.uz/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-400 hover:text-blue-300 transition duration-200"
            >
              WEPRO
            </a>
          </p>
        </motion.div>

        {/* Самообразование */}
        <motion.div
          className="bg-gray-900 p-6 rounded-xl shadow-md border border-gray-800"
          whileHover={{ scale: 1.02 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold">📚 Самообразование и видеоуроки</h2>
          <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
            <li>Изучение HTML, CSS, JavaScript через обучающие видео на YouTube</li>
            <li>React и Next.js по официальной документации и практическим гайдам</li>
            <li>TailwindCSS, Firebase, Prisma — через видеоуроки и примеры проектов</li>
            <li>Создание собственных pet-проектов для закрепления навыков</li>
          </ul>
        </motion.div>

        {/* Сертификаты */}
        <motion.div
          className="bg-gray-900 p-6 rounded-xl shadow-md border border-gray-800"
          whileHover={{ scale: 1.02 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold">🏆 Сертификаты</h2>
          <p className="mt-4 text-gray-300">
            Получены сертификаты от{' '}
            <a
              href="https://www.instagram.com/wepro.uz/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-400 hover:text-blue-300 transition duration-200"
            >
              WEPRO
            </a>{' '}
            по темам frontend-разработки, React.js и баз данных.
          </p>
          <p className="mt-4 text-gray-300">Получено 4 сертификата по сфере IT</p>
        </motion.div>
      </motion.section>
    </main>
  );
}
