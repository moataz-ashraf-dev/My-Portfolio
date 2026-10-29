import { useEffect, useState } from "react";
import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";
import SiteHeader from "./components/SiteHeader.jsx";
import Hero from "./components/Hero.jsx";
import TechTicker from "./components/TechTicker.jsx";
import ProjectsSection from "./components/ProjectsSection.jsx";
import AboutSection from "./components/AboutSection.jsx";
import ContactSection from "./components/ContactSection.jsx";
import SiteFooter from "./components/SiteFooter.jsx";

const copy = {
  en: {
    work: "Work",
    about: "About",
    contact: "Contact",
    resume: "View résumé",
    mainNavigation: "Main navigation",
    languageAction: "Switch to Arabic",
    appearanceControls: "Appearance controls",
    switchToBlue: "Switch to the light blue palette",
    switchToWarm: "Switch to the warm palette",
    switchToDark: "Switch to dark mode",
    switchToLight: "Switch to light mode",
    openMenu: "Open navigation menu",
    closeMenu: "Close navigation menu",
    availability: "AVAILABLE FOR JUNIOR ROLES & FREELANCE",
    warmHeroLines: ["Better code.", "Bigger dreams.", "Thoughtful web."],
    blueHeroLines: ["Ideas into", "clear interfaces.", "Made for people."],
    intro:
      "I'm Moataz, a front-end developer in Alexandria. I build clear, responsive websites with React, JavaScript, and care for the details.",
    explore: "Explore my work",
    talk: "Let's talk",
    photoAlt: "Portrait of Moataz Ashraf Awad",
    learning: "Learning by building",
    role: "Front-end developer",
    projectsTitle: "Projects in progress.",
    projectsIntro:
      "A few things I've made while learning, experimenting, and getting better.",
    aboutTitle: (
      <>
        Curious by nature.
        <br />
        Developer by choice.
      </>
    ),
    aboutOne:
      "I've been exploring programming on my own for years. Now I'm sharpening that foundation through EraSoft's front-end course and building real interfaces along the way.",
    aboutTwo:
      "I enjoy turning a blank screen into something useful: clean structure, responsive layouts, and small interactions that make a site feel considered.",
    contactTitle: "Let's make it",
    contactLineTwo: "work beautifully.",
    footer: "DESIGNED & BUILT WITH INTENTION · 2026",
  },
  ar: {
    work: "أعمالي",
    about: "عني",
    contact: "تواصل",
    resume: "عرض السيرة الذاتية",
    mainNavigation: "التنقل الرئيسي",
    languageAction: "التبديل إلى الإنجليزية",
    appearanceControls: "إعدادات المظهر",
    switchToBlue: "التبديل إلى الألوان الزرقاء الفاتحة",
    switchToWarm: "التبديل إلى الألوان الدافئة",
    switchToDark: "تفعيل الوضع الداكن",
    switchToLight: "تفعيل الوضع الفاتح",
    openMenu: "فتح قائمة التنقل",
    closeMenu: "إغلاق قائمة التنقل",
    availability: "متاح لفرص المبتدئين والعمل الحر",
    warmHeroLines: ["كود أفضل.", "أحلام أكبر.", "ومواقع أجمل."],
    blueHeroLines: ["أحوّل الأفكار", "لواجهات واضحة.", "مصممة للناس."],
    intro:
      "أنا معتز، مطور واجهات أمامية من الإسكندرية. أبني مواقع واضحة ومتجاوبة باستخدام React وJavaScript واهتمام بالتفاصيل.",
    explore: "شاهد أعمالي",
    talk: "لنتحدث",
    photoAlt: "صورة معتز أشرف عوض",
    learning: "أتعلم بالتنفيذ",
    role: "مطور واجهات أمامية",
    projectsTitle: "مشاريع أعمل عليها.",
    projectsIntro: "نماذج أنفذها أثناء التعلم والتجربة وتطوير مهاراتي.",
    aboutTitle: (
      <>
        فضولي بطبعي.
        <br />
        ومطور باختياري.
      </>
    ),
    aboutOne:
      "أتعلم البرمجة بشكل مستقل منذ سنوات، وأطوّر أساسياتي الآن من خلال دورة الواجهات الأمامية في EraSoft، مع تنفيذ واجهات حقيقية أثناء التعلم.",
    aboutTwo:
      "أستمتع بتحويل الشاشة الفارغة إلى شيء مفيد: تنظيم واضح، تصميم متجاوب، وتفاعلات بسيطة تجعل الموقع متقنًا.",
    contactTitle: "لنجعله يعمل",
    contactLineTwo: "بشكل جميل.",
    footer: "تصميم وتنفيذ باهتمام · 2026",
  },
};

function readPreference(key, fallback) {
  try {
    return window.localStorage.getItem(key) || fallback;
  } catch {
    return fallback;
  }
}

export default function App() {
  const [arabic, setArabic] = useState(false);
  const [palette, setPalette] = useState(() => readPreference("portfolio-palette", "warm"));
  const [dark, setDark] = useState(() => readPreference("portfolio-mode", "light") === "dark");
  const t = arabic ? copy.ar : copy.en;

  useEffect(() => {
    document.documentElement.lang = arabic ? "ar" : "en";
    document.documentElement.dir = arabic ? "rtl" : "ltr";
    document.body.dir = arabic ? "rtl" : "ltr";
  }, [arabic]);

  useEffect(() => {
    try {
      window.localStorage.setItem("portfolio-palette", palette);
      window.localStorage.setItem("portfolio-mode", dark ? "dark" : "light");
    } catch {
      // The appearance controls still work for the current visit if storage is unavailable.
    }
  }, [palette, dark]);

  return (
    <ReactLenis root options={{ smoothWheel: true, duration: 1.2, anchors: true }}>
      <div dir={arabic ? "rtl" : "ltr"} className={`site-shell theme-${palette}${dark ? " dark-mode" : ""}`}>
        <SiteHeader
          t={t}
          arabic={arabic}
          onLanguageToggle={() => setArabic((value) => !value)}
          palette={palette}
          onPaletteToggle={() => setPalette((value) => value === "warm" ? "blue" : "warm")}
          dark={dark}
          onDarkToggle={() => setDark((value) => !value)}
        />
        <main>
          <Hero t={t} palette={palette} />
          <TechTicker />
          <ProjectsSection t={t} arabic={arabic} />
          <AboutSection t={t} />
          <ContactSection t={t} />
        </main>
        <SiteFooter t={t} />
      </div>
    </ReactLenis>
  );
}
