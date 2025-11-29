"use client"

import { useState, useEffect } from "react"
import { Menu, X, ChevronDown, Globe } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"
import Link from "next/link"
import { FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa"

const navigation = {
  en: [
    { name: "Home", href: "/" },
    {
      name: "About",
      href: "/about",
      children: [
        { name: "Head Management", href: "/about/management" },
        { name: "Awards & Achievements", href: "/about/awards" },
        { name: "CSR / Charity Initiatives", href: "/about/csr" },
      ],
    },
    {
      name: "Schools",
      href: "/schools",
      children: [
        { name: "Waad Academy", href: "/schools/waad-academy" },
        { name: "Dar Al-Thikr", href: "/schools/dar-althikr" },
        { name: "Bloom Schools", href: "/schools/bloom" },
      ],
    },
    { name: "Learning Framework", href: "/learning-framework" },
    { name: "Careers", href: "/careers" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
  ],
  ar: [
    { name: "الرئيسية", href: "/" },
    {
      name: "من نحن",
      href: "/about",
      children: [
        { name: "الإدارة العليا", href: "/about/management" },
        { name: "الجوائز والإنجازات", href: "/about/awards" },
        { name: "المسؤولية الاجتماعية", href: "/about/csr" },
      ],
    },
    {
      name: "المدارس",
      href: "/schools",
      children: [
        { name: "أكاديمية وعد", href: "/schools/waad-academy" },
        { name: "دار الذكر", href: "/schools/dar-althikr" },
        { name: "مدارس بلوم", href: "/schools/bloom" },
      ],
    },
    { name: "إطار التعلم", href: "/learning-framework" },
    { name: "الوظائف", href: "/careers" },
    { name: "المدونة", href: "/blog" },
    { name: "تواصل معنا", href: "/contact" },
  ],
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const { language, setLanguage, t, isRTL } = useLanguage()

  const navItems = navigation[language]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en")
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#486266]/98 shadow-2xl shadow-black/20 backdrop-blur-xl py-2" : "bg-[#486266] py-3"
      }`}
    >
      <div className="hidden lg:block border-b border-white/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between py-2 text-xs text-white/70">
            <div className="flex items-center gap-6">
              <span>info@waadeducation.com</span>
              <span>+966 12 XXX XXXX</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-white transition-colors p-1.5 hover:bg-white/10 rounded-full">
                <FaLinkedinIn className="w-4 h-4" />
              </a>
              <a href="#" className="hover:text-white transition-colors p-1.5 hover:bg-white/10 rounded-full">
                <FaTwitter className="w-4 h-4" />
              </a>
              <a href="#" className="hover:text-white transition-colors p-1.5 hover:bg-white/10 rounded-full">
                <FaInstagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center group">
            <Image
              src="/waad-logo.png"
              alt="Waad Education"
              width={180}
              height={50}
              className="h-12 lg:h-14 w-auto brightness-0 invert transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-4 py-2.5 text-sm font-medium text-white/90 hover:text-white transition-all duration-300 rounded-lg group"
                >
                  {item.name}
                  {item.children && (
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === item.name ? "rotate-180" : ""}`}
                    />
                  )}
                </Link>

                {item.children && activeDropdown === item.name && (
                  <div className={`absolute top-full pt-2 w-60 ${isRTL ? "right-0" : "left-0"}`}>
                    <div className="bg-white rounded-xl shadow-2xl shadow-black/15 border border-gray-100 overflow-hidden animate-scale-in">
                      <div className="py-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="flex items-center px-5 py-3 text-sm text-gray-700 hover:bg-[#486266] hover:text-white transition-all duration-200 group"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#486266] opacity-0 group-hover:opacity-100 transition-opacity mr-3" />
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-all duration-300 rounded-lg border border-white/20 hover:border-white/40"
            >
              <Globe className="w-4 h-4" />
              <span>{language === "en" ? "العربية" : "EN"}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/10 animate-fade-in">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="block px-4 py-3 text-white font-medium hover:bg-white/5 rounded-lg transition-colors"
                    onClick={() => !item.children && setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.children && (
                    <div className={isRTL ? "pr-6" : "pl-6"}>
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-white/60 hover:text-white transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="flex items-center gap-3 px-4 pt-4 mt-4 border-t border-white/10">
                <button
                  onClick={toggleLanguage}
                  className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-white border border-white/20 rounded-lg"
                >
                  <Globe className="w-4 h-4" />
                  <span>{language === "en" ? "العربية" : "EN"}</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
