"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft, MapPin, Users, Award } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const schools = {
  en: [
    {
      id: "waad-academy",
      name: "Waad Academy",
      location: "Jeddah",
      description:
        "Our flagship institution offering comprehensive K-12 education with international standards and local values.",
      students: "2,500+",
      established: "2005",
      color: "from-[#4a6fa5] to-[#3d5a8a]",
      image: "/modern-school-building-waad-academy-jeddah.jpg",
      features: ["Cambridge Curriculum", "STEM Programs", "Arts & Sports"],
      website: "https://waadacademy.edu.sa",
    },
    {
      id: "dar-althikr",
      name: "Dar Al-Thikr Schools",
      location: "Jeddah",
      description:
        "Excellence in Islamic education combined with modern academic standards for a well-rounded development.",
      students: "1,800+",
      established: "1998",
      color: "from-[#2d6a4f] to-[#1b4332]",
      image: "/dar-al-thikr-islamic-school-building-jeddah.jpg",
      features: ["Islamic Studies", "Arabic Excellence", "Character Building"],
      website: "#",
    },
    {
      id: "bloom",
      name: "Bloom Schools",
      location: "Jeddah & Makkah",
      description:
        "Innovative early childhood and primary education focused on nurturing young minds through play-based learning.",
      students: "800+",
      established: "2018",
      color: "from-[#7c3aed] to-[#5b21b6]",
      image: "/bloom-nursery-school-colorful-modern-building.jpg",
      features: ["Early Years", "Play-Based Learning", "Bilingual Program"],
      website: "#",
    },
  ],
  ar: [
    {
      id: "waad-academy",
      name: "أكاديمية وعد",
      location: "جدة",
      description: "مؤسستنا الرائدة التي تقدم تعليماً شاملاً من الروضة حتى الثانوية بمعايير دولية وقيم محلية.",
      students: "+2,500",
      established: "2005",
      color: "from-[#4a6fa5] to-[#3d5a8a]",
      image: "/modern-school-building-waad-academy-jeddah.jpg",
      features: ["منهج كامبريدج", "برامج STEM", "الفنون والرياضة"],
      website: "https://waadacademy.edu.sa",
    },
    {
      id: "dar-althikr",
      name: "مدارس دار الذكر",
      location: "جدة",
      description: "التميز في التعليم الإسلامي مع المعايير الأكاديمية الحديثة لتطوير شامل ومتوازن.",
      students: "+1,800",
      established: "1998",
      color: "from-[#2d6a4f] to-[#1b4332]",
      image: "/dar-al-thikr-islamic-school-building-jeddah.jpg",
      features: ["الدراسات الإسلامية", "التميز في العربية", "بناء الشخصية"],
      website: "#",
    },
    {
      id: "bloom",
      name: "مدارس بلوم",
      location: "جدة ومكة",
      description: "تعليم مبتكر للطفولة المبكرة والابتدائية يركز على تنمية العقول الصغيرة من خلال التعلم باللعب.",
      students: "+800",
      established: "2018",
      color: "from-[#7c3aed] to-[#5b21b6]",
      image: "/bloom-nursery-school-colorful-modern-building.jpg",
      features: ["الطفولة المبكرة", "التعلم باللعب", "برنامج ثنائي اللغة"],
      website: "#",
    },
  ],
}

export function SchoolsSection() {
  const [activeSchool, setActiveSchool] = useState(0)
  const { language, t, isRTL } = useLanguage()
  const currentSchools = schools[language]

  return (
    <section id="schools" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            {t("Our Schools", "مدارسنا")}
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            {t("Three Schools, One Vision", "ثلاث مدارس، رؤية واحدة")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t(
              "Each institution within Waad Education brings unique strengths while sharing our commitment to excellence.",
              "كل مؤسسة في وعد للتعليم تجلب نقاط قوة فريدة مع مشاركة التزامنا بالتميز.",
            )}
          </p>
        </div>

        {/* School Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {currentSchools.map((school, index) => (
            <button
              key={school.id}
              onClick={() => setActiveSchool(index)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeSchool === index
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              <span>{school.name}</span>
            </button>
          ))}
        </div>

        {/* Active School Display */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className={`relative ${isRTL ? "lg:order-2" : ""}`}>
            <div
              className={`absolute inset-0 bg-gradient-to-br ${currentSchools[activeSchool].color} rounded-3xl transform rotate-3 opacity-20`}
            />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={currentSchools[activeSchool].image || "/placeholder.svg"}
                alt={currentSchools[activeSchool].name}
                className="w-full h-[400px] object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${currentSchools[activeSchool].color} opacity-40`} />

              {/* Floating Stats */}
              <div className="absolute bottom-6 left-6 right-6 flex gap-4">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg">
                  <div className="flex items-center gap-2 text-foreground">
                    <Users className="w-4 h-4 text-primary" />
                    <span className="font-bold">{currentSchools[activeSchool].students}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">{t("Students", "طالب")}</span>
                </div>
                <div className="bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg">
                  <div className="flex items-center gap-2 text-foreground">
                    <Award className="w-4 h-4 text-[#b8a04c]" />
                    <span className="font-bold">{currentSchools[activeSchool].established}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">{t("Established", "تأسست")}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className={isRTL ? "lg:order-1" : ""}>
            <div className="flex items-center gap-2 text-muted-foreground mb-4">
              <MapPin className="w-4 h-4" />
              <span>{currentSchools[activeSchool].location}</span>
            </div>

            <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">{currentSchools[activeSchool].name}</h3>

            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              {currentSchools[activeSchool].description}
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-3 mb-8">
              {currentSchools[activeSchool].features.map((feature, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-secondary rounded-full text-sm font-medium text-secondary-foreground"
                >
                  {feature}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="rounded-lg px-8 bg-primary hover:bg-primary/90 gap-2">
                {t("Visit School Website", "زيارة موقع المدرسة")}
                {isRTL ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              </Button>
              <Button size="lg" variant="outline" className="rounded-lg px-8 bg-transparent">
                {t("Schedule a Tour", "حجز جولة")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
