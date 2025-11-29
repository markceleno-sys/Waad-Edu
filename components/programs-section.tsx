import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Clock, Users, Star } from "lucide-react"

const programs = [
  {
    title: "برنامج اللغة الإنجليزية",
    description: "برنامج متكامل لتعلم اللغة الإنجليزية من المستوى المبتدئ حتى الاحترافي",
    duration: "6 أشهر",
    students: "+500",
    rating: "4.9",
    image: "/english-language-learning-classroom-saudi-arabia.jpg",
  },
  {
    title: "برنامج الحاسب الآلي",
    description: "تعلم أساسيات الحاسب الآلي والبرمجة وتطوير التطبيقات",
    duration: "4 أشهر",
    students: "+300",
    rating: "4.8",
    image: "/computer-programming-class-modern-technology-saudi.jpg",
  },
  {
    title: "برنامج إدارة الأعمال",
    description: "برنامج شامل في إدارة الأعمال والتسويق وريادة الأعمال",
    duration: "8 أشهر",
    students: "+400",
    rating: "4.9",
    image: "/business-management-professional-training-saudi-ar.jpg",
  },
  {
    title: "برنامج التطوير الذاتي",
    description: "تنمية المهارات الشخصية والقيادية والتواصل الفعّال",
    duration: "3 أشهر",
    students: "+600",
    rating: "5.0",
    image: "/personal-development-workshop-saudi-arabia-profess.jpg",
  },
]

export function ProgramsSection() {
  return (
    <section id="programs" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            برامجنا التعليمية
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            برامج متنوعة تناسب
            <br />
            <span className="text-primary">طموحاتك المهنية</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            نقدم مجموعة متميزة من البرامج التعليمية المعتمدة التي تؤهلك لسوق العمل
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {programs.map((program, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={program.image || "/placeholder.svg"}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-card/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="text-sm font-medium text-card-foreground">{program.rating}</span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-card-foreground mb-3">{program.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{program.description}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {program.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {program.students}
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="w-full rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                >
                  تفاصيل البرنامج
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button size="lg" className="rounded-full px-8 gap-2">
            استعرض جميع البرامج
            <ArrowLeft className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
