"use client"

import { useLanguage } from "@/contexts/language-context"

interface PageHeaderProps {
  titleEn: string
  titleAr: string
  breadcrumbEn: string[]
  breadcrumbAr: string[]
  backgroundImage?: string
}

export function PageHeader({ titleEn, titleAr, breadcrumbEn, breadcrumbAr, backgroundImage }: PageHeaderProps) {
  const { t, isRTL } = useLanguage()

  return (
    <section
      className="relative h-[300px] lg:h-[400px] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : "linear-gradient(135deg, #486266 0%, #2d4244 100%)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#486266]/80" />

      {/* Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 text-center px-4">
        <h1
          className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6"
          style={{ lineHeight: isRTL ? "1.4" : "1.2" }}
        >
          {t(titleEn, titleAr)}
        </h1>

        {/* Breadcrumb */}
        <div className={`flex items-center justify-center gap-2 text-white/70 ${isRTL ? "flex-row-reverse" : ""}`}>
          {(isRTL ? breadcrumbAr : breadcrumbEn).map((item, index, arr) => (
            <span key={index} className="flex items-center gap-2">
              <span
                className={`${index === arr.length - 1 ? "text-[#c9a84c]" : "hover:text-white cursor-pointer transition-colors"}`}
              >
                {item}
              </span>
              {index < arr.length - 1 && <span className={`${isRTL ? "rotate-180" : ""}`}>/</span>}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
