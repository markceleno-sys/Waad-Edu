import { Button } from "@/components/ui/button"
import { ArrowLeft, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-bl from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-right">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              التسجيل مفتوح للفصل الدراسي الجديد
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight mb-6 text-balance">
              نبني المستقبل
              <br />
              <span className="text-primary">بالعلم والمعرفة</span>
            </h1>

            <p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              وعد للتعليم مؤسسة تعليمية رائدة في المملكة العربية السعودية، نقدم برامج تعليمية متميزة تواكب رؤية 2030
              وتُعد الأجيال القادمة لسوق العمل.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="rounded-full px-8 gap-2 text-base">
                ابدأ رحلتك التعليمية
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 gap-2 text-base bg-transparent">
                <Play className="w-5 h-5" />
                شاهد الفيديو التعريفي
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/saudi-arabian-students-in-modern-classroom-learnin.jpg"
                alt="طلاب في بيئة تعليمية حديثة"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-2xl shadow-xl border border-border">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center">
                  <span className="text-2xl font-bold text-accent-foreground">+5K</span>
                </div>
                <div>
                  <p className="font-semibold text-card-foreground">طالب وطالبة</p>
                  <p className="text-sm text-muted-foreground">تخرجوا من برامجنا</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
