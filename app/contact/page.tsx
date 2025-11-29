"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { useLanguage } from "@/contexts/language-context"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const contactInfo = [
  {
    icon: MapPin,
    titleEn: "Address",
    titleAr: "العنوان",
    valueEn: "Jeddah, Saudi Arabia",
    valueAr: "جدة، المملكة العربية السعودية",
  },
  {
    icon: Phone,
    titleEn: "Phone",
    titleAr: "الهاتف",
    valueEn: "+966 12 XXX XXXX",
    valueAr: "+966 12 XXX XXXX",
  },
  {
    icon: Mail,
    titleEn: "Email",
    titleAr: "البريد الإلكتروني",
    valueEn: "info@waadeducation.com",
    valueAr: "info@waadeducation.com",
  },
  {
    icon: Clock,
    titleEn: "Working Hours",
    titleAr: "ساعات العمل",
    valueEn: "Sun - Thu: 7:30 AM - 4:00 PM",
    valueAr: "الأحد - الخميس: 7:30 ص - 4:00 م",
  },
]

const inquiryTypes = [
  { valueEn: "general", valueAr: "general", labelEn: "General Inquiry", labelAr: "استفسار عام" },
  { valueEn: "admissions", valueAr: "admissions", labelEn: "Admissions", labelAr: "القبول والتسجيل" },
  { valueEn: "partnerships", valueAr: "partnerships", labelEn: "Partnerships", labelAr: "الشراكات" },
  { valueEn: "careers", valueAr: "careers", labelEn: "Careers", labelAr: "الوظائف" },
  { valueEn: "facilities", valueAr: "facilities", labelEn: "Facilities", labelAr: "المرافق" },
]

export default function ContactPage() {
  const { t, isRTL } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "general",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <main className="min-h-screen">
      <Header />

      <PageHeader
        titleEn="Contact Us"
        titleAr="تواصل معنا"
        breadcrumbEn={["Home", "Contact"]}
        breadcrumbAr={["الرئيسية", "تواصل معنا"]}
      />

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-2xl text-center hover:bg-[#486266] group transition-colors duration-300"
              >
                <div className="w-14 h-14 bg-[#486266] group-hover:bg-white rounded-xl flex items-center justify-center mx-auto mb-4 transition-colors">
                  <info.icon className="w-7 h-7 text-white group-hover:text-[#486266] transition-colors" />
                </div>
                <h3 className="font-bold text-gray-900 group-hover:text-white mb-2 transition-colors">
                  {t(info.titleEn, info.titleAr)}
                </h3>
                <p className="text-gray-600 group-hover:text-white/80 text-sm transition-colors">
                  {t(info.valueEn, info.valueAr)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className={isRTL ? "lg:order-2" : ""}>
              <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{t("Send us a Message", "أرسل لنا رسالة")}</h2>
                <p className="text-gray-600 mb-8">
                  {t("Fill out the form and we'll get back to you shortly.", "املأ النموذج وسنرد عليك قريباً.")}
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t("Full Name", "الاسم الكامل")} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full h-12 px-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#486266] focus:border-transparent"
                      placeholder={t("Enter your name", "أدخل اسمك")}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t("Email", "البريد الإلكتروني")} *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full h-12 px-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#486266] focus:border-transparent"
                        placeholder={t("your@email.com", "your@email.com")}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">{t("Phone", "الهاتف")}</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full h-12 px-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#486266] focus:border-transparent"
                        placeholder="+966"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t("Inquiry Type", "نوع الاستفسار")}
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full h-12 px-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#486266] focus:border-transparent"
                    >
                      {inquiryTypes.map((type) => (
                        <option key={type.valueEn} value={type.valueEn}>
                          {t(type.labelEn, type.labelAr)}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t("Message", "الرسالة")} *</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#486266] focus:border-transparent resize-none"
                      placeholder={t("How can we help you?", "كيف يمكننا مساعدتك؟")}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-12 bg-[#486266] hover:bg-[#3a5154] text-white text-base font-semibold"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    {t("Send Message", "إرسال الرسالة")}
                  </Button>
                </form>
              </div>
            </div>

            {/* Map */}
            <div className={isRTL ? "lg:order-1" : ""}>
              <div className="h-full min-h-[400px] bg-gray-200 rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3710.8388983999245!2d39.19279731540478!3d21.52851718573855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDMxJzQyLjciTiAzOcKwMTEnNDMuNyJF!5e0!3m2!1sen!2ssa!4v1635000000000!5m2!1sen!2ssa"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "500px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
