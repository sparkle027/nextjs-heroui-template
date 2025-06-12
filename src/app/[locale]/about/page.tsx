'use client'

import React from 'react'
import { Link } from '@heroui/react'
import { useTranslations } from 'next-intl'
import { useLocale } from 'next-intl'

type AboutProps = {
  title?: string
  description?: string
}

const About: React.FC<AboutProps> = () => {
  const t = useTranslations('About')

  return (
    <main>
      <div className="container mt-14 inline-flex flex-col pb-10">
        <h1 className="text-2xl">{t('title')}</h1>
        <p className="mt-4">{t('intro')}</p>
        <p className="mt-4">
          {t('journey.0')}
          <Link
            color="foreground"
            href="https://www.tailwind-variants.org/"
            underline="always"
            className="font-semibold mx-1"
          >
            tailwind-variants
          </Link>
          {t('journey.1')}
          <Link
            color="foreground"
            href="https://v1.nextui.org/"
            underline="always"
            className="font-semibold mx-1"
          >
            v1 codebase
          </Link>
          {t('journey.2')}
        </p>
        <p className="mt-4">
          {t('support.0')}
          <Link
            color="foreground"
            href="https://astro.build/"
            underline="always"
            className="font-semibold mx-1"
          >
            Astro
          </Link>
          ,
          <Link
            color="foreground"
            href="https://remix.run/"
            underline="always"
            className="font-semibold mx-1"
          >
            Remix
          </Link>
          ,
          <Link
            color="foreground"
            href="https://vite.dev/"
            underline="always"
            className="font-semibold mx-1"
          >
            Vite
          </Link>
          , {t('support.1')}
          <Link
            color="foreground"
            href="https://laravel.com/"
            underline="always"
            className="font-semibold mx-1"
          >
            Laravel
          </Link>
          . {t('support.2')}
          <Link
            color="foreground"
            href="https://reactnative.dev/"
            underline="always"
            className="font-semibold mx-1"
          >
            React Native
          </Link>
          .
        </p>
        <p className="mt-4">{t('identity')}</p>
      </div>
    </main>
  )
}

export default About
