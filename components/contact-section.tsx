"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const contactInfo = {
  en: [
    {
      icon: Phone,
      title: "Call Us",
      details: ["+966 12 234 5678", "+966 50 123 4567"],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@waadeducation.sa", "admissions@waadeducation.sa"],
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Jeddah, Saudi Arabia", "King Fahd Road"],
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Sunday - Thursday", "7:30 AM - 4:00 PM"],
    },
  ],
  ar: [
    {
      icon: Phone,
      title: "اتصل بنا",
      details: ["+966 12 234 5678", "+966 50 123 4567"],
    },
    {
      icon: Mail,
      title: "راسلنا",
      details: ["info@waadeducation.sa", "admissions@waadeducation.sa"],
    },
    {
      icon: MapPin,
      title: "زورنا",
      details: ["جدة، المملكة العربية السعودية", "طريق الملك فهد"],
    },
    {
      icon: Clock,
      title: "ساعات العمل",
      details: ["الأحد - الخميس", "7:30 صباحاً - 4:00 مساءً"],
    },
  ],
}

const inquiryTypes = {
  en: [
    { value: "", label: "Select inquiry type" },
    { value: "general", label: "General Inquiry" },
    { value: "admissions", label: "Admissions" },
    { value: "partnerships", label: "Partnerships" },
    { value: "careers", label: "Careers" },
    { value: "facilities", label: "Facilities Rental" },
  ],
  ar: [
    { value: "", label: "اختر نوع الاستفسار" },
    { value: "general", label: "استفسار عام" },
    { value: "admissions", label: "القبول والتسجيل" },
    { value: "partnerships", label: "الشراكات" },
    { value: "careers", label: "الوظائف" },
    { value: "facilities", label: "تأجير المرافق" },
  ],
}

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const { language, t } = useLanguage()
  const currentContactInfo = contactInfo[language]
  const currentInquiryTypes = inquiryTypes[language]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            {t("Get in Touch", "تواصل معنا")}
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">{t("Contact Us", "اتصل بنا")}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t(
              "Have questions? We're here to help. Reach out to us through any of the channels below.",
              "لديك أسئلة؟ نحن هنا للمساعدة. تواصل معنا عبر أي من القنوات أدناه.",
            )}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {currentContactInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-secondary/50 rounded-2xl hover:bg-secondary transition-colors"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    {item.details.map((detail, i) => (
                      <p key={i} className="text-muted-foreground text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="mt-6 rounded-2xl overflow-hidden h-48 bg-secondary relative">
              <img
                src="/map-jeddah-saudi-arabia.jpg"
                alt={t("Location Map", "خريطة الموقع")}
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Button variant="secondary" className="rounded-lg shadow-lg">
                  <MapPin className="w-4 h-4 mr-2" />
                  {t("Open in Maps", "فتح في الخرائط")}
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 bg-card p-8 lg:p-10 rounded-3xl shadow-lg border border-border">
            <h3 className="text-2xl font-bold text-card-foreground mb-2">{t("Send us a Message", "أرسل لنا رسالة")}</h3>
            <p className="text-muted-foreground mb-8">
              {t(
                "Fill out the form below and we'll get back to you within 24 hours.",
                "املأ النموذج أدناه وسنرد عليك خلال 24 ساعة.",
              )}
            </p>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-2">{t("Message Sent!", "تم إرسال الرسالة!")}</h4>
                <p className="text-muted-foreground">{t("We'll get back to you shortly.", "سنرد عليك قريباً.")}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t("Full Name", "الاسم الكامل")} *
                    </label>
                    <Input placeholder={t("Enter your name", "أدخل اسمك")} className="rounded-xl h-12" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t("Phone Number", "رقم الهاتف")} *
                    </label>
                    <Input placeholder="+966 5X XXX XXXX" className="rounded-xl h-12" required />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t("Email Address", "البريد الإلكتروني")} *
                  </label>
                  <Input
                    type="email"
                    placeholder={t("your@email.com", "بريدك@email.com")}
                    className="rounded-xl h-12"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t("Inquiry Type", "نوع الاستفسار")} *
                  </label>
                  <select
                    className="w-full h-12 rounded-xl border border-input bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    required
                  >
                    {currentInquiryTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t("Your Message", "رسالتك")} *
                  </label>
                  <Textarea
                    placeholder={t("How can we help you?", "كيف يمكننا مساعدتك؟")}
                    className="rounded-xl min-h-32 resize-none"
                    required
                  />
                </div>
                <Button size="lg" className="w-full rounded-xl h-14 text-base gap-2">
                  <Send className="w-5 h-5" />
                  {t("Send Message", "إرسال الرسالة")}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
