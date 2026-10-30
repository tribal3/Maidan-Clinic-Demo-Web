import { About } from './components/About'
import { AppointmentCta } from './components/AppointmentCta'
import { Branches } from './components/Branches'
import { Doctors } from './components/Doctors'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { TrustStrip } from './components/TrustStrip'
import { LanguageProvider } from './language/LanguageProvider'
import { useLanguage } from './language/useLanguage'

function Site() {
  const { lang } = useLanguage()

  return (
    <div
      lang={lang}
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
      className="min-h-screen overflow-x-clip bg-white"
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-teal focus:px-5 focus:py-2.5 focus:text-[13px] focus:font-semibold focus:text-mist"
      >
        {lang === 'ar' ? 'انتقل إلى المحتوى' : 'Skip to content'}
      </a>

      <Header />

      <main id="main">
        <Hero />
        <TrustStrip />
        <Services />
        <About />
        <Doctors />
        <Branches />
        <AppointmentCta />
      </main>

      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <Site />
    </LanguageProvider>
  )
}
