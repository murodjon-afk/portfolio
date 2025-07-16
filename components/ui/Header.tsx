"use client"

import Link from "next/link"
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle , SheetClose} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { useState } from "react";
export default function Header() {
     const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  return (
    <header className="w-full bg-gray-900 text-white shadow-md fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center h-16">
        <Link href="/" className="text-white text-lg font-medium hover:text-blue-400 transition duration-200 relative group">
          <span className="inline-block font-bold text-2xl">NextNest</span>
        </Link>

        <nav className="hidden md:flex gap-5">
          <Link href="/services" className="text-white text-lg font-medium hover:text-blue-400 transition duration-200 relative group">
            <span className="inline-block">Услуги</span>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/education" className="text-white text-lg font-medium hover:text-blue-400 transition duration-200 relative group">
            <span className="inline-block">Образование</span>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
              <Link href="/experience" className="text-white text-lg font-medium hover:text-blue-400 transition duration-200 relative group">
            <span className="inline-block">Опыт</span>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>
 <div className="md:hidden cursor-pointer">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger className="p-3">
          <Menu className="w-8 h-8 text-white" />
        </SheetTrigger>
       <SheetContent side="left" className="w-64 bg-gray-900 text-white px-2">
  <SheetHeader>
    <SheetTitle className="text-white text-xl">Меню</SheetTitle>
  </SheetHeader>
  <nav className="flex flex-col gap-1 mt-6  text-lg">
    <Link href="/" onClick={handleClose}  className="mt-2 w-full h-12 flex items-center justify-center rounded-xl font-medium bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 hover:brightness-110 transition cursor-pointer">
      Главная
    </Link>
    <Link href="/services" onClick={handleClose}  className="mt-2 w-full h-12 rounded-xl flex items-center justify-center  font-medium bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 hover:brightness-110 transition cursor-pointer">
      Услуги
    </Link>
    <Link href="/education" onClick={handleClose}  className="mt-2 w-full h-12 rounded-xl flex items-center justify-center  font-medium bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 hover:brightness-110 transition cursor-pointer">
      Образование
    </Link>
      <Link href="/experience" onClick={handleClose}  className="mt-2 w-full h-12 rounded-xl flex items-center justify-center  font-medium bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 hover:brightness-110 transition cursor-pointer">
      Опыт
    </Link>
  </nav>
   <SheetClose asChild>
    <button className="mt-6 w-full h-12 rounded-xl font-medium bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 hover:brightness-110 transition cursor-pointer">
      ✖ Закрыть
    </button>
  </SheetClose>
</SheetContent>

      </Sheet>
    </div>
      </div>
    </header>
  )
}
