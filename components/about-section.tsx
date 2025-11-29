"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft, Target, Eye, Heart } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const values = {
  en: [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To provide world-class education that develops the whole child - intellectually, emotionally, and socially - preparing them to be future leaders.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description:
        "To be the leading educational group in Saudi Arabia, recognized for excellence, innovation, and our contribution to Vision 2030.",
    },
    {
      icon: Heart,
      title: "Our Values",
      description:
        "Excellence, Integrity, Innovation, Respect, and Community. These core values guide everything we do at Waad Education.",
    },
  ],
  ar: [
    {
      icon: Target,
      title: "رسالتنا",
      description:
        "تقديم تعليم عالمي المستوى يطور الطفل بشكل كامل - فكرياً وعاطفياً واجتماعياً - وإعداده ليكون قائداً للمستقبل.",
    },
    {
      icon: Eye,
      title: "رؤيتنا",
      description:
        "أن نكون المجموعة التعليمية الرائدة في المملكة العربية السعودية، المعترف بها للتميز والابتكار ومساهمتنا في رؤية 2030.",
    },
    {
      icon: Heart,
      title: "قيمنا",
      description:
        "التميز، النزاهة، الابتكار، الاحترام، والمجتمع. هذه القيم الأساسية توجه كل ما نقوم به في وعد للتعليم.",
    },
  ],
}

export function AboutSection() {
  const { language, t, isRTL } = useLanguage()
  const currentValues = values[language]

  return (
    <section id="about" className="py-20 lg:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className={isRTL ? "lg:order-2" : ""}>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              {t("About Waad Education", "عن وعد للتعليم")}
            </div>

            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              {t("Building a Unified Brand,", "بناء علامة تجارية موحدة،")}
              <span className="text-primary">{t(" Engaged Community", " مجتمع متفاعل")}</span>
              {t(", & Sustainable Growth", "، ونمو مستدام")}
            </h2>

            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              {t(
                "Waad Education Company is a premier educational institution in Saudi Arabia, dedicated to shaping the future of education. With three distinguished schools under our umbrella, we serve thousands of students with innovative curricula aligned with international standards and local values.",
                "شركة وعد للتعليم هي مؤسسة تعليمية رائدة في المملكة العربية السعودية، مكرسة لصناعة مستقبل التعليم. مع ثلاث مدارس متميزة تحت مظلتنا، نخدم آلاف الطلاب بمناهج مبتكرة تتوافق مع المعايير الدولية والقيم المحلية.",
              )}
            </p>

            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              {t(
                "Our commitment to excellence has earned us numerous recognitions and made us a trusted partner for parents seeking the best education for their children.",
                "التزامنا بالتميز أكسبنا العديد من الاعترافات وجعلنا شريكاً موثوقاً للآباء الباحثين عن أفضل تعليم لأبنائهم.",
              )}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="rounded-lg px-8 bg-primary hover:bg-primary/90 gap-2">
                {t("Learn Our Story", "اكتشف قصتنا")}
                {isRTL ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              </Button>
              <Button size="lg" variant="outline" className="rounded-lg px-8 bg-transparent">
                {t("Meet Our Leadership", "تعرف على قيادتنا")}
              </Button>
            </div>
          </div>

          {/* Image Grid */}
          <div className={`relative ${isRTL ? "lg:order-1" : ""}`}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="/students-learning-in-classroom-saudi-arabia.jpg"
                    alt={t("Students learning", "طلاب يتعلمون")}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="/teachers-collaborating-meeting-education.jpg"
                    alt={t("Teachers collaborating", "معلمون يتعاونون")}
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="/modern-school-library-students-reading.jpg"
                    alt={t("School library", "مكتبة المدرسة")}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="/students-sports-activities-saudi-school.jpg"
                    alt={t("Sports activities", "الأنشطة الرياضية")}
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div
              className={`absolute -bottom-6 ${isRTL ? "-right-6" : "-left-6"} bg-[#b8a04c] text-[#1a1a1a] p-6 rounded-2xl shadow-xl`}
            >
              <div className="text-3xl font-bold">+25</div>
              <div className="text-sm font-medium">{t("Years of Excellence", "عام من التميز")}</div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {currentValues.map((value, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-2xl shadow-sm border border-border hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <value.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
