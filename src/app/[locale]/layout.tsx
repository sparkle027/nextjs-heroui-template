import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import { Providers } from '../providers'
import Header from '@/components/Header'
import MainLayoutBackground from '@/components/MainLayoutBackground'
import '@/styles/globals.scss'

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  return (
    <html lang={locale} className="dark">
      <body>
        <NextIntlClientProvider>
          <Providers>
            <div className="relative flex min-h-screen w-full flex-col items-center">
              <div className="h-1 w-full"></div>

              <Header />

              <div className="relative z-10 flex w-full flex-1 min-h-0 flex-col items-center">
                {children}
              </div>

              <MainLayoutBackground />
            </div>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
