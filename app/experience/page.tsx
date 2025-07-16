'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { useEffect, useState } from 'react';

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
}

export default function EducationPage() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.github.com/users/murodjon-afk/repos')
      .then((res) => res.json())
      .then((data: Repo[]) => {
        setRepos(data);
        setLoading(false);
      });
  }, []);

  return (
    <main className="relative overflow-hidden min-h-screen bg-gradient-to-b from-gray-900 to-black text-white px-3 py-20">
      <motion.section
        className="max-w-5xl mx-auto space-y-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold text-center mb-12">Опыт в профессии</h1>

        {/* Блок с опытом и проектами */}
        <motion.div
          className="bg-gray-900 p-6 rounded-xl shadow-md border border-gray-800"
          whileHover={{ scale: 1.02 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold">🎓 Опыт</h2>
          <p className="text-sm text-gray-400">2024 — 2025</p>
          <p className="mt-4 text-gray-300">
            Уже два года в сфере IT. Имею портфолио и проекты на GitHub, Netlify и Vercel.
          </p>

          <h2 className="text-2xl font-semibold mt-8">🚀 Проекты</h2>
          <div className="mt-4 flex flex-col sm:flex-row justify-around gap-4">
            <Sheet>
              <SheetTrigger asChild>
                <button className="w-full sm:w-[300px] h-[50px] bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400 rounded cursor-pointer">
                  Мои проекты с GitHub 🚀
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[90vw] sm:w-[500px] bg-gray-900 text-white py-2 px-4 pb-5">
                <SheetHeader>
                  <SheetTitle className="text-2xl text-white font-bold">📁 Проекты GitHub</SheetTitle>
                </SheetHeader>

                <div className="mt-6 h-[80vh] overflow-y-auto space-y-4 pr-2 custom-scroll">
                  {loading ? (
                    <p className="text-sm text-gray-400">Загрузка...</p>
                  ) : (
                    repos.map((repo) => (
                      <Link
                        key={repo.id}
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <div className="p-4 rounded-xl bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400 text-white shadow-lg transition-transform hover:scale-[1.02] cursor-pointer">
                          <h3 className="text-lg font-semibold underline underline-offset-2">
                            {repo.name}
                          </h3>
                          {repo.description && (
                            <p className="text-sm mt-2 text-white/90">{repo.description}</p>
                          )}
                        </div>
                      </Link>
                    ))
                  )}
                </div>

                <SheetClose asChild>
                  <button className="mt-6 w-full h-12 rounded-xl font-medium bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 hover:brightness-110 transition cursor-pointer">
                    ✖ Закрыть
                  </button>
                </SheetClose>
              </SheetContent>
            </Sheet>

            <Link
              href={'https://luxique-fors.vercel.app/'}
              target="_blank"
              className="w-full sm:w-[300px] h-[50px] bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400 text-center rounded cursor-pointer flex items-center justify-center"
            >
              Мой проект с Vercel 🚀
            </Link>
          </div>
        </motion.div>
      </motion.section>
    </main>
  );
}
