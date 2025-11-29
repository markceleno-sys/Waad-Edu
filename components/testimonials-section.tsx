import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    content:
      "تجربتي مع وعد للتعليم كانت استثنائية. المناهج المتطورة والمدربين الأكفاء ساعدوني في الحصول على وظيفة أحلامي.",
    author: "أحمد محمد الغامدي",
    role: "خريج برنامج إدارة الأعمال",
    image: "/saudi-professional-man-portrait.jpg",
  },
  {
    content:
      "البيئة التعليمية في وعد للتعليم محفزة جداً. استفدت كثيراً من برنامج اللغة الإنجليزية وأصبحت الآن أتحدث بطلاقة.",
    author: "سارة عبدالله العتيبي",
    role: "خريجة برنامج اللغة الإنجليزية",
    image: "/saudi-professional-woman-portrait-hijab.jpg",
  },
  {
    content:
      "أنصح كل من يريد تطوير مهاراته بالانضمام لوعد للتعليم. الشهادات المعتمدة فتحت لي أبواب كثيرة في سوق العمل.",
    author: "فهد سعود القحطاني",
    role: "خريج برنامج الحاسب الآلي",
    image: "/saudi-young-professional-man-portrait.jpg",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            آراء خريجينا
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            قصص نجاح
            <span className="text-primary"> ملهمة</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            استمع لتجارب خريجينا الذين حققوا أحلامهم المهنية بعد التحاقهم ببرامجنا
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border hover:border-primary/30 transition-colors">
              <CardContent className="p-8">
                <Quote className="w-10 h-10 text-primary/20 mb-6" />
                <p className="text-foreground mb-8 leading-relaxed">{testimonial.content}</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.author}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
