import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { copy, type Lang } from '../content/site'
import { LanguageContext, type LanguageValue } from './languageContext'

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')
  const dir = lang === 'ar' ? 'rtl' : 'ltr'

  useEffect(() => {
    const root = document.documentElement
    root.lang = lang
    root.dir = dir

    document.title = copy[lang].meta.title

    const setMeta = (selector: string, content: string) => {
      const element = document.querySelector<HTMLMetaElement>(selector)
      if (element) element.content = content
    }

    setMeta('meta[name="description"]', copy[lang].meta.description)
    setMeta('meta[property="og:title"]', copy[lang].meta.title)
    setMeta('meta[property="og:description"]', copy[lang].meta.description)
    setMeta('meta[property="og:locale"]', lang === 'ar' ? 'ar_KW' : 'en_US')
  }, [lang, dir])

  const toggle = useCallback(() => {
    setLang((current) => (current === 'en' ? 'ar' : 'en'))
  }, [])

  const value = useMemo<LanguageValue>(
    () => ({ lang, dir, t: copy[lang], setLang, toggle }),
    [lang, dir, toggle],
  )

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}
