'use client'
import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { href: '/novosti-kolledzha', label: 'Новости колледжа' },
    { href: '/o-kolledzhe', label: 'О колледже' },
    { href: '/specialnosti-kolledzha', label: 'Специальности колледжа' },
    { href: '/trudoustroystvo-i-karera', label: 'Трудоустройство и карьера' },
    { href: '/vizitka-kolledzha', label: 'Визитка колледжа' },
    { href: '/korporativnoe-upravlenie', label: 'Корпоративное управление' },
    { href: '/obrazovatelnaya-deyatelnost', label: 'Образовательная деятельность' },
    { href: '/proizvodstvennaya-deyatelnost', label: 'Производственная деятельность' },
    { href: '/vospitatelnaya-deyatelnost', label: 'Воспитательная деятельность' },
    { href: '/innovatsionnaya-deyatelnost', label: 'Инновационная деятельность' },
    { href: '/metodicheskaya-deyatelnost', label: 'Методическая деятельность' },
    { href: '/partnery-i-sotrudnichestvo', label: 'Партнеры и сотрудничество' },
    { href: '/psikhologicheskaya-sluzhba', label: 'Психологическая служба' },
    { href: '/abituriientu', label: 'Абитуриенту' },
    { href: '/press-tsentr', label: 'Пресс-центр' },
    { href: '/blog-direktora', label: 'Блог директора' },
    { href: '/kontakty', label: 'Контакты' }
  ]

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-blue-700 text-white relative">
      <a href="/" className="text-lg font-semibold">Главная</a>

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div className={`absolute right-6 top-16 bg-white text-black rounded-md shadow-md w-64 p-4 space-y-2 transition-all duration-300 z-10 ${menuOpen ? 'block' : 'hidden'}`}>
        {links.map(({ href, label }) => (
          <a key={href} href={href} className="block hover:text-blue-600">{label}</a>
        ))}
      </div>
    </nav>
  )
}
