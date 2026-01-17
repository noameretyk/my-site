import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Menu, X } from "lucide-react";
import { useTranslations } from '@/i18n/utils'; // Changed import path

type HeaderLang = 'en' | 'he';

interface HeaderProps {
  lang: HeaderLang;
}

const defaultLocale: HeaderLang = 'he';

const Header: React.FC<HeaderProps> = ({ lang }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const t = useTranslations(lang);
  const pathPrefix = lang === defaultLocale ? '' : `/${lang}`;
  const buildSectionHref = (section: string) => `${pathPrefix}/#${section}`;
  const blogHref = `${pathPrefix}/blog`;
  const homeHref = lang === defaultLocale ? '/' : `${pathPrefix}/`;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    // Set initial scroll state immediately
    setIsScrolled(window.scrollY > 20);

    window.addEventListener("scroll", handleScroll);

    const navLinks = document.querySelectorAll("a[data-scroll-to]");
    navLinks.forEach(link => {
      link.addEventListener("click", (e) => {
        const href = link.getAttribute("href");
        if (href) {
          const url = new URL(href, window.location.origin);
          // Check if the link is to the current origin and path, and has a hash
          if (url.origin === window.location.origin && url.pathname === window.location.pathname && url.hash) {
            e.preventDefault();
            const targetElement = document.querySelector(url.hash);
            if (targetElement) {
              targetElement.scrollIntoView({ behavior: "smooth" });
              setIsMobileMenuOpen(false);
            }
          } else {
            // For links to different pages or external links, allow default navigation
            setIsMobileMenuOpen(false);
          }
        }
      });
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/972525831644", "_blank");
  };

  const changeLanguage = (newLang: HeaderLang) => {
    const url = new URL(window.location.href);
    const pathSegments = url.pathname.split('/').filter(Boolean);

    let newPath = '';

    if (newLang === defaultLocale) {
      // If new language is default, remove language segment if present
      if (pathSegments[0] === 'en' || pathSegments[0] === 'he') {
        pathSegments.shift(); // Remove language segment
      }
      newPath = pathSegments.length === 0 ? '/' : `/${pathSegments.join('/')}/`;
    } else {
      // If new language is not default, ensure language segment is present
      if (pathSegments[0] === 'en' || pathSegments[0] === 'he') {
        pathSegments[0] = newLang;
      } else {
        pathSegments.unshift(newLang);
      }
      newPath = `/${pathSegments.join('/')}/`;
    }
    url.pathname = newPath;
    window.location.href = url.toString();
  };

  const logoSrc = lang === 'he' ? "/logo_hebrew_white.png" : "/logo_english_white.png";
  const logoAlt = lang === 'he' ? "נעה מרטיק | פסיכולוגיית ספורט" : "Noa Meretyk | Sports Psychology";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen ? "header-background backdrop-blur-sm shadow-md" : "bg-transparent"
        }`}
    >
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <a href={homeHref} className="cursor-pointer">
            <img src={logoSrc} alt={logoAlt} className="h-16 w-auto" />
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href={buildSectionHref('services')}
            data-scroll-to
            className="text-white hover:opacity-80 transition-opacity"
          >
            {t('header.services')}
          </a>
          <a
            href={buildSectionHref('about')}
            data-scroll-to
            className="text-white hover:opacity-80 transition-opacity"
          >
            {t('header.about')}
          </a>
          <a
            href={buildSectionHref('testimonials')}
            data-scroll-to
            className="text-white hover:opacity-80 transition-opacity"
          >
            {t('header.testimonials')}
          </a>
          {/* <a
            href={blogHref}
            className="text-white hover:opacity-80 transition-opacity"
          >
            {t('header.blog')}
          </a> */}
          <a
            href={buildSectionHref('contact')}
            data-scroll-to
            className="text-white hover:opacity-80 transition-opacity"
          >
            {t('header.contact')}
          </a>
          <Button onClick={handleWhatsAppClick} className="gap-2 text-white font-bold">
            <MessageCircle className="w-4 h-4" />
            {t('header.bookAppointment')}
          </Button>
          <div className="flex gap-2">
            <Button variant="ghost" size="sm" onClick={() => changeLanguage('en')} className={lang === 'en' ? "text-white font-bold" : "text-white/70"}>
              EN
            </Button>
            <Button variant="ghost" size="sm" onClick={() => changeLanguage('he')} className={lang === 'he' ? "text-white font-bold font-arimo text-lg" : "text-white/70 font-arimo text-lg"}>
              עברית
            </Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? t('header.closeMenu') : t('header.openMenu')}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 border-b border-border md:hidden header-background">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <a
                href={buildSectionHref('services')}
                data-scroll-to
                className="text-left text-white hover:opacity-80 transition-opacity py-2"
              >
                {t('header.services')}
              </a>
              <a
                href={buildSectionHref('about')}
                data-scroll-to
                className="text-left text-white hover:opacity-80 transition-opacity py-2"
              >
                {t('header.about')}
              </a>
              <a
                href={buildSectionHref('testimonials')}
                data-scroll-to
                className="text-left text-white hover:opacity-80 transition-opacity py-2"
              >
                {t('header.testimonials')}
              </a>
              <a
                href={blogHref}
                className="text-left text-white hover:opacity-80 transition-opacity py-2"
              >
                {t('header.blog')}
              </a>
              <a
                href={buildSectionHref('contact')}
                data-scroll-to
                className="text-left text-white hover:opacity-80 transition-opacity py-2"
              >
                {t('header.contact')}
              </a>
              <Button onClick={handleWhatsAppClick} className="gap-2 w-full font-bold bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-all duration-300">
                <MessageCircle className="w-4 h-4" />
                {t('header.bookAppointment')}
              </Button>
              <div className="flex gap-2 justify-center">
                <Button variant="ghost" size="sm" onClick={() => changeLanguage('en')} className={lang === 'en' ? "text-white font-bold font-arimo text-lg" : "text-white/70 font-arimo text-lg"}>
                  EN
                </Button>
                <Button variant="ghost" size="sm" onClick={() => changeLanguage('he')} className={lang === 'he' ? "text-white font-bold font-arimo text-lg" : "text-white/70 font-arimo text-lg"}>
                  עברית
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
