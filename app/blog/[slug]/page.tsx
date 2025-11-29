"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"
import Link from "next/link"
import { Calendar, User, ArrowRight, ArrowLeft, Clock, Share2, Facebook, Twitter, Linkedin } from "lucide-react"
import { useParams } from "next/navigation"

const posts = [
  {
    id: 1,
    slug: "cambridge-curriculum-global-success",
    titleEn: "How Cambridge Curriculum Prepares Students for Global Success",
    titleAr: "كيف يُعد منهج كامبريدج الطلاب للنجاح العالمي",
    excerptEn:
      "Discover how our Cambridge-accredited programs give students a competitive edge in university admissions worldwide.",
    excerptAr: "اكتشف كيف تمنح برامجنا المعتمدة من كامبريدج الطلاب ميزة تنافسية في القبول الجامعي حول العالم.",
    contentEn: `
      <p>At Waad Education, we believe that preparing students for global success starts with providing them access to world-class education standards. Our Cambridge-accredited programs are designed to equip students with the knowledge, skills, and mindset needed to thrive in an increasingly interconnected world.</p>
      
      <h2>Why Cambridge Curriculum?</h2>
      <p>The Cambridge curriculum is recognized by universities and employers worldwide as a mark of academic excellence. Students who complete Cambridge qualifications demonstrate:</p>
      <ul>
        <li>Strong critical thinking and problem-solving abilities</li>
        <li>Excellent communication skills in English</li>
        <li>Deep subject knowledge and understanding</li>
        <li>The ability to apply learning to new situations</li>
      </ul>
      
      <h2>Our Approach</h2>
      <p>We combine the rigorous Cambridge framework with innovative teaching methodologies and local cultural values. Our experienced teachers, many of whom are trained directly by Cambridge, create engaging learning environments where students are encouraged to question, explore, and discover.</p>
      
      <h2>Results That Speak</h2>
      <p>Our students consistently achieve outstanding results in Cambridge examinations, with many gaining admission to top universities in the UK, US, Canada, and across the Middle East. In the past year alone, 95% of our students received offers from their first-choice universities.</p>
      
      <h2>Beyond Academics</h2>
      <p>While academic excellence is crucial, we also focus on developing well-rounded individuals. Our Cambridge programs are complemented by a rich offering of extracurricular activities, leadership opportunities, and community service initiatives that help students develop into confident, responsible global citizens.</p>
    `,
    contentAr: `
      <p>في وعد للتعليم، نؤمن بأن إعداد الطلاب للنجاح العالمي يبدأ بتوفير الوصول إلى معايير التعليم العالمية. برامجنا المعتمدة من كامبريدج مصممة لتزويد الطلاب بالمعرفة والمهارات والعقلية اللازمة للنجاح في عالم مترابط بشكل متزايد.</p>
      
      <h2>لماذا منهج كامبريدج؟</h2>
      <p>منهج كامبريدج معترف به من قبل الجامعات وأصحاب العمل في جميع أنحاء العالم كعلامة على التميز الأكاديمي. الطلاب الذين يكملون مؤهلات كامبريدج يظهرون:</p>
      <ul>
        <li>قدرات قوية في التفكير النقدي وحل المشكلات</li>
        <li>مهارات تواصل ممتازة باللغة الإنجليزية</li>
        <li>معرفة عميقة بالمواد الدراسية</li>
        <li>القدرة على تطبيق التعلم في مواقف جديدة</li>
      </ul>
      
      <h2>نهجنا</h2>
      <p>نجمع بين إطار كامبريدج الصارم ومنهجيات التدريس المبتكرة والقيم الثقافية المحلية. يقوم معلمونا ذوو الخبرة، والعديد منهم تدربوا مباشرة من كامبريدج، بإنشاء بيئات تعليمية جذابة يتم فيها تشجيع الطلاب على التساؤل والاستكشاف والاكتشاف.</p>
      
      <h2>نتائج تتحدث</h2>
      <p>يحقق طلابنا باستمرار نتائج متميزة في امتحانات كامبريدج، حيث يحصل الكثيرون منهم على قبول في أفضل الجامعات في المملكة المتحدة والولايات المتحدة وكندا وجميع أنحاء الشرق الأوسط. في العام الماضي وحده، حصل 95٪ من طلابنا على عروض من جامعاتهم المفضلة.</p>
      
      <h2>ما وراء الأكاديميات</h2>
      <p>في حين أن التميز الأكاديمي أمر بالغ الأهمية، فإننا نركز أيضًا على تطوير أفراد متكاملين. يتم استكمال برامج كامبريدج لدينا بمجموعة غنية من الأنشطة اللامنهجية وفرص القيادة ومبادرات خدمة المجتمع التي تساعد الطلاب على التطور إلى مواطنين عالميين واثقين ومسؤولين.</p>
    `,
    image: "/cambridge-students-graduation-success.jpg",
    categoryEn: "Education",
    categoryAr: "التعليم",
    dateEn: "Nov 25, 2024",
    dateAr: "25 نوفمبر 2024",
    authorEn: "Dr. Ahmed Al-Rashid",
    authorAr: "د. أحمد الراشد",
    readTimeEn: "5 min read",
    readTimeAr: "5 دقائق للقراءة",
  },
  {
    id: 2,
    slug: "early-childhood-education-importance",
    titleEn: "The Importance of Early Childhood Education",
    titleAr: "أهمية التعليم في مرحلة الطفولة المبكرة",
    excerptEn: "Research shows that quality early education has lasting impacts on cognitive and social development.",
    excerptAr: "تظهر الأبحاث أن التعليم المبكر عالي الجودة له تأثيرات دائمة على التطور المعرفي والاجتماعي.",
    contentEn: `
      <p>The first five years of a child's life are crucial for their development. During this period, the brain develops rapidly, forming connections that will influence learning, behavior, and health throughout life. At Bloom Schools, we understand this critical window and have designed our programs to maximize every child's potential.</p>
      
      <h2>The Science Behind Early Learning</h2>
      <p>Research consistently shows that children who receive quality early education are more likely to:</p>
      <ul>
        <li>Perform better academically throughout their school years</li>
        <li>Develop stronger social and emotional skills</li>
        <li>Graduate from high school and pursue higher education</li>
        <li>Earn higher incomes as adults</li>
      </ul>
      
      <h2>Our Early Years Philosophy</h2>
      <p>At Bloom Schools, we believe that play is the work of childhood. Our play-based curriculum encourages exploration, creativity, and discovery while building foundational skills in literacy, numeracy, and social interaction.</p>
      
      <h2>A Nurturing Environment</h2>
      <p>Our classrooms are designed to be warm, welcoming spaces where children feel safe to explore and learn. With low student-to-teacher ratios, each child receives personalized attention and support.</p>
      
      <h2>Partnering with Parents</h2>
      <p>We believe that parents are a child's first and most important teachers. Our family engagement programs ensure that learning continues at home and that parents are active partners in their child's educational journey.</p>
    `,
    contentAr: `
      <p>السنوات الخمس الأولى من حياة الطفل حاسمة لنموه. خلال هذه الفترة، يتطور الدماغ بسرعة، مكونًا اتصالات ستؤثر على التعلم والسلوك والصحة طوال الحياة. في مدارس بلوم، نفهم هذه النافذة الحرجة وقمنا بتصميم برامجنا لتعظيم إمكانات كل طفل.</p>
      
      <h2>العلم وراء التعلم المبكر</h2>
      <p>تظهر الأبحاث باستمرار أن الأطفال الذين يتلقون تعليمًا مبكرًا عالي الجودة هم أكثر عرضة لـ:</p>
      <ul>
        <li>الأداء الأفضل أكاديميًا طوال سنوات دراستهم</li>
        <li>تطوير مهارات اجتماعية وعاطفية أقوى</li>
        <li>التخرج من المدرسة الثانوية ومتابعة التعليم العالي</li>
        <li>كسب دخل أعلى كبالغين</li>
      </ul>
      
      <h2>فلسفتنا في السنوات المبكرة</h2>
      <p>في مدارس بلوم، نؤمن بأن اللعب هو عمل الطفولة. يشجع منهجنا القائم على اللعب الاستكشاف والإبداع والاكتشاف مع بناء المهارات الأساسية في القراءة والكتابة والحساب والتفاعل الاجتماعي.</p>
      
      <h2>بيئة رعاية</h2>
      <p>تم تصميم فصولنا الدراسية لتكون مساحات دافئة ومرحبة حيث يشعر الأطفال بالأمان للاستكشاف والتعلم. مع نسب منخفضة من الطلاب إلى المعلمين، يتلقى كل طفل اهتمامًا ودعمًا شخصيًا.</p>
      
      <h2>الشراكة مع أولياء الأمور</h2>
      <p>نؤمن بأن الآباء هم أول وأهم معلمي الطفل. تضمن برامج مشاركة الأسرة لدينا استمرار التعلم في المنزل وأن يكون الآباء شركاء نشطين في رحلة طفلهم التعليمية.</p>
    `,
    image: "/early-childhood-education-children-playing.jpg",
    categoryEn: "Early Years",
    categoryAr: "السنوات المبكرة",
    dateEn: "Nov 20, 2024",
    dateAr: "20 نوفمبر 2024",
    authorEn: "Mrs. Sarah Al-Zahrani",
    authorAr: "أ. سارة الزهراني",
    readTimeEn: "4 min read",
    readTimeAr: "4 دقائق للقراءة",
  },
  {
    id: 3,
    slug: "technology-modern-classrooms",
    titleEn: "Integrating Technology in Modern Classrooms",
    titleAr: "دمج التكنولوجيا في الفصول الدراسية الحديثة",
    excerptEn: "Learn how Waad Education is leveraging technology to enhance learning outcomes.",
    excerptAr: "تعرف على كيفية استفادة وعد للتعليم من التكنولوجيا لتحسين نتائج التعلم.",
    contentEn: `
      <p>In today's digital age, technology has become an integral part of education. At Waad Education, we embrace technology not as a replacement for traditional teaching, but as a powerful tool to enhance and personalize the learning experience.</p>
      
      <h2>Smart Classrooms</h2>
      <p>All our classrooms are equipped with interactive whiteboards, high-speed internet, and the latest educational technology. This enables our teachers to create dynamic, engaging lessons that capture students' attention and cater to different learning styles.</p>
      
      <h2>Personalized Learning</h2>
      <p>Through adaptive learning platforms, we can tailor instruction to each student's needs, pace, and interests. Students who need extra support receive targeted interventions, while advanced learners are challenged with enrichment activities.</p>
      
      <h2>Digital Literacy</h2>
      <p>We prepare students for the future by teaching essential digital skills, including coding, digital citizenship, and online safety. These skills are integrated across the curriculum, ensuring students are confident and responsible technology users.</p>
      
      <h2>Parent Communication</h2>
      <p>Our parent portal and mobile app keep families connected to their child's education. Parents can track progress, communicate with teachers, and stay informed about school events and announcements.</p>
    `,
    contentAr: `
      <p>في العصر الرقمي اليوم، أصبحت التكنولوجيا جزءًا لا يتجزأ من التعليم. في وعد للتعليم، نتبنى التكنولوجيا ليس كبديل للتدريس التقليدي، بل كأداة قوية لتعزيز وتخصيص تجربة التعلم.</p>
      
      <h2>الفصول الذكية</h2>
      <p>جميع فصولنا الدراسية مجهزة بألواح تفاعلية وإنترنت عالي السرعة وأحدث التقنيات التعليمية. يتيح هذا لمعلمينا إنشاء دروس ديناميكية وجذابة تجذب انتباه الطلاب وتلبي أنماط التعلم المختلفة.</p>
      
      <h2>التعلم المخصص</h2>
      <p>من خلال منصات التعلم التكيفية، يمكننا تخصيص التعليم وفقًا لاحتياجات كل طالب وسرعته واهتماماته. يتلقى الطلاب الذين يحتاجون إلى دعم إضافي تدخلات مستهدفة، بينما يتم تحدي المتعلمين المتقدمين بأنشطة إثراء.</p>
      
      <h2>المعرفة الرقمية</h2>
      <p>نعد الطلاب للمستقبل من خلال تعليم المهارات الرقمية الأساسية، بما في ذلك البرمجة والمواطنة الرقمية والسلامة على الإنترنت. يتم دمج هذه المهارات عبر المنهج الدراسي، مما يضمن أن يكون الطلاب مستخدمين واثقين ومسؤولين للتكنولوجيا.</p>
      
      <h2>التواصل مع أولياء الأمور</h2>
      <p>تبقي بوابة الآباء وتطبيق الهاتف المحمول الخاص بنا العائلات على اتصال بتعليم طفلهم. يمكن للآباء تتبع التقدم والتواصل مع المعلمين والبقاء على اطلاع بأحداث المدرسة والإعلانات.</p>
    `,
    image: "/technology-modern-classroom-students.jpg",
    categoryEn: "Innovation",
    categoryAr: "الابتكار",
    dateEn: "Nov 15, 2024",
    dateAr: "15 نوفمبر 2024",
    authorEn: "Mr. Khalid Al-Otaibi",
    authorAr: "أ. خالد العتيبي",
    readTimeEn: "4 min read",
    readTimeAr: "4 دقائق للقراءة",
  },
  {
    id: 4,
    slug: "university-partnerships",
    titleEn: "Waad Education Partners with Leading Universities",
    titleAr: "وعد للتعليم تتشارك مع جامعات رائدة",
    excerptEn: "New partnerships open pathways for our graduates to top universities globally.",
    excerptAr: "شراكات جديدة تفتح مسارات لخريجينا إلى أفضل الجامعات عالمياً.",
    contentEn: `
      <p>We are thrilled to announce new strategic partnerships with several prestigious universities across the globe. These partnerships will provide our students with unique opportunities and pathways to higher education.</p>
      
      <h2>Partnership Highlights</h2>
      <p>Our new partnerships include agreements with universities in the UK, US, Canada, and the UAE. These institutions recognize the quality of Waad Education graduates and have committed to:</p>
      <ul>
        <li>Reserved admission spots for qualified students</li>
        <li>Scholarship opportunities</li>
        <li>Early acceptance programs</li>
        <li>Campus visit opportunities</li>
      </ul>
      
      <h2>Student Benefits</h2>
      <p>Through these partnerships, our students gain access to university preparation programs, guidance from admissions officers, and mentorship from current university students.</p>
      
      <h2>Looking Ahead</h2>
      <p>We continue to expand our network of partner institutions, always with the goal of opening more doors for our graduates.</p>
    `,
    contentAr: `
      <p>يسعدنا الإعلان عن شراكات استراتيجية جديدة مع العديد من الجامعات المرموقة حول العالم. ستوفر هذه الشراكات لطلابنا فرصًا فريدة ومسارات للتعليم العالي.</p>
      
      <h2>أبرز الشراكات</h2>
      <p>تشمل شراكاتنا الجديدة اتفاقيات مع جامعات في المملكة المتحدة والولايات المتحدة وكندا والإمارات. تعترف هذه المؤسسات بجودة خريجي وعد للتعليم والتزمت بـ:</p>
      <ul>
        <li>مقاعد قبول محجوزة للطلاب المؤهلين</li>
        <li>فرص منح دراسية</li>
        <li>برامج القبول المبكر</li>
        <li>فرص زيارة الحرم الجامعي</li>
      </ul>
      
      <h2>فوائد الطلاب</h2>
      <p>من خلال هذه الشراكات، يحصل طلابنا على الوصول إلى برامج الإعداد الجامعي، والتوجيه من مسؤولي القبول، والإرشاد من طلاب الجامعة الحاليين.</p>
      
      <h2>التطلع للمستقبل</h2>
      <p>نواصل توسيع شبكتنا من المؤسسات الشريكة، دائمًا بهدف فتح المزيد من الأبواب لخريجينا.</p>
    `,
    image: "/university-partnership-signing-ceremony.jpg",
    categoryEn: "News",
    categoryAr: "أخبار",
    dateEn: "Nov 10, 2024",
    dateAr: "10 نوفمبر 2024",
    authorEn: "Waad Education",
    authorAr: "وعد للتعليم",
    readTimeEn: "3 min read",
    readTimeAr: "3 دقائق للقراءة",
  },
  {
    id: 5,
    slug: "sports-character-building",
    titleEn: "Building Character Through Sports Programs",
    titleAr: "بناء الشخصية من خلال البرامج الرياضية",
    excerptEn: "How physical education and sports contribute to holistic student development.",
    excerptAr: "كيف يساهم التربية البدنية والرياضة في التطوير الشامل للطلاب.",
    contentEn: `
      <p>At Waad Education, we believe that sports and physical education are essential components of a well-rounded education. Our comprehensive sports programs help students develop not just physical fitness, but also crucial life skills.</p>
      
      <h2>Beyond Physical Fitness</h2>
      <p>While physical health is important, sports teach valuable life lessons:</p>
      <ul>
        <li>Teamwork and collaboration</li>
        <li>Leadership and responsibility</li>
        <li>Resilience and perseverance</li>
        <li>Time management and discipline</li>
      </ul>
      
      <h2>Our Sports Offerings</h2>
      <p>We offer a wide range of sports activities including football, basketball, swimming, tennis, and martial arts. Students can participate in recreational programs or join competitive teams.</p>
      
      <h2>State-of-the-Art Facilities</h2>
      <p>Our campuses feature modern sports facilities including indoor gymnasiums, swimming pools, football fields, and fitness centers.</p>
    `,
    contentAr: `
      <p>في وعد للتعليم، نؤمن بأن الرياضة والتربية البدنية هي مكونات أساسية للتعليم المتكامل. تساعد برامجنا الرياضية الشاملة الطلاب على تطوير ليس فقط اللياقة البدنية، ولكن أيضًا مهارات الحياة الحاسمة.</p>
      
      <h2>ما وراء اللياقة البدنية</h2>
      <p>في حين أن الصحة البدنية مهمة، تعلم الرياضة دروسًا قيمة في الحياة:</p>
      <ul>
        <li>العمل الجماعي والتعاون</li>
        <li>القيادة والمسؤولية</li>
        <li>المرونة والمثابرة</li>
        <li>إدارة الوقت والانضباط</li>
      </ul>
      
      <h2>عروضنا الرياضية</h2>
      <p>نقدم مجموعة واسعة من الأنشطة الرياضية بما في ذلك كرة القدم وكرة السلة والسباحة والتنس والفنون القتالية. يمكن للطلاب المشاركة في البرامج الترفيهية أو الانضمام إلى الفرق التنافسية.</p>
      
      <h2>مرافق حديثة</h2>
      <p>تتميز حرمنا الجامعية بمرافق رياضية حديثة تشمل صالات رياضية داخلية وحمامات سباحة وملاعب كرة قدم ومراكز لياقة بدنية.</p>
    `,
    image: "/students-sports-competition-school.jpg",
    categoryEn: "Student Life",
    categoryAr: "الحياة الطلابية",
    dateEn: "Nov 5, 2024",
    dateAr: "5 نوفمبر 2024",
    authorEn: "Coach Mohammed",
    authorAr: "المدرب محمد",
    readTimeEn: "4 min read",
    readTimeAr: "4 دقائق للقراءة",
  },
  {
    id: 6,
    slug: "vision-2030-education",
    titleEn: "Vision 2030 and the Future of Education in KSA",
    titleAr: "رؤية 2030 ومستقبل التعليم في المملكة",
    excerptEn: "How Waad Education aligns with Saudi Arabia's ambitious educational transformation goals.",
    excerptAr: "كيف تتوافق وعد للتعليم مع أهداف التحول التعليمي الطموحة للمملكة العربية السعودية.",
    contentEn: `
      <p>Saudi Arabia's Vision 2030 places education at the heart of national transformation. As a leading educational institution in the Kingdom, Waad Education is proud to contribute to these ambitious goals.</p>
      
      <h2>Alignment with Vision 2030</h2>
      <p>Our initiatives directly support Vision 2030's education objectives:</p>
      <ul>
        <li>Developing Saudi talent and building a knowledge-based economy</li>
        <li>Improving educational outcomes and student achievement</li>
        <li>Preparing students for the jobs of the future</li>
        <li>Promoting innovation and entrepreneurship</li>
      </ul>
      
      <h2>Investing in the Future</h2>
      <p>We continue to invest in our schools, our teachers, and our programs to ensure that every student receives an education that prepares them to contribute to Saudi Arabia's bright future.</p>
      
      <h2>A National Mission</h2>
      <p>Education is not just our business—it's our national duty. We are committed to playing our part in building the leaders, innovators, and citizens who will shape Saudi Arabia's tomorrow.</p>
    `,
    contentAr: `
      <p>تضع رؤية المملكة العربية السعودية 2030 التعليم في قلب التحول الوطني. كمؤسسة تعليمية رائدة في المملكة، تفخر وعد للتعليم بالمساهمة في هذه الأهداف الطموحة.</p>
      
      <h2>التوافق مع رؤية 2030</h2>
      <p>تدعم مبادراتنا مباشرة أهداف التعليم في رؤية 2030:</p>
      <ul>
        <li>تطوير المواهب السعودية وبناء اقتصاد قائم على المعرفة</li>
        <li>تحسين النتائج التعليمية وإنجاز الطلاب</li>
        <li>إعداد الطلاب لوظائف المستقبل</li>
        <li>تعزيز الابتكار وريادة الأعمال</li>
      </ul>
      
      <h2>الاستثمار في المستقبل</h2>
      <p>نواصل الاستثمار في مدارسنا ومعلمينا وبرامجنا لضمان حصول كل طالب على تعليم يعده للمساهمة في مستقبل المملكة العربية السعودية المشرق.</p>
      
      <h2>مهمة وطنية</h2>
      <p>التعليم ليس مجرد عملنا - إنه واجبنا الوطني. نحن ملتزمون بأداء دورنا في بناء القادة والمبتكرين والمواطنين الذين سيشكلون غد المملكة العربية السعودية.</p>
    `,
    image: "/vision-2030-education-transformation.jpg",
    categoryEn: "Vision 2030",
    categoryAr: "رؤية 2030",
    dateEn: "Nov 1, 2024",
    dateAr: "1 نوفمبر 2024",
    authorEn: "Dr. Fatima Al-Harbi",
    authorAr: "د. فاطمة الحربي",
    readTimeEn: "5 min read",
    readTimeAr: "5 دقائق للقراءة",
  },
]

export default function BlogPostPage() {
  const { t, isRTL } = useLanguage()
  const params = useParams()
  const Arrow = isRTL ? ArrowLeft : ArrowRight
  const BackArrow = isRTL ? ArrowRight : ArrowLeft

  const post = posts.find((p) => p.slug === params.slug)

  if (!post) {
    return (
      <main className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{t("Post not found", "المقال غير موجود")}</h1>
          <Link href="/blog" className="text-[#486266] font-semibold hover:underline">
            {t("Back to Blog", "العودة للمدونة")}
          </Link>
        </div>
        <Footer />
      </main>
    )
  }

  const relatedPosts = posts.filter((p) => p.id !== post.id).slice(0, 3)

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Image */}
      <section className="relative h-[400px] lg:h-[500px]">
        <Image
          src={post.image || "/placeholder.svg"}
          alt={t(post.titleEn, post.titleAr)}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-16">
          <div className="container mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
            >
              <BackArrow className="w-4 h-4" />
              {t("Back to Blog", "العودة للمدونة")}
            </Link>
            <span className="inline-block px-4 py-2 bg-[#c9a84c] text-white rounded-full text-sm font-medium mb-4">
              {t(post.categoryEn, post.categoryAr)}
            </span>
            <h1
              className="text-3xl lg:text-5xl font-bold text-white mb-4 max-w-4xl"
              style={{ lineHeight: isRTL ? "1.5" : "1.2" }}
            >
              {t(post.titleEn, post.titleAr)}
            </h1>
            <div className={`flex items-center gap-6 text-white/80 ${isRTL ? "flex-row-reverse" : ""}`}>
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {t(post.authorEn, post.authorAr)}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {t(post.dateEn, post.dateAr)}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {t(post.readTimeEn, post.readTimeAr)}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <article
                className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-600 prose-p:leading-relaxed prose-li:text-gray-600 prose-a:text-[#486266]"
                style={{ direction: isRTL ? "rtl" : "ltr" }}
                dangerouslySetInnerHTML={{ __html: t(post.contentEn, post.contentAr) }}
              />

              {/* Share */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className={`flex items-center gap-4 ${isRTL ? "flex-row-reverse" : ""}`}>
                  <span className="font-semibold text-gray-900 flex items-center gap-2">
                    <Share2 className="w-5 h-5" />
                    {t("Share this article", "شارك هذا المقال")}
                  </span>
                  <div className="flex items-center gap-3">
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-[#486266]/10 flex items-center justify-center text-[#486266] hover:bg-[#486266] hover:text-white transition-colors"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-[#486266]/10 flex items-center justify-center text-[#486266] hover:bg-[#486266] hover:text-white transition-colors"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-[#486266]/10 flex items-center justify-center text-[#486266] hover:bg-[#486266] hover:text-white transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32">
                <h3 className="text-lg font-bold text-gray-900 mb-6">{t("Related Articles", "مقالات ذات صلة")}</h3>
                <div className="space-y-6">
                  {relatedPosts.map((relatedPost) => (
                    <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`} className="block group">
                      <div className="relative h-32 rounded-lg overflow-hidden mb-3">
                        <Image
                          src={relatedPost.image || "/placeholder.svg"}
                          alt={t(relatedPost.titleEn, relatedPost.titleAr)}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h4
                        className="text-sm font-semibold text-gray-900 group-hover:text-[#486266] transition-colors line-clamp-2"
                        style={{ lineHeight: isRTL ? "1.6" : "1.4" }}
                      >
                        {t(relatedPost.titleEn, relatedPost.titleAr)}
                      </h4>
                      <span className="text-xs text-gray-500 mt-1 block">
                        {t(relatedPost.dateEn, relatedPost.dateAr)}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
