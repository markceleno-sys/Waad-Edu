"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft, Calendar, ArrowUpRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const news = {
  en: [
    {
      id: 1,
      title: "Waad Education Signs Partnership with Cambridge Assessment",
      category: "Partnership",
      date: "Nov 15, 2025",
      image: "/business-partnership-signing.png",
      excerpt: "Strengthening our commitment to international educational standards with a new strategic partnership.",
    },
    {
      id: 2,
      title: "Annual Sports Day Celebrates Student Achievement",
      category: "Events",
      date: "Nov 10, 2025",
      image: "/school-sports-day-students-running.jpg",
      excerpt: "Students across all three schools participated in our biggest sports event of the year.",
    },
    {
      id: 3,
      title: "New STEM Lab Opens at Waad Academy",
      category: "Facilities",
      date: "Nov 5, 2025",
      image: "/modern-stem-lab-students-science.jpg",
      excerpt: "State-of-the-art technology lab to enhance science and engineering education for students.",
    },
  ],
  ar: [
    {
      id: 1,
      title: "وعد للتعليم توقع شراكة مع كامبريدج للتقييم",
      category: "شراكات",
      date: "15 نوفمبر 2025",
      image: "/business-partnership-signing.png",
      excerpt: "تعزيز التزامنا بالمعايير التعليمية الدولية من خلال شراكة استراتيجية جديدة.",
    },
    {
      id: 2,
      title: "يوم الرياضة السنوي يحتفي بإنجازات الطلاب",
      category: "فعاليات",
      date: "10 نوفمبر 2025",
      image: "/school-sports-day-students-running.jpg",
      excerpt: "شارك طلاب من جميع المدارس الثلاث في أكبر حدث رياضي لهذا العام.",
    },
    {
      id: 3,
      title: "افتتاح معمل STEM جديد في أكاديمية وعد",
      category: "مرافق",
      date: "5 نوفمبر 2025",
      image: "/modern-stem-lab-students-science.jpg",
      excerpt: "معمل تكنولوجي حديث لتعزيز تعليم العلوم والهندسة للطلاب.",
    },
  ],
}

const announcements = {
  en: [
    { title: "2025-2026 Enrollment Now Open", date: "Nov 20, 2025" },
    { title: "Winter Break Schedule Announced", date: "Nov 18, 2025" },
    { title: "Parent-Teacher Conference Dates", date: "Nov 12, 2025" },
  ],
  ar: [
    { title: "التسجيل مفتوح الآن 2025-2026", date: "20 نوفمبر 2025" },
    { title: "إعلان جدول إجازة الشتاء", date: "18 نوفمبر 2025" },
    { title: "مواعيد اجتماعات أولياء الأمور", date: "12 نوفمبر 2025" },
  ],
}

export function NewsSection() {
  const { language, t, isRTL } = useLanguage()
  const currentNews = news[language]
  const currentAnnouncements = announcements[language]

  return (
    <section id="news" className="py-20 lg:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              {t("News & Updates", "الأخبار والتحديثات")}
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
              {t("Latest from Waad", "آخر أخبار وعد")}
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              {t(
                "Stay updated with the latest news, events, and announcements from Waad Education.",
                "ابق على اطلاع بآخر الأخبار والفعاليات والإعلانات من وعد للتعليم.",
              )}
            </p>
          </div>
          <Button variant="outline" className="rounded-lg mt-6 lg:mt-0 gap-2 self-start lg:self-auto bg-transparent">
            {t("View All News", "عرض جميع الأخبار")}
            {isRTL ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main News Grid */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {currentNews.map((item) => (
              <article
                key={item.id}
                className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className={`absolute top-4 ${isRTL ? "right-4" : "left-4"}`}>
                    <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                    <Calendar className="w-4 h-4" />
                    {item.date}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2 mb-4">{item.excerpt}</p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1 text-primary font-medium text-sm hover:gap-2 transition-all"
                  >
                    {t("Read More", "اقرأ المزيد")}
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Announcements Sidebar */}
          <div className="bg-card rounded-2xl border border-border p-6">
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#b8a04c] rounded-full animate-pulse" />
              {t("Announcements", "الإعلانات")}
            </h3>
            <div className="space-y-4">
              {currentAnnouncements.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="block p-4 bg-secondary/50 rounded-xl hover:bg-secondary transition-colors group"
                >
                  <h4 className="font-medium text-foreground group-hover:text-primary transition-colors mb-1">
                    {item.title}
                  </h4>
                  <span className="text-sm text-muted-foreground">{item.date}</span>
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8 p-6 bg-gradient-to-br from-primary to-primary/80 rounded-xl text-primary-foreground">
              <h4 className="font-bold mb-2">{t("Subscribe to Updates", "اشترك في التحديثات")}</h4>
              <p className="text-sm text-primary-foreground/80 mb-4">
                {t("Get the latest news delivered to your inbox.", "احصل على آخر الأخبار في بريدك الإلكتروني.")}
              </p>
              <input
                type="email"
                placeholder={t("Enter your email", "أدخل بريدك الإلكتروني")}
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 text-sm mb-3 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <Button className="w-full bg-white text-primary hover:bg-white/90">{t("Subscribe", "اشترك")}</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
