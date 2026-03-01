"use client";
import Image from 'next/image';
import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetClose } from "@/components/ui/sheet";
import { Menu, X, Cpu, Layout, GraduationCap, Briefcase } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  return (
    <header className="w-full fixed top-0 z-[100] border-b border-white/5 bg-black/20 backdrop-blur-xl transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center h-20">
        
        {/* LOGO */}
      <Link href="/" className="group flex items-center gap-3">
  {/* КОНТЕЙНЕР ЛОГОТИПА */}
  <div className="relative w-9 h-9 bg-white overflow-hidden rounded-xl group-hover:bg-cyan-500 transition-all duration-500 shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]">
    <Image 
      src="/logo.png" 
      alt="SUGDSCRIPT Logo"
      fill 
      sizes="36px" // Так как размер фиксирован 9x9 (36px), это лучше для оптимизации
      className="object-cover opacity-90 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700"
      priority // Логотип должен грузиться первым
    />
  </div>

  {/* ТЕКСТ БРЕНДА */}
  <div className="flex flex-col leading-none">
    <span className="text-white font-black text-xl tracking-tighter uppercase italic">
      SUGD<span className="text-cyan-400 group-hover:text-white transition-colors">DEV</span>
    </span>
    <span className="text-[6px] font-mono uppercase tracking-[0.4em] text-white/30 group-hover:text-cyan-500 transition-colors">
      Samarkand_Digital
    </span>
  </div>
</Link>
        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink href="/services" label="Услуги" icon={<Layout size={14} />} />
          <NavLink href="/education" label="Образование" icon={<GraduationCap size={14} />} />
          <NavLink href="/experience" label="Опыт" icon={<Briefcase size={14} />} />
          
          <Link href="https://t.me/muro_tojik" target="_blank" className="ml-4 px-5 py-2 bg-white text-black text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-cyan-500 hover:text-white transition-all">
            Connect
          </Link>
        </nav>

        {/* MOBILE MENU TRIGGER */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button className="p-2 text-white/70 hover:text-white transition-colors">
                <Menu className="w-8 h-8" />
              </button>
            </SheetTrigger>
            
            <SheetContent side="right" className="w-full sm:w-80 bg-black/95 border-l border-white/10 text-white p-0 backdrop-blur-2xl">
              <div className="flex flex-col h-full p-8">
                <SheetHeader className="text-left mb-12">
                  <SheetTitle className="text-white text-2xl font-black italic uppercase tracking-tighter">
                    System <span className="text-cyan-500 font-light">Menu</span>
                  </SheetTitle>
                </SheetHeader>

                <nav className="flex flex-col gap-4">
                  <MobileNavLink href="/" onClick={handleClose} label="Главная" />
                  <MobileNavLink href="/services" onClick={handleClose} label="Услуги" />
                  <MobileNavLink href="/education" onClick={handleClose} label="Образование" />
                  <MobileNavLink href="/experience" onClick={handleClose} label="Опыт" />
                </nav>

                <div className="mt-auto pt-10 border-t border-white/10">
                   <p className="text-[10px] font-mono text-white/30 uppercase tracking-[0.3em] mb-4 text-center">Protocol_v2.0_Active</p>
                   <SheetClose asChild>
                    <button className="w-full py-4 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center gap-2 hover:bg-white/10 transition-all uppercase text-[10px] font-bold tracking-widest">
                       <X size={14} /> Закрыть терминал
                    </button>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

// Вспомогательный компонент для десктопных ссылок
function NavLink({ href, label, icon }: { href: string; label: string; icon: any }) {
  return (
    <Link href={href} className="group relative flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors">
      <span className="text-cyan-500 opacity-0 group-hover:opacity-100 transition-all transform -translate-x-2 group-hover:translate-x-0">
        {icon}
      </span>
      {label}
      <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyan-500 transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );
}

// Вспомогательный компонент для мобильных ссылок
function MobileNavLink({ href, label, onClick }: { href: string; label: string; onClick: () => void }) {
  return (
    <Link 
      href={href} 
      onClick={onClick} 
      className="group w-full p-5 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-between hover:bg-white/10 hover:border-cyan-500/50 transition-all"
    >
      <span className="text-lg font-black italic uppercase tracking-tighter text-white/70 group-hover:text-white transition-colors">
        {label}
      </span>
      <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-cyan-500 transition-colors">
        <div className="w-1.5 h-1.5 bg-white group-hover:bg-cyan-500 rounded-full transition-colors" />
      </div>
    </Link>
  );
}