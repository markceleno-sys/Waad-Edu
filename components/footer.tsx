"use client"

import { Twitter, Instagram, Linkedin, Youtube, Facebook, MapPin, Phone, Mail, ArrowRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const footerLinks = {
  en: {
    schools: [
      { name: "Waad Academy", href: "#" },
      { name: "Dar Al-Thikr Schools", href: "#" },
      { name: "Bloom Schools", href: "#" },
    ],
    about: [
      { name: "About Us", href: "#about" },
      { name: "Leadership", href: "#leadership" },
      { name: "Vision & Mission", href: "#vision" },
      { name: "Awards & Recognition", href: "#awards" },
      { name: "CSR Initiatives", href: "#csr" },
    ],
    resources: [
      { name: "Learning Framework", href: "#framework" },
      { name: "News & Events", href: "#news" },
      { name: "Blog", href: "#blog" },
      { name: "Careers", href: "#careers" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
    ],
  },
  ar: {
    schools: [
      { name: "أكاديمية وعد", href: "#" },
      { name: "مدارس دار الذكر", href: "#" },
      { name: "مدارس بلوم", href: "#" },
    ],
    about: [
      { name: "من نحن", href: "#about" },
      { name: "القيادة", href: "#leadership" },
      { name: "الرؤية والرسالة", href: "#vision" },
      { name: "الجوائز والتقدير", href: "#awards" },
      { name: "المسؤولية المجتمعية", href: "#csr" },
    ],
    resources: [
      { name: "إطار التعلم", href: "#framework" },
      { name: "الأخبار والفعاليات", href: "#news" },
      { name: "المدونة", href: "#blog" },
      { name: "الوظائف", href: "#careers" },
    ],
    legal: [
      { name: "سياسة الخصوصية", href: "#" },
      { name: "شروط الخدمة", href: "#" },
    ],
  },
}

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

export function Footer() {
  const { language, t, isRTL } = useLanguage()
  const links = footerLinks[language]

  return (
    <footer className="bg-[#3a5154] text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className={`${isRTL ? "text-right" : "text-left"}`}>
              <h3 className="text-2xl lg:text-3xl font-bold mb-2">{t("Stay Updated", "ابقَ على اطلاع")}</h3>
              <p className="text-white/60">
                {t(
                  "Subscribe to our newsletter for the latest news and updates.",
                  "اشترك في نشرتنا الإخبارية لآخر الأخبار والتحديثات.",
                )}
              </p>
            </div>
            <div className="flex w-full lg:w-auto gap-3">
              <input
                type="email"
                placeholder={t("Enter your email", "أدخل بريدك الإلكتروني")}
                className="flex-1 lg:w-80 px-5 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-white/30 transition-colors"
              />
              <Button className="rounded-xl px-6 h-[52px] bg-white hover:bg-gray-100 text-[#486266] font-semibold">
                <ArrowRight className={`w-5 h-5 ${isRTL ? "rotate-180" : ""}`} />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Image
                src="/waad-logo.png"
                alt="Waad Education"
                width={160}
                height={45}
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-white/60 mb-8 max-w-sm leading-relaxed">
              {t(
                "Shaping the future of education in Saudi Arabia. Building the leaders of tomorrow through innovative, values-driven education aligned with Vision 2030.",
                "نصنع مستقبل التعليم في المملكة العربية السعودية. نبني قادة الغد من خلال تعليم مبتكر قائم على القيم ومتوافق مع رؤية 2030.",
              )}
            </p>
            <div className="flex items-center gap-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-11 h-11 bg-white/5 rounded-xl flex items-center justify-center hover:bg-white hover:text-[#486266] transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Our Schools */}
          <div>
            <h3 className="font-bold text-lg mb-6">{t("Our Schools", "مدارسنا")}</h3>
            <ul className="space-y-4">
              {links.schools.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-white/60 hover:text-white transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-6">{t("About", "عن الشركة")}</h3>
            <ul className="space-y-4">
              {links.about.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-white/60 hover:text-white transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-lg mb-6">{t("Resources", "الموارد")}</h3>
            <ul className="space-y-4">
              {links.resources.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-white/60 hover:text-white transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-6">{t("Contact", "التواصل")}</h3>
            <ul className="space-y-5 text-white/60">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-0.5 shrink-0" />
                <span>+966 12 234 5678</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-0.5 shrink-0" />
                <span>info@waadeducation.sa</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 shrink-0" />
                <span>{t("Jeddah, Saudi Arabia", "جدة، المملكة العربية السعودية")}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()}{" "}
              {t("Waad Education Company. All rights reserved.", "شركة وعد للتعليم. جميع الحقوق محفوظة.")}
            </p>
            <div className="flex items-center gap-6">
              {links.legal.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-white/40 hover:text-white text-sm transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
