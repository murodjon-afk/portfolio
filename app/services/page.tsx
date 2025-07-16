// app/services/page.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    title: "🎯 Разработка сайта",
    desc: "Разрабатываю лендинги и многостраничные сайты с использованием React / Next.js.",
  },
  {
    title: "📱 Адаптивная верстка",
    desc: "Кроссбраузерная и адаптивная вёрстка по современным стандартам. Поддержка всех устройств.",
  },
  {
    title: "🎨 Верстка по макетам",
    desc: "Пиксель-перфект верстка по макету из Figma, Adobe XD, Sketch и других инструментов.",
  },
  {
    title: "🔗 Интеграция с API",
    desc: "Интеграция REST API: получение, отображение, фильтрация данных (товары, пользователи, заказы и др).",
  },
  {
    title: "⚙️ Базовая SEO-оптимизация",
    desc: "Настройка title, description, favicon, Open Graph и index/noindex для Google и других систем.",
  },
  {
    title: "🔧 Поддержка и доработка",
    desc: "Внесение изменений в существующие проекты, устранение багов, улучшения по запросу клиента.",
  },
];

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-gray-900 to-black text-white px-4 py-20">
      <section className="max-w-6xl mx-auto space-y-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-14">
          Услуги
        </h1>

        <div className="grid gap-8 md:grid-cols-2">
          {services.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-gray-900 p-6 rounded-2xl border border-gray-800 shadow-lg flex flex-col justify-between"
            >
              <div>
                <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
                <p className="text-gray-300">{item.desc}</p>
              </div>
              <div className="mt-6">
                <Link
                  href="https://t.me/muro_tojik"
                  target="_blank"
                  className="inline-block w-fit px-5 py-2 rounded-xl bg-white text-gray-900 font-medium hover:bg-gray-200 transition"
                >
                  Подробнее →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center pt-16">
          <Link
            href="/education"
            className="inline-block px-6 py-3 rounded-xl bg-white text-gray-900 font-semibold hover:bg-gray-200 transition"
          >
            Моё образование →
          </Link>
        </div>
      </section>
    </main>
  );
}
